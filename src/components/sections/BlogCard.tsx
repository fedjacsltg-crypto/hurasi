import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { getReadingTimeMinutes } from "@/lib/blog/reading-time";
import type { BlogArticle } from "@/types/blog";

interface BlogCardProps {
  article: BlogArticle;
  authorName: string;
  locale: string;
}

export function BlogCard({ article, authorName, locale }: BlogCardProps) {
  const t = useTranslations("blogPage");
  const tCategories = useTranslations("blogCategories");
  const readingTime = getReadingTimeMinutes(article.content);
  const date = new Date(article.publishedDate).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="mt-5 text-caption uppercase tracking-[0.1em] text-accent">
        {tCategories(article.category)}
      </p>
      <h3 className="mt-2 font-display text-heading-s group-hover:text-accent transition-colors">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-body-s text-fg/60">{article.excerpt}</p>
      <p className="mt-4 text-caption uppercase tracking-[0.06em] text-fg/40">
        {authorName} · {date} · {t("readingTime", { minutes: readingTime })}
      </p>
    </Link>
  );
}
