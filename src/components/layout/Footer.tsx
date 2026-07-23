import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { Newsletter } from "@/components/sections/Newsletter";

/**
 * Footer — toujours en registre sombre (Phase 2 §15). Mis à jour avec
 * le vrai logo, une ligne de contact, et des icônes sociales monochromes
 * (Phase 6 page 1 §7 : jamais les couleurs officielles bariolées).
 *
 * TODO(contenu réel) : remplacer l'email/téléphone/adresse placeholder
 * et les liens sociaux par les vraies coordonnées HURASI.
 */
export async function Footer() {
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-obsidian text-pearl">
      <div className="mx-auto grid max-w-[1440px] gap-11 px-6 py-14 sm:px-11 sm:py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/brand/logo-hurasi.png"
            alt="HURASI"
            width={140}
            height={140}
            className="h-auto w-24"
          />
          <p className="mt-4 text-body-s text-pearl/60">
            {tFooter("tagline")}
          </p>
          <div className="mt-6 flex gap-4">
            {/* Icônes sociales — placeholders, à relier aux vrais comptes */}
            {["LinkedIn", "Instagram", "WhatsApp"].map((label) => (
              <span
                key={label}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center border border-pearl/20 text-[0.65rem] uppercase text-pearl/60"
              >
                {label[0]}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Plan du site" className="text-body-s text-pearl/70">
          <p className="mb-4 text-caption uppercase tracking-[0.1em] text-pearl/40">
            {tFooter("quickLinks")}
          </p>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-pearl transition-colors">{t("about")}</Link></li>
            <li><Link href="/forests" className="hover:text-pearl transition-colors">{t("forests")}</Link></li>
            <li><Link href="/products" className="hover:text-pearl transition-colors">{t("products")}</Link></li>
            <li><Link href="/sustainability" className="hover:text-pearl transition-colors">{t("sustainability")}</Link></li>
            <li><Link href="/gallery" className="hover:text-pearl transition-colors">{t("gallery")}</Link></li>
          </ul>
        </nav>

        <div className="text-body-s text-pearl/70">
          <p className="mb-4 text-caption uppercase tracking-[0.1em] text-pearl/40">
            {tFooter("contactInfo")}
          </p>
          <ul className="space-y-3">
            <li>contact@hurasi.com</li>
            <li>+00 00 00 00 00</li>
            <li>Adresse à préciser</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <Newsletter />
        </div>
      </div>

      <div className="border-t border-pearl/10 px-6 py-6 text-caption text-pearl/50 sm:px-11">
        © {year} HURASI. {tFooter("rights")}
      </div>
    </footer>
  );
}
