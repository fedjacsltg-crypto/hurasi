import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import { QuoteForm } from "@/components/sections/QuoteForm";

/**
 * Page Contact — volontairement AUCUNE coordonnée publique (email,
 * téléphone, adresse) affichée nulle part, comme demandé. Toute
 * communication passe par les formulaires ci-dessous.
 */
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden bg-obsidian text-pearl">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-charcoal-800 to-obsidian"
        />
        <RevealOnScroll className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <h1 className="font-display text-display-m md:text-display-l">
            Let&apos;s Build Something Exceptional Together
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-body-l text-pearl/80">
            Whether you are sourcing premium African Mahogany, planning a large
            project, or looking for a long-term manufacturing partner, our team
            is ready to assist you.
          </p>
        </RevealOnScroll>
      </section>

      {/* Contact form */}
      <section className="mx-auto max-w-[900px] px-6 py-14 sm:px-11 md:py-24">
        <RevealOnScroll>
          <p className="text-caption uppercase tracking-[0.12em] text-accent">
            Get in Touch
          </p>
          <h2 className="mt-4 font-display text-heading-l md:text-display-m">
            Send Us a Message
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} className="mt-11">
          <ContactForm />
        </RevealOnScroll>
      </section>

      {/* Quote form */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-[900px] px-6 py-14 sm:px-11 md:py-24">
          <RevealOnScroll>
            <p className="text-caption uppercase tracking-[0.12em] text-accent">
              Request a Quotation
            </p>
            <h2 className="mt-4 font-display text-heading-l md:text-display-m">
              Tell Us Exactly What You Need
            </h2>
            <p className="mt-4 max-w-[60ch] text-body-m text-fg/60">
              Specify your dimensions, grade, finish, and destination — our
              automatic estimator will calculate volume, weight, and container
              fit in real time as you type.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="mt-11">
            <Suspense fallback={null}>
              <QuoteForm />
            </Suspense>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
