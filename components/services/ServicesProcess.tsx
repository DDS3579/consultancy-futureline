'use client';

import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Begin with a one-on-one session to map your academic aspirations, assess your profile, and define your roadmap.',
  },
  {
    number: '02',
    title: 'University Selection',
    description: 'Receive a curated, balanced list of target, reach, and safety universities aligned with your career goals.',
  },
  {
    number: '03',
    title: 'Application',
    description: 'Craft compelling personal statements, assemble pristine dossiers, and submit your applications seamlessly.',
  },
  {
    number: '04',
    title: 'Visa Approval',
    description: 'Prepare with absolute assurance through our rigorous mock interview sessions and thorough document checks.',
  },
  {
    number: '05',
    title: 'Departure',
    description: 'Attend comprehensive pre-departure orientations covering flights, accommodation, and student network integrations.',
  },
];

export function ServicesProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full bg-gray-50/65 py-20 md:py-24 lg:py-[120px] overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={titleVariants}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d3a044] sm:text-sm">
            Our Roadmap
          </p>
          <h2 className="font-display text-4xl font-semibold italic text-[#124a6d] md:text-[52px] xl:text-[60px] leading-tight">
            How We Guide You
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#d3a044]/60 rounded" />
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* DESKTOP TIMELINE (lg and up) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
            {/* Horizontal connecting line across circles */}
            <div 
              className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#d3a044]/30 -z-10"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(211, 160, 68, 0.3) 0%, rgba(211, 160, 68, 0.3) 100%)',
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="flex flex-col items-center text-center px-3"
              >
                {/* Badge Number Circle */}
                <div className="
                  relative flex h-12 w-12 items-center justify-center rounded-full 
                  bg-[#124a6d] text-[#d3a044] font-display font-bold text-base
                  border-2 border-[#d3a044] shadow-md shadow-[#124a6d]/10
                  mb-6 transition-transform duration-300 hover:scale-110
                ">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-semibold italic text-[#124a6d]">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed text-gray-500 max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE & TABLET TIMELINE (below lg) */}
          <div className="lg:hidden relative pl-8 md:pl-12 max-w-xl mx-auto z-10">
            {/* Vertical connector line */}
            <div className="absolute top-2 bottom-2 left-[23px] w-[2px] bg-[#d3a044]/30" />

            <div className="space-y-12">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                >
                  {/* Badge Number Circle on Mobile */}
                  <div className="
                    absolute -left-[33px] md:-left-[41px] top-0
                    flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full 
                    bg-[#124a6d] text-[#d3a044] font-display font-bold text-sm md:text-base
                    border-2 border-[#d3a044] shadow-md shadow-[#124a6d]/10
                    transition-transform duration-300 hover:scale-110
                  ">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-0.5">
                    <h3 className="mb-2 font-display text-xl font-semibold italic text-[#124a6d] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm md:text-base leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
