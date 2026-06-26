'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { TimelineSpine } from './TimelineSpine';
import { TimelineEntry } from './TimelineEntry';
import { WorldMapGhost } from './WorldMapGhost';

const milestones = [
  { year: '2016', title: 'A Quiet Beginning', body: 'Futureline was born in a small Kathmandu office with a single desk, a phone, and a mission: to provide honest guidance to Nepali students.', side: 'left', region: 'Asia' },
  { year: '2019', title: 'Beyond Borders', body: 'Expanded our network to include partnerships across Australia, the UK, Canada, and the USA, opening doors to global opportunities.', side: 'right', region: 'Global' },
  { year: '2022', title: 'The Pandemic Promise', body: 'When the world shut down, we stayed open. Shifting entirely to virtual counseling, we successfully guided 400+ students through unprecedented uncertainty.', side: 'left', region: 'Global' },
  { year: '2024', title: 'A Thousand Dreams Realized', body: 'Crossed the monumental milestone of 5,000+ students successfully placed in top-tier universities worldwide.', side: 'right', region: 'Global' },
  { year: '2026', title: 'Shaping Tomorrow', body: 'Today, we continue to evolve, leveraging AI-driven profile matching and hyper-personalized mentorship for the next generation.', side: 'left', region: 'Future' },
] as const;

export function OurJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="journey" ref={sectionRef} className="relative w-full bg-white py-20 md:py-28">
      <WorldMapGhost />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d3a044]">Our History</p>
          <h2 className="font-display text-4xl font-semibold italic text-[#124a6d] md:text-6xl">
            A Decade of Shaping Futures
          </h2>
        </motion.div>

        <div className="relative">
          <TimelineSpine progress={scrollYProgress} />
          
          <div className="space-y-24 md:space-y-32">
            {milestones.map((item, i) => (
              <TimelineEntry key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}