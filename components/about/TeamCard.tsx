'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  portrait: string;
  quote: string;
  linkedin: string;
  email?: string;
}

interface TeamCardProps {
  member: TeamMember;
  isFounder?: boolean;
}

export function TeamCard({ member, isFounder = false }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`group relative w-full max-w-sm ${isFounder ? 'max-w-md' : ''}`}
    >
      <div className="relative overflow-hidden rounded-2xl border-b-4 border-[#d3a044] shadow-lg" style={{ transform: 'translateZ(0)' }}>
        <div className={`relative w-full ${isFounder ? 'h-96' : 'h-80'}`}>
          {/* Placeholder for next/image. Using div for visual representation in this environment */}
          <div className="absolute inset-0 bg-gray-300 transition-transform duration-700 group-hover:scale-108" 
               style={{ backgroundImage: `url(${member.portrait})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          
          {/* Navy overlay rise */}
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/90 to-transparent transition-all duration-500 group-hover:h-3/5" />

          {/* Quote */}
          <div className="absolute bottom-0 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            <p className={`font-display italic text-white ${isFounder ? 'text-xl' : 'text-lg'}`}>&ldquo;{member.quote}&rdquo;</p>
          </div>
        </div>
      </div>

      {/* Info block */}
      <div className="mt-4 flex items-end justify-between" style={{ transform: 'translateZ(40px)' }}>
        <div>
          <h3 className={`font-display font-semibold text-[#124a6d] transition-colors group-hover:text-[#d3a044] ${isFounder ? 'text-3xl' : 'text-2xl'}`}>
            {member.name}
          </h3>
          <p className="font-body text-sm text-gray-600">{member.title}</p>
        </div>
        <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a href={member.linkedin} className="rounded-full bg-[#124a6d] p-2 text-white hover:bg-[#0f3c58]"><Linkedin className="h-4 w-4" /></a>
          {member.email && <a href={`mailto:${member.email}`} className="rounded-full bg-[#124a6d] p-2 text-white hover:bg-[#0f3c58]"><Mail className="h-4 w-4" /></a>}
        </div>
      </div>
    </motion.div>
  );
}