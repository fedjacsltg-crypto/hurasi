import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Naskh_Arabic } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { isRtl, locales, type Locale } from "@/lib/i18n/config";
import { LenisProvider } from "@/lib/animation/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

/**
 * Choix de polices (Phase 2 §2) :
 * - Fraunces : serif éditoriale à fort contraste — registre display/titres.
 * - Inter : sans-serif géométrique — registre UI/texte courant.
 * - Noto Naskh Arabic : registre display+texte pour la locale arabe.
 * Chargement conditionnel par script — un visiteur non-arabophone ne
 * télécharge jamais la police arabe (Phase 8 §5, poids des polices).
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: {
      default: `HURASI — ${t("title")}`,
      template: "%s — HURASI",
    },
    description: t("subtitle"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Rend le rendu server-side conscient de la locale (nécessaire avec App Router).
  setRequestLocale(locale);

  const dir = isRtl(locale as Locale) ? "rtl" : "ltr";
  const fontVars =
    locale === "ar"
      ? `${notoNaskh.variable} ${inter.variable}`
      : `${fraunces.variable} ${inter.variable}`;

  return (
    <html lang={locale} dir={dir} className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full">
        <NextIntlClientProvider>
          {/* Skip link — toujours en premier élément focusable (Phase 8 §2) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-obsidian"
          >
            Aller au contenu
          </a>

          <LenisProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
