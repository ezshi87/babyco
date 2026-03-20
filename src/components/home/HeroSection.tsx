import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 -translate-x-1/3 translate-y-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(201,169,110,0.06)_0%,_transparent_60%)]" />
      </div>

      <div className="relative container-max px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-gold tracking-widest uppercase text-sm font-semibold mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          Premium Baby Products
        </p>

        {/* Headline */}
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-tight max-w-4xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          Bringing the World&apos;s{" "}
          <span className="text-gold">Best Baby Brands</span> to Market
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-xl text-charcoal-light max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Baby Co. is a trusted partner for importing, wholesaling, and
          designing premium baby products from the world&apos;s leading brands.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
        >
          <Button href="/brands" size="lg">
            View Our Brands
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          <span className="text-xs text-charcoal-light tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
