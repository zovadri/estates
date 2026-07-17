"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="bg-dark min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-8xl md:text-9xl font-serif gold-gradient block mb-6">
            404
          </span>
          <h1 className="text-2xl md:text-3xl font-serif text-light mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-light/40 mb-10 max-w-md mx-auto">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نساعدك في العثور على عقارك الفاخر التالي.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gold text-dark text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-dark transition-colors duration-500"
          >
            العودة للرئيسية
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
