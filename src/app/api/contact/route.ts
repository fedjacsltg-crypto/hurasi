import { NextResponse } from "next/server";
import { z } from "zod";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { generateReferenceNumber } from "@/lib/quote/reference";

export const runtime = "edge";

const RECIPIENT_EMAIL = "f.huric@thmconsulting.com.br";
const SENDER_EMAIL = "HURASI Website <onboarding@resend.dev>";

const contactSchema = z.object({
  fullName: z.string().min(1),
  company: z.string().min(1),
  position: z.string().optional().default(""),
  country: z.string().min(1),
  city: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  email: z.string().email(),
  preferredLanguage: z.string().optional().default(""),
  industry: z.string().optional().default(""),
  subject: z.string().min(1),
  message: z.string().min(1),
  privacyAccepted: z.union([z.literal("on"), z.literal(true)]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const referenceNumber = generateReferenceNumber();

    const { env } = getCloudflareContext();
    const resendKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;

    if (resendKey) {
      const html = `
        <h2>New Contact Message — ${referenceNumber}</h2>
        <p><strong>Name:</strong> ${data.fullName}<br/>
        <strong>Company:</strong> ${data.company}<br/>
        <strong>Position:</strong> ${data.position || "—"}<br/>
        <strong>Country:</strong> ${data.country}<br/>
        <strong>City:</strong> ${data.city || "—"}<br/>
        <strong>Phone:</strong> ${data.phone || "—"}<br/>
        <strong>Email:</strong> ${data.email}<br/>
        <strong>Preferred Language:</strong> ${data.preferredLanguage || "—"}<br/>
        <strong>Industry:</strong> ${data.industry || "—"}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
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
          subject: `New Contact Message — ${data.subject} — ${data.fullName}`,
          html,
        }),
      });
    }

    return NextResponse.json({ referenceNumber });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
