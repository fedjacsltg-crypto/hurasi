"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  { href: "/about", key: "about" },
  { href: "/forests", key: "forests" },
  { href: "/products", key: "products" },
  { href: "/sustainability", key: "sustainability" },
  { href: "/gallery", key: "gallery" },
  { href: "/blog", key: "blog" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

/**
 * Thème sombre permanent (Phase 12 — révision suite à la direction
 * artistique fournie par le client, logo à fond noir). La Navbar ne
 * bascule plus clair/sombre : seule l'opacité du fond change au scroll.
 *
 * Correctif (27/07/2026) : la navigation desktop (`lg:flex`) n'avait
 * aucun équivalent mobile — en dessous de 1024px, le menu était
 * simplement invisible, sans bouton burger de repli. Ajout d'un menu
 * mobile plein écran avec tous les mêmes liens.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le défilement du fond quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-pearl transition-[background-color,padding,backdrop-filter] duration-300",
        scrolled || mobileOpen
          ? "bg-obsidian/80 py-3 backdrop-blur-md border-b border-pearl/10"
          : "bg-transparent py-5"
      )}
    >
      <nav
        aria-label={t("mainNavigation")}
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-11"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/brand/monogram-hurasi.png"
            alt="HURASI"
            width={52}
            height={48}
            className="h-11 w-auto sm:h-12"
            priority
          />
          <span className="font-display text-heading-m tracking-wide text-accent">
            HURASI
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="text-caption uppercase tracking-[0.1em] opacity-80 hover:opacity-100 transition-opacity"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <Button
            href="/contact"
            variant="secondary"
            size="sm"
            className="hidden border-accent/50 text-pearl hover:bg-accent/10 sm:inline-flex lg:inline-flex"
          >
            {t("getInTouch")}
          </Button>

          {/* Bouton burger — visible uniquement en dessous de lg */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              aria-hidden
              className={cn(
                "block h-[1.5px] w-6 bg-pearl transition-transform duration-300",
                mobileOpen && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              aria-hidden
              className={cn(
                "block h-[1.5px] w-6 bg-pearl transition-opacity duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              aria-hidden
              className={cn(
                "block h-[1.5px] w-6 bg-pearl transition-transform duration-300",
                mobileOpen && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Panneau mobile plein écran */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 h-svh bg-obsidian pt-24 lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 sm:px-11">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-pearl/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 font-display text-heading-s"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <LanguageSwitcher variant="inline" />
              </div>

              <Button
                href="/contact"
                variant="secondary"
                className="mt-8 w-full justify-center border-accent/50 text-pearl hover:bg-accent/10"
                onClick={() => setMobileOpen(false)}
              >
                {t("getInTouch")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
