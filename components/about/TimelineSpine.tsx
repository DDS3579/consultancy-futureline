'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface TimelineSpineProps {
  progress: MotionValue<number>;
}

export function TimelineSpine({ progress }: TimelineSpineProps) {
  const scaleY = useTransform(progress, [0.1, 0.9], [0, 1]);

  return (
    <div className="absolute left-8 top-0 h-full w-[2px] bg-gray-200 md:left-1/2 md:-translate-x-1/2">
      <motion.div 
        style={{ scaleY }} 
        className="absolute inset-0 origin-top bg-gradient-to-b from-[#d3a044] via-[#e8c878] to-[#d3a044]"
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-white/50 to-transparent" 
             style={{ backgroundSize: '100% 30%', animation: 'liquidFlow 3s linear infinite' }} 
        />
      </motion.div>
      <style jsx>{`
        @keyframes liquidFlow {
          0% { background-position: 0 -30%; }
          100% { background-position: 0 130%; }
        }
      `}</style>
    </div>
  );
}