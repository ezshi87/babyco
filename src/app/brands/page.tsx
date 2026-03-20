import PageHero from "@/components/ui/PageHero";
import BrandCard from "@/components/brands/BrandCard";
import CTABanner from "@/components/home/CTABanner";
import { brands } from "@/data/brands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands | Baby Co.",
  description:
    "Explore Baby Co.'s portfolio of 50+ premium baby brands sourced from Europe, Asia, and beyond. Quality products for every stage of childhood.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Brands We Represent"
        subtitle="A carefully curated selection of the world's most trusted baby product brands — each chosen for safety, innovation, and design excellence."
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
