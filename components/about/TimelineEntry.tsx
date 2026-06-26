'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  body: string;
  side: 'left' | 'right';
  region: string;
}

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
}

export function TimelineEntry({ item, index }: TimelineEntryProps) {
  const isLeft = item.side === 'left';

  return (
    <article className="relative flex flex-col md:flex-row md:items-center">
      {/* Desktop alternating layout */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className="font-display text-6xl italic font-semibold text-[#d3a044]/20 md:text-7xl">{item.year}</h3>
          <h4 className="mt-2 font-display text-2xl font-semibold text-[#124a6d] md:text-3xl">{item.title}</h4>
          <p className="mt-4 font-body text-gray-600">{item.body}</p>
        </motion.div>
      </div>

      {/* Center Node */}
      <div className="absolute left-8 top-2 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-4 w-4 rounded-full border-4 border-white bg-[#d3a044]"
        />
      </div>

      {/* Mobile layout & Desktop spacer */}
      <div className="ml-12 md:ml-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          <h3 className="font-display text-4xl italic font-semibold text-[#d3a044]/20">{item.year}</h3>
          <h4 className="mt-1 font-display text-xl font-semibold text-[#124a6d]">{item.title}</h4>
          <p className="mt-2 font-body text-sm text-gray-600">{item.body}</p>
        </motion.div>
      </div>
    </article>
  );
}