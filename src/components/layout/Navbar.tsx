"use client";

import { useEffect, useState } from "react";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/manufacturing", key: "manufacturing" },
  { href: "/sustainability", key: "sustainability" },
  { href: "/projects", key: "projects" },
  { href: "/news", key: "news" },
] as const;

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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,padding,backdrop-filter,color] duration-300",
        scrolled
          ? "bg-bg/70 py-3 text-fg backdrop-blur-md border-b border-border/50"
          : "bg-transparent py-6 text-pearl"
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-11"
      >
        <Link href="/" className="font-display text-heading-m tracking-wide">
          HURASI
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
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
        </div>
      </nav>
    </header>
  );
}