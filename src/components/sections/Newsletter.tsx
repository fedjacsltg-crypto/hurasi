"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export function Newsletter() {
  const t = useTranslations("footer");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(Phase 7 CMS) : brancher sur le fournisseur d'emailing choisi.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="text-body-s text-pearl/70">
        {/* Message de confirmation — ton éditorial, pas générique (Phase 3 §16) */}
        ✓
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-3">
      <label htmlFor="newsletter-email" className="text-caption uppercase tracking-[0.1em] text-pearl/60">
        {t("newsletterTitle")}
      </label>
      <div className="flex items-end gap-4 border-b border-pearl/25 pb-2 focus-within:border-pearl/70 transition-colors">
        <input
          id="newsletter-email"
          type="email"
          required
          dir="ltr"
          placeholder={t("newsletterPlaceholder")}
          className="w-full bg-transparent text-body-m text-pearl placeholder:text-pearl/40 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 text-caption uppercase tracking-[0.1em] text-pearl/80 hover:text-pearl"
        >
          {t("newsletterSubmit")}
        </button>
      </div>
    </form>
  );
}
