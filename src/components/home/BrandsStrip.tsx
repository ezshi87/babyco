import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function BrandsStrip() {
  return (
    <section className="section-padding border-t border-gold/10 bg-white">
      <div className="container-max">
        <SectionHeading
          eyebrow="Our Partners"
          title="Trusted Brands We Carry"
          subtitle="We partner with the world's most respected baby product manufacturers to bring quality and innovation to your market."
        />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center mt-10">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={brand.logoSrc}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
