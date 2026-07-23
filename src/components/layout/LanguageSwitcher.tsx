"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";

/**
 * Rappel Phase 1 §6 / Phase 3 §11 : le changement de langue préserve la
 * route courante (mappe /en/services/branding → /fr/services/branding),
 * jamais un retour forcé à l'accueil.
 *
 * NOTE IMPORTANTE POUR L'ÉTAPE SUIVANTE : ce composant suppose pour l'instant
 * que les slugs sont identiques entre langues. Quand le CMS (Phase 7) sera
 * branché, remplacer `pathname` par la résolution du slug traduit de la
 * page courante via la relation stable définie en Phase 7 §7.
 */
export function LanguageSwitcher() {
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

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t("languageSwitcher")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-caption uppercase tracking-[0.1em] text-fg/80 hover:text-fg transition-colors"
      >
        {locale.toUpperCase()}
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute end-0 top-full mt-3 min-w-[160px] border border-border bg-bg py-2 shadow-2"
        >
          {locales.map((code) => (
            <li key={code} role="none">
              <button
                role="menuitem"
                type="button"
                aria-current={code === locale}
                onClick={() => switchTo(code)}
                className={cn(
                  "block w-full px-4 py-2 text-start text-body-s hover:bg-fg/5",
                  code === locale && "text-accent"
                )}
              >
                {localeNames[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
