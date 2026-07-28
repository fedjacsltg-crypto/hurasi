"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";

/**
 * Rappel Phase 1 §6 / Phase 3 §11 : le changement de langue préserve la
 * route courante, jamais un retour forcé à l'accueil.
 *
 * Correctif (28/07/2026) : le menu déroulant `absolute` d'origine se
 * faisait couper à l'intérieur du panneau mobile plein écran, dont le
 * conteneur `overflow-y-auto` réduit aussi le débordement horizontal
 * (comportement standard des navigateurs). Sur mobile (variant="inline"),
 * on affiche directement la liste des langues, sans dépendre d'un menu
 * positionné en absolu.
 */
export function LanguageSwitcher({ variant = "dropdown" }: { variant?: "dropdown" | "inline" }) {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
    setOpen(false);
  }

  if (variant === "inline") {
    return (
      <div>
        <p className="mb-3 text-caption uppercase tracking-[0.1em] text-pearl/40">
          {t("languageSwitcher")}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              aria-current={code === locale}
              onClick={() => switchTo(code)}
              className={cn(
                "flex items-center gap-2 border border-pearl/15 px-3 py-2.5 text-start text-body-s text-pearl/80 hover:border-pearl/40",
                code === locale && "border-accent text-accent"
              )}
            >
              <span aria-hidden>{localeFlags[code]}</span>
              {localeNames[code]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t("languageSwitcher")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-caption uppercase tracking-[0.1em] opacity-80 hover:opacity-100 transition-opacity"
      >
        <span aria-hidden>{localeFlags[locale]}</span>
        {locale.toUpperCase()}
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute end-0 top-full mt-3 min-w-[180px] border border-border bg-bg py-2 text-fg shadow-2"
        >
          {locales.map((code) => (
            <li key={code} role="none">
              <button
                role="menuitem"
                type="button"
                aria-current={code === locale}
                onClick={() => switchTo(code)}
                className={cn(
                  "flex w-full items-center gap-2.5 px-4 py-2 text-start text-body-s hover:bg-fg/5",
                  code === locale && "text-accent"
                )}
              >
                <span aria-hidden>{localeFlags[code]}</span>
                {localeNames[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
