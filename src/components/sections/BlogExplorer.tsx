"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { BlogCard } from "./BlogCard";
import type { BlogArticle, BlogAuthor } from "@/types/blog";

interface BlogExplorerProps {
  articles: BlogArticle[];
  authors: BlogAuthor[];
  locale: string;
}

type SortOrder = "newest" | "oldest";

export function BlogExplorer({ articles, authors, locale }: BlogExplorerProps) {
  const t = useTranslations("blogPage");
  const tCategories = useTranslations("blogCategories");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const authorName = (id: string) => authors.find((a) => a.id === id)?.name ?? "";

  const availableCategories = BLOG_CATEGORIES.filter((cat) =>
    articles.some((a) => a.category === cat)
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    let list = articles.filter((a) => {
      if (activeCategory && a.category !== activeCategory) return false;
      if (!normalizedQuery) return true;
      return (
        a.title.toLowerCase().includes(normalizedQuery) ||
        a.excerpt.toLowerCase().includes(normalizedQuery) ||
        a.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        authorName(a.authorId).toLowerCase().includes(normalizedQuery)
      );
    });
    list = [...list].sort((a, b) => {
      const diff = new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      return sortOrder === "newest" ? -diff : diff;
    });
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles, activeCategory, normalizedQuery, sortOrder]);

  return (
    <div>
      {/* Recherche */}
      <div className="mx-auto max-w-[640px]">
        <div className="relative">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-fg/40"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="w-full border border-border bg-surface/60 py-4 ps-12 pe-4 text-body-m placeholder:text-fg/40 focus:border-fg focus:outline-none"
          />
        </div>
      </div>

      {/* Filtres + tri */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "border px-4 py-2 text-caption uppercase tracking-[0.08em] transition-colors",
            activeCategory === null
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-fg/60 hover:border-fg/40"
          )}
        >
          {t("allFilter")}
        </button>
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "border px-4 py-2 text-caption uppercase tracking-[0.08em] transition-colors",
              activeCategory === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-fg/60 hover:border-fg/40"
            )}
          >
            {tCategories(cat)}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-6 text-body-s">
        <button
          onClick={() => setSortOrder("newest")}
          className={cn(
            "border-b pb-0.5 transition-colors",
            sortOrder === "newest" ? "border-fg text-fg" : "border-transparent text-fg/50 hover:text-fg"
          )}
        >
          {t("sortNewest")}
        </button>
        <button
          onClick={() => setSortOrder("oldest")}
          className={cn(
            "border-b pb-0.5 transition-colors",
            sortOrder === "oldest" ? "border-fg text-fg" : "border-transparent text-fg/50 hover:text-fg"
          )}
        >
          {t("sortOldest")}
        </button>
      </div>

      {/* Résultats */}
      <div className="mt-14">
        {filtered.length === 0 ? (
          <p className="text-center text-body-m text-fg/50">{t("noResults", { query })}</p>
        ) : (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <BlogCard
                key={article.slug}
                article={article}
                authorName={authorName(article.authorId)}
                locale={locale}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
