import SectionHeading from "@/components/ui/SectionHeading";
import { Globe, BadgeCheck, Handshake } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We partner with manufacturers across Europe, Asia, and beyond — giving your business access to the world's most sought-after baby brands under one roof.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guarantee",
    description:
      "Every product in our portfolio meets rigorous safety certifications and quality standards, ensuring complete confidence for you and your customers.",
  },
  {
    icon: Handshake,
    title: "Dedicated Partner Support",
    description:
      "From initial inquiry to ongoing replenishment, our experienced team provides personalised support at every step of your wholesale journey.",
  },
];

export default function WhyBabyCo() {
  return (
    <section className="section-padding bg-charcoal-dark text-white">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Baby Co."
          title="Your Trusted Wholesale Partner"
          subtitle="We go beyond distribution — we build lasting partnerships rooted in quality, reliability, and shared growth."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
