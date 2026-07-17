"use client";

import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: "villa-miami",
    title: "فيلا أزور",
    location: "ميامي بيتش، فلوريدا",
    price: "12,500,000 $",
    beds: 6,
    baths: 7,
    area: "8,400 قدم²",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=85",
    featured: true,
  },
  {
    id: "penthouse-dubai",
    title: "بنتهاوس سكاي",
    location: "دبي مارينا، الإمارات",
    price: "8,900,000 $",
    beds: 4,
    baths: 5,
    area: "5,200 قدم²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    featured: true,
  },
  {
    id: "estate-beverly",
    title: "قصر بيفرلي هيلز",
    location: "بيفرلي هيلز، كاليفورنيا",
    price: "22,000,000 $",
    beds: 8,
    baths: 10,
    area: "12,000 قدم²",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85",
    featured: true,
  },
  {
    id: "villa-santorini",
    title: "منتجع سانتوريني",
    location: "سانتوريني، اليونان",
    price: "4,800,000 $",
    beds: 5,
    baths: 4,
    area: "3,600 قدم²",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
    featured: false,
  },
  {
    id: "apartment-nyc",
    title: "سنترال بارك سويت",
    location: "نيويورك، الولايات المتحدة",
    price: "6,200,000 $",
    beds: 3,
    baths: 3,
    area: "2,800 قدم²",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
    featured: false,
  },
  {
    id: "villa-tuscany",
    title: "فيلا توسكانا",
    location: "توسكانا، إيطاليا",
    price: "3,900,000 $",
    beds: 5,
    baths: 4,
    area: "4,800 قدم²",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85",
    featured: false,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
              عقارات مميزة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1]">
              مجموعة
              <br />
              <span className="gold-gradient">حصرية</span>
            </h2>
          </div>
          <p className="text-light/40 text-sm md:text-base max-w-md leading-relaxed">
            كل عقار في مجموعتنا تم اختياره بعناية ليمثل قمة الفخامة والتميز المعماري.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} {...property} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
