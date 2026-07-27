export type GalleryCategory =
  | "luxury-residences"
  | "hotels-resorts"
  | "yachts"
  | "private-jets"
  | "wine-cellars"
  | "fine-dining"
  | "corporate-hq"
  | "furniture"
  | "doors-joinery"
  | "staircases"
  | "decking"
  | "interior-design"
  | "landscaping";

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category: GalleryCategory;
  /** Métadonnées affichées dans la visionneuse plein écran — le cœur
   *  de la demande client : transformer la galerie en outil de vente,
   *  pas une simple collection de photos. */
  species: string;
  application: string;
  finish: string;
  setting: "Indoor" | "Outdoor" | "Indoor / Outdoor";
  commonDimensions: string;
  durability: string;
  moistureResistance: string;
}
