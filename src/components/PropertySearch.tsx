"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiSearch } from "react-icons/hi";

const cities = ["All Cities", "Miami", "Dubai", "New York", "Los Angeles", "Santorini", "Tuscany", "Paris"];
const propertyTypes = ["All Types", "Villa", "Penthouse", "Apartment", "Estate", "Retreat"];
const bedCounts = ["Any", "1", "2", "3", "4", "5+"];

export default function PropertySearch() {
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [beds, setBeds] = useState("Any");
  const [priceRange, setPriceRange] = useState(25);

  return (
    <section className="section-padding bg-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.03),transparent_70%)]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            Find Your Dream Home
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-light">
            Advanced Property Search
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass p-6 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="text-[10px] tracking-[0.2em] text-light/40 uppercase block mb-3">
                City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-light/80 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                {cities.map((c) => <option key={c} value={c} className="bg-dark">{c}</option>)}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-[0.2em] text-light/40 uppercase block mb-3">
                Property Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-light/80 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                {propertyTypes.map((t) => <option key={t} value={t} className="bg-dark">{t}</option>)}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-[0.2em] text-light/40 uppercase block mb-3">
                Bedrooms
              </label>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-light/80 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                {bedCounts.map((b) => <option key={b} value={b} className="bg-dark">{b}</option>)}
              </select>
            </div>

            <div>
              <label className="text-[10px] tracking-[0.2em] text-light/40 uppercase block mb-3">
                Max Price: ${priceRange}M
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-light/20 mt-1">
                <span>$1M</span>
                <span>$50M</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="group relative px-10 py-4 bg-gold text-dark text-xs tracking-[0.25em] uppercase font-medium overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <HiSearch size={16} />
                Search Properties
              </span>
              <div className="absolute inset-0 bg-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
