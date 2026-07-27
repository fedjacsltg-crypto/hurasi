"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const t = useTranslations("blogPage");
  const [copied, setCopied] = useState(false);

  function currentUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Presse-papiers indisponible — pas d'action de repli nécessaire.
    }
  }

  const encodedUrl = encodeURIComponent(currentUrl());
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-4 text-body-s">
      <span className="text-fg/50">{t("share")}:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
      >
        X
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
      >
        Email
      </a>
      <button
        onClick={copyLink}
        className="border-b border-fg/20 pb-0.5 hover:border-fg transition-colors"
      >
        {copied ? t("linkCopied") : t("copyLink")}
      </button>
    </div>
  );
}
