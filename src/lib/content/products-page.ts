import type { Locale } from "@/lib/i18n/config";

export async function getProductsPageContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/products-page");
    case "pt":
      return import("@/content/pt/products-page");
    case "ar":
      return import("@/content/ar/products-page");
    case "zh":
      return import("@/content/zh/products-page");
    case "ru":
      return import("@/content/ru/products-page");
    default:
      return import("@/content/en/products-page");
  }
}
