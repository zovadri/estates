"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alexander V.",
    title: "CEO, Horizon Capital",
    quote:
      "ZOVADRI Estates transformed our vision into reality. The attention to detail and level of service exceeded every expectation. Truly a world-class experience.",
    rating: 5,
  },
  {
    name: "Sarah Al Maktoum",
    title: "Private Investor",
    quote:
      "From Dubai to Geneva, ZOVADRI found properties we never knew existed. Their global network is unmatched in the luxury real estate sector.",
    rating: 5,
  },
  {
    name: "Jonathan Chen",
    title: "Founder, Quantum Ventures",
    quote:
      "The portfolio curation was exceptional. Every recommendation aligned perfectly with our investment strategy and lifestyle preferences.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.02),transparent_60%)]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1]">
            Voices of{" "}
            <span className="gold-gradient">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass p-8 md:p-10 relative group hover:border-gold/20 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 text-6xl font-serif text-gold/10 select-none">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="text-sm md:text-base text-light/60 leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/5 pt-4">
                <p className="text-sm font-serif text-light">{t.name}</p>
                <p className="text-xs text-light/30 mt-1">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
