import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Fresh & Select
            </h3>
            <p className="text-sm text-cream-200/70 leading-relaxed">
              India's premier warehousing and fulfillment agency. Managing 20+ dark stores powering the Quick Commerce revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Network Map", href: "#network" },
                { label: "About Us", href: "#about" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/70 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Dark Store Management",
                "Manpower & Training",
                "Inventory Intelligence",
                "Cold Chain Integrity",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-cream-200/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-coral mt-0.5 flex-shrink-0" />
                <p className="text-sm text-cream-200/70 leading-relaxed">
                  Flat No. 001, Atharva Apartment, Plot No. 195, Road No. 13, Sector-4, Panvel, Raigarh, Maharashtra, 410206
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-coral flex-shrink-0" />
                <span className="text-sm text-cream-200/70">+91 (000) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-coral flex-shrink-0" />
                <span className="text-sm text-cream-200/70">info@freshandselect.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/50">
            © {new Date().getFullYear()} Fresh & Select Groceries Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-cream-200/50">
              CIN: XXXXXXXXXX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
