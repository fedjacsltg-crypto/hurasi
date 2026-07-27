"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { FAQ_CATEGORIES } from "@/lib/faq/categories";
import type { FaqItem } from "@/types/faq";

interface FaqExplorerProps {
  items: FaqItem[];
}

/** Découpe `text` autour des occurrences de `query` et surligne les correspondances. */
function highlight(text: string, query: string): ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-accent/30 text-fg rounded-sm px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function FaqExplorer({ items }: FaqExplorerProps) {
  const t = useTranslations("faqPage");
  const tCategories = useTranslations("faqCategories");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    const hash = window.location.hash.replace("#", "");
    return hash ? new Set([hash]) : new Set();
  });

  // Défile automatiquement vers la question ciblée par l'URL
  // (ex: /faq#faq-what-is-african-mahogany), pour des ancres SEO-friendly.
  // L'ouverture elle-même est gérée par l'initialisation paresseuse ci-dessus.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, []);

  const availableCategories = FAQ_CATEGORIES.filter((cat) =>
    items.some((i) => i.category === cat)
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory && item.category !== activeCategory) return false;
      if (!normalizedQuery) return true;
      return (
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [items, activeCategory, normalizedQuery]);

  const grouped = useMemo(() => {
    const map = new Map<string, FaqItem[]>();
    for (const cat of availableCategories) {
      const list = filtered.filter((i) => i.category === cat);
      if (list.length > 0) map.set(cat, list);
    }
    return map;
  }, [filtered, availableCategories]);

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        window.history.replaceState(null, "", `#${id}`);
      }
      return next;
    });
  }

  function expandAll() {
    setExpanded(new Set(filtered.map((i) => i.id)));
  }

  function collapseAll() {
    setExpanded(new Set());
  }

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
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label={t("clearSearch")}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-fg/40 hover:text-fg"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
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

      {/* Expand / Collapse all */}
      <div className="mt-6 flex justify-center gap-6 text-body-s">
        <button
          onClick={expandAll}
          className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
        >
          {t("expandAll")}
        </button>
        <button
          onClick={collapseAll}
          className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
        >
          {t("collapseAll")}
        </button>
      </div>

      {/* Résultats */}
      <div className="mx-auto mt-14 max-w-[860px] space-y-14">
        {grouped.size === 0 && (
          <p className="text-center text-body-m text-fg/50">
            {t("noResults", { query })}
          </p>
        )}

        {Array.from(grouped.entries()).map(([cat, catItems]) => (
          <div key={cat}>
            <h2 className="mb-6 font-display text-heading-m">{tCategories(cat)}</h2>
            <div className="divide-y divide-border border-y border-border">
              {catItems.map((item) => {
                const isOpen = expanded.has(item.id);
                return (
                  <div key={item.id} id={item.id}>
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-start text-body-l hover:text-accent transition-colors"
                    >
                      <span>{highlight(item.question, normalizedQuery)}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "shrink-0 text-heading-m text-fg/40 transition-transform duration-300",
                          isOpen && "rotate-45"
                        )}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-body-m text-fg/70">
                            {highlight(item.answer, normalizedQuery)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
