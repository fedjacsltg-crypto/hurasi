import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />

      {/* Section Company — placeholder éditorial (Phase 5 §2).
          À remplacer par le contenu CMS réel une fois l'adaptateur branché. */}
      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-11 sm:py-14 md:py-28">
        <RevealOnScroll className="mx-auto max-w-[640px] md:ml-[8.33%] md:mr-auto">
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            La Maison
          </p>
          <h2 className="mt-5 font-display text-heading-l">
            Contenu à venir — branché sur le CMS (Phase 7).
          </h2>
          <p className="mt-6 text-body-l text-fg/70">
            Cette section reçoit dynamiquement le manifeste de marque une fois
            l&apos;adaptateur CMS connecté. Le texte affiché ici est un
            placeholder de structure, pas du contenu final.
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
