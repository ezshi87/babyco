import SectionHeading from "@/components/ui/SectionHeading";

export default function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-background to-gold/10 border border-gold/15 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-3xl text-gold">B</span>
              </div>
              <p className="text-charcoal-light text-sm">Company Image</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Born From a Passion for Baby Products"
              align="left"
            />
            <div className="space-y-5 text-charcoal-light leading-relaxed">
              <p>
                Founded over 15 years ago, Baby Co. began with a simple mission:
                to connect the world&apos;s finest baby product brands with retailers
                and wholesalers who share our commitment to quality and safety.
              </p>
              <p>
                What started as a small importing operation has grown into a
                comprehensive wholesale and brand representation company. Today,
                we work with over 50 premium brands from Europe, Asia, and
                beyond — bringing their products to markets across more than 30
                countries.
              </p>
              <p>
                Our team of dedicated professionals brings deep industry
                knowledge, established relationships, and an unwavering focus on
                quality to every partnership we form. We don&apos;t just distribute
                products — we help brands grow and businesses thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
