import { getTranslations } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export async function CompanySection() {
  const t = await getTranslations("nav");

  return (
    <section className="relative overflow-hidden py-14 md:py-28">
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[22vw] leading-none text-fg/[0.03]"
      >
        HURASI
      </p>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-11">
        <RevealOnScroll className="mx-auto max-w-[640px] md:ml-[8.33%] md:mr-auto">
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            {t("about")}
          </p>

          <h2 className="mt-5 font-display text-heading-l md:text-display-m">
            Grown with patience. Built to last generations.
          </h2>

          <p className="mt-9 text-body-l text-fg/70">
            Every board we deliver reflects decades of forestry investment,
            not a single harvest. We do not chase speed — we cultivate African
            Mahogany that meets the standards of the world&apos;s most
            demanding professionals.
          </p>

          <p className="mt-6 text-body-l text-fg/70">
            This discipline comes from a fully integrated model: our own
            FSC-certified plantations, our own FSC-certified sawmill, and
            complete traceability from seedling to shipment.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
