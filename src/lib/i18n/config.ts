/**
 * Source unique de vérité pour toute la configuration multilingue du site.
 *
 * Pourquoi centralisé ici : le sélecteur de langue, le middleware de routage,
 * le <html lang dir>, le hreflang, et le sitemap lisent TOUS ce fichier.
 * Ajouter une 7e langue = modifier ce fichier + ajouter son messages/{locale}.json
 * + éventuellement une police dédiée. Rien d'autre ne doit être modifié.
 */

export const locales = ["en", "fr", "pt", "ar", "zh", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Langues qui s'écrivent de droite à gauche. */
export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

/**
 * Nom natif de chaque langue — utilisé dans le sélecteur de langue.
 * Règle stricte (Phase 3 §11) : chaque langue s'auto-désigne,
 * jamais de traduction croisée ("Anglais" en français est interdit ici).
 */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  pt: "Português",
  ar: "العربية",
  zh: "中文",
  ru: "Русский",
};

/** Locale BCP-47 utilisée pour Intl.NumberFormat / Intl.DateTimeFormat. */
export const localeFormats: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  pt: "pt-PT",
  ar: "ar-SA",
  zh: "zh-CN",
  ru: "ru-RU",
};
