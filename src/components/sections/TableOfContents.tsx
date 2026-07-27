import { useTranslations } from "next-intl";
import type { TocEntry } from "@/lib/blog/toc";

interface TableOfContentsProps {
  entries: TocEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  const t = useTranslations("blogPage");
  if (entries.length === 0) return null;

  return (
    <nav aria-label={t("tableOfContents")} className="sticky top-28">
      <p className="text-caption uppercase tracking-[0.1em] text-fg/40">
        {t("tableOfContents")}
      </p>
      <ul className="mt-4 space-y-3 border-s border-border ps-4 text-body-s">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a href={`#${entry.id}`} className="text-fg/60 hover:text-accent transition-colors">
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
