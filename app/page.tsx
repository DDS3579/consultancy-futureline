"use client";

import { useState, useCallback } from "react";
import HeroDoorReveal from "@/components/home/HeroDoorReveal";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Stats from "@/components/home/Stats";
import OurServices from "@/components/home/OurServices";

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

      {/* Why Choose Futureline Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              Why Choose Futureline?
            </h2>
            <p className="text-lg text-gray-600 font-body">
              With a proven track record, expert counsellors, and partnerships with
              top universities worldwide, we transform aspirations into achievements.
            </p>
          </div>
        </div>
      </section>
    </SmoothScrollProvider>
  );
}

