'use client';

import { motion } from 'framer-motion';
import { ValueCard } from './ValueCard';
import { Shield, Sparkles, Compass, Rocket } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust',
    body: 'We believe every student deserves honest guidance — even when the honest answer is \'not yet\'. We\'d rather lose a client than lose our integrity.'
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    body: 'Good enough isn\'t in our vocabulary. We review applications three times, prepare students for interviews they\'ll never face, and anticipate problems before they happen.'
  },
  {
    icon: Compass,
    title: 'Guidance',
    body: 'We don\'t just process applications. We mentor. We answer calls at midnight. We celebrate acceptance letters like they\'re our own.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    body: 'The world of education changes fast. We stay ahead — new visa policies, new tests, new destinations — so our students never fall behind.'
  }
];

export function OurValues() {
  return (
    <section id="values" className="relative w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d3a044]">Our Values</p>
          <h2 className="font-display text-4xl font-semibold italic text-[#124a6d] md:text-6xl">
            Guided By Values. <br/> <span className="text-[#d3a044]">Driven By Dreams.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ValueCard {...value} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}