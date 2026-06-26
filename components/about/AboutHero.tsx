'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShaderCanvas } from './ShaderCanvas';
import { HeroStats } from './HeroStats';
import { ArrowDown, User } from 'lucide-react';

export function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.6, 1.0], [1.05, 1.0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1.0], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a2540]">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <ShaderCanvas scrollProgress={scrollYProgress} />
      </motion.div>

      <motion.div 
        style={{ y }}
        className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#d3a044]">
            About Futureline
          </motion.p>
          
          <motion.h1 variants={item} className="font-display text-5xl font-semibold italic leading-[0.95] text-white md:text-7xl lg:text-8xl">
            <span className="block">The Journey</span>
            <span className="block">Behind Thousands</span>
            <span className="block">
              of <span className="not-italic text-[#d3a044]">Global Dreams.</span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl font-body text-lg text-gray-300 md:text-xl">
            From a small office in Kathmandu to a global network of successful students, discover the story of how we built Nepal&apos;s most trusted educational consultancy.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#d3a044] px-8 py-3.5 font-body text-sm font-medium text-[#0a2540] transition-colors hover:bg-[#b88b3a]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Journey <ArrowDown className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-8 py-3.5 font-body text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10">
              <span className="flex items-center gap-2">
                Meet Our Team <User className="h-4 w-4" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <HeroStats />
    </section>
  );
}