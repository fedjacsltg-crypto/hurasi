import { NextResponse } from "next/server";
import { z } from "zod";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const RECIPIENT_EMAIL = "f.huric@thmconsulting.com.br";
const SENDER_EMAIL = "HURASI Website <onboarding@resend.dev>";

const newsletterSchema = z.object({
  email: z.string().email(),
});

/**
 * Inscription newsletter volontairement simplifiée : envoie une notification
 * par email à l'équipe HURASI, sans double opt-in ni base d'abonnés dédiée
 * (décision produit — voir cahier des charges Blog §Newsletter, simplifié).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const { email } = parsed.data;
    const { env } = getCloudflareContext();
    const resendKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          subject: `New Newsletter Signup — ${email}`,
          html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
