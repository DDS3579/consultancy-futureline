'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesCta() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 lg:py-[140px] overflow-hidden">
      {/* Subtle background gold radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] 
        rounded-full bg-[#d3a044]/6 blur-[70px] sm:blur-[110px] md:blur-[140px] 
        pointer-events-none -z-10" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d3a044]/10 text-[#124a6d] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d3a044]" />
            Begin Your Journey
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl font-semibold italic text-[#124a6d] sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Ready to Begin Your <br className="hidden sm:inline" />
            <span className="not-italic text-[#d3a044]">Global Journey?</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 font-body text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl max-w-[620px] mx-auto">
            Your aspirations deserve the finest guidance. Schedule a private consultation with our senior advisors today, and let us design your pathway to the world’s leading institutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="
                group inline-flex items-center justify-center 
                rounded-full bg-[#d3a044] text-[#124a6d] 
                px-8 py-4 text-base font-semibold 
                shadow-md shadow-[#d3a044]/15 
                hover:bg-[#b88b3a] hover:shadow-lg hover:shadow-[#d3a044]/25 
                hover:scale-[1.02] active:scale-[0.98] 
                transition-all duration-300 w-full sm:w-auto
                outline-none focus-visible:ring-2 focus-visible:ring-[#124a6d]/50
              "
            >
              <span>Book A Free Consultation</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="
                inline-flex items-center justify-center 
                rounded-full border border-[#124a6d]/15 bg-transparent text-[#124a6d] 
                px-8 py-4 text-base font-semibold 
                hover:bg-[#124a6d]/5 hover:border-[#124a6d]/30
                active:scale-[0.98] 
                transition-all duration-300 w-full sm:w-auto
                outline-none focus-visible:ring-2 focus-visible:ring-[#124a6d]/50
              "
            >
              <span>Learn About Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
