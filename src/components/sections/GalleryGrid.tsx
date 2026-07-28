"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import { GALLERY_CATEGORIES } from "@/lib/gallery/categories";
import type { GalleryItem } from "@/types/gallery";

interface GalleryGridProps {
  items: GalleryItem[];
}

const PAGE_SIZE = 12;

export function GalleryGrid({ items }: GalleryGridProps) {
  const t = useTranslations("gallery");
  const tCategories = useTranslations("galleryCategories");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (activeCategory ? items.filter((i) => i.category === activeCategory) : items),
    [items, activeCategory]
  );

  // Charge seulement un lot de photos à la fois — 56 photos téléchargées
  // simultanément rendaient la page inutilisable sur mobile (28/07/2026).
  const visibleItems = filtered.slice(0, visibleCount);

  function selectCategory(cat: string | null) {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  }

  // Ne montre que les catégories qui ont réellement au moins une photo —
  // évite un filtre qui mène systématiquement à une grille vide tant que
  // les prochains lots de photos n'ont pas été ajoutés.
  const availableCategories = GALLERY_CATEGORIES.filter((cat) =>
    items.some((i) => i.category === cat.id)
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  function openAt(index: number) {
    setActiveIndex(index);
  }

  function close() {
    setActiveIndex(null);
  }

  function next() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % filtered.length);
  }

  function prev() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + filtered.length) % filtered.length);
  }

  return (
    <div>
      {/* Filtres — pas de rechargement de page, transition instantanée */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => selectCategory(null)}
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
            key={cat.id}
            onClick={() => selectCategory(cat.id)}
            className={cn(
              "border px-4 py-2 text-caption uppercase tracking-[0.08em] transition-colors",
              activeCategory === cat.id
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-fg/60 hover:border-fg/40"
            )}
          >
            {cat.icon} {tCategories(cat.id)}
          </button>
        ))}
      </div>

      {/* Grille en mosaïque — colonnes CSS pour un rendu éditorial varié */}
      <div className="mt-11 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => openAt(i)}
            className="group relative mb-5 block w-full overflow-hidden break-inside-avoid text-start"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 4 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-signature)] group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <p className="absolute inset-x-0 bottom-0 p-4 text-body-s text-pearl opacity-0 transition-opacity group-hover:opacity-100">
                {item.application}
              </p>
            </div>
          </button>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="mt-11 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="border border-border px-9 py-4 text-caption uppercase tracking-[0.1em] text-fg/70 hover:border-fg/40 hover:text-fg transition-colors"
          >
            {t("loadMore")}
          </button>
        </div>
      )}

      {/* Visionneuse plein écran */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/97 p-4 sm:p-8"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label={t("close")}
              className="absolute right-4 top-4 text-body-l text-pearl/70 hover:text-pearl sm:right-8 sm:top-8"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label={t("previous")}
              className="absolute left-2 top-1/2 -translate-y-1/2 px-3 text-heading-l text-pearl/50 hover:text-pearl sm:left-6"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label={t("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 text-heading-l text-pearl/50 hover:text-pearl sm:right-6"
            >
              ›
            </button>

            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[90vh] w-full max-w-[1200px] gap-8 overflow-y-auto md:grid-cols-[1.4fr_1fr]"
            >
              <div className="relative aspect-[3/4] w-full md:aspect-auto">
                <Image
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>

              <div className="text-pearl">
                <p className="text-caption uppercase tracking-[0.1em] text-accent-light">
                  {tCategories(activeItem.category)}
                </p>
                <h2 className="mt-3 font-display text-heading-l">
                  {activeItem.application}
                </h2>

                <dl className="mt-8 space-y-4 text-body-s">
                  <MetaRow label={t("species")} value={activeItem.species} />
                  <MetaRow label={t("finish")} value={activeItem.finish} />
                  <MetaRow label={t("setting")} value={activeItem.setting} />
                  <MetaRow label={t("commonDimensions")} value={activeItem.commonDimensions} />
                  <MetaRow label={t("durability")} value={activeItem.durability} />
                  <MetaRow label={t("moistureResistance")} value={activeItem.moistureResistance} />
                </dl>

                <Link
                  href={{
                    pathname: "/contact",
                    query: {
                      application: activeItem.application,
                      species: activeItem.species,
                    },
                  }}
                  className="mt-8 inline-block border-b border-accent pb-1 text-body-m text-accent hover:border-pearl hover:text-pearl transition-colors"
                >
                  {t("requestQuoteForApplication")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-pearl/10 pt-3">
      <dt className="text-caption uppercase tracking-[0.08em] text-pearl/40">{label}</dt>
      <dd className="mt-1 text-pearl/80">{value}</dd>
    </div>
  );
}
