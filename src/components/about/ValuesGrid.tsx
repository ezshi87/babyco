import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import {
  Scale,
  BadgeCheck,
  Users,
  Lightbulb,
  Heart,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every relationship — with brands, partners, and customers alike.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "Every product we carry meets strict safety and quality benchmarks. We never compromise on the standards that protect children.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We view every client as a long-term partner. Your growth is our growth, and we invest in your success for the long run.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek out innovative brands and forward-thinking designs that set the standard in the baby product industry.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Behind every product is a family. We approach our work with genuine care for the parents and children who use what we bring to market.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We prioritise brands committed to sustainable manufacturing, ethical sourcing, and environmental responsibility.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Values"
          subtitle="The principles that guide how we source, partner, and grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="flex flex-col gap-4 p-7">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-ink">{value.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
