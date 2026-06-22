"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

/* ─────────────────────────── Constants ─────────────────────────── */

/** Delay before the intro text appears (ms) */
const INTRO_TEXT_DELAY_MS = 300;
/** Duration the intro text stays visible before fading (ms) */
const INTRO_TEXT_DISPLAY_MS = 1800;
/** Duration of door-open animation (seconds) */
const DOOR_OPEN_DURATION = 2;
/** Final rotation angle for door panels (degrees) */
const DOOR_ROTATION_DEG = 110;

/* ─────────── Apple-style ease curve (cubic-bezier) ─────────── */
const CINEMATIC_EASE: Transition["ease"] = [0.25, 0.1, 0.25, 1];

/* ───────────────────── Animation Variants ───────────────────── */

const leftDoorVariants: Variants = {
  closed: {
    rotateY: 0,
    opacity: 1,
  },
  open: {
    rotateY: -DOOR_ROTATION_DEG,
    opacity: 0,
    transition: {
      rotateY: {
        duration: DOOR_OPEN_DURATION,
        ease: CINEMATIC_EASE,
      },
      opacity: {
        duration: DOOR_OPEN_DURATION * 0.2,
        delay: DOOR_OPEN_DURATION * 0.8,
        ease: "easeOut",
      },
    },
  },
};

const rightDoorVariants: Variants = {
  closed: {
    rotateY: 0,
    opacity: 1,
  },
  open: {
    rotateY: DOOR_ROTATION_DEG,
    opacity: 0,
    transition: {
      rotateY: {
        duration: DOOR_OPEN_DURATION,
        ease: CINEMATIC_EASE,
      },
      opacity: {
        duration: DOOR_OPEN_DURATION * 0.2,
        delay: DOOR_OPEN_DURATION * 0.8,
        ease: "easeOut",
      },
    },
  },
};

const backgroundVariants: Variants = {
  hidden: {
    scale: 1.08,
  },
  revealed: {
    scale: 1,
    transition: {
      duration: DOOR_OPEN_DURATION + 0.5,
      ease: CINEMATIC_EASE,
    },
  },
};

const introTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ───────────────────── Animation Phases ───────────────────── */

type AnimationPhase =
  | "idle"
  | "intro-text"
  | "intro-fade"
  | "doors-opening"
  | "content-reveal"
  | "complete";

/* ════════════════════════════════════════════════════════════════
   Component: HeroDoorReveal
   ════════════════════════════════════════════════════════════════ */

interface HeroDoorRevealProps {
  /** Callback fired when the door animation is mostly done and navbar should appear */
  onAnimationDone?: () => void;
}

export default function HeroDoorReveal({
  onAnimationDone,
}: HeroDoorRevealProps) {
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const prefersReducedMotion = useReducedMotion();
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const callbackFiredRef = useRef(false);

  /* Cleanup timers on unmount */
  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const addTimer = useCallback(
    (callback: () => void, delay: number) => {
      const id = setTimeout(callback, delay);
      timersRef.current.push(id);
      return id;
    },
    []
  );

  useEffect(() => {
    /* Reduced-motion: skip animation entirely */
    if (prefersReducedMotion) {
      setPhase("complete");
      if (!callbackFiredRef.current) {
        callbackFiredRef.current = true;
        onAnimationDone?.();
      }
      return;
    }

    /* Phase 1: Show intro text after initial delay */
    addTimer(() => setPhase("intro-text"), INTRO_TEXT_DELAY_MS);

    /* Phase 2: Fade intro text */
    addTimer(
      () => setPhase("intro-fade"),
      INTRO_TEXT_DELAY_MS + INTRO_TEXT_DISPLAY_MS
    );

    /* Phase 3: Open doors after intro text fades */
    addTimer(
      () => setPhase("doors-opening"),
      INTRO_TEXT_DELAY_MS + INTRO_TEXT_DISPLAY_MS + 600
    );

    /* Phase 4: Reveal content at ~70% of door animation */
    const contentRevealTime =
      INTRO_TEXT_DELAY_MS +
      INTRO_TEXT_DISPLAY_MS +
      600 +
      DOOR_OPEN_DURATION * 700;

    addTimer(() => {
      setPhase("content-reveal");
      if (!callbackFiredRef.current) {
        callbackFiredRef.current = true;
        onAnimationDone?.();
      }
    }, contentRevealTime);

    /* Phase 5: Animation complete */
    addTimer(
      () => setPhase("complete"),
      INTRO_TEXT_DELAY_MS +
        INTRO_TEXT_DISPLAY_MS +
        600 +
        DOOR_OPEN_DURATION * 1000 +
        800
    );

    return clearTimers;
  }, [prefersReducedMotion, addTimer, clearTimers, onAnimationDone]);

  const doorsOpen =
    phase === "doors-opening" ||
    phase === "content-reveal" ||
    phase === "complete";

  const backgroundRevealed = doorsOpen;

  const contentVisible =
    phase === "content-reveal" || phase === "complete";

  const showIntroText = phase === "intro-text";
  const hideIntroText =
    phase === "intro-fade" ||
    phase === "doors-opening" ||
    phase === "content-reveal" ||
    phase === "complete";

  return (
    <section
      id="hero-door-reveal"
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{
        perspective: "2200px",
        perspectiveOrigin: "50% 50%",
      }}
      aria-label="Hero section — Futureline Education"
    >
      {/* ── Background Image (underneath doors) ── */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        variants={backgroundVariants}
        initial="hidden"
        animate={backgroundRevealed ? "revealed" : "hidden"}
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

      {/* ── Intro Text (appears before doors open) ── */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-6"
        variants={introTextVariants}
        initial="hidden"
        animate={
          showIntroText ? "visible" : hideIntroText ? "exit" : "hidden"
        }
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
        }}
        variants={leftDoorVariants}
        initial="closed"
        animate={doorsOpen ? "open" : "closed"}
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
        }}
        variants={rightDoorVariants}
        initial="closed"
        animate={doorsOpen ? "open" : "closed"}
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

      {/* ── Hero Content (reveals after doors ~70% open) ── */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-6 pointer-events-none"
        variants={contentContainerVariants}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
      >
        {/* Headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center leading-tight mb-4 drop-shadow-lg select-none italic"
          variants={contentItemVariants}
        >
          Unlock Your Future
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 text-center max-w-2xl mb-8 md:mb-10 drop-shadow-md select-none"
          variants={contentItemVariants}
        >
          Where dreams become global opportunities.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={contentItemVariants}>
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
      </motion.div>
    </section>
  );
}
