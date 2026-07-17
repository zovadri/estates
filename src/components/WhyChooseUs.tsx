"use client";

import { motion } from "framer-motion";
import { HiShieldCheck, HiGlobe, HiSparkles, HiSupport, HiTrendingUp, HiHome } from "react-icons/hi";

const features = [
  {
    icon: HiShieldCheck,
    title: "ثقة ممتازة",
    desc: "أكثر من عقدين من الخبرة في تقديم حلول عقارية لا تُضاهى بالنزاهة والشفافية.",
  },
  {
    icon: HiGlobe,
    title: "محفظة عالمية",
    desc: "شبكة حصرية من أفخم العقارات في أرقى الأسواق العالمية.",
  },
  {
    icon: HiSparkles,
    title: "خدمة كونسيرج",
    desc: "خدمة راقية من الاستشارة الأولى حتى الإغلاق النهائي وما بعده.",
  },
  {
    icon: HiSupport,
    title: "دعم على مدار الساعة",
    desc: "مستشارك الشخصي متاح 24/7 لأي طلب أو استفسار.",
  },
  {
    icon: HiTrendingUp,
    title: "ذكاء السوق",
    desc: "تحليلات مدعومة بالبيانات وتنبؤات دقيقة لقرارات استثمارية واعية.",
  },
  {
    icon: HiHome,
    title: "تنظيم المحفظة",
    desc: "محافظ عقارية مخصصة تناسب تطلعات نمط حياتك وأهدافك الاستثمارية.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.02),transparent_60%)]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            لماذا تختارنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1]">
            فرق ZOVADRI{" "}
            <span className="gold-gradient">المميز</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group p-8 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <feature.icon className="text-gold/80 text-3xl mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-lg font-serif text-light mb-3">{feature.title}</h3>
              <p className="text-sm text-light/40 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
