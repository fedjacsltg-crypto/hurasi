"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animation/variants";

/**
 * Hero — Ouverture cinématique (révisé d'après la direction artistique
 * fournie par le client : vidéo aérienne de forêt en fond, logo complet
 * centré — le logo n'est jamais retraduit par langue, c'est la norme
 * pour une marque, seul le sous-titre en dessous change de langue).
 *
 * ⚠️ FICHIER VIDÉO REQUIS : place un fichier réel à
 * `public/videos/forest-aerial.mp4` (voir message de Claude pour des
 * sources gratuites). Tant qu'il est absent, le dégradé de secours
 * s'affiche seul — rien n'est cassé, juste moins impressionnant.
 */
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/forest-aerial-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="/videos/forest-aerial.mp4" type="video/mp4" />
      </video>

      {/* Overlay pour garantir la lisibilité du texte quel que soit le contenu vidéo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian/80"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <Image
            src="/brand/logo-hurasi.png"
            alt="HURASI Group — Noble Wood. Timeless Value."
            width={320}
            height={320}
            priority
            className="h-auto w-[220px] sm:w-[280px] md:w-[320px]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-[46ch] text-body-l text-pearl/80"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div variants={fadeUp} className="pt-2">
          <Button href="/products" variant="secondary" className="border-accent/50 text-pearl hover:bg-accent/10">
            {t("cta")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 h-8 w-px -translate-x-1/2 bg-pearl/40"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
