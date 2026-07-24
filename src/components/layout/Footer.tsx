import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { Newsletter } from "@/components/sections/Newsletter";

export async function Footer() {
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-obsidian text-pearl">
      <div className="mx-auto grid max-w-[1440px] gap-11 px-6 py-14 sm:px-11 sm:py-20 md:grid-cols-3">
        <div>
          <Image
            src="/brand/logo-hurasi.png"
            alt="HURASI"
            width={140}
            height={140}
            className="h-auto w-24"
          />
          <p className="mt-4 text-body-s text-pearl/60">
            {tFooter("tagline")}
          </p>
          <div className="mt-6 flex gap-4">
            {["LinkedIn", "Instagram", "WhatsApp"].map((label) => (
              <span
                key={label}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center border border-pearl/20 text-[0.65rem] uppercase text-pearl/60"
              >
                {label[0]}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Plan du site" className="text-body-s text-pearl/70">
          <p className="mb-4 text-caption uppercase tracking-[0.1em] text-pearl/40">
            {tFooter("quickLinks")}
          </p>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-pearl transition-colors">{t("about")}</Link></li>
            <li><Link href="/forests" className="hover:text-pearl transition-colors">{t("forests")}</Link></li>
            <li><Link href="/products" className="hover:text-pearl transition-colors">{t("products")}</Link></li>
            <li><Link href="/sustainability" className="hover:text-pearl transition-colors">{t("sustainability")}</Link></li>
            <li><Link href="/gallery" className="hover:text-pearl transition-colors">{t("gallery")}</Link></li>
            <li><Link href="/contact" className="hover:text-pearl transition-colors">{t("contact")}</Link></li>
          </ul>
        </nav>

        <div>
          <Newsletter />
        </div>
      </div>

      <div className="border-t border-pearl/10 px-6 py-6 text-caption text-pearl/50 sm:px-11">
        © {year} HURASI. {tFooter("rights")}
      </div>
    </footer>
  );
}
