export type FaqCategory =
  | "mahogany"
  | "products"
  | "quality"
  | "sustainability"
  | "export"
  | "leadTimes"
  | "orders"
  | "pricing"
  | "payment"
  | "technical"
  | "care"
  | "business";

export interface FaqItem {
  /** Identifiant unique et stable — utilisé pour l'ancre d'URL (#faq-id) */
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}
