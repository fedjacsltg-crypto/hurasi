import type { Locale } from "@/lib/i18n/config";

export async function getFaqPageContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/faq-page");
    case "pt":
      return import("@/content/pt/faq-page");
    case "ar":
      return import("@/content/ar/faq-page");
    case "zh":
      return import("@/content/zh/faq-page");
    case "ru":
      return import("@/content/ru/faq-page");
    default:
      return import("@/content/en/faq-page");
  }
}
