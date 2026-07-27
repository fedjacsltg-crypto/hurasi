import { useTranslations } from "next-intl";
import { BlogCard } from "./BlogCard";
import type { BlogArticle, BlogAuthor } from "@/types/blog";

interface RelatedArticlesProps {
  currentSlug: string;
  articles: BlogArticle[];
  authors: BlogAuthor[];
  locale: string;
}

export function RelatedArticles({ currentSlug, articles, authors, locale }: RelatedArticlesProps) {
  const t = useTranslations("blogPage");
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return null;

  const related = articles
    .filter((a) => a.slug !== currentSlug && a.category === current.category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-border py-14 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-11">
        <h2 className="mb-10 font-display text-heading-l">{t("relatedArticles")}</h2>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => (
            <BlogCard
              key={article.slug}
              article={article}
              authorName={authors.find((a) => a.id === article.authorId)?.name ?? ""}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
