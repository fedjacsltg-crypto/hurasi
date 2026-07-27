import type { FaqCategory } from "@/types/faq";

/**
 * Ordre d'affichage des catégories dans les filtres.
 * Les libellés sont résolus via next-intl (namespace "faqCategories"),
 * jamais codés en dur ici — voir le piège documenté sur GALLERY_CATEGORIES.
 */
export const FAQ_CATEGORIES: FaqCategory[] = [
  "mahogany",
  "products",
  "quality",
  "sustainability",
  "export",
  "leadTimes",
  "orders",
  "pricing",
  "payment",
  "technical",
  "care",
  "business",
];
