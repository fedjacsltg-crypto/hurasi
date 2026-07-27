"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.getElementById("article-body");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      setProgress(pct);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-[2px] bg-border">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
