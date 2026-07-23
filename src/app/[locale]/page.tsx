import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { OurForestsSection } from "@/components/sections/OurForestsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { CompanySection } from "@/components/sections/CompanySection";

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
      <OurForestsSection />
      <ProductsSection />
      <StatsBar />
      <CompanySection />
    </>
  );
}
