"use client";

import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";

const allProperties = [
  {
    id: "villa-miami", title: "Villa Azure", location: "Miami Beach, Florida",
    price: "$12,500,000", beds: 6, baths: 7, area: "8,400 sqft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=800&q=85", featured: true,
  },
  {
    id: "penthouse-dubai", title: "Sky Penthouse", location: "Dubai Marina, UAE",
    price: "$8,900,000", beds: 4, baths: 5, area: "5,200 sqft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85", featured: true,
  },
  {
    id: "estate-beverly", title: "Beverly Hills Estate", location: "Beverly Hills, California",
    price: "$22,000,000", beds: 8, baths: 10, area: "12,000 sqft",
    image: "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=800&q=85", featured: true,
  },
  {
    id: "villa-santorini", title: "Santorini Retreat", location: "Santorini, Greece",
    price: "$4,800,000", beds: 5, baths: 4, area: "3,600 sqft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85", featured: false,
  },
  {
    id: "apartment-nyc", title: "Central Park Suite", location: "New York City, NY",
    price: "$6,200,000", beds: 3, baths: 3, area: "2,800 sqft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85", featured: false,
  },
  {
    id: "villa-tuscany", title: "Tuscan Villa", location: "Tuscany, Italy",
    price: "$3,900,000", beds: 5, baths: 4, area: "4,800 sqft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85", featured: false,
  },
  {
    id: "villa-cannes", title: "Cannes Riviera Estate", location: "Cannes, France",
    price: "$15,800,000", beds: 7, baths: 8, area: "9,200 sqft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85", featured: true,
  },
  {
    id: "penthouse-singapore", title: "Marina Bay Penthouse", location: "Singapore",
    price: "$10,200,000", beds: 4, baths: 5, area: "4,600 sqft",
    image: "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=800&q=85", featured: false,
  },
  {
    id: "villa-mykonos", title: "Mykonos Blue", location: "Mykonos, Greece",
    price: "$5,600,000", beds: 5, baths: 6, area: "4,200 sqft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85", featured: false,
  },
];

export default function PropertiesPage() {
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
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-light leading-[1.1]">
            Exclusive
            <br />
            <span className="gold-gradient">Properties</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24">
          {allProperties.map((property, i) => (
            <PropertyCard key={property.id} {...property} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
