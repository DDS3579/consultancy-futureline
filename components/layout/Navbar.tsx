"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

/* ─────────────────── Nav Link Types ─────────────────── */

interface NavLink {
  label: string;
  href: string;
}

/* ─────────────────── Nav Configuration ─────────────────── */

const PRIMARY_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Courses", href: "/courses" },
];

const MORE_LINKS: NavLink[] = [
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog & Events", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ─────────────────── Animation Variants ─────────────────── */

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/* ═══════════════════════════════════════════════════════════
   Component: Navbar
   ═══════════════════════════════════════════════════════════ */

interface NavbarProps {
  /** Whether the hero door animation is complete */
  heroAnimationDone: boolean;
}

export default function Navbar({ heroAnimationDone }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll listener for bg transition ── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Dropdown hover handlers with delay ── */
  const openDropdown = useCallback(() => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setMoreOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimerRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 150);
  }, []);

  /* Determine visual state */
  const isTransparent = !isScrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate={heroAnimationDone ? "visible" : "hidden"}
      id="main-navbar"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 relative w-36 h-10 md:w-44 md:h-12"
            aria-label="Futureline Education — Home"
          >
            <Image
              src="/img/logo-transparent.png"
              alt="Futureline Education"
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* ── Desktop Nav Links (center) ── */}
          <div className="hidden lg:flex items-center gap-1">
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-[#124a6d] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ── More Dropdown ── */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                onClick={() => setMoreOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-[#124a6d] hover:bg-gray-50"
                }`}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                id="nav-more-button"
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {MORE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm font-body text-gray-700 hover:text-[#124a6d] hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => setMoreOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#d3a044] text-white font-body font-semibold text-sm rounded-full shadow-md shadow-[#d3a044]/20 hover:bg-[#b88b3a] hover:shadow-lg hover:shadow-[#d3a044]/30 active:scale-[0.97] transition-all duration-300"
              id="nav-cta-get-started"
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            id="nav-mobile-toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="pb-4 pt-2 space-y-1 border-t border-gray-200/50">
                {[...PRIMARY_LINKS, ...MORE_LINKS].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-base font-body font-medium rounded-lg transition-colors duration-200 ${
                      isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-[#124a6d] hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-[#d3a044] text-white font-body font-semibold text-base rounded-full shadow-md shadow-[#d3a044]/20 hover:bg-[#b88b3a] transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
