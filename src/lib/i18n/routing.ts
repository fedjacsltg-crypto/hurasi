import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Chaque langue a toujours un préfixe explicite dans l'URL (/en, /fr, /ar...).
  // Décision actée en Phase 1 §0.1 : plus robuste pour le SEO et le hreflang
  // qu'un mélange "langue par défaut sans préfixe / autres langues préfixées".
  localePrefix: "always",
});
