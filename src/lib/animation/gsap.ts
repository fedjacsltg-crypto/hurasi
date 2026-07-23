"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Enregistre les plugins GSAP une seule fois pour toute l'application.
 * Ne jamais appeler `gsap.registerPlugin` ailleurs dans le code —
 * ce fichier est le seul point d'entrée (Phase 1 §0.4, Phase 11 §2).
 */
export function ensureGsapRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
