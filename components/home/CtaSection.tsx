"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 55}%`,
  bottom: `${10 + Math.random() * 20}%`,
  height: `${4 + Math.random() * 16}px`,
  delay: `${Math.random() * 5}s`,
  duration: `${5 + Math.random() * 6}s`,
  dx: `${(Math.random() - 0.5) * 60}px`,
}));

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0c3a55] py-24 md:py-32"
      id="get-started"
    >
      {/* Top gold hairline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(211,160,68,0.45),transparent)" }}
      />

      {/* Ambient particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          className="absolute w-[2px] rounded-full bg-[#d3a044] opacity-0"
          style={{
            left: p.left,
            bottom: p.bottom,
            height: p.height,
            ["--dx" as string]: p.dx,
            animation: `fl-rise ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <span className="block w-7 h-px bg-[#d3a044]" />
              <span className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-[#d3a044]">
                Begin Your Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display font-bold italic text-4xl md:text-5xl lg:text-[52px] leading-[1.12] text-white mb-5"
            >
              Your future is<br />
              one conversation<br />
              <span className="relative inline-block text-[#d3a044]">
                away.
                {/* Handwritten underline */}
                <svg
                  viewBox="0 0 120 12"
                  fill="none"
                  className="absolute -bottom-1.5 left-0 w-full"
                  style={{ height: 10 }}
                  aria-hidden="true"
                >
                  <path
                    d="M4 8 Q30 2 60 6 Q90 10 116 5"
                    stroke="#d3a044"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body font-light text-base md:text-[15.5px] leading-[1.75] text-white/50 mb-9 max-w-md"
            >
              Book a free 30-minute session with a senior counselor. Walk away with a
              personalized country shortlist, scholarship map, and your exact next steps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex items-center gap-3.5 flex-wrap mb-10"
            >
              {/* Gold shimmer CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white font-body font-semibold text-[13.5px] rounded-full tracking-[0.04em] shadow-lg shadow-[#d3a044]/20 hover:shadow-[#d3a044]/35 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 animate-shimmer"
                style={{
                  background:
                    "linear-gradient(110deg,#d3a044 0%,#d3a044 38%,#e8c878 50%,#d3a044 62%,#d3a044 100%)",
                  backgroundSize: "200% 100%",
                }}
              >
                Book Free Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 font-body font-medium text-[13.5px] text-white/65 border border-white/18 rounded-full tracking-[0.02em] hover:border-white/45 hover:text-white transition-all duration-250"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 flex-wrap"
            >
              {[
                {
                  icon: (
                    <path d="M20 6L9 17l-5-5" />
                  ),
                  label: "No commitment required",
                },
                {
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </>
                  ),
                  label: "Response within 2 hrs",
                },
                {
                  icon: (
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  ),
                  label: "100% confidential",
                },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span className="w-[3px] h-[3px] rounded-full bg-white/20 mr-2" />
                  )}
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(211,160,68,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {t.icon}
                  </svg>
                  <span className="font-body text-[11.5px] text-white/38 tracking-[0.01em]">
                    {t.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Boarding Pass ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="relative"
          >
            <div
              className="rounded-[22px] overflow-hidden"
              style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.55)" }}
            >
              {/* — Pass Header — */}
              <div className="bg-[#124a6d] px-7 pt-7 pb-0 relative overflow-hidden">
                <p className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-white/40 mb-4">
                  Futureline Education — Boarding Pass
                </p>
                <div className="flex items-center gap-0 mb-2">
                  <div>
                    <p className="font-body text-[10px] tracking-[0.12em] uppercase text-white/40 mb-0.5">
                      From
                    </p>
                    <p className="font-display font-bold text-[40px] text-white leading-none tracking-[0.04em]">
                      KTM
                    </p>
                  </div>
                  <div className="flex-1 flex items-center px-3">
                    <div className="flex-1 h-px bg-white/20" />
                    <svg
                      className="w-5 h-5 mx-1 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d3a044"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2v0A1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <div className="flex-1 h-px bg-white/20" />
                  </div>
                  <div className="text-right">
                    <p className="font-body text-[10px] tracking-[0.12em] uppercase text-white/40 mb-0.5">
                      To
                    </p>
                    <p className="font-display font-bold text-[40px] text-white leading-none tracking-[0.04em]">
                      WORLD
                    </p>
                  </div>
                </div>

                {/* Tear notch row */}
                <div className="flex items-center mt-4 -mx-7">
                  <div className="w-6 h-6 rounded-full bg-[#0c3a55] -ml-3 shrink-0" />
                  <div
                    className="flex-1 border-t border-dashed border-white/15"
                  />
                  <div className="w-6 h-6 rounded-full bg-[#0c3a55] -mr-3 shrink-0" />
                </div>
              </div>

              {/* — Pass Body — */}
              <div className="bg-[#f7f3ee] px-7 pt-5 pb-6 relative">
                {/* Fields */}
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-5">
                  {[
                    { label: "Passenger", val: "Your Name", color: "" },
                    { label: "Destination", val: "Australia", color: "text-[#b8860b]" },
                    { label: "Intake", val: "Feb 2026", color: "" },
                    { label: "Class", val: "Masters", color: "" },
                    { label: "Visa Status", val: "Approved", color: "text-green-600" },
                    { label: "Seat", val: "14A", color: "" },
                  ].map((f) => (
                    <div key={f.label}>
                      <p className="font-body text-[9.5px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-1">
                        {f.label}
                      </p>
                      <p
                        className={`font-body text-[13.5px] font-semibold text-gray-900 ${f.color}`}
                      >
                        {f.val}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-gray-200 mb-4" />

                {/* Progress */}
                <div className="flex justify-between items-center mb-2.5">
                  <p className="font-body text-[9.5px] font-bold tracking-[0.1em] uppercase text-gray-400">
                    Application Journey
                  </p>
                  <p className="font-body text-[9.5px] font-semibold text-[#124a6d]">
                    Step 2 of 4
                  </p>
                </div>
                <div className="flex gap-1.5 mb-2">
                  {["done", "active", "", ""].map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 rounded-full overflow-hidden bg-gray-200"
                    >
                      {s === "done" && <div className="h-full bg-[#124a6d]" />}
                      {s === "active" && (
                        <div
                          className="h-full animate-pulse"
                          style={{
                            background:
                              "linear-gradient(90deg,#124a6d,#d3a044)",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 font-body text-[9px] text-gray-400 font-medium">
                  {["Counseling", "Documents", "Visa", "Depart"].map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                {/* Stamp */}
                <div
                  className="absolute bottom-5 right-6 w-[68px] h-[68px] border-2 border-[#d3a044]/55 rounded-full flex flex-col items-center justify-center"
                  style={{ transform: "rotate(-14deg)" }}
                  aria-hidden="true"
                >
                  <p className="font-body text-[7.5px] font-bold tracking-[0.1em] uppercase text-[#b88b3a] text-center leading-[1.4]">
                    Journey<br />Begins
                  </p>
                  <p className="font-display font-bold text-[15px] text-[#d3a044] leading-tight">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}