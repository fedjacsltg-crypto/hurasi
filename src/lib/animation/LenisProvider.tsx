"use client";

import { createContext, useContext, useRef } from "react";
import type Lenis from "lenis";

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

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}