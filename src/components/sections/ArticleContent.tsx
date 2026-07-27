import type { ArticleBlock } from "@/types/blog";

interface ArticleContentProps {
  content: ArticleBlock[];
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div id="article-body" className="space-y-6">
      {content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={block.id}
                className="!mt-14 scroll-mt-28 font-display text-heading-m"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-body-l leading-relaxed text-fg/80">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-2 ps-6 text-body-l text-fg/80">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-s-2 border-accent ps-6 font-display text-heading-s italic text-fg/90"
              >
                {block.text}
                {block.attribution && (
                  <footer className="mt-3 text-caption not-italic uppercase tracking-[0.08em] text-fg/50">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
