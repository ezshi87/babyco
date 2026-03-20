import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="section-padding bg-gold text-white">
      <div className="container-max text-center">
        <p className="text-xs tracking-widest uppercase font-semibold mb-3 text-white/70">
          Ready to Partner?
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white leading-tight max-w-2xl mx-auto">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="mt-4 text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
          Whether you&apos;re an established retailer or launching a new store, Baby Co.
          has the brands, expertise, and support to help you succeed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold">
            Contact Us Today
          </Button>
          <Button href="/brands" size="lg" className="bg-white text-gold hover:bg-white/90">
            Explore Brands
          </Button>
        </div>
      </div>
    </section>
  );
}
