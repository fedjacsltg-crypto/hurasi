import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getBlogPageContent } from "@/lib/content/blog-page";
import { getReadingTimeMinutes } from "@/lib/blog/reading-time";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BlogExplorer } from "@/components/sections/BlogExplorer";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { Link } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogPage");
  const tCategories = await getTranslations("blogCategories");
  const { blogIntro, articles, authors } = await getBlogPageContent(locale as Locale);

  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured?.slug);
  const featuredAuthor = authors.find((a) => a.id === featured?.authorId);
  const featuredDate = featured
    ? new Date(featured.publishedDate).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <Image
          src={blogIntro.heroImage}
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
            {blogIntro.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            {blogIntro.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-body-l text-pearl/80">
            {blogIntro.subtitle}
          </p>
        </RevealOnScroll>
      </section>

      {/* Article à la une */}
      {featured && (
        <section className="mx-auto max-w-[1200px] px-6 py-14 sm:px-11 md:py-24">
          <RevealOnScroll>
            <Link href={`/blog/${featured.slug}`} className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={featured.heroImage}
                  alt={featured.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-caption uppercase tracking-[0.12em] text-accent">
                  {t("featured")} · {tCategories(featured.category)}
                </p>
                <h2 className="mt-4 font-display text-heading-l group-hover:text-accent transition-colors md:text-display-s">
                  {featured.title}
                </h2>
                <p className="mt-4 text-body-l text-fg/60">{featured.excerpt}</p>
                <p className="mt-6 text-caption uppercase tracking-[0.06em] text-fg/40">
                  {featuredAuthor?.name} · {featuredDate} ·{" "}
                  {t("readingTime", { minutes: getReadingTimeMinutes(featured.content) })}
                </p>
              </div>
            </Link>
          </RevealOnScroll>
        </section>
      )}

      {/* Recherche, filtres, grille */}
      <section className="mx-auto max-w-[1440px] border-t border-border px-6 py-14 sm:px-11 md:py-24">
        <BlogExplorer articles={rest} authors={authors} locale={locale} />
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-surface/40 py-14 md:py-24">
        <div className="mx-auto max-w-[640px] px-6 text-center sm:px-11">
          <h2 className="font-display text-heading-l">{t("newsletterTitle")}</h2>
          <p className="mt-4 text-body-m text-fg/60">{t("newsletterSubtitle")}</p>
          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}
