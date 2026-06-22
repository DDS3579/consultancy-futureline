"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";

/* ─────────────────────────── Constants ─────────────────────────── */

/** Final rotation angle for door panels (degrees) */
const DOOR_ROTATION_DEG = 110;

/** Height multiplier for scroll area (×viewport height).
 *  The user scrolls through this distance to complete the full reveal. */
const SCROLL_HEIGHT_MULTIPLIER = 3;

/** Scroll progress threshold at which we signal "doors are open" */
const DOORS_OPEN_THRESHOLD = 0.62;

/* ════════════════════════════════════════════════════════════════
   Component: HeroDoorReveal  (scroll-driven)
   ════════════════════════════════════════════════════════════════

   Timeline mapped to scrollYProgress (0 → 1):

   0.00–0.10  Intro text fades in
   0.10–0.18  Intro text holds
   0.18–0.28  Intro text fades out
   0.28–0.68  Doors rotate open
   0.58–0.68  Door panels fade to transparent
   0.28–0.72  Background image settles (scale 1.08→1)
   0.62–0.76  Headline fades in
   0.68–0.82  Sub-headline fades in
   0.74–0.88  CTA button fades in
   0.00–0.12  Scroll-indicator visible, then fades
   ──────────────────────────────────────────────────────────────── */

interface HeroDoorRevealProps {
  /** Fired when the doors are mostly open and content starts revealing */
  onDoorsOpen?: () => void;
}

export default function HeroDoorReveal({ onDoorsOpen }: HeroDoorRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const firedRef = useRef(false);

  /* ── Scroll progress: 0 at top of wrapper, 1 when wrapper ends ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Fire callback once when doors are open */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= DOORS_OPEN_THRESHOLD && !firedRef.current) {
      firedRef.current = true;
      onDoorsOpen?.();
    }
  });

  /* ── Intro text (0% → 28%) ── */
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.18, 0.28],
    [0, 1, 1, 0]
  );
  const introY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.18, 0.28],
    [20, 0, 0, -15]
  );

  /* ── Door panels (28% → 68%) ── */
  const leftDoorRotation = useTransform(
    scrollYProgress,
    [0.28, 0.68],
    [0, -DOOR_ROTATION_DEG]
  );
  const rightDoorRotation = useTransform(
    scrollYProgress,
    [0.28, 0.68],
    [0, DOOR_ROTATION_DEG]
  );
  const doorOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.68],
    [1, 0]
  );

  /* ── Background scale (28% → 72%) ── */
  const bgScale = useTransform(
    scrollYProgress,
    [0.28, 0.72],
    [1.08, 1]
  );

  /* ── Hero content stagger (62% → 88%) ── */
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.76],
    [0, 1]
  );
  const headlineY = useTransform(
    scrollYProgress,
    [0.62, 0.76],
    [30, 0]
  );

  const subheadlineOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.82],
    [0, 1]
  );
  const subheadlineY = useTransform(
    scrollYProgress,
    [0.68, 0.82],
    [30, 0]
  );

  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.74, 0.88],
    [0, 1]
  );
  const ctaY = useTransform(
    scrollYProgress,
    [0.74, 0.88],
    [30, 0]
  );

  /* ── Scroll indicator (fades away as user starts scrolling) ── */
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.12],
    [1, 1, 0]
  );

  /* ── Reduced motion: skip animation, show final state ── */
  if (prefersReducedMotion) {
    return (
      <section
        id="hero-door-reveal"
        className="relative w-full h-screen overflow-hidden bg-black"
        aria-label="Hero section — Futureline Education"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/home/hero/hero.png"
            alt="Futureline Education — premium office reception showcasing excellence, integrity, guidance and success"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight mb-4 drop-shadow-lg select-none italic">
            Unlock Your Future
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 text-center max-w-2xl mb-8 md:mb-10 drop-shadow-md select-none">
            Where dreams become global opportunities.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 bg-[#d3a044] text-white font-body font-semibold text-base sm:text-lg rounded-full shadow-lg shadow-[#d3a044]/30"
            id="hero-cta-get-started"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      id="hero-scroll-container"
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_MULTIPLIER * 100}vh` }}
    >
      {/* Sticky hero — stays pinned while the wrapper scrolls behind it */}
      <section
        id="hero-door-reveal"
        className="sticky top-0 w-full h-screen overflow-hidden bg-black"
        style={{
          perspective: "2200px",
          perspectiveOrigin: "50% 50%",
        }}
        aria-label="Hero section — Futureline Education"
      >
        {/* ── Background Image (underneath doors) ── */}
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          style={{ scale: bgScale }}
        >
          <Image
            src="/img/home/hero/hero.png"
            alt="Futureline Education — premium office reception showcasing excellence, integrity, guidance and success"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        </motion.div>

        {/* ── Intro Text (appears early, fades before doors open) ── */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-6"
          style={{ opacity: introOpacity, y: introY }}
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#d3a044] text-center leading-relaxed tracking-wide select-none italic">
            The path to your dreams is…
          </p>
        </motion.div>

        {/* ── Left Door Panel ── */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full z-20 will-change-transform"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            rotateY: leftDoorRotation,
            opacity: doorOpacity,
          }}
        >
          <Image
            src="/img/home/hero/left.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover object-right"
            quality={90}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Right Door Panel ── */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full z-20 will-change-transform"
          style={{
            transformOrigin: "right center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            rotateY: rightDoorRotation,
            opacity: doorOpacity,
          }}
        >
          <Image
            src="/img/home/hero/right.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover object-left"
            quality={90}
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Hero Content (reveals as doors finish opening) ── */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-6 pointer-events-none">
          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight mb-4 drop-shadow-lg select-none italic"
            style={{ opacity: headlineOpacity, y: headlineY }}
          >
            Unlock Your Future
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 text-center max-w-2xl mb-8 md:mb-10 drop-shadow-md select-none"
            style={{ opacity: subheadlineOpacity, y: subheadlineY }}
          >
            Where dreams become global opportunities.
          </motion.p>

          {/* CTA Button */}
          <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
            <a
              href="#get-started"
              className="
                pointer-events-auto
                inline-flex items-center justify-center
                px-8 py-3.5 sm:px-10 sm:py-4
                bg-[#d3a044] text-white
                font-body font-semibold text-base sm:text-lg
                rounded-full
                shadow-lg shadow-[#d3a044]/30
                hover:bg-[#b88b3a] hover:shadow-xl hover:shadow-[#d3a044]/40
                hover:scale-[1.03]
                active:scale-[0.98]
                transition-all duration-300 ease-out
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a044] focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              id="hero-cta-get-started"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* ── Scroll Indicator (Apple-style mouse icon) ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-white/50 text-[11px] font-body tracking-[0.25em] uppercase select-none">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#d3a044] animate-pulse-ring"
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
