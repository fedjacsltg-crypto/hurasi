import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/**
 * Section "Nos Forêts" — texte à gauche, image à droite (inversé en RTL
 * automatiquement via les propriétés logiques). Inspirée de la direction
 * artistique fournie par le client.
 *
 * TODO(assets) : remplacer le bloc dégradé ci-dessous par une vraie photo
 * (vue aérienne de plantation, ou photo de la scierie) une fois disponible.
 */
export async function OurForestsSection() {
  const t = await getTranslations("ourForests");

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-28">
      <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
        <RevealOnScroll>
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 font-display text-heading-l md:text-display-m">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-[46ch] text-body-l text-fg/70">
            {t("description")}
          </p>
          <Link
            href="/forests"
            className="mt-8 inline-block border-b border-fg/20 pb-1 text-body-m hover:border-fg transition-colors"
          >
            {t("cta")}
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-charcoal-800 to-obsidian" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
