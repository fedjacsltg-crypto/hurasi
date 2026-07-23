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

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      aria-label={product.name}
    >
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden",
          TONE_CLASSES[product.placeholderTone],
          featured && "aspect-[8/5] md:aspect-[16/10]"
        )}
      >
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          {product.badge && (
            <span className="text-caption uppercase tracking-[0.1em] text-pearl/90">
              {product.badge === "new" ? "Nouveau" : "Édition limitée"}
            </span>
          )}
          {product.fscCertified && (
            <span className="ms-auto border border-pearl/40 px-2 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-pearl/90">
              FSC
            </span>
          )}
        </div>

        <div className="absolute inset-0 origin-center scale-100 transition-transform duration-700 [transition-timing-function:var(--ease-signature)] group-hover:scale-[1.04]" />
      </div>

      <div className="mt-4">
        <p className="text-caption uppercase tracking-[0.1em] text-fg/50">
          {product.species}
        </p>
        <h3 className="mt-1 font-display text-heading-m">{product.name}</h3>
        <p className="mt-1 text-body-s text-fg/60">
          {product.shortDescription}
        </p>
        <p className="mt-2 tabular-nums text-caption text-fg/50">
          {product.dimensions}
        </p>

        <span className="mt-3 inline-block border-b border-fg/20 pb-0.5 text-body-s group-hover:border-fg transition-colors">
          Demander un devis
        </span>
      </div>
    </Link>
  );
}