import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getSustainabilityPageContent } from "@/lib/content/sustainability-page";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";
import type { SimpleSection } from "@/content/en/sustainability-page";

function TextImageSection({
  section,
  imageFirst = false,
}: {
  section: SimpleSection;
  imageFirst?: boolean;
}) {
  const hasImage = Boolean(section.image);
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
      <div
        className={
          hasImage
            ? "grid items-center gap-11 md:grid-cols-2 md:gap-16"
            : "mx-auto max-w-[680px]"
        }
      >
        <RevealOnScroll className={imageFirst && hasImage ? "md:order-2" : ""}>
          <h2 className="font-display text-heading-l md:text-display-m">
            {section.title}
          </h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-body-m text-fg/70">
              {p}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-body-s text-fg/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </RevealOnScroll>

        {hasImage && (
          <RevealOnScroll delay={0.1} className={imageFirst ? "md:order-1" : ""}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={section.image!}
                alt={section.imageAlt ?? section.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sustainabilityPage");
  const {
    sustainabilityIntro,
    philosophySection,
    whyPlantationSection,
    lifeCyclePhases,
    scientificSection,
    silvicultureSection,
    biodiversitySection,
    carbonSection,
    fscSection,
    manufacturingSection,
    globalResponsibilitySection,
    sustainabilityClosing,
  } = await getSustainabilityPageContent(locale as Locale);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={sustainabilityIntro.heroImage}
          alt={sustainabilityIntro.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            {sustainabilityIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {sustainabilityIntro.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-body-l text-pearl/80">
            {sustainabilityIntro.subtitle}
          </p>
        </RevealOnScroll>
      </section>

      <TextImageSection section={philosophySection} />
      <TextImageSection section={whyPlantationSection} />

      {/* Complete Life Cycle */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
          <RevealOnScroll className="mx-auto mb-14 max-w-[760px] text-center">
            <p className="text-caption uppercase tracking-[0.12em] text-accent">
              {t("lifeCycleEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-heading-l md:text-display-m">
              {t("lifeCycleTitle")}
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {lifeCyclePhases.map((phase, i) => (
              <RevealOnScroll key={phase.id} delay={i * 0.08} className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent"
                  />
                  <span className="absolute start-4 top-4 font-display text-heading-m text-pearl/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-body-l text-pearl">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <ul className="mt-4 space-y-1">
                  {phase.stages.map((s) => (
                    <li key={s} className="text-caption text-fg/60">
                      {s}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <TextImageSection section={scientificSection} />
      <TextImageSection section={silvicultureSection} imageFirst />
      <TextImageSection section={biodiversitySection} />
      <TextImageSection section={carbonSection} imageFirst />
      <TextImageSection section={fscSection} />
      <TextImageSection section={manufacturingSection} />
      <TextImageSection section={globalResponsibilitySection} />

      {/* Closing */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <Image
          src={sustainabilityClosing.image}
          alt={sustainabilityClosing.imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">
            {sustainabilityClosing.title}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              className="border-accent/50 text-pearl hover:bg-accent/10"
            >
              {sustainabilityClosing.ctaPrimary}
            </Button>
            <Button href="/products" variant="tertiary" className="text-pearl border-pearl/30 hover:border-pearl">
              {sustainabilityClosing.ctaSecondary}
            </Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
