"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileCheck,
  Compass,
  GraduationCap,
  Briefcase,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "academic-counseling",
    title: "Academic Counseling",
    description:
      "Personalized guidance to help you select the ideal course, university, and country that matches your career aspirations.",
    icon: Compass,
    link: "/services#counseling",
  },
  {
    id: "test-preparation",
    title: "Test Preparation",
    description:
      "Expert coaching for IELTS, PTE, TOEFL, and SAT with certified tutors and modern mock test facilities.",
    icon: GraduationCap,
    link: "/services#test-prep",
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance & Processing",
    description:
      "End-to-end support for visa documentation, financial planning, mock interviews, and application submissions.",
    icon: FileCheck,
    link: "/services#visa",
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship Guidance",
    description:
      "Helping you identify and apply for merit-based and need-based institutional scholarships globally.",
    icon: BookOpen,
    link: "/services#scholarships",
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "Align your educational pathway with prospective global career opportunities and industrial demands.",
    icon: Briefcase,
    link: "/services#career",
  },
  {
    id: "pre-departure",
    title: "Pre-Departure & Travel Support",
    description:
      "Briefings on international student life, travel arrangements, accommodation assistance, and airport pick-up.",
    icon: PlaneTakeoff,
    link: "/services#pre-departure",
  },
];

export default function OurServices() {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden" id="our-services">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d3a044]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#124a6d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-body font-bold uppercase tracking-[0.2em] text-[#d3a044] mb-3 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display text-gray-900 mb-4 font-semibold italic"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Empowering students with end-to-end guidance to achieve global academic success.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9],
                }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="mb-6 w-12 h-12 rounded-xl bg-[#124a6d]/5 text-[#124a6d] flex items-center justify-center group-hover:bg-[#124a6d] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-[#124a6d] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Trigger */}
                <div>
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#124a6d] group-hover:text-[#d3a044] transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
