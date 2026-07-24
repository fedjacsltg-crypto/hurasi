import { NextResponse } from "next/server";
import { z } from "zod";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { generateReferenceNumber } from "@/lib/quote/reference";
import { generateQuotePdf } from "@/lib/quote/generate-pdf";
import { estimateContainer } from "@/lib/quote/container-calculator";
import type { QuoteFormData } from "@/types/quote";

const RECIPIENT_EMAIL = "f.huric@thmconsulting.com.br";
// Expéditeur par défaut de Resend — fonctionne sans vérification de
// domaine, mais ne peut alors envoyer QUE vers l'adresse du compte
// Resend (voir note à l'utilisateur). Remplacer par une adresse
// @hurasi.com une fois le domaine vérifié dans Resend.
const SENDER_EMAIL = "HURASI Website <onboarding@resend.dev>";

const dimensionSchema = z.object({
  id: z.string(),
  thickness: z.union([z.number(), z.literal("")]),
  width: z.union([z.number(), z.literal("")]),
  length: z.union([z.number(), z.literal("")]),
  quantity: z.union([z.number(), z.literal("")]),
});

const quoteSchema = z.object({
  company: z.string().min(1),
  country: z.string().min(1),
  contactPerson: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  preferredLanguage: z.string().optional().default(""),
  productType: z.string().min(1),
  species: z.string().default("african-mahogany"),
  grade: z.string().optional().default(""),
  moistureContent: z.string().optional().default(""),
  dimensions: z.array(dimensionSchema).min(1),
  surfaceFinish: z.string().optional().default(""),
  machiningOptions: z.array(z.string()).default([]),
  packaging: z.string().optional().default(""),
  quantityValue: z.string().optional().default(""),
  destinationCountry: z.string().optional().default(""),
  finalPort: z.string().optional().default(""),
  incoterm: z.string().optional().default(""),
  deliveryDate: z.string().optional().default(""),
  comments: z.string().optional().default(""),
  privacyAccepted: z.boolean(),
});

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data as QuoteFormData;

    if (!data.privacyAccepted) {
      return NextResponse.json({ error: "Privacy policy must be accepted" }, { status: 400 });
    }

    const referenceNumber = generateReferenceNumber();
    const submittedAt = new Date();
    const estimate = estimateContainer(data.dimensions);
    const pdfBytes = await generateQuotePdf(data, referenceNumber, submittedAt, estimate);
    const pdfBase64 = bytesToBase64(pdfBytes);

    const { env } = getCloudflareContext();
    const resendKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;

    if (resendKey) {
      const dimensionsHtml = data.dimensions
        .filter((d) => d.thickness && d.width && d.length && d.quantity)
        .map((d) => `<li>${d.thickness} × ${d.width} × ${d.length} mm — Qty: ${d.quantity}</li>`)
        .join("");

      const html = `
        <h2>New Quotation Request — ${referenceNumber}</h2>
        <p><strong>Company:</strong> ${data.company}<br/>
        <strong>Contact:</strong> ${data.contactPerson}<br/>
        <strong>Country:</strong> ${data.country}<br/>
        <strong>Email:</strong> ${data.email}<br/>
        <strong>Phone:</strong> ${data.phone || "—"}</p>
        <p><strong>Product Type:</strong> ${data.productType}<br/>
        <strong>Grade:</strong> ${data.grade || "—"}<br/>
        <strong>Moisture Content:</strong> ${data.moistureContent || "—"}<br/>
        <strong>Surface Finish:</strong> ${data.surfaceFinish || "—"}</p>
        <p><strong>Dimensions:</strong></p>
        <ul>${dimensionsHtml}</ul>
        ${
          estimate
            ? `<p><strong>Container Estimate:</strong> ${estimate.totalVolumeM3} m³, ${estimate.estimatedWeightKg} kg, best fit: ${estimate.bestFit?.type ?? "—"}</p>`
            : ""
        }
        <p><strong>Destination:</strong> ${data.destinationCountry || "—"} — Port: ${data.finalPort || "—"} — Incoterm: ${data.incoterm || "—"}</p>
        <p><strong>Comments:</strong><br/>${data.comments || "—"}</p>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: data.email,
          subject: `New Quotation Request — ${referenceNumber} — ${data.company}`,
          html,
          attachments: [
            {
              filename: `HURASI-Quote-${referenceNumber}.pdf`,
              content: pdfBase64,
            },
          ],
        }),
      });
    }

    return NextResponse.json({ referenceNumber, estimate });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
