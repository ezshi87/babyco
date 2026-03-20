import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "pt-32 pb-20 px-6 bg-gradient-to-b from-background to-white text-center",
        className
      )}
    >
      <div className="container-max">
        {eyebrow && (
          <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-ink leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
