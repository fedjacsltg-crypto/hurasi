"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Un seul point de vérité pour la préférence de mouvement réduit.
 * Lenis et GSAP interrogent ce hook au démarrage plutôt que de vérifier
 * `matchMedia` indépendamment à plusieurs endroits (Phase 4 §13).
 *
 * Implémenté via useSyncExternalStore : c'est le pattern React recommandé
 * pour s'abonner à une source de vérité externe au rendu (ici, le
 * navigateur), plutôt que d'appeler setState depuis un useEffect.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
