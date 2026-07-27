import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProductsPageContent } from "@/lib/content/products-page";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/sections/ProductCard";
import {
  featuredProducts,
  parquetFinishDetails,
} from "@/lib/data/products";
import type { Locale } from "@/lib/i18n/config";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const {
    productsIntro,
    materialSection,
    specSection,
    professionalsIntro,
    professionalCategories,
    qualitySection,
    productionSection,
    marketsSection,
    whyChooseList,
    applicationsGallery,
    productsClosing,
  } = await getProductsPageContent(locale as Locale);

  return (
    <>
      {/* Header */}
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={productsIntro.heroImage}
          alt={productsIntro.title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            {productsIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {productsIntro.title}
          </h1>
        </RevealOnScroll>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <RevealOnScroll className="mx-auto max-w-[680px]">
          <p className="text-body-l text-fg/80">{productsIntro.lead}</p>
          {productsIntro.paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-body-m text-fg/70">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>

      {/* A Material Without Limits */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <h2 className="font-display text-heading-l md:text-display-m">
              {materialSection.title}
            </h2>
            {materialSection.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-body-m text-fg/70">
                {p}
              </p>
            ))}
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={materialSection.image}
                alt={materialSection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Manufactured to Your Specifications */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
          <RevealOnScroll className="md:order-2">
            <h2 className="font-display text-heading-l md:text-display-m">
              {specSection.title}
            </h2>
            {specSection.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-body-m text-fg/70">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {specSection.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-body-s text-fg/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body-m text-fg/70">{specSection.closing}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="md:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={specSection.image}
                alt={specSection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Gamme actuelle — réutilise le catalogue déjà construit */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
          <RevealOnScroll className="mb-11 max-w-[720px] md:mb-14">
            <p className="text-caption uppercase tracking-[0.12em] text-accent">
              {t("capabilityEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-heading-l md:text-display-m">
              {t("capabilityTitle")}
            </h2>
            <p className="mt-4 text-body-m text-fg/60">
              {t("capabilityDescription")}
            </p>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 0.06}>
                <ProductCard product={product} />
              </RevealOnScroll>
            ))}
          </div>

          {/* Finish details — reinforces the "any finish" promise */}
          <RevealOnScroll delay={0.2} className="mt-14">
            <p className="mb-5 text-caption uppercase tracking-[0.1em] text-fg/50">
              {t("finishesAndJoints")}
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {parquetFinishDetails.map((item) => (
                <div key={item.image} className="relative aspect-square w-full overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Built for Professionals */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <RevealOnScroll className="mx-auto mb-14 max-w-[760px] text-center">
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            {professionalsIntro.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-heading-l md:text-display-m">
            {professionalsIntro.title}
          </h2>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionalCategories.map((cat, i) => (
            <RevealOnScroll key={cat.id} delay={i * 0.06}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image src={cat.image} alt={cat.imageAlt} fill className="object-cover" />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-heading-m text-pearl">{cat.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-body-s text-fg/60">{cat.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Quality Begins Long Before Production */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
          <RevealOnScroll>
            <h2 className="font-display text-heading-l md:text-display-m">
              {qualitySection.title}
            </h2>
            {qualitySection.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-body-m text-fg/70">
                {p}
              </p>
            ))}
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {qualitySection.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-body-s text-fg/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={qualitySection.image}
                alt={qualitySection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* From Log Selection to Final Inspection */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <div className="grid items-center gap-11 md:grid-cols-2 md:gap-16">
          <RevealOnScroll className="md:order-2">
            <h2 className="font-display text-heading-l md:text-display-m">
              {productionSection.title}
            </h2>
            {productionSection.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-body-m text-fg/70">
                {p}
              </p>
            ))}
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="md:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={productionSection.image}
                alt={productionSection.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tailored for International Markets (texte seul) */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-20">
        <RevealOnScroll className="mx-auto max-w-[680px]">
          <h2 className="font-display text-heading-l md:text-display-m">
            {marketsSection.title}
          </h2>
          {marketsSection.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-body-m text-fg/70">
              {p}
            </p>
          ))}
        </RevealOnScroll>
      </section>

      {/* Why Professionals Choose HURASI */}
      <section className="border-y border-pearl/10 bg-obsidian text-pearl">
        <RevealOnScroll className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-20">
          <h2 className="text-center font-display text-heading-l md:text-display-m">
            {t("whyChooseTitle")}
          </h2>
          <ul className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
            {whyChooseList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-body-s text-pearl/80">
                <span aria-hidden className="mt-1 text-accent">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      {/* Applications gallery */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {applicationsGallery.map((item, i) => (
            <RevealOnScroll key={item.image} delay={i * 0.06}>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={item.image} alt={item.alt} fill className="object-cover" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <Image
          src={productsClosing.image}
          alt={productsClosing.imageAlt}
          fill
          className="object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">{productsClosing.title}</h2>
          {productsClosing.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-body-l text-pearl/80">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <Button href="/contact" variant="secondary" className="border-accent/50 text-pearl hover:bg-accent/10">
              {productsClosing.cta}
            </Button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
