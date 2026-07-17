"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "The Future of Luxury Real Estate: Trends to Watch in 2026",
    excerpt:
      "From AI-powered property matching to sustainable luxury, explore the trends reshaping the high-end property market.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85",
    date: "June 15, 2026",
    category: "Market Insights",
  },
  {
    title: "Behind the Design: Villa Azure's Architectural Vision",
    excerpt:
      "An exclusive look at the design philosophy and architectural innovation behind one of our flagship properties.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=800&q=85",
    date: "May 28, 2026",
    category: "Architecture",
  },
  {
    title: "Investing in Paradise: Why Santorini Property is Booming",
    excerpt:
      "Discover why the Greek islands have become one of the most sought-after luxury real estate markets globally.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
    date: "May 10, 2026",
    category: "Investment",
  },
  {
    title: "The Art of Luxury Interior Curation",
    excerpt:
      "How ZOVADRI Estates helps clients transform houses into homes with world-class interior design partnerships.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
    date: "April 22, 2026",
    category: "Design",
  },
  {
    title: "Dubai vs. Miami: Where to Invest in 2026",
    excerpt:
      "A comparative analysis of two of the world's hottest luxury real estate markets.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    date: "April 5, 2026",
    category: "Investment",
  },
  {
    title: "Sustainable Luxury: The Rise of Eco-Conscious Estates",
    excerpt:
      "How the world's most exclusive properties are embracing sustainability without compromising on luxury.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=800&q=85",
    date: "March 18, 2026",
    category: "Sustainability",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-dark min-h-screen pt-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-light leading-[1.1]">
            ZOVADRI{" "}
            <span className="gold-gradient">Journal</span>
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
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-dark/70 backdrop-blur-sm text-[9px] tracking-[0.2em] text-gold/80 uppercase">
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
    </main>
  );
}
