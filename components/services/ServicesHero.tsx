'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Award, Sparkles, GraduationCap } from 'lucide-react';

const floatingBadges = [
  { 
    text: 'Visa Approved', 
    icon: CheckCircle2, 
    className: 'top-[12%] left-[6%] xl:left-[10%] text-emerald-600 border-emerald-100/80 bg-emerald-50/50', 
    delay: 0, 
    duration: 6 
  },
  { 
    text: 'Oxford, UK', 
    icon: MapPin, 
    className: 'top-[18%] right-[8%] xl:right-[12%] text-[#124a6d] border-[#124a6d]/10 bg-blue-50/40', 
    delay: 1, 
    duration: 7 
  },
  { 
    text: 'IELTS 8.5', 
    icon: Award, 
    className: 'bottom-[22%] left-[8%] xl:left-[14%] text-[#d3a044] border-[#d3a044]/20 bg-amber-50/40', 
    delay: 2, 
    duration: 6.5 
  },
  { 
    text: 'Sydney, AU', 
    icon: MapPin, 
    className: 'bottom-[16%] right-[10%] xl:right-[15%] text-[#124a6d] border-[#124a6d]/10 bg-blue-50/40', 
    delay: 1.5, 
    duration: 8 
  },
  { 
    text: '100% Scholarship', 
    icon: Sparkles, 
    className: 'top-[45%] right-[3%] xl:right-[6%] text-[#d3a044] border-[#d3a044]/20 bg-amber-50/40 hidden md:flex', 
    delay: 0.5, 
    duration: 7.5 
  },
];

export function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const, // easeOutQuart
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-[160px] lg:pb-[100px] border-b border-gray-50">
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d3a044 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative blurred background ambient glow (Stripe/Linear style) */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-[#124a6d]/5 via-[#d3a044]/5 to-transparent blur-[100px] pointer-events-none -z-10" />

      {/* Decorative premium fine lines */}
      <div className="absolute top-[35%] left-0 w-[20%] h-px bg-gradient-to-r from-transparent via-[#d3a044]/20 to-transparent -rotate-6 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[30%] right-0 w-[25%] h-px bg-gradient-to-l from-transparent via-[#124a6d]/10 to-transparent rotate-6 pointer-events-none hidden lg:block" />

      {/* Floating badges layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {floatingBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={idx}
              className={`
                absolute flex items-center gap-2 px-4 py-2.5 
                rounded-full border backdrop-blur-md shadow-sm
                text-xs font-body font-medium transition-all duration-300
                scale-75 md:scale-90 lg:scale-100 opacity-40 md:opacity-90 lg:opacity-100
                ${badge.className}
              `}
              initial={{ opacity: 0, y: 40 }}
              animate={{ 
                opacity: [0, 0.9, 0.9],
                y: [40, 0, -12, 0],
              }}
              transition={{
                y: {
                  duration: badge.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: badge.delay
                },
                opacity: { duration: 1.2, delay: badge.delay * 0.5 + 0.5 }
              }}
            >
              <Icon className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{badge.text}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-[720px] text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#d3a044]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d3a044] sm:text-sm">
              Our Services
            </span>
            <div className="h-px w-8 bg-[#d3a044]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-semibold italic leading-[1.1] text-[#124a6d] sm:text-5xl md:text-[56px] xl:text-[64px]"
          >
            Everything You Need, <br />
            <span className="not-italic text-[#d3a044]">From Dream to Destination.</span>
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            variants={itemVariants}
            className="mt-8 font-body text-base leading-relaxed text-gray-600 sm:text-lg md:text-[19px] xl:text-[20px] px-4 md:px-0"
          >
            Navigating the complexities of studying abroad requires precision, expertise, and personalized care. We provide end-to-end guidance to shape your academic profile and secure your global future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
