import type { Variants } from "framer-motion";

/**
 * Signature d'entrée standard : fondu + translation verticale légère.
 * Utilisée par la majorité des éléments de contenu (Phase 4 §2).
 * Durée volontairement absente ici : chaque appelant fixe sa propre durée
 * via `transition` pour respecter le tableau de référence (Phase 4 §12).
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Éléments visuels autonomes (images, cartes) — fondu + léger scale (Phase 12 §A.2). */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Conteneur avec effet de stagger pour les listes/grilles (Phase 4 §2). */
export function staggerContainer(staggerMs = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerMs },
    },
  };
}
