export type ProductCategory = "planche" | "parquet";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  dimensions: string;
  species: string;
  fscCertified: boolean;
  placeholderTone: "obsidian" | "charcoal" | "champagne";
  badge?: "new" | "limited";
}