'use client';

import { motion } from 'framer-motion';
import { TeamCard } from './TeamCard';
import { StaticImageData } from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  portrait: string; // Replace with StaticImageData in prod
  quote: string;
  linkedin: string;
  email?: string;
  order: number;
}

const team: TeamMember[] = [
  {
    id: '1', name: 'Aarav Sharma', title: 'Founder & Lead Counselor', portrait: '/team/founder.jpg',
    quote: 'Every student has a unique story. Our job is to help them tell it perfectly.', linkedin: '#', order: 0
  },
  {
    id: '2', name: 'Sita Rai', title: 'Senior Visa Consultant', portrait: '/team/sita.jpg',
    quote: 'The details in a visa application matter. I obsess over them.', linkedin: '#', order: 1
  },
  {
    id: '3', name: 'Rohan Thapa', title: 'University Relations', portrait: '/team/rohan.jpg',
    quote: 'Building bridges between Nepali talent and global institutions.', linkedin: '#', order: 2
  },
  {
    id: '4', name: 'Anjali Gurung', title: 'Career Mentor', portrait: '/team/anjali.jpg',
    quote: 'Success is not just admission, it’s thriving abroad.', linkedin: '#', order: 3
  }
];

export function OurTeam() {
  return (
    <section id="team" className="relative w-full overflow-hidden bg-[#F9FAFB] py-20 md:py-28">
      {/* Rising Particles Transition */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 flex justify-around -translate-y-1/2">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '-20%', opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatDelay: 1 }}
            className="h-1 w-1 rounded-full bg-[#d3a044]"
            style={{ left: `${(i * 8.3) % 100}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d3a044]">Our Team</p>
          <h2 className="font-display text-4xl font-semibold italic text-[#124a6d] md:text-6xl">
            Meet The People Who Make It Possible
          </h2>
          <p className="mt-6 font-body text-lg text-gray-600">
            Behind every accepted application is a counselor who answered the phone at 11 PM.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
          <div className="flex justify-center">
            <TeamCard member={team[0]} isFounder={true} />
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="flex justify-center sm:justify-end">
              <TeamCard member={team[1]} />
            </div>
            <div className="flex justify-center sm:justify-start">
              <TeamCard member={team[2]} />
            </div>
          </div>
          <div className="flex justify-center">
            <TeamCard member={team[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}