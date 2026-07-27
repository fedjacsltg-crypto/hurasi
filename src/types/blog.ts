export type BlogCategory =
  | "mahogany"
  | "architecture"
  | "sustainability"
  | "fscCertification"
  | "exportLogistics"
  | "technicalGuides"
  | "marketAnalysis"
  | "furnitureManufacturing"
  | "decking"
  | "buyingGuides";

export type ReadingDifficulty = "beginner" | "intermediate" | "advanced";

export interface BlogAuthor {
  id: string;
  name: string;
  /** Chemin de la photo, ou null si non encore fournie (avatar de repli affiché). */
  photo: string | null;
  linkedin?: string;
  position: string;
  bio: string;
  expertise: string[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface BlogArticle {
  /** Identifiant stable, identique dans toutes les langues — utilisé dans l'URL /blog/[slug]. */
  slug: string;
  category: BlogCategory;
  tags: string[];
  title: string;
  subtitle: string;
  authorId: string;
  /** Date ISO (AAAA-MM-JJ) — un fait, non traduit. */
  publishedDate: string;
  updatedDate?: string;
  heroImage: string;
  heroImageAlt: string;
  excerpt: string;
  difficulty: ReadingDifficulty;
  featured?: boolean;
  content: ArticleBlock[];
}
