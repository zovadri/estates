"use client";

import Link from "next/link";
import { HiArrowUp } from "react-icons/hi";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

const footerLinks = {
  Properties: [
    { href: "/properties", label: "All Properties" },
    { href: "/properties/villa-miami", label: "Villa Azure" },
    { href: "/properties/penthouse-dubai", label: "Sky Penthouse" },
    { href: "/properties/estate-beverly", label: "Beverly Hills Estate" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Careers" },
  ],
  Support: [
    { href: "/about", label: "Contact" },
    { href: "/about", label: "Privacy Policy" },
    { href: "/about", label: "Terms of Service" },
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-dark border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <span className="text-gold text-lg font-serif">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-serif tracking-[0.3em] text-light">
                  ZOVADRI
                </span>
                <span className="text-[8px] tracking-[0.5em] text-gold/60 uppercase">
                  Estates
                </span>
              </div>
            </Link>
            <p className="text-xs text-light/30 leading-relaxed max-w-xs">
              Redefining luxury real estate with unparalleled service and the
              world's most exclusive properties.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-light/30 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex items-center gap-6">
            {[
              { icon: FiInstagram, href: "#" },
              { icon: FiLinkedin, href: "#" },
              { icon: FiTwitter, href: "#" },
              { icon: FiYoutube, href: "#" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="text-light/20 hover:text-gold transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-[10px] tracking-[0.2em] text-light/20 uppercase text-center md:text-right">
            Designed &amp; Developed by ZOVADRI
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-light/30 hover:text-gold hover:border-gold/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <HiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
