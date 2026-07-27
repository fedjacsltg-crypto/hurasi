import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getBlogPageContent } from "@/lib/content/blog-page";
import { getReadingTimeMinutes } from "@/lib/blog/reading-time";
import { getTableOfContents } from "@/lib/blog/toc";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ReadingProgressBar } from "@/components/sections/ReadingProgressBar";
import { TableOfContents } from "@/components/sections/TableOfContents";
import { ArticleContent } from "@/components/sections/ArticleContent";
import { ShareButtons } from "@/components/sections/ShareButtons";
import { AuthorCard } from "@/components/sections/AuthorCard";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { locales, type Locale } from "@/lib/i18n/config";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const { articles } = await getBlogPageContent(locale);
    for (const article of articles) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { articles } = await getBlogPageContent(locale as Locale);
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} — HURASI`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [{ url: article.heroImage }],
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate ?? article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogPage");
  const tCategories = await getTranslations("blogCategories");
  const tDifficulty = await getTranslations("blogDifficulty");
  const { articles, authors } = await getBlogPageContent(locale as Locale);
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const author = authors.find((a) => a.id === article.authorId);
  const toc = getTableOfContents(article.content);
  const readingTime = getReadingTimeMinutes(article.content);
  const publishedDate = new Date(article.publishedDate).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedDate = article.updatedDate
    ? new Date(article.updatedDate).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    author: { "@type": "Person", name: author?.name },
    publisher: { "@type": "Organization", name: "HURASI" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: `/${locale}` },
      { "@type": "ListItem", position: 2, name: t("breadcrumbBlog"), item: `/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ReadingProgressBar />

      {/* Hero */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-obsidian text-pearl">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[860px] px-6 pb-14 md:pb-20">
          <p className="text-caption uppercase tracking-[0.12em] text-accent-light">
            {tCategories(article.category)}
          </p>
          <h1 className="mt-4 font-display text-display-s md:text-display-m">
            {article.title}
          </h1>
          <p className="mt-4 max-w-[65ch] text-body-l text-pearl/80">{article.subtitle}</p>
          <p className="mt-6 text-caption uppercase tracking-[0.06em] text-pearl/50">
            {publishedDate}
            {updatedDate && ` · ${t("updated")} ${updatedDate}`} ·{" "}
            {t("readingTime", { minutes: readingTime })} · {tDifficulty(article.difficulty)}
          </p>
        </RevealOnScroll>
      </section>

      {/* Corps de l'article + sommaire */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 sm:px-11 md:py-24">
        <div className="grid gap-14 md:grid-cols-[220px_1fr]">
          <div className="hidden md:block">
            <TableOfContents entries={toc} />
          </div>
          <div className="mx-auto w-full max-w-[720px]">
            {author && (
              <div className="mb-10">
                <AuthorCard author={author} />
              </div>
            )}
            <ArticleContent content={article.content} />
            <div className="mt-14 border-t border-border pt-8">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles
        currentSlug={article.slug}
        articles={articles}
        authors={authors}
        locale={locale}
      />

      {/* CTA de clôture */}
      <section className="relative overflow-hidden bg-obsidian py-14 text-pearl md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/70"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[680px] px-6 text-center">
          <h2 className="font-display text-display-m">{t("ctaTitle")}</h2>
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
