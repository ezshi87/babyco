import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Baby Co.",
  description:
    "Get in touch with Baby Co. for wholesale enquiries, brand partnerships, and general questions. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        subtitle="Reach out to our team for wholesale enquiries, brand partnerships, or any questions about our portfolio."
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Details — 2 columns */}
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>

            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
