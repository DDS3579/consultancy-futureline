"use client";

import { useState, useCallback } from "react";
import HeroDoorReveal from "@/components/home/HeroDoorReveal";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Stats from "@/components/home/Stats";
import OurServices from "@/components/home/OurServices";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseFutureline from "@/components/home/WhyChooseFutureline";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleDoorsOpen = useCallback(() => {
    setDoorsOpen(true);
  }, []);

  return (
    <SmoothScrollProvider>
      <Navbar doorsOpen={doorsOpen} />
      <HeroDoorReveal onDoorsOpen={handleDoorsOpen} />
      
      {/* Stats Section overlapping the hero exit */}
      <Stats />

      {/* Our Services Section */}
      <OurServices />

      {/* Popular Destinations Section */}
      <PopularDestinations />

      {/* Why Choose Futureline Section */}
      <WhyChooseFutureline />

      {/* Get Started */}
      <CtaSection/>

      {/* Footer Section */}
      <Footer />

    </SmoothScrollProvider>
  );
}

