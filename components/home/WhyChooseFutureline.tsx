"use client";

import { motion } from "framer-motion";
import {
  User,
  Building2,
  FileCheck,
  Star,
  MapPin,
} from "lucide-react";

const REASONS = [
  {
    id: "01",
    icon: User,
    title: "Expert Counselors",
    description:
      "Our team brings deep knowledge of international admissions, ensuring every student gets advice grounded in real experience — not guesswork.",
    stat: "10+",
    statLabel: "Yrs Experience",
    wide: false,
  },
  {
    id: "02",
    icon: Building2,
    title: "Global University Partnerships",
    description:
      "Established agreements with top-ranked institutions across the UK, Australia, Canada, USA, and beyond — giving students a genuine edge in admissions.",
    stat: "500+",
    statLabel: "Universities",
    wide: false,
  },
];

const REASONS_WIDE = [
  {
    id: "03",
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "End-to-end documentation support, mock visa interviews, and real-time tracking so your application never stalls.",
    badge: "99% visa success rate",
  },
  {
    id: "04",
    icon: Star,
    title: "Scholarships & Funding",
    description:
      "We identify scholarships you qualify for and guide you through financial planning so cost never becomes a barrier to your future.",
    badge: null,
  },
  {
    id: "05",
    icon: MapPin,
    title: "Post-Arrival Support",
    description:
      "Airport coordination, accommodation, local SIM & banking help, and an active alumni network — support that doesn't stop at the visa stamp.",
    badge: null,
  },
];

function ReasonCard({
  id,
  icon: Icon,
  title,
  description,
  stat,
  statLabel,
  index,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="relative overflow-hidden rounded-[20px] border border-gray-200 p-8 bg-white group hover:border-[#d3a044] hover:shadow-[0_20px_40px_-16px_rgba(18,74,109,0.18)] transition-all duration-350 cursor-default"
    >
      {/* Decorative numeral */}
      <span
        aria-hidden="true"
        className="absolute top-3 right-5 font-display font-semibold italic text-[72px] leading-none select-none text-[#d3a044]/[0.12] group-hover:text-[#d3a044]/25 transition-colors duration-350 pointer-events-none"
      >
        {id}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#124a6d]/[0.07] flex items-center justify-center mb-5 group-hover:bg-[#124a6d] transition-colors duration-350">
        <Icon className="w-5 h-5 text-[#124a6d] group-hover:text-white transition-colors duration-350" />
      </div>

      {/* Gold line */}
      <div className="h-[2px] bg-gradient-to-r from-[#d3a044] to-[#d3a044]/0 rounded-full mb-5 w-9 group-hover:w-14 transition-all duration-400" />

      <h3 className="font-display font-semibold text-gray-900 text-[18px] mb-2">{title}</h3>
      <p className="font-body text-gray-500 text-[13.5px] leading-[1.7] mb-5">{description}</p>

      <div className="flex items-baseline gap-1.5">
        <span className="font-display font-semibold italic text-[28px] text-[#124a6d] leading-none">
          {stat}
        </span>
        <span className="font-body text-[11px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
          {statLabel}
        </span>
      </div>
    </motion.div>
  );
}

function WideReasonItem({
  id,
  icon: Icon,
  title,
  description,
  badge,
  index,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge: string | null;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.28 + index * 0.11, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group"
    >
      <div className="w-11 h-11 rounded-xl bg-[#124a6d]/[0.07] flex items-center justify-center mb-5 group-hover:bg-[#124a6d] transition-colors duration-350">
        <Icon className="w-5 h-5 text-[#124a6d] group-hover:text-white transition-colors duration-350" />
      </div>
      <div className="h-[2px] bg-gradient-to-r from-[#d3a044] to-[#d3a044]/0 rounded-full mb-5 w-9 group-hover:w-14 transition-all duration-400" />

      <span
        aria-hidden="true"
        className="block font-body text-[11px] font-bold tracking-[0.18em] uppercase text-[#d3a044] mb-1"
      >
        {id}
      </span>
      <h3 className="font-display font-semibold text-gray-900 text-[17px] mb-2">{title}</h3>
      <p className="font-body text-gray-500 text-[13.5px] leading-[1.7] mb-4">{description}</p>

      {badge && (
        <span className="inline-flex items-center gap-1.5 text-[11.5px] font-body font-semibold text-[#124a6d] bg-[#124a6d]/[0.07] px-3 py-1.5 rounded-full">
          <svg
            className="w-3 h-3 text-[#124a6d] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {badge}
        </span>
      )}
    </motion.div>
  );
}

export default function WhyChooseFutureline() {
  return (
    <section
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
      id="why-choose-futureline"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-80 h-80 bg-[#124a6d]/[0.05] rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d3a044]/[0.06] rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block text-xs sm:text-sm font-body font-bold uppercase tracking-[0.2em] text-[#d3a044] mb-3"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold italic text-gray-900 mb-4"
          >
            Why Families Trust
            <br />
            Futureline Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg font-body text-gray-500 leading-relaxed"
          >
            From your first counselling session to landing at your destination
            university — we're with you every step of the way.
          </motion.p>
        </div>

        {/* Top 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {REASONS.map((r, i) => (
            <ReasonCard key={r.id} {...r} index={i} />
          ))}
        </div>

        {/* Wide card — 03/04/05 */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="rounded-[20px] border border-gray-200 bg-white px-8 py-10 hover:border-[#d3a044]/40 hover:shadow-[0_20px_40px_-16px_rgba(18,74,109,0.12)] transition-all duration-350"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:divide-x md:divide-gray-100">
            {REASONS_WIDE.map((r, i) => (
              <div
                key={r.id}
                className={i > 0 ? "md:pl-10" : ""}
              >
                <WideReasonItem {...r} index={i} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}