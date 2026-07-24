export type ProductCategory = "planche" | "parquet";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  /** Optionnelle désormais — la gamme parquet privilégie une promesse
      de capacité commune plutôt qu'une fiche par référence. */
  shortDescription?: string;
  dimensions: string;
  species: string;
  fscCertified: boolean;
  /** Vraie photo produit si disponible. */
  image?: string;
  placeholderTone: "obsidian" | "charcoal" | "champagne";
  badge?: "new" | "limited";
}
