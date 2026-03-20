import { MapPin, Phone, Mail, Clock } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Trade Centre, Suite 400\nDubai, United Arab Emirates",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 00 000 0000",
    href: "tel:+97100000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@babyco.com",
    href: "mailto:hello@babyco.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday\n9:00 AM – 6:00 PM (GST)",
  },
];

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-2">
          Get in Touch
        </p>
        <h2 className="font-display text-3xl text-ink leading-tight">
          We&apos;d Love to Hear From You
        </h2>
        <p className="mt-3 text-charcoal-light leading-relaxed">
          Whether you&apos;re interested in wholesale partnerships, brand
          representation, or general enquiries — our team is ready to help.
        </p>
      </div>

      <ul className="space-y-6">
        {details.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={18} className="text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-charcoal-light text-sm hover:text-gold transition-colors whitespace-pre-line"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-charcoal-light text-sm whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="rounded-2xl overflow-hidden border border-gold/15 aspect-[4/3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509854868!2d55.27207131537956!3d25.1971978389225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1634567890123!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Baby Co. Location — Dubai, UAE"
        />
      </div>
    </div>
  );
}
