"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "The Palm Estate",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    year: "2025",
  },
  {
    title: "Bel Air Residence",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=800&q=85",
    year: "2025",
  },
  {
    title: "Lake Como Villa",
    location: "Lombardy, Italy",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
    year: "2024",
  },
  {
    title: "Marina Bay Penthouse",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=800&q=85",
    year: "2024",
  },
];

export default function LatestProjects() {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
        >
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
              Latest Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light leading-[1.1]">
              Our Recent{" "}
              <span className="gold-gradient">Developments</span>
            </h2>
          </div>
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-light/40 hover:text-gold transition-colors duration-300"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[350px] md:h-[400px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base md:text-lg font-serif text-light">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-gold/60">{project.year}</span>
                </div>
                <p className="text-xs text-light/40">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
