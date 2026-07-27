import type { ArticleBlock } from "@/types/blog";

export interface TocEntry {
  id: string;
  text: string;
}

export function getTableOfContents(content: ArticleBlock[]): TocEntry[] {
  return content
    .filter((block): block is Extract<ArticleBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({ id: block.id, text: block.text }));
}
