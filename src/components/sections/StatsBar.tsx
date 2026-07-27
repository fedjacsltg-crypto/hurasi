import { getTranslations } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/**
 * KeyFiguresBand (Phase 9 Correctif 12) — composant unique de chiffres
 * clés, réutilisé partout où ce besoin apparaît (homepage, About,
 * Sustainability). Séparateurs fins plutôt que des cartes avec ombre
 * (Phase 2 §6, alternative signature).
 *
 * Affirmations volontairement factuelles et vérifiables (pas de chiffres
 * inventés type "20+ ans d'expérience" ou "50 000+ m³ exportés") — voir
 * décision client du 27/07/2026 : remplacer par des faits défendables
 * cohérents avec ce qui est déjà affirmé ailleurs sur le site (plantation
 * + scierie propres certifiées FSC, fabrication sur mesure, intégration
 * verticale, traçabilité complète).
 */
export async function StatsBar() {
  const t = await getTranslations("stats");

  const figures = [
    { value: "FSC", label: t("certified") },
    { value: "100%", label: t("custom") },
    { value: t("directValue"), label: t("direct") },
    { value: t("fullValue"), label: t("traceability") },
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
