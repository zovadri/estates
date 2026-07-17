"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const FeaturedProperties = dynamic(() => import("@/components/FeaturedProperties"), { ssr: true });
const PropertySearch = dynamic(() => import("@/components/PropertySearch"), { ssr: true });
const LuxuryLifestyle = dynamic(() => import("@/components/LuxuryLifestyle"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const LatestProjects = dynamic(() => import("@/components/LatestProjects"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <PropertySearch />
      <LuxuryLifestyle />
      <WhyChooseUs />
      <Testimonials />
      <LatestProjects />
    </>
  );
}
