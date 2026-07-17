import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiLocationMarker } from "react-icons/hi";
import { BiBed, BiBath, BiExpand } from "react-icons/bi";

const propertyData: Record<string, any> = {
  "villa-miami": {
    title: "Villa Azure",
    location: "Miami Beach, Florida",
    price: "$12,500,000",
    beds: 6, baths: 7, area: "8,400 sqft",
    hero: "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=1920&q=85",
    description:
      "An architectural masterpiece overlooking the Atlantic. This six-bedroom waterfront estate features floor-to-ceiling windows, a private infinity pool, and meticulously landscaped gardens spanning over an acre.",
    features: [
      "Private beach access",
      "Infinity pool with ocean views",
      "Smart home automation",
      "Wine cellar for 1,200 bottles",
      "Home theater seating 16",
      "Private dock with boat lift",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=900&q=85",
    ],
  },
  "penthouse-dubai": {
    title: "Sky Penthouse",
    location: "Dubai Marina, UAE",
    price: "$8,900,000",
    beds: 4, baths: 5, area: "5,200 sqft",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
    description:
      "Perched 80 floors above Dubai Marina, this penthouse offers panoramic views of the Arabian Gulf and city skyline. Floor-to-ceiling windows, a private terrace, and finishes by world-renowned designers.",
    features: [
      "Panoramic Gulf views",
      "Private rooftop terrace",
      "Italian marble flooring",
      "Infinity-edge jacuzzi",
      "Private elevator access",
      "24/7 butler service",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "estate-beverly": {
    title: "Beverly Hills Estate",
    location: "Beverly Hills, California",
    price: "$22,000,000",
    beds: 8, baths: 10, area: "12,000 sqft",
    hero: "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=1920&q=85",
    description:
      "A legendary Beverly Hills compound offering unparalleled privacy and luxury. Set behind private gates on two acres, this estate features a main residence, guest house, and resort-style amenities.",
    features: [
      "Private gated entrance",
      "Olympic-length pool",
      "Tennis court",
      "Spa and wellness center",
      "Movie screening room",
      "7-car garage",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
      "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "villa-santorini": {
    title: "Santorini Retreat", location: "Santorini, Greece",
    price: "$4,800,000", beds: 5, baths: 4, area: "3,600 sqft",
    hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=85",
    description:
      "A stunning Cycladic retreat carved into the caldera cliffs. Each room offers breathtaking sunset views over the Aegean Sea, with private plunge pools and traditional Cycladic architecture.",
    features: [
      "Caldera sunset views",
      "Private plunge pool",
      "Outdoor jacuzzi",
      "Traditional architecture",
      "Mediterranean garden",
      "Staff quarters",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
    ],
  },
  "apartment-nyc": {
    title: "Central Park Suite", location: "New York City, NY",
    price: "$6,200,000", beds: 3, baths: 3, area: "2,800 sqft",
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
    description:
      "A rare pre-war penthouse overlooking Central Park. Restored to perfection with modern amenities while preserving original architectural details including crown moldings and herringbone floors.",
    features: [
      "Central Park views",
      "Pre-war details restored",
      "Chef's kitchen",
      "Private terrace",
      "Wine storage",
      "Full-floor layout",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
      "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=900&q=85",
    ],
  },
  "villa-tuscany": {
    title: "Tuscan Villa", location: "Tuscany, Italy",
    price: "$3,900,000", beds: 5, baths: 4, area: "4,800 sqft",
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
    description:
      "A restored 18th-century villa surrounded by rolling vineyards and olive groves. This authentic Tuscan estate offers the perfect blend of historic charm and modern luxury.",
    features: [
      "Vineyard and olive grove",
      "Private chapel",
      "Infinity pool",
      "Stone farmhouse kitchen",
      "Original frescoes",
      "Guest cottage",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
    ],
  },
  "villa-cannes": {
    title: "Cannes Riviera Estate", location: "Cannes, France",
    price: "$15,800,000", beds: 7, baths: 8, area: "9,200 sqft",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
    description:
      "A magnificent Belle Époque estate on the French Riviera with sweeping Mediterranean views, private beach access, and formal French gardens.",
    features: [
      "Private beach access",
      "Formal French gardens",
      "Heated infinity pool",
      "Tennis court",
      "Boat mooring",
      "Staff apartment",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18b6c5b1a?w=900&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde19bc66a7?w=900&q=85",
    ],
  },
  "penthouse-singapore": {
    title: "Marina Bay Penthouse", location: "Singapore",
    price: "$10,200,000", beds: 4, baths: 5, area: "4,600 sqft",
    hero: "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=1920&q=85",
    description:
      "An ultra-modern penthouse in the heart of Singapore's Marina Bay district. Floor-to-ceiling windows frame stunning skyline views in this meticulously designed smart home.",
    features: [
      "Marina Bay skyline views",
      "Smart home system",
      "Private infinity pool",
      "Japanese garden terrace",
      "Wine room",
      "Private study",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  },
  "villa-mykonos": {
    title: "Mykonos Blue", location: "Mykonos, Greece",
    price: "$5,600,000", beds: 5, baths: 6, area: "4,200 sqft",
    hero: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
    description:
      "A stunning Cycladic villa perched on a hillside with panoramic Aegean Sea views. White-washed walls, blue domes, and endless Mediterranean horizons.",
    features: [
      "Aegean Sea panorama",
      "Infinity pool",
      "Outdoor dining terrace",
      "Private beach access",
      "Sunset bar",
      "Guest suites",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1616594039967-ae9021a400b2?w=900&q=85",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(propertyData).map((id) => ({ id }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const property = propertyData[id];

  if (!property) {
    return (
      <main className="bg-dark min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-light mb-4">Property Not Found</h1>
          <Link href="/properties" className="text-gold hover:underline">Back to Properties</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-dark min-h-screen">
      <div className="relative h-[50vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        <div className="absolute top-24 left-6 md:left-12 z-10">
          <Link
            href="/properties"
            className="flex items-center gap-2 text-light/60 hover:text-gold text-sm transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Properties
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-light mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-light/50">
                <HiLocationMarker className="text-gold/60" size={16} />
                <span>{property.location}</span>
              </div>
            </div>
            <p className="text-2xl md:text-3xl text-gold font-medium">{property.price}</p>
          </div>

          <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-white/5">
            <div className="flex items-center gap-2">
              <BiBed size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.beds} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <BiBath size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.baths} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <BiExpand size={20} className="text-gold/60" />
              <span className="text-sm text-light/60">{property.area}</span>
            </div>
          </div>

          <p className="text-light/50 leading-relaxed mb-10 max-w-3xl">
            {property.description}
          </p>

          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-6">
              Amenities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {property.features.map((f: string) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
                  <span className="text-sm text-light/40">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-sm tracking-[0.2em] uppercase text-gold/60 mb-8">
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {property.gallery.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="overflow-hidden"
              >
                <div
                  className="h-[300px] bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 mb-24 text-center"
        >
          <h3 className="text-xl md:text-2xl font-serif text-light mb-4">
            Interested in this property?
          </h3>
          <p className="text-sm text-light/40 mb-8 max-w-md mx-auto">
            Schedule a private viewing or request more information from our
            dedicated concierge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold text-dark text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-dark transition-colors duration-500">
              Schedule a Visit
            </button>
            <button className="px-8 py-4 border border-light/20 text-light/80 text-xs tracking-[0.25em] uppercase hover:bg-light/10 transition-all duration-500">
              Request Info
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
