"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 8;
      const y = (clientY / window.innerHeight - 0.5) * 8;
      const overlay = containerRef.current.querySelector(".parallax-overlay") as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="parallax-overlay absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-28 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block text-[10px] md:text-xs tracking-[0.4em] text-gold/80 uppercase mb-4 md:mb-6">
            ZOVADRI Estates
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-light leading-[1.1] max-w-4xl break-words"
        >
          حياة فاخرة
          <br />
          <span className="gold-gradient">تبدأ من هنا</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-base md:text-lg text-light/60 max-w-xl leading-relaxed"
        >
          اكتشف فيلات وشقق وتجارب عقارية حصرية صممت خصيصاً لعشاق الفخامة والأناقة العصرية.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/properties"
            className="group relative px-8 py-4 bg-gold text-dark text-xs tracking-[0.25em] uppercase font-medium overflow-hidden"
          >
            <span className="relative z-10">استعرض العقارات</span>
            <div className="absolute inset-0 bg-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-light/20 text-light/80 text-xs tracking-[0.25em] uppercase hover:bg-light/10 hover:border-light/40 transition-all duration-500"
          >
            احجز جولة خاصة
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[0.3em] text-light/30 uppercase">
          للأسفل
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiChevronDown className="text-gold/50 text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
