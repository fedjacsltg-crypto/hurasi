import { NextResponse } from "next/server";
import { z } from "zod";
import { generateReferenceNumber } from "@/lib/quote/reference";
import { generateQuotePdf } from "@/lib/quote/generate-pdf";
import { estimateContainer } from "@/lib/quote/container-calculator";
import type { QuoteFormData } from "@/types/quote";

export const runtime = "edge";

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

/**
 * TODO(email) : ce endpoint valide, génère un numéro de référence et
 * un PDF récapitulatif — mais n'envoie PAS encore d'email. Pour
 * activer l'envoi réel (au client + en interne), il faut :
 * 1. Créer un compte sur https://resend.com (gratuit jusqu'à 3000 emails/mois)
 * 2. Générer une clé API
 * 3. L'ajouter comme secret Cloudflare : `npx wrangler secret put RESEND_API_KEY`
 * 4. Décommenter et adapter le bloc d'envoi ci-dessous
 *
 * TODO(spam) : ajouter la vérification reCAPTCHA v3 ici une fois la
 * clé de site obtenue sur https://www.google.com/recaptcha/admin
 *
 * TODO(stockage) : chaque soumission devrait être archivée (Cloudflare
 * D1 ou KV) pour alimenter un futur CRM — non implémenté dans cette
 * phase, voir discussion sur le tableau de bord admin.
 */
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

    // Génère le PDF (fonctionne dès maintenant, sans dépendance externe)
    const pdfBytes = await generateQuotePdf(data, referenceNumber, submittedAt, estimate);

    // --- Envoi email — désactivé tant que RESEND_API_KEY n'est pas configuré ---
    // const resendKey = process.env.RESEND_API_KEY;
    // if (resendKey) {
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${resendKey}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       from: "HURASI Quotes <quotes@hurasi.com>",
    //       to: ["f.huric@thmconsulting.com.br"],
    //       subject: `New Quotation Request — ${referenceNumber}`,
    //       html: `<p>New quotation request from ${data.company}.</p>`,
    //       attachments: [
    //         { filename: `${referenceNumber}.pdf`, content: Buffer.from(pdfBytes).toString("base64") },
    //       ],
    //     }),
    //   });
    // }

    void pdfBytes; // évite l'avertissement "variable inutilisée" tant que l'envoi est désactivé

    return NextResponse.json({ referenceNumber, estimate });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
