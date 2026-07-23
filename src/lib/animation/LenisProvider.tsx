"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { ensureGsapRegistered, gsap, ScrollTrigger } from "./gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Exposé comme une ref plutôt qu'un state réactif : les consommateurs
 * (ex. un lien d'ancrage) appellent `lenisRef.current?.scrollTo(...)`
 * au moment du clic, ils n'ont pas besoin de re-render quand l'instance
 * change — ce qui évite de synchroniser un état React avec une
 * bibliothèque impérative externe (Phase 4 §9).
 */
const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

export function useLenis() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenis doit être utilisé à l'intérieur de <LenisProvider>");
  }
  return ctx;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    ensureGsapRegistered();

    // Reduced motion : on désactive complètement le lissage, on repasse
    // au scroll natif du navigateur (interrupteur global, Phase 4 §9/§13).
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1, // Phase 4 §9 — fluide sans "patiner"
      duration: 1.1,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Pont Lenis → ScrollTrigger : GSAP doit se fier à la position de scroll
    // lissée par Lenis, jamais lire `window.scrollY` indépendamment.
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
