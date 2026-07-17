"use client";

import { motion } from "framer-motion";

const lifestyleItems = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    title: "أناقة التصميم الداخلي",
    subtitle: "مساحات صممها أشهر المصممين العالميين",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
    title: "حياة بلا حدود",
    subtitle: "حيث يلتقي المعمار مع الأفق",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=900&q=85",
    title: "الرفاهية الخاصة",
    subtitle: "ملاذات صممت للجسد والروح",
  },
];

export default function LuxuryLifestyle() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="section-padding max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            نمط الحياة الفاخر
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1] max-w-3xl">
            أبعد من العقار —{" "}
            <span className="gold-gradient">أسلوب حياة</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {lifestyleItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif text-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-light/50">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
