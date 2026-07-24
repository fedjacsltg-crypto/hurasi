import type { Locale } from "@/lib/i18n/config";

export async function getSustainabilityPageContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/sustainability-page");
    case "pt":
      return import("@/content/pt/sustainability-page");
    case "ar":
      return import("@/content/ar/sustainability-page");
    case "zh":
      return import("@/content/zh/sustainability-page");
    case "ru":
      return import("@/content/ru/sustainability-page");
    default:
      return import("@/content/en/sustainability-page");
  }
}
