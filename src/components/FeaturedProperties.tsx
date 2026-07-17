"use client";

import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: "villa-miami",
    title: "Villa Azure",
    location: "Miami Beach, Florida",
    price: "$12,500,000",
    beds: 6,
    baths: 7,
    area: "8,400 sqft",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=800&q=85",
    featured: true,
  },
  {
    id: "penthouse-dubai",
    title: "Sky Penthouse",
    location: "Dubai Marina, UAE",
    price: "$8,900,000",
    beds: 4,
    baths: 5,
    area: "5,200 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    featured: true,
  },
  {
    id: "estate-beverly",
    title: "Beverly Hills Estate",
    location: "Beverly Hills, California",
    price: "$22,000,000",
    beds: 8,
    baths: 10,
    area: "12,000 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=800&q=85",
    featured: true,
  },
  {
    id: "villa-santorini",
    title: "Santorini Retreat",
    location: "Santorini, Greece",
    price: "$4,800,000",
    beds: 5,
    baths: 4,
    area: "3,600 sqft",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85",
    featured: false,
  },
  {
    id: "apartment-nyc",
    title: "Central Park Suite",
    location: "New York City, NY",
    price: "$6,200,000",
    beds: 3,
    baths: 3,
    area: "2,800 sqft",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
    featured: false,
  },
  {
    id: "villa-tuscany",
    title: "Tuscan Villa",
    location: "Tuscany, Italy",
    price: "$3,900,000",
    beds: 5,
    baths: 4,
    area: "4,800 sqft",
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
              Featured Properties
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1]">
              Exclusive
              <br />
              <span className="gold-gradient">Collection</span>
            </h2>
          </div>
          <p className="text-light/40 text-sm md:text-base max-w-md leading-relaxed">
            Each property in our portfolio has been carefully selected to represent
            the pinnacle of luxury living and architectural excellence.
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
