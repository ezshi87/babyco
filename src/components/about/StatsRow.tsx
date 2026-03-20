import StatItem from "@/components/ui/StatItem";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "50+", label: "Premium Brands" },
  { value: "30+", label: "Countries Served" },
  { value: "10k+", label: "Products Carried" },
];

export default function StatsRow() {
  return (
    <section className="py-16 px-6 border-y border-gold/15 bg-white">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
