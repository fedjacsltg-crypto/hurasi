import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getOriginContent } from "@/lib/content/origin";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import type { Locale } from "@/lib/i18n/config";

export default async function ForestsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { originIntro, originSections, originClosing } = await getOriginContent(
    locale as Locale
  );

  return (
    <>
      {/* Header — image plein cadre + texte centré, cohérent avec le Hero homepage */}
      <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={originIntro.heroImage}
          alt={originIntro.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/50 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[720px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            {originIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {originIntro.title}
          </h1>
          <p className="mt-4 font-display italic text-heading-m text-pearl/80">
            {originIntro.subtitle}
          </p>
        </RevealOnScroll>
      </section>

      {/* Texte d'introduction — colonne éditoriale unique */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-28">
        <RevealOnScroll className="mx-auto max-w-[680px]">
          <p className="text-body-l text-fg/80">{originIntro.lead}</p>
          {originIntro.paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-body-l text-fg/70">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>

      {/* Sections alternées texte / image */}
      {originSections.map((section, index) => {
        const imageFirst = index % 2 === 1;
        return (
          <section
            key={section.id}
            className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24"
          >
            <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
              <RevealOnScroll className={imageFirst ? "md:order-2" : ""}>
                <h2 className="font-display text-heading-l md:text-display-m">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-5 text-body-m text-fg/70">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-body-s text-fg/70"
                      >
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </RevealOnScroll>

              <RevealOnScroll
                delay={0.1}
                className={imageFirst ? "md:order-1" : ""}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* Clôture — registre sombre et solennel (Phase 5 §10) */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <Image
          src={originClosing.image}
          alt={originClosing.imageAlt}
          fill
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">{originClosing.title}</h2>
          {originClosing.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-body-l text-pearl/80">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
