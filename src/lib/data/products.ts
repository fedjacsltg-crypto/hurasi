import type { Product } from "@/types/product";

/**
 * TODO(CMS) : remplaçant temporaire du type "Products" (Phase 7 §1).
 *
 * IMPORTANT : ces données ne sont pas encore reliées au système de
 * traduction next-intl — elles sont volontairement en anglais (langue
 * de travail B2B internationale pour cette gamme) en attendant une
 * vraie localisation champ par champ une fois le CMS branché
 * (Phase 7 §0.2). Ne pas mélanger français/anglais ici tant que ce
 * chantier n'est pas fait.
 *
 * Fiches produit volontairement épurées à la demande du client :
 * seule l'essence ("African Mahogany (Khaya)") et l'appel à l'action
 * apparaissent sous la photo — plus de nom de référence, dimensions
 * ou description marketing par carte.
 */
export const parquetCapabilityStatement = {
  eyebrow: "Solid Mahogany Parquet",
  title: "Manufactured to Your Exact Specifications",
  description:
    "Any dimension, any thickness, any finish, any laying pattern — we produce your parquet to your precise requirements, not from a fixed catalogue. Our sawmill and finishing workshop adapt to your specification, from the first square meter to continuous supply programs.",
};

const SPECIES_LABEL = "African Mahogany (Khaya)";
const QUOTE_CTA = "Request a Quote";

export const featuredProducts: Product[] = [
  {
    id: "planche-fanned-1",
    slug: "sawn-boards-showcase-1",
    name: "Solid Mahogany Boards — Stack Detail",
    category: "planche",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-stack-fanned-1.jpg",
    placeholderTone: "obsidian",
    badge: "new",
  },
  {
    id: "planche-fanned-2",
    slug: "sawn-boards-showcase-2",
    name: "Solid Mahogany Boards — Grain Detail",
    category: "planche",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-stack-fanned-2.jpg",
    placeholderTone: "champagne",
  },
  {
    id: "planche-fanned-3",
    slug: "sawn-boards-showcase-3",
    name: "Solid Mahogany Boards — Fanned Stack",
    category: "planche",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-stack-fanned-3.jpg",
    placeholderTone: "charcoal",
  },
  {
    id: "planche-fanned-4",
    slug: "sawn-boards-showcase-4",
    name: "Solid Mahogany Boards — Vertical Stack",
    category: "planche",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-stack-fanned-4.jpg",
    placeholderTone: "obsidian",
  },
  {
    id: "planche-27",
    slug: "sawn-boards-27mm",
    name: "Sawn Boards — 27mm",
    category: "planche",
    dimensions: "27mm",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-27mm.jpg",
    placeholderTone: "charcoal",
  },
  {
    id: "planche-52",
    slug: "sawn-boards-52mm",
    name: "Sawn Boards — 52mm",
    category: "planche",
    dimensions: "52mm",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/boards/board-52mm.jpg",
    placeholderTone: "obsidian",
  },
  {
    id: "parquet-large-lame",
    slug: "parquet-massif-large-lame",
    name: "Solid Mahogany Parquet — Wide Plank",
    category: "parquet",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/parquet/parquet-large-lame.jpg",
    placeholderTone: "champagne",
  },
  {
    id: "parquet-batons-rompus",
    slug: "parquet-massif-batons-rompus",
    name: "Solid Mahogany Parquet — Herringbone",
    category: "parquet",
    dimensions: "Custom",
    species: SPECIES_LABEL,
    fscCertified: true,
    image: "/images/products/parquet/parquet-overview.jpg",
    placeholderTone: "charcoal",
  },
];

export const quoteCta = QUOTE_CTA;

export const parquetRange = featuredProducts.filter((p) => p.category === "parquet");
export const boardRange = featuredProducts.filter((p) => p.category === "planche");

export const parquetFinishDetails = [
  { image: "/images/products/parquet/parquet-joint-1.jpg", alt: "Tongue and groove joint detail" },
  { image: "/images/products/parquet/parquet-joint-2.jpg", alt: "Finish and grain detail" },
  { image: "/images/products/parquet/parquet-plank-detail.jpg", alt: "Solid parquet plank detail" },
  { image: "/images/products/parquet/parquet-joint-3.jpg", alt: "Joint and edge detail" },
];
