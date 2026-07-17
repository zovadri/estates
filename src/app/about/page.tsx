"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Properties Sold" },
  { value: "35+", label: "Global Markets" },
  { value: "98%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Ziad O. V.",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
  },
  {
    name: "Sarah Al-Rashid",
    role: "Head of Luxury Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85",
  },
  {
    name: "Marcus Chen",
    role: "Global Portfolio Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
  },
  {
    name: "Elena Voss",
    role: "Head of Concierge",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-dark min-h-screen pt-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/60 uppercase block mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-light leading-[1.1] max-w-4xl">
            Redefining Luxury Real Estate for a{" "}
            <span className="gold-gradient">New Era</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="h-[400px] md:h-[500px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85)",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-light mb-6">
              Our Story
            </h2>
            <p className="text-sm md:text-base text-light/40 leading-relaxed mb-6">
              Founded with a vision to transform the luxury real estate landscape,
              ZOVADRI Estates has grown into a global authority in premium
              properties. We combine deep market intelligence with an unwavering
              commitment to personalized service.
            </p>
            <p className="text-sm md:text-base text-light/40 leading-relaxed">
              Our team of seasoned professionals brings decades of combined
              experience across the world&apos;s most exclusive markets, from the
              French Riviera to Dubai Marina, from Beverly Hills to Santorini.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-gold mb-2">{stat.value}</p>
              <p className="text-xs text-light/30 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-light mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                <div
                  className="w-full aspect-[3/4] bg-cover bg-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <h3 className="text-sm font-serif text-light">{member.name}</h3>
                <p className="text-xs text-light/30 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-light mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <Link
            href="/properties"
            className="inline-block px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Explore Properties
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
