interface StatItemProps {
  value: string;
  label: string;
  light?: boolean;
}

export default function StatItem({ value, label, light = false }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="font-display text-5xl md:text-6xl text-gold font-bold leading-none">
        {value}
      </p>
      <p className={`mt-2 text-sm font-medium tracking-wide uppercase ${light ? "text-white/70" : "text-charcoal-light"}`}>
        {label}
      </p>
    </div>
  );
}
