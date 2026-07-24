import type { Locale } from "@/lib/i18n/config";

export async function getAboutPageContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/about-page");
    case "pt":
      return import("@/content/pt/about-page");
    case "ar":
      return import("@/content/ar/about-page");
    case "zh":
      return import("@/content/zh/about-page");
    case "ru":
      return import("@/content/ru/about-page");
    default:
      return import("@/content/en/about-page");
  }
}
