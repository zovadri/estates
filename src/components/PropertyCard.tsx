"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { BiBed, BiBath, BiExpand } from "react-icons/bi";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  index: number;
  featured?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  beds,
  baths,
  area,
  image,
  index,
  featured = false,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <Link href={`/properties/${id}`} className="block">
        <div className="relative overflow-hidden">
          <div
            className="w-full h-[400px] md:h-[480px] bg-cover bg-center transition-all duration-[800ms] group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {featured && (
            <div className="absolute top-4 right-4 px-4 py-2 bg-gold text-dark text-[10px] tracking-[0.2em] uppercase font-medium">
              مميز
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-serif text-light mb-2">{title}</h3>
            <div className="flex items-center gap-1.5 text-light/50 text-sm mb-4">
              <HiLocationMarker className="text-gold/60" size={14} />
              <span>{location}</span>
            </div>
            <p className="text-gold text-lg font-medium mb-4">{price}</p>
            <div className="flex items-center gap-6 text-light/60 text-xs tracking-wide">
              <div className="flex items-center gap-1.5">
                <BiBed size={16} className="text-gold/60" />
                <span>{beds} غرف</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BiBath size={16} className="text-gold/60" />
                <span>{baths} حمامات</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BiExpand size={16} className="text-gold/60" />
                <span>{area}</span>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            <div className="w-10 h-10 glass-dark flex items-center justify-center">
              <span className="text-gold text-lg font-serif">←</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
