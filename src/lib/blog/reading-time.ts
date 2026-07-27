import type { ArticleBlock } from "@/types/blog";

const WORDS_PER_MINUTE = 200;

/** Compte les mots d'un article à partir de ses blocs de contenu. */
function countWords(content: ArticleBlock[]): number {
  let words = 0;
  for (const block of content) {
    if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
      words += block.text.split(/\s+/).filter(Boolean).length;
    } else if (block.type === "list") {
      for (const item of block.items) {
        words += item.split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return words;
}

/** Retourne un temps de lecture estimé en minutes entières (minimum 1). */
export function getReadingTimeMinutes(content: ArticleBlock[]): number {
  const words = countWords(content);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
