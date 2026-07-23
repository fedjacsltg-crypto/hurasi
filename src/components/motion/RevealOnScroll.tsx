"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation/variants";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Délai en secondes — utile pour orchestrer un stagger manuel entre sections. */
  delay?: number;
}

/**
 * Enveloppe n'importe quel contenu statique (Server Component) pour lui
 * donner l'animation d'entrée standard au scroll. Le contenu enveloppé
 * reste rendu côté serveur ; seul ce wrapper est client (Phase 1 §2).
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
