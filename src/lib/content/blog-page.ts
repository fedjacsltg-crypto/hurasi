import type { Locale } from "@/lib/i18n/config";

export async function getBlogPageContent(locale: Locale) {
  switch (locale) {
    case "fr":
      return import("@/content/fr/blog-page");
    case "pt":
      return import("@/content/pt/blog-page");
    case "ar":
      return import("@/content/ar/blog-page");
    case "zh":
      return import("@/content/zh/blog-page");
    case "ru":
      return import("@/content/ru/blog-page");
    default:
      return import("@/content/en/blog-page");
  }
}
