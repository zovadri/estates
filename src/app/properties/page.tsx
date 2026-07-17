"use client";

import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";

const allProperties = [
  {
    id: "villa-miami", title: "فيلا أزور", location: "ميامي بيتش، فلوريدا",
    price: "12,500,000 $", beds: 6, baths: 7, area: "8,400 قدم²",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=85", featured: true,
  },
  {
    id: "penthouse-dubai", title: "بنتهاوس سكاي", location: "دبي مارينا، الإمارات",
    price: "8,900,000 $", beds: 4, baths: 5, area: "5,200 قدم²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85", featured: true,
  },
  {
    id: "estate-beverly", title: "قصر بيفرلي هيلز", location: "بيفرلي هيلز، كاليفورنيا",
    price: "22,000,000 $", beds: 8, baths: 10, area: "12,000 قدم²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85", featured: true,
  },
  {
    id: "villa-santorini", title: "منتجع سانتوريني", location: "سانتوريني، اليونان",
    price: "4,800,000 $", beds: 5, baths: 4, area: "3,600 قدم²",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85", featured: false,
  },
  {
    id: "apartment-nyc", title: "سنترال بارك سويت", location: "نيويورك، الولايات المتحدة",
    price: "6,200,000 $", beds: 3, baths: 3, area: "2,800 قدم²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85", featured: false,
  },
  {
    id: "villa-tuscany", title: "فيلا توسكانا", location: "توسكانا، إيطاليا",
    price: "3,900,000 $", beds: 5, baths: 4, area: "4,800 قدم²",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85", featured: false,
  },
  {
    id: "villa-cannes", title: "كان ريفييرا إستيت", location: "كان، فرنسا",
    price: "15,800,000 $", beds: 7, baths: 8, area: "9,200 قدم²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85", featured: true,
  },
  {
    id: "penthouse-singapore", title: "مارينا باي بنتهاوس", location: "سنغافورة",
    price: "10,200,000 $", beds: 4, baths: 5, area: "4,600 قدم²",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=85", featured: false,
  },
  {
    id: "villa-mykonos", title: "ميكونوس بلو", location: "ميكونوس، اليونان",
    price: "5,600,000 $", beds: 5, baths: 6, area: "4,200 قدم²",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85", featured: false,
  },
];

export default function PropertiesPage() {
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
            محفظتنا
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-light leading-[1.3]">
            عقارات
            <br />
            <span className="gold-gradient">حصرية</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24">
          {allProperties.map((property, i) => (
            <PropertyCard key={property.id} {...property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
