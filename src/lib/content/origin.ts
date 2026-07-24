import type { Locale } from "@/lib/i18n/config";

/**
 * Charge le contenu "Origin of Excellence" pour la locale demandée.
 * Chaque locale a son propre fichier sous src/content/{locale}/ —
 * cohérent avec la structure de contenu local définie en Phase 1 §7
 * (adaptateur CMS local en attendant un vrai CMS).
 *
 * pt/ar/zh/ru pointent vers un fallback anglais tant que la vraie
 * traduction éditoriale n'est pas faite (voir commentaire dans ces
 * fichiers) — mieux vaut un contenu anglais complet qu'un contenu
 * manquant ou mal traduit automatiquement.
 */
export async function getOriginContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/origin-of-excellence");
    case "pt":
      return import("@/content/pt/origin-of-excellence");
    case "ar":
      return import("@/content/ar/origin-of-excellence");
    case "zh":
      return import("@/content/zh/origin-of-excellence");
    case "ru":
      return import("@/content/ru/origin-of-excellence");
    default:
      return import("@/content/en/origin-of-excellence");
  }
}
