'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export function ValueCard({ icon: Icon, title, body }: ValueCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-colors md:p-10"
    >
      {/* Hover Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffbf0] to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 shadow-2xl opacity-0 shadow-[#d3a044]/10 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Corner Accent */}
      <div className="absolute right-6 top-6 h-8 w-8 rounded-full border border-[#d3a044]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="relative mb-6 inline-block">
          <div className="absolute inset-0 rounded-2xl bg-[#d3a044] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors duration-300 group-hover:bg-[#124a6d]">
            <Icon className="h-6 w-6 text-gray-600 transition-colors duration-300 group-hover:text-[#d3a044]" />
          </div>
        </div>

        <h3 className="mb-4 font-display text-2xl font-semibold italic text-[#124a6d] md:text-3xl">
          {title}
        </h3>
        <p className="font-body leading-relaxed text-gray-600">
          {body}
        </p>
      </div>
    </motion.div>
  );
}