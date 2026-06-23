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
import { ArrowRight } from "lucide-react";


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
        className="relative w-full h-svh md:h-screen overflow-hidden bg-black"
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
          {/* Cinematic grading — bottom-heavy for text contrast, preserves office warmth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,32,50,0.25) 0%, rgba(8,32,50,0.45) 40%, rgba(8,32,50,0.72) 100%)",
            }}
          />
          {/* Vignette for cinematic depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(8,32,50,0.4) 100%)",
            }}
          />
        </div>

        <div
          className="absolute z-10 flex flex-col items-center text-center px-6 pointer-events-none w-full max-w-[960px]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Atmospheric golden glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full w-[400px] h-[250px] md:w-[700px] md:h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Eyebrow text */}
          <p className="font-body text-[11px] sm:text-[12px] md:text-[13px] text-[#D4AF37]/90 tracking-[0.3em] uppercase select-none mb-5 z-10 animate-fade-rise">
            Premium Educational Consultancy
          </p>

          {/* Decorative gold line */}
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6 animate-fade-rise" />

          {/* Headline */}
          <h1
            className="font-display text-[42px] md:text-[60px] lg:text-[clamp(68px,8vw,100px)] text-white text-center leading-[0.95] font-semibold italic select-none max-w-[320px] md:max-w-none lg:max-w-[900px] mx-auto z-10 animate-fade-rise-delay"
            style={{
              textShadow:
                "0 2px 20px rgba(0,0,0,0.3), 0 8px 60px rgba(8,32,50,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            Unlock Your Future
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-[17px] md:text-[20px] lg:text-[24px] text-white/85 text-center leading-[1.6] select-none mt-7 max-w-[300px] md:max-w-[580px] lg:max-w-[620px] mx-auto z-10 animate-fade-rise-delay-2">
            Where dreams become global opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto pointer-events-auto z-10 animate-fade-rise-delay-2">
            <a
              href="#get-started"
              className="
                group w-full sm:w-auto max-w-[280px] sm:max-w-none h-[56px] px-9
                inline-flex items-center justify-center gap-2
                text-white font-body font-semibold text-[15px]
                rounded-full border border-white/10
                transition-all duration-300 ease-out
                hover:scale-[1.03] active:scale-[0.98]
                hover:brightness-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #C8A030 50%, #D4AF37 100%)",
                boxShadow:
                  "0 8px 32px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              id="hero-cta-get-started"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href="/contact"
              className="
                w-full sm:w-auto max-w-[280px] sm:max-w-none h-[56px] px-9
                inline-flex items-center justify-center
                bg-white/[0.08] hover:bg-white/[0.14] text-white
                backdrop-blur-2xl
                border border-white/[0.15] hover:border-white/25
                font-body font-semibold text-[15px]
                rounded-full
                transition-all duration-300 ease-out
                hover:scale-[1.03] active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              id="hero-cta-free-consultation"
            >
              Free Consultation
            </a>
          </div>

          {/* Trust Bar — frosted glass pill */}
          <div className="mt-12 z-10 animate-fade-rise-delay-2">
            <div
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-white/80 font-body">
                <span className="text-[#D4AF37] text-[11px]">★★★★★</span>
                <span>Rated by Students</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-white/15" />
              <div className="flex items-center gap-3 sm:gap-4 text-[13px] sm:text-[14px] text-white/60 font-body">
                <span>USA</span>
                <span className="text-white/20">·</span>
                <span>UK</span>
                <span className="text-white/20">·</span>
                <span>Australia</span>
                <span className="text-white/20">·</span>
                <span>Canada</span>
              </div>
            </div>
          </div>
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
        className="sticky top-0 w-full h-svh md:h-screen overflow-hidden bg-black"
        style={{
          perspective: "2200px",
          perspectiveOrigin: "50% 50%",
          touchAction: "pan-y",
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
            className="object-cover object-center animate-ken-burns"
            quality={90}
          />

          {/* Cinematic grading — bottom-heavy for text contrast, preserves office warmth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,32,50,0.25) 0%, rgba(8,32,50,0.45) 40%, rgba(8,32,50,0.72) 100%)",
            }}
          />
          {/* Vignette for cinematic depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(8,32,50,0.4) 100%)",
            }}
          />
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
          className="absolute top-0 left-0 w-1/2 h-full z-20 will-change-transform pointer-events-none"
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
          className="absolute top-0 right-0 w-1/2 h-full z-20 will-change-transform pointer-events-none"
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
        <div
          className="absolute z-10 flex flex-col items-center text-center px-6 pointer-events-none w-full max-w-[960px]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Atmospheric golden glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none rounded-full w-[400px] h-[250px] md:w-[700px] md:h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 50%, transparent 70%)",
              filter: "blur(60px)",
              opacity: headlineOpacity,
            }}
          />

          {/* Eyebrow text */}
          <motion.p
            className="font-body text-[11px] sm:text-[12px] md:text-[13px] text-[#D4AF37]/90 tracking-[0.3em] uppercase select-none mb-5 z-10"
            style={{ opacity: headlineOpacity, y: headlineY }}
          >
            Premium Educational Consultancy
          </motion.p>

          {/* Decorative gold line */}
          <motion.div
            className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6"
            style={{ opacity: headlineOpacity, y: headlineY }}
          />

          {/* Headline */}
          <motion.h1
            className="font-display text-[42px] md:text-[60px] lg:text-[clamp(68px,8vw,100px)] text-white text-center leading-[0.95] font-semibold italic select-none max-w-[320px] md:max-w-none lg:max-w-[900px] mx-auto z-10"
            style={{
              opacity: headlineOpacity,
              y: headlineY,
              textShadow:
                "0 2px 20px rgba(0,0,0,0.3), 0 8px 60px rgba(8,32,50,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            Unlock Your Future
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="font-body text-[17px] md:text-[20px] lg:text-[24px] text-white/85 text-center leading-[1.6] select-none mt-7 max-w-[300px] md:max-w-[580px] lg:max-w-[620px] mx-auto z-10"
            style={{ opacity: subheadlineOpacity, y: subheadlineY }}
          >
            Where dreams become global opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto pointer-events-auto z-10"
            style={{ opacity: ctaOpacity, y: ctaY }}
          >
            <a
              href="#get-started"
              className="
                group w-full sm:w-auto max-w-[280px] sm:max-w-none h-[56px] px-9
                inline-flex items-center justify-center gap-2
                text-white font-body font-semibold text-[15px]
                rounded-full border border-white/10
                transition-all duration-300 ease-out
                hover:scale-[1.03] active:scale-[0.98]
                hover:brightness-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              style={{
                background:
                  "linear-gradient(135deg, #D4AF37 0%, #C8A030 50%, #D4AF37 100%)",
                boxShadow:
                  "0 8px 32px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              id="hero-cta-get-started"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href="/contact"
              className="
                w-full sm:w-auto max-w-[280px] sm:max-w-none h-[56px] px-9
                inline-flex items-center justify-center
                bg-white/[0.08] hover:bg-white/[0.14] text-white
                backdrop-blur-2xl
                border border-white/[0.15] hover:border-white/25
                font-body font-semibold text-[15px]
                rounded-full
                transition-all duration-300 ease-out
                hover:scale-[1.03] active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
              id="hero-cta-free-consultation"
            >
              Free Consultation
            </a>
          </motion.div>

          {/* Trust Bar — frosted glass pill */}
          <motion.div
            className="mt-12 z-10"
            style={{ opacity: ctaOpacity }}
          >
            <div
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-white/80 font-body">
                <span className="text-[#D4AF37] text-[11px]">★★★★★</span>
                <span>Rated by Students</span>
              </div>
              <div className="hidden sm:block w-[1px] h-4 bg-white/15" />
              <div className="flex items-center gap-3 sm:gap-4 text-[13px] sm:text-[14px] text-white/60 font-body">
                <span>USA</span>
                <span className="text-white/20">·</span>
                <span>UK</span>
                <span className="text-white/20">·</span>
                <span>Australia</span>
                <span className="text-white/20">·</span>
                <span>Canada</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Ambient Glow (adds atmospheric depth) ── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none z-[5]"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(212,175,55,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

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
