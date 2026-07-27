import type { BlogCategory } from "@/types/blog";

/**
 * Sous-ensemble volontairement restreint des catégories décrites dans le
 * cahier des charges initial (21 catégories) — voir la décision produit
 * de ne construire qu'une architecture solide + 2 articles de démonstration
 * plutôt qu'une bibliothèque exhaustive. D'autres catégories peuvent être
 * ajoutées ici au fur et à mesure que du contenu réel les justifie.
 */
export const BLOG_CATEGORIES: BlogCategory[] = [
  "mahogany",
  "architecture",
  "sustainability",
  "fscCertification",
  "exportLogistics",
  "technicalGuides",
  "marketAnalysis",
  "furnitureManufacturing",
  "decking",
  "buyingGuides",
];
