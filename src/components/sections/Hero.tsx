"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animation/variants";

/**
 * Hero — Ouverture cinématique (Phase 5 §1).
 *
 * Composition volontairement non centrée : le bloc de texte est aligné
 * bas-gauche (bas-droite en RTL, géré automatiquement par les propriétés
 * logiques `items-start` / `text-start`), jamais au centre géométrique —
 * cette asymétrie signe une composition pensée plutôt qu'un template.
 *
 * Remplacer le <div> de fond par une vidéo/image réelle avant mise en
 * production (voir Phase 8 §5 : l'image poster doit être l'élément LCP
 * optimisé, la vidéo charge après en différé léger).
 */
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian text-pearl">
      {/* Placeholder de fond — à remplacer par <AmbientVideo> (Phase 11 §2) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-charcoal-800/40"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12)}
        className="relative z-10 flex w-full max-w-[720px] flex-col items-start gap-5 px-6 pb-24 sm:px-11 sm:pb-32"
      >
        <motion.p
          variants={fadeUp}
          className="text-caption uppercase tracking-[0.15em] text-accent-light"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-display-m leading-[1.05] sm:text-display-l"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-[46ch] text-body-l text-pearl/80"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div variants={fadeUp} className="pt-2">
          <Button href="/about" variant="tertiary" className="text-pearl border-pearl/30 hover:border-pearl">
            {t("cta")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll — pulsation avec léger déplacement (Phase 12 §B, Hero) */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 h-8 w-px bg-pearl/40 sm:left-11 sm:translate-x-0"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
