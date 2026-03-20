import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl leading-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-charcoal-light"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
