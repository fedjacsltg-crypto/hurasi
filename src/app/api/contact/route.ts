import { NextResponse } from "next/server";
import { z } from "zod";
import { generateReferenceNumber } from "@/lib/quote/reference";

export const runtime = "edge";

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

/**
 * TODO(email) : voir la note détaillée dans /api/quote/route.ts —
 * même principe ici (Resend + secret Cloudflare) pour activer
 * l'envoi réel du message au destinataire interne.
 */
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

    const referenceNumber = generateReferenceNumber();

    // --- Envoi email — désactivé tant que RESEND_API_KEY n'est pas configuré ---
    // const resendKey = process.env.RESEND_API_KEY;
    // if (resendKey) { ... }

    return NextResponse.json({ referenceNumber });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
