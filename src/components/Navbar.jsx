import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "../assets/f&s logo new.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Network Map", href: "#network" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-0" : "top-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-forest/10 shadow-sm rounded-none"
            : "bg-white/90 backdrop-blur-md border border-forest/10 shadow-lg rounded-2xl"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Fresh & Select"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest/70 hover:text-forest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-coral/25 hover:bg-coral-500 transition-all duration-200 hover:shadow-coral/40"
        >
          Partner With Us
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-forest"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="bg-white/95 border border-forest/10 rounded-2xl px-6 pb-6 pt-2 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium border-b border-cream-300 text-forest/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block w-full text-center rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
