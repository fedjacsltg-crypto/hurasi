import type { Product } from "@/types/product";

export const featuredProducts: Product[] = [
  {
    id: "parquet-large-lame",
    slug: "parquet-massif-large-lame",
    name: "Parquet Massif Large Lame",
    category: "parquet",
    shortDescription:
      "Grand format, veinage continu — pour des sols au caractère affirmé.",
    dimensions: "14 × 180–220 × 1200–2200 mm",
    species: "Acajou (Khaya spp.)",
    fscCertified: true,
    placeholderTone: "obsidian",
    badge: "new",
  },
  {
    id: "parquet-chevron",
    slug: "parquet-massif-chevron",
    name: "Parquet Massif Chevron",
    category: "parquet",
    shortDescription:
      "Lames pré-coupées à 45°, pose en chevron classique.",
    dimensions: "14 × 120 × 600 mm",
    species: "Acajou (Khaya spp.)",
    fscCertified: true,
    placeholderTone: "champagne",
  },
  {
    id: "parquet-batons-rompus",
    slug: "parquet-massif-batons-rompus",
    name: "Parquet Massif Bâtons Rompus",
    category: "parquet",
    shortDescription:
      "Pose traditionnelle à angle droit, effet tressé.",
    dimensions: "14 × 100 × 500 mm",
    species: "Acajou (Khaya spp.)",
    fscCertified: true,
    placeholderTone: "charcoal",
  },
  {
    id: "planche-27",
    slug: "planches-sciees-acajou-27mm",
    name: "Planches Sciées Acajou 27 mm",
    category: "planche",
    shortDescription:
      "Sciage standard, séchage naturel — adapté à l'ébénisterie et à la menuiserie fine.",
    dimensions: "27 × 150–300 × 1000–4000 mm",
    species: "Acajou (Khaya spp.)",
    fscCertified: true,
    placeholderTone: "charcoal",
  },
  {
    id: "planche-52",
    slug: "planches-sciees-acajou-52mm",
    name: "Planches Sciées Acajou 52 mm",
    category: "planche",
    shortDescription:
      "Forte épaisseur — pour la structure, la charpente et les pièces massives.",
    dimensions: "52 × 150–300 × 1000–4000 mm",
    species: "Acajou (Khaya spp.)",
    fscCertified: true,
    placeholderTone: "obsidian",
  },
];

export const parquetRange = featuredProducts.filter(
  (p) => p.category === "parquet"
);
export const boardRange = featuredProducts.filter(
  (p) => p.category === "planche"
);