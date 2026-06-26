'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const stats = [
  { label: 'Students Guided', value: '5000+' },
  { label: 'Countries', value: '15+' },
  { label: 'Visa Success', value: '98%' },
  { label: 'Years Experience', value: '10+' },
];

export function HeroStats() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:grid-cols-4">
        {stats.map((stat, i) => (
          <div 
            key={stat.label}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1"
            style={{
              boxShadow: hovered === i ? '0 8px 30px rgba(211, 160, 68, 0.15)' : 'none',
            }}
          >
            <span className="font-display text-4xl italic font-semibold text-[#d3a044]">
              {stat.value}
            </span>
            <span className="mt-2 font-body text-xs uppercase tracking-wider text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}