import type { GalleryCategory } from "@/types/gallery";

/**
 * Les 12 catégories de la Inspiration Library, demandées par le client.
 * Ajouter une nouvelle catégorie plus tard = ajouter une entrée ici,
 * rien d'autre à modifier dans le reste du code.
 */
export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; icon: string }[] = [
  { id: "luxury-residences", label: "Luxury Residences", icon: "🏡" },
  { id: "hotels-resorts", label: "Hotels & Resorts", icon: "🏨" },
  { id: "yachts", label: "Yachts", icon: "🛥️" },
  { id: "wine-cellars", label: "Wine Cellars", icon: "🍷" },
  { id: "fine-dining", label: "Fine Dining", icon: "🍽️" },
  { id: "corporate-hq", label: "Corporate HQ", icon: "🏢" },
  { id: "furniture", label: "High-End Furniture", icon: "🪑" },
  { id: "doors-joinery", label: "Doors & Joinery", icon: "🚪" },
  { id: "staircases", label: "Staircases", icon: "🪜" },
  { id: "decking", label: "Terraces & Decking", icon: "🌿" },
  { id: "interior-design", label: "Interior Design", icon: "🛋️" },
  { id: "landscaping", label: "Outdoor Landscaping", icon: "🌳" },
];
