import { setRequestLocale } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryItems } from "@/lib/gallery/items";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-charcoal-800 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p className="text-caption uppercase tracking-[0.15em] text-accent-light">
            Inspiration Library
          </p>
          <h1 className="mt-5 font-display text-display-m md:text-display-l">
            The Beauty of African Mahogany
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-body-l text-pearl/80">
            From sustainably managed Brazilian plantations to exceptional
            architectural and design projects around the world.
          </p>
        </RevealOnScroll>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 md:py-24">
        <RevealOnScroll>
          <GalleryGrid items={galleryItems} />
        </RevealOnScroll>
      </section>
    </>
  );
}
