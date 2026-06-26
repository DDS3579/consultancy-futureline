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
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const rise = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative flex h-screen w-full flex-col overflow-hidden bg-[#0a2540]">
      {/* Shader bg */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <ShaderCanvas scrollProgress={scrollYProgress} />
      </motion.div>

      {/* Dot grid overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d3a044 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative gold diagonal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[38%] -left-[5%] z-[2] h-px w-[60%] origin-left bg-gradient-to-r from-[#d3a044]/50 via-[#d3a044]/20 to-transparent -rotate-[8deg]"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[55%] right-0 z-[2] h-px w-[40%] origin-right bg-gradient-to-l from-[#d3a044]/30 via-[#d3a044]/10 to-transparent rotate-[5deg]"
      />

      {/* Main content */}
      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left — headline block */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            {/* Eyebrow with accent line */}
            <motion.div variants={rise} className="mb-5 flex items-center gap-4">
              <div className="h-px w-10 bg-[#d3a044]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d3a044] sm:text-sm">
                Our Story
              </span>
            </motion.div>

            {/* Headline — editorial stagger */}
            <motion.h1 variants={rise} className="font-display text-[clamp(2.2rem,6vw,5.5rem)] font-semibold italic leading-[1.0] text-white">
              Building Futures
            </motion.h1>
            <motion.h1 variants={rise} className="font-display text-[clamp(2.2rem,6vw,5.5rem)] font-semibold italic leading-[1.0] text-white">
              Across{' '}
              <span className="not-italic text-[#d3a044]">Borders.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={rise} className="mt-5 max-w-md font-body text-sm leading-relaxed text-gray-400 sm:text-[15px]">
              From Kathmandu to the world — a decade of turning
              ambition into acceptance letters.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={rise} className="mt-7 flex flex-wrap gap-3">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#d3a044] px-6 py-3 font-body text-sm font-medium text-[#0a2540] transition-colors hover:bg-[#b88b3a]">
                <span className="relative z-10 flex items-center gap-2">
                  Our Journey <ArrowDown className="h-4 w-4" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-body text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="flex items-center gap-2">
                  The Team <User className="h-4 w-4" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right — large accent number block */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="hidden lg:flex flex-col items-end text-right"
          >
            <motion.div variants={fadeIn} className="relative">
              {/* Large decorative year */}
              <span className="block font-display text-[9rem] font-bold leading-none text-white/[0.04] xl:text-[11rem]">
                10
              </span>
              {/* Overlay info */}
              <div className="absolute bottom-4 right-0 flex flex-col items-end gap-1">
                <div className="h-px w-20 bg-gradient-to-l from-[#d3a044] to-transparent" />
                <span className="font-display text-4xl font-semibold italic text-white xl:text-5xl">
                  10<span className="not-italic text-[#d3a044]">+</span>
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  Years of Excellence
                </span>
              </div>
            </motion.div>

            {/* Mini stats cluster */}
            <motion.div variants={rise} className="mt-8 flex gap-8">
              <div className="flex flex-col items-end">
                <span className="font-display text-2xl font-semibold italic text-white">
                  15<span className="not-italic text-[#d3a044]">+</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500">Countries</span>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col items-end">
                <span className="font-display text-2xl font-semibold italic text-white">
                  98<span className="not-italic text-[#d3a044]">%</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500">Visa Success</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar — bottom */}
      <div className="relative z-10 w-full shrink-0 px-5 pb-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}