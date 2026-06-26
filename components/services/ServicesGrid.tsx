'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  FileText, 
  Award, 
  Compass, 
  Home, 
  Plane, 
  ArrowRight,
  LucideIcon 
} from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    icon: GraduationCap,
    title: 'University Selection',
    description: 'Find your ideal academic fit. We assess your academic profile, map your future ambitions, and curate a balanced list of top-tier global universities.',
    href: '/courses',
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Navigate complex immigration pathways with ease. We provide comprehensive document reviews, application filing support, and mock interview prep.',
    href: '/contact',
  },
  {
    icon: Award,
    title: 'Scholarship Guidance',
    description: 'Maximize your funding potential. Our team identifies fellowship opportunities and guides you through writing standout personal statements.',
    href: '/courses',
  },
  {
    icon: Compass,
    title: 'Career Counseling',
    description: 'Align your studies with long-term global career paths. Gain insight into international job markets, internship options, and post-study opportunities.',
    href: '/contact',
  },
  {
    icon: Home,
    title: 'Accommodation Support',
    description: 'Transition smoothly into your new environment. We assist in finding safe, convenient housing, roommate matching, and lease reviews.',
    href: '/contact',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Guidance',
    description: 'Step onto the plane fully prepared. Our briefings cover essential packing, airport transitions, currency exchange, and student community onboarding.',
    href: '/contact',
  },
];

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-[120px] overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-[#124a6d]/2 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#d3a044]/3 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative"
              >
                {/* Main Card Container */}
                <div className="
                  relative h-full overflow-hidden 
                  rounded-[24px] bg-white p-8 md:p-10 
                  border border-[#124a6d]/10
                  shadow-[0_8px_30px_rgba(18,74,109,0.02)]
                  transition-all duration-[250ms] ease-out
                  hover:-translate-y-2
                  hover:border-[#d3a044]
                  hover:shadow-[0_20px_50px_rgba(18,74,109,0.08)]
                  flex flex-col justify-between
                ">
                  {/* Subtle decorative gold radial accent (opacity <= 6%) */}
                  <div className="
                    absolute inset-0 
                    bg-[radial-gradient(circle_at_top_right,rgba(211,160,68,0.05),transparent_45%)] 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-[250ms] ease-out 
                    pointer-events-none
                  " />

                  {/* Top content */}
                  <div>
                    {/* Icon Block */}
                    <div className="mb-6 inline-flex items-center justify-center">
                      <div className="
                        flex h-14 w-14 items-center justify-center 
                        rounded-2xl bg-[#124a6d]/5
                        transition-colors duration-[250ms] ease-out
                        group-hover:bg-[#124a6d]
                      ">
                        <Icon className="
                          h-6 w-6 text-[#124a6d] 
                          transition-colors duration-[250ms] ease-out
                          group-hover:text-[#d3a044]
                        " />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="
                      mb-4 font-display text-2xl font-semibold italic 
                      text-[#124a6d] md:text-3xl
                    ">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="
                      font-body leading-relaxed text-gray-600 text-sm md:text-base mb-8
                      line-clamp-3
                    ">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom: Learn More Link */}
                  <div>
                    <Link 
                      href={service.href}
                      className="
                        inline-flex items-center gap-2 
                        font-body text-sm font-semibold text-[#124a6d]
                        hover:text-[#d3a044] transition-colors duration-200
                        outline-none focus-visible:ring-2 focus-visible:ring-[#d3a044]/50 focus-visible:rounded
                      "
                    >
                      <span>Learn More</span>
                      <ArrowRight className="
                        h-4 w-4 transition-transform duration-[250ms] ease-out
                        group-hover:translate-x-1.5
                      " />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
