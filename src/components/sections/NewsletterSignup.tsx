"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterSignup() {
  const t = useTranslations("blogPage");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-body-m text-accent">{t("newsletterSuccess")}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("newsletterPlaceholder")}
        aria-label={t("newsletterPlaceholder")}
        className="flex-1 border border-border bg-transparent px-4 py-3 text-body-m placeholder:text-fg/40 focus:border-fg focus:outline-none"
      />
      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? t("newsletterSending") : t("newsletterSubscribe")}
      </Button>
      {status === "error" && (
        <p className="text-body-s text-[color:var(--color-state-error)]">
          {t("newsletterError")}
        </p>
      )}
    </form>
  );
}
