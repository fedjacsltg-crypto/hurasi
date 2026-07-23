import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { CompanySection } from "@/components/sections/CompanySection";
import { ProductsSection } from "@/components/sections/ProductsSection";

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
      <CompanySection />
      <ProductsSection />
    </>
  );
}