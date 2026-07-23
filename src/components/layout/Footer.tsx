import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { Newsletter } from "@/components/sections/Newsletter";

/**
 * Toujours en registre sombre, quel que soit le mode de la page courante
 * (Phase 2 §15) — décision de marque, pas une continuité de thème.
 */
export function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-obsidian text-pearl">
      <div className="mx-auto grid max-w-[1440px] gap-11 px-6 py-14 sm:px-11 sm:py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-heading-m">HURASI</p>
        </div>

        <nav aria-label="Plan du site" className="grid gap-3 text-body-s text-pearl/70 md:col-span-2 md:grid-cols-2">
          <Link href="/about" className="hover:text-pearl transition-colors">{t("about")}</Link>
          <Link href="/products" className="hover:text-pearl transition-colors">{t("products")}</Link>
          <Link href="/manufacturing" className="hover:text-pearl transition-colors">{t("manufacturing")}</Link>
          <Link href="/sustainability" className="hover:text-pearl transition-colors">{t("sustainability")}</Link>
          <Link href="/projects" className="hover:text-pearl transition-colors">{t("projects")}</Link>
          <Link href="/news" className="hover:text-pearl transition-colors">{t("news")}</Link>
          <Link href="/contact" className="hover:text-pearl transition-colors">{t("contact")}</Link>
        </nav>

        <div className="md:col-span-1">
          <Newsletter />
        </div>
      </div>

      <div className="border-t border-pearl/10 px-6 py-6 text-caption text-pearl/50 sm:px-11">
        © {year} HURASI. {tFooter("rights")}
      </div>

      {/* Monogramme en filigrane — signature de clôture (Phase 3 §9) */}
      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display text-[18vw] leading-none text-pearl/[0.03] -mb-[6vw]"
      >
        HURASI
      </p>
    </footer>
  );
}
