import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils/cn";
import type { Product } from "@/types/product";

const TONE_CLASSES: Record<Product["placeholderTone"], string> = {
  obsidian: "bg-gradient-to-br from-obsidian to-charcoal-800",
  charcoal: "bg-gradient-to-br from-charcoal-700 to-charcoal-800",
  champagne: "bg-gradient-to-br from-accent-light/30 to-accent/20",
};

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

/**
 * Fiche épurée à la demande du client : sous la photo, seule
 * l'essence ("African Mahogany (Khaya)") et l'appel à l'action
 * "Request a Quote" apparaissent — plus de nom de référence, de
 * dimensions ni de description marketing (Phase révisée, retour client).
 */
export function ProductCard({ product, featured = false }: ProductCardProps) {
  const t = useTranslations("products");
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      aria-label={product.species}
    >
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden",
          !product.image && TONE_CLASSES[product.placeholderTone],
          featured && "aspect-[8/5] md:aspect-[16/10]"
        )}
      >
        {product.image && (
          <Image
            src={product.image}
            alt={product.species}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-signature)] group-hover:scale-[1.04]"
          />
        )}

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
          {product.badge && (
            <span className="text-caption uppercase tracking-[0.1em] text-pearl/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
              {product.badge === "new" ? t("badgeNew") : t("badgeLimited")}
            </span>
          )}
          {product.fscCertified && (
            <span className="ms-auto border border-pearl/50 bg-obsidian/30 px-2 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-pearl backdrop-blur-sm">
              FSC
            </span>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-body-s text-fg/70">{product.species}</p>
        <span className="mt-2 inline-block border-b border-fg/20 pb-0.5 text-body-s group-hover:border-fg transition-colors">
          {t("requestQuote")}
        </span>
      </div>
    </Link>
  );
}
