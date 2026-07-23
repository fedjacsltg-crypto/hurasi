import { getTranslations } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export async function CompanySection() {
  const t = await getTranslations("nav");

  return (
    <section className="relative overflow-hidden py-14 md:py-28">
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[22vw] leading-none text-fg/[0.03]"
      >
        HURASI
      </p>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-11">
        <RevealOnScroll className="mx-auto max-w-[640px] md:ml-[8.33%] md:mr-auto">
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            {t("about")}
          </p>

          <h2 className="mt-5 font-display text-heading-l md:text-display-m">
            Façonné par la patience, pensé pour durer.
          </h2>

          <p className="mt-9 text-body-l text-fg/70">
            Chaque pièce naît d&apos;un geste répété des centaines de fois
            avant d&apos;être jugé digne de porter notre nom. Nous ne
            cherchons pas la vitesse — nous cherchons la pièce qui traversera
            les générations sans jamais paraître datée.
          </p>

          <p className="mt-6 text-body-l text-fg/70">
            Cette exigence, nous la tenons d&apos;un savoir-faire transmis,
            affiné, jamais figé.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
