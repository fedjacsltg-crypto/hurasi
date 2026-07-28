import { getTranslations } from "next-intl/server";
import { featuredProducts } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Link } from "@/lib/i18n/navigation";

export async function ProductsSection() {
  const t = await getTranslations("products");
  const [heroProduct, ...restProducts] = featuredProducts;

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-28">
      <RevealOnScroll className="mb-11 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            {t("capabilityEyebrow")}
          </p>
          <h2 className="mt-4 font-display text-heading-l md:text-display-m">
            {t("capabilityTitle")}
          </h2>
          <p className="mt-4 max-w-[52ch] text-body-m text-fg/60">
            {t("capabilityDescription")}
          </p>
        </div>
        <Link
          href="/products"
          className="hidden shrink-0 border-b border-fg/20 pb-1 text-body-m hover:border-fg transition-colors sm:block"
        >
          {t("viewAllProducts")}
        </Link>
      </RevealOnScroll>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll className="md:col-span-2 lg:col-span-2">
          <ProductCard product={heroProduct} featured />
        </RevealOnScroll>

        {restProducts.map((product, i) => (
          <RevealOnScroll key={product.id} delay={i * 0.08}>
            <ProductCard product={product} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
