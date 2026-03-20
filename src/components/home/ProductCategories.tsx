import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { categories } from "@/data/categories";
import {
  Armchair,
  UtensilsCrossed,
  Navigation,
  ShieldCheck,
  Shirt,
  Star,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Armchair,
  UtensilsCrossed,
  Navigation,
  ShieldCheck,
  Shirt,
  Star,
};

export default function ProductCategories() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <SectionHeading
          eyebrow="What We Offer"
          title="Product Categories"
          subtitle="A carefully curated range of baby product categories sourced from premier global manufacturers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] ?? Star;
            return (
              <Card key={category.id} className="flex flex-col gap-4 p-7">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-ink">
                  {category.name}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed flex-1">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
