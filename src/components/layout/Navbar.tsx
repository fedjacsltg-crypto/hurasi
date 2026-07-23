"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  { href: "/about", key: "about" },
  { href: "/forests", key: "forests" },
  { href: "/products", key: "products" },
  { href: "/sustainability", key: "sustainability" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
] as const;

/**
 * Thème sombre permanent (Phase 12 — révision suite à la direction
 * artistique fournie par le client, logo à fond noir). La Navbar ne
 * bascule plus clair/sombre : seule l'opacité du fond change au scroll.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-pearl transition-[background-color,padding,backdrop-filter] duration-300",
        scrolled
          ? "bg-obsidian/80 py-3 backdrop-blur-md border-b border-pearl/10"
          : "bg-transparent py-5"
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-11"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/monogram-hurasi.png"
            alt="HURASI"
            width={40}
            height={37}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display text-heading-m tracking-wide">
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

        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <Button
            href="/contact"
            variant="secondary"
            size="sm"
            className="hidden border-accent/50 text-pearl hover:bg-accent/10 sm:inline-flex"
          >
            {t("getInTouch")}
          </Button>
        </div>
      </nav>
    </header>
  );
}
