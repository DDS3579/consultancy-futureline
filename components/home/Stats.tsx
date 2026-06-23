"use client";

import { motion } from "framer-motion";
import { Users, Globe, GraduationCap, Percent } from "lucide-react";

interface StatItem {
  number: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS_DATA: StatItem[] = [
  {
    number: "5000+",
    label: "Students Placed",
    description: "Guided to their dream international universities",
    icon: Users,
  },
  {
    number: "25+",
    label: "Countries",
    description: "Global destinations for higher education",
    icon: Globe,
  },
  {
    number: "500+",
    label: "Partner Universities",
    description: "Direct partnerships with top-tier institutions",
    icon: GraduationCap,
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Visa approval and academic placement rate",
    icon: Percent,
  },
];

export default function Stats() {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 md:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_-20px_rgba(18,74,109,0.15)] p-6 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9],
                }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center p-4 group transition-all duration-300 relative"
              >
                {/* Icon Container */}
                <div className="mb-6 p-4 rounded-2xl bg-[#d3a044]/5 text-[#d3a044] group-hover:bg-[#d3a044]/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Stat Number */}
                <h3 className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#d3a044] via-[#e8c878] to-[#b88b3a] bg-clip-text text-transparent mb-2 tracking-tight">
                  {stat.number}
                </h3>

                {/* Stat Label */}
                <span className="font-body text-base sm:text-lg font-semibold text-[#124a6d] mb-1">
                  {stat.label}
                </span>

                {/* Stat Description */}
                <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
