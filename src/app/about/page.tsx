"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "25+", label: "خبير عقاري" },
  { value: "500+", label: "عميل سعيد" },
  { value: "35+", label: "سوق عالمي" },
  { value: "98%", label: "رضا العملاء" },
];

export default function AboutPage() {
  return (
    <section className="bg-dark min-h-screen">
      <div className="h-20 md:h-24" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-2 md:mb-3">
            عن الشركة
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-light leading-[1.3] max-w-3xl">
            نعيد تعريف العقارات الفاخرة{" "}
            <span className="gold-gradient">لعصر جديد</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="h-[400px] md:h-[500px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85)",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-light mb-6">
              قصتنا
            </h2>
            <p className="text-sm md:text-base text-light/40 leading-relaxed mb-6">
              تأسست ZOVADRI Estates برؤية لإحداث تحول في مشهد العقارات الفاخرة. لقد نمت لتصبح سلطة عالمية في مجال العقارات الراقية، حيث نجمع بين ذكاء السوق العميق والتزام لا يتزعزع بالخدمة الشخصية.
            </p>
            <p className="text-sm md:text-base text-light/40 leading-relaxed">
              يجلب فريقنا من المحترفين ذوي الخبرة عقوداً من الخبرة المتراكمة عبر أرقى الأسواق في العالم، من الريفييرا الفرنسية إلى دبي مارينا، ومن بيفرلي هيلز إلى سانتوريني.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-gold mb-2">{stat.value}</p>
              <p className="text-xs text-light/30 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-light mb-6">
            مستعد لتجد عقار أحلامك؟
          </h2>
          <Link
            href="/properties"
            className="inline-block px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-dark transition-all duration-500"
          >
            استعرض العقارات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
