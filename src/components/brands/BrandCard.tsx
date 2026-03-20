import Card from "@/components/ui/Card";
import Image from "next/image";
import type { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className="flex flex-col gap-5 p-7 group">
      {/* Logo */}
      <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-background flex items-center justify-center border border-gold/10">
        <Image
          src={brand.logoSrc}
          alt={`${brand.name} logo`}
          fill
          className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl text-ink">{brand.name}</h3>
        <span className="shrink-0 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
          {brand.country}
        </span>
      </div>

      {/* Category */}
      <p className="text-xs font-semibold text-charcoal-light uppercase tracking-widest -mt-2">
        {brand.category}
      </p>

      {/* Description */}
      <p className="text-charcoal-light text-sm leading-relaxed flex-1">
        {brand.description}
      </p>

      {/* Link */}
      <p className="text-gold text-sm font-medium group-hover:underline cursor-pointer">
        Learn More →
      </p>
    </Card>
  );
}
