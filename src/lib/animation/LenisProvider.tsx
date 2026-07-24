"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { ensureGsapRegistered, ScrollTrigger } from "./gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.1,
      smoothWheel: true,
      autoRaf: true,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
