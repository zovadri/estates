"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/properties", label: "عقارات" },
  { href: "/about", label: "عن الشركة" },
  { href: "/blog", label: "المقالات" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-gold/50 flex items-center justify-center">
              <span className="text-gold text-xs font-serif">Z</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-serif tracking-[0.3em] text-light">
                ZOVADRI
              </span>
              <span className="text-[8px] tracking-[0.5em] text-gold/70 uppercase">
                Estates
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-light/70 hover:text-gold transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/properties"
              className="px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-500"
            >
              تواصل معنا
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-light/80 hover:text-gold transition-colors"
            aria-label="فتح القائمة"
          >
            <HiMenu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 left-6 text-light/80 hover:text-gold transition-colors"
              aria-label="إغلاق القائمة"
            >
              <HiX size={32} />
            </button>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl md:text-5xl font-serif text-light/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/properties"
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-4 border border-gold/40 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-500"
                >
                  تواصل معنا
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-xs tracking-[0.3em] text-light/30">
                ZOVADRI ESTATES
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
