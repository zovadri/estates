"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "مستقبل العقارات الفاخرة: أبرز الاتجاهات في 2026",
    excerpt:
      "من التطابق العقاري بالذكاء الاصطناعي إلى الفخامة المستدامة، اكتشف الاتجاهات التي تعيد تشكيل سوق العقارات الراقية.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85",
    date: "15 يونيو 2026",
    category: "رؤى السوق",
  },
  {
    title: "ما وراء التصميم: الرؤية المعمارية لفيلا أزور",
    excerpt:
      "نظرة حصرية على فلسفة التصميم والابتكار المعماري وراء أحد أبرز عقاراتنا.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=800&q=85",
    date: "28 مايو 2026",
    category: "هندسة معمارية",
  },
  {
    title: "الاستثمار في الجنة: لماذا تشهد سانتوريني ازدهاراً عقارياً",
    excerpt:
      "اكتشف لماذا أصبحت الجزر اليونانية واحدة من أكثر أسواق العقارات الفاخرة طلباً عالمياً.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
    date: "10 مايو 2026",
    category: "استثمار",
  },
  {
    title: "فن تنسيق التصميم الداخلي الفاخر",
    excerpt:
      "كيف تساعد ZOVADRI Estates العملاء في تحويل المنازل إلى تحف فنية من خلال شراكات التصميم العالمية.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
    date: "22 أبريل 2026",
    category: "تصميم",
  },
  {
    title: "دبي ضد ميامي: أين تستثمر في 2026؟",
    excerpt:
      "تحليل مقارن لاثنين من أكثر أسواق العقارات الفاخرة سخونة في العالم.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    date: "5 أبريل 2026",
    category: "استثمار",
  },
  {
    title: "الفخامة المستدامة: صعود العقارات الصديقة للبيئة",
    excerpt:
      "كيف تتبنى أفخم عقارات العالم الاستدامة دون المساس بالفخامة.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=800&q=85",
    date: "18 مارس 2026",
    category: "استدامة",
  },
];

export default function BlogPage() {
  return (
      <section className="bg-dark min-h-screen">
        <div className="h-20 md:h-24" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-2 md:mb-3">
              رؤى وأفكار
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-light leading-[1.3]">
              مدونة{" "}
              <span className="gold-gradient">ZOVADRI</span>
            </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-5">
                <div
                  className="h-[280px] bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-dark/70 backdrop-blur-sm text-[9px] tracking-[0.2em] text-gold/80 uppercase">
                  {post.category}
                </div>
              </div>
              <p className="text-[10px] text-light/20 tracking-wider uppercase mb-2">{post.date}</p>
              <h2 className="text-lg font-serif text-light mb-3 group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-xs text-light/30 leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
