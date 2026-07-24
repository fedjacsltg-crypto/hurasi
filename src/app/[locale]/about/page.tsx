import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getAboutPageContent } from "@/lib/content/about-page";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import type { Locale } from "@/lib/i18n/config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { aboutIntro, aboutSections, aboutClosing } = await getAboutPageContent(
    locale as Locale
  );

  return (
    <>
      {/* Header */}
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={aboutIntro.heroImage}
          alt={aboutIntro.title}
          fill
          priority
          className="object-cover opacity-55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/50 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            {aboutIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {aboutIntro.title}
          </h1>
        </RevealOnScroll>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <RevealOnScroll className="mx-auto max-w-[680px]">
          <p className="text-body-l text-fg/80">{aboutIntro.lead}</p>
          {aboutIntro.paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-body-l text-fg/70">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>

      {/* Sections */}
      {aboutSections.map((section, index) => {
        const hasImage = Boolean(section.image);
        const imageFirst = hasImage && index % 2 === 1;

        return (
          <section
            key={section.id}
            className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24"
          >
            <div
              className={
                hasImage
                  ? "grid items-center gap-11 md:grid-cols-2 md:gap-16"
                  : "mx-auto max-w-[680px]"
              }
            >
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

              {hasImage && (
                <RevealOnScroll delay={0.1} className={imageFirst ? "md:order-1" : ""}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={section.image!}
                      alt={section.imageAlt ?? section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </RevealOnScroll>
              )}
            </div>
          </section>
        );
      })}

      {/* Closing */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <Image
          src={aboutClosing.image}
          alt={aboutClosing.imageAlt}
          fill
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">{aboutClosing.title}</h2>
          {aboutClosing.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-body-l text-pearl/80">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
