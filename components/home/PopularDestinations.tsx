"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, Award, Compass, Heart } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  keyStats: {
    universities: string;
    workRights: string;
    popularIntake: string;
  };
  link: string;
}

const DESTINATIONS_DATA: Destination[] = [
  {
    id: "australia",
    name: "Australia",
    tagline: "The land of diverse careers & high quality of life",
    image: "https://images.unsplash.com/photo-1523482596112-990520c89c1f?q=80&w=800&auto=format&fit=crop",
    badge: "Top Choice",
    badgeIcon: Star,
    keyStats: {
      universities: "40+ World-Class Unis",
      workRights: "2 - 4 Years PSW",
      popularIntake: "Feb / July Intake",
    },
    link: "/destinations/australia",
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    tagline: "World-renowned academic heritage & short courses",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    badge: "Fast Track",
    badgeIcon: Award,
    keyStats: {
      universities: "150+ Universities",
      workRights: "2 Years Graduate Route",
      popularIntake: "Sept / Jan Intake",
    },
    link: "/destinations/uk",
  },
  {
    id: "united-states",
    name: "United States",
    tagline: "The global hub of research, tech & ivy leagues",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    badge: "Research Hub",
    badgeIcon: Compass,
    keyStats: {
      universities: "4000+ Colleges",
      workRights: "1 - 3 Years OPT",
      popularIntake: "Aug / Jan Intake",
    },
    link: "/destinations/usa",
  },
  {
    id: "canada",
    name: "Canada",
    tagline: "Welcoming culture, post-grad work, & PR pathways",
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=800&auto=format&fit=crop",
    badge: "PR Friendly",
    badgeIcon: Heart,
    keyStats: {
      universities: "100+ Universities",
      workRights: "Up to 3 Years PGWP",
      popularIntake: "Sept / Jan / May",
    },
    link: "/destinations/canada",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="popular-destinations">
      {/* Decorative Blur Overlays */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#124a6d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d3a044]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-body font-bold uppercase tracking-[0.2em] text-[#d3a044] mb-3 block"
          >
            Where to Next?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 mb-4 font-semibold italic"
          >
            Popular Study Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Explore prime global study hubs carefully chosen for academic excellence, promising careers, and rich student life.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS_DATA.map((dest, index) => {
            const BadgeIcon = dest.badgeIcon;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.21, 0.45, 0.32, 0.9],
                }}
                className="relative overflow-hidden rounded-3xl h-[450px] group cursor-pointer shadow-[0_15px_35px_-20px_rgba(18,74,109,0.15)] hover:shadow-[0_25px_50px_-20px_rgba(18,74,109,0.3)] transition-all duration-500 flex flex-col justify-end"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Layered Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#124a6d]/95 via-[#124a6d]/40 to-black/20 group-hover:from-[#124a6d] transition-all duration-300" />
                </div>

                {/* Floating Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-body font-semibold text-[#124a6d] shadow-sm">
                    <BadgeIcon className="w-3.5 h-3.5 text-[#d3a044]" />
                    {dest.badge}
                  </span>
                </div>

                {/* Card Content Box */}
                <div className="p-6 relative z-10 w-full text-white flex flex-col transition-all duration-300">
                  {/* Country Name */}
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold mb-1 italic tracking-wide group-hover:text-[#d3a044] transition-colors duration-200">
                    {dest.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-white/80 font-body mb-5 leading-normal font-light">
                    {dest.tagline}
                  </p>

                  {/* Horizontal Divider */}
                  <div className="w-full h-[1px] bg-white/20 mb-5 group-hover:bg-white/40 transition-colors duration-300" />

                  {/* Stats list */}
                  <div className="space-y-2 mb-6 text-xs sm:text-sm font-body text-white/90 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Institutions</span>
                      <span className="font-medium">{dest.keyStats.universities}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Work Rights</span>
                      <span className="font-medium">{dest.keyStats.workRights}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Popular Intake</span>
                      <span className="font-medium text-[#e8c878]">{dest.keyStats.popularIntake}</span>
                    </div>
                  </div>

                  {/* Hover action banner */}
                  <div className="overflow-hidden flex items-center justify-between mt-2 pt-2 border-t border-white/10 group-hover:border-white/25 transition-colors duration-300">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors duration-200">
                      Explore Destination
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#d3a044] text-white flex items-center justify-center transform -translate-x-2 group-hover:translate-x-0 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
