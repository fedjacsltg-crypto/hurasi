import { getTranslations } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/**
 * KeyFiguresBand (Phase 9 Correctif 12) — composant unique de chiffres
 * clés, réutilisé partout où ce besoin apparaît (homepage, About,
 * Sustainability). Séparateurs fins plutôt que des cartes avec ombre
 * (Phase 2 §6, alternative signature).
 *
 * ⚠️ CHIFFRES PLACEHOLDER — à remplacer par les vrais chiffres HURASI
 * (années d'existence, volume exporté réel, nombre de pays desservis).
 */
export async function StatsBar() {
  const t = await getTranslations("stats");

  const figures = [
    { value: "20+", label: t("experience") },
    { value: "50 000+", label: t("exported") },
    { value: "40+", label: t("countries") },
    { value: "FSC", label: t("shipping") },
  ];

  return (
    <section className="border-y border-pearl/10 bg-obsidian">
      <RevealOnScroll className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-11 sm:px-11 md:grid-cols-4 md:py-14">
        {figures.map((figure, i) => (
          <div
            key={figure.label}
            className={
              i > 0
                ? "border-fg/10 ps-8 md:border-s"
                : ""
            }
          >
            <p className="tabular-nums font-display text-display-m text-accent">
              {figure.value}
            </p>
            <p className="mt-2 text-caption uppercase tracking-[0.1em] text-pearl/60">
              {figure.label}
            </p>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
