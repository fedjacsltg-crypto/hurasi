import Image from "next/image";
import type { BlogAuthor } from "@/types/blog";

interface AuthorCardProps {
  author: BlogAuthor;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-surface">
        {author.photo ? (
          <Image src={author.photo} alt={author.name} fill sizes="56px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-heading-s text-fg/40">
            {author.name.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <p className="font-display text-body-l">{author.name}</p>
        <p className="text-body-s text-fg/50">{author.position}</p>
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-caption uppercase tracking-[0.06em] text-accent hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
