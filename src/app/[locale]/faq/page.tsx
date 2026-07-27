import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getFaqPageContent } from "@/lib/content/faq-page";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { FaqExplorer } from "@/components/sections/FaqExplorer";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faqPage");
  const { faqPageIntro, faqItems } = await getFaqPageContent(locale as Locale);

  // Schema.org FAQPage — un des rares cas où le SEO a besoin des données
  // brutes plutôt que du texte affiché ; générée côté serveur.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[55svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={faqPageIntro.heroImage}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/50 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            {faqPageIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {faqPageIntro.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-body-l text-pearl/80">
            {faqPageIntro.subtitle}
          </p>
        </RevealOnScroll>
      </section>

      {/* Recherche, filtres, accordéon */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <FaqExplorer items={faqItems} />
      </section>

      {/* CTA de clôture */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/70"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">{t("ctaTitle")}</h2>
          <p className="mt-4 text-body-l text-pearl/80">{t("ctaSubtitle")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" className="border-accent/50 text-pearl hover:bg-accent/10">
              {t("ctaPrimary")}
            </Button>
            <Button href="/contact" variant="tertiary" className="text-pearl border-pearl/30 hover:border-pearl">
              {t("ctaSecondary")}
            </Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
