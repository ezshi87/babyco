import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white/70">
      <div className="container-max px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <p className="font-display text-2xl text-white mb-3">
              Baby<span className="text-gold">Co.</span>
            </p>
            <p className="text-sm leading-relaxed">
              Bringing the world's finest baby brands to market. Your trusted
              partner in premium baby product import, wholesale, and design.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>123 Trade Centre, Suite 400<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+97100000000" className="hover:text-gold transition-colors">
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:hello@babyco.com" className="hover:text-gold transition-colors">
                  hello@babyco.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {year} Baby Co. All rights reserved.</p>
          <p>Premium Baby Product Import &amp; Wholesale</p>
        </div>
      </div>
    </footer>
  );
}
