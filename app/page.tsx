"use client";

import { useState, useCallback } from "react";
import HeroDoorReveal from "@/components/home/HeroDoorReveal";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export default function Home() {
  const [heroAnimationDone, setHeroAnimationDone] = useState(false);

  const handleAnimationDone = useCallback(() => {
    setHeroAnimationDone(true);
  }, []);

  return (
    <SmoothScrollProvider>
      <Navbar heroAnimationDone={heroAnimationDone} />
      <HeroDoorReveal onAnimationDone={handleAnimationDone} />

      {/* Placeholder section to demonstrate navbar bg transition on scroll */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-gray-600 font-body">
              Futureline Education guides you every step of the way — from choosing
              the right course and university to visa processing and beyond.
            </p>
          </div>
        </div>
      </section>

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
