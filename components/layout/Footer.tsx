"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b2c42] text-white border-t border-white/5 relative z-10 pt-16 pb-8">
      {/* Newsletter / CTA Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold italic text-[#e8c878] mb-2">
              Stay Informed on Global Opportunities
            </h3>
            <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed">
              Subscribe to our newsletter for the latest study visa updates, university scholarship guides, and international student events.
            </p>
          </div>
          <div className="lg:col-span-6 w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-lg lg:ml-auto"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#d3a044] focus:outline-none rounded-xl px-5 py-3.5 text-sm font-body text-white placeholder-white/40 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#d3a044] hover:bg-[#b88b3a] text-white font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#d3a044]/20 hover:shadow-[#d3a044]/30"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Company Profile (Logo, Socials) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="mb-6">
              <Link href="/" className="inline-block relative w-44 h-12 mb-5">
                <Image
                  src="/img/logo.png"
                  alt="Futureline Education Logo"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                  priority
                />
              </Link>
              <p className="font-body text-sm text-white/75 leading-relaxed max-w-sm mb-6">
                Futureline Education is Kathmandu's premier educational consultancy. We transform study-abroad dreams into global opportunities with expert counseling and complete visa assistance.
              </p>
            </div>
            
            {/* Social Icons */}
            <div>
              <span className="block font-body text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                Follow our journey
              </span>
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook",
                    href: "https://facebook.com/futureline",
                    svg: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    href: "https://instagram.com/futureline",
                    svg: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/company/futureline",
                    svg: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    href: "https://youtube.com/futureline",
                    svg: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#d3a044] hover:bg-white/10 hover:border-[#d3a044]/55 transition-all duration-300"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Popular Destinations */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold text-[#e8c878] mb-6">
              Destinations
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/75">
              {[
                { name: "Australia", href: "/destinations/australia" },
                { name: "United Kingdom", href: "/destinations/uk" },
                { name: "United States", href: "/destinations/usa" },
                { name: "Canada", href: "/destinations/canada" },
                { name: "Japan", href: "/destinations/japan" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#d3a044] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold text-[#e8c878] mb-6">
              Services
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/75">
              {[
                { name: "Academic Counseling", href: "/services#counseling" },
                { name: "Test Preparation", href: "/services#test-prep" },
                { name: "Visa Guidance", href: "/services#visa" },
                { name: "Scholarships", href: "/services#scholarships" },
                { name: "Pre-Departure", href: "/services#pre-departure" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#d3a044] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold text-[#e8c878] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/75">
              {[
                { name: "About Us", href: "/about" },
                { name: "Success Stories", href: "/success-stories" },
                { name: "Courses & Preparation", href: "/courses" },
                { name: "Latest Blog", href: "/blog" },
                { name: "Contact Team", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#d3a044] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-semibold text-[#e8c878] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 font-body text-sm text-white/75">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-[#d3a044] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Putalisadak (Opposite Century Bank), Kathmandu, Nepal
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-[#d3a044] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+97714410123" className="hover:text-[#d3a044] transition-colors">
                    +977-1-4410123
                  </a>
                  <a href="tel:+9779851023456" className="hover:text-[#d3a044] transition-colors text-xs text-white/60">
                    +977-9851023456
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-[#d3a044] shrink-0" />
                <a
                  href="mailto:info@futureline.edu.np"
                  className="hover:text-[#d3a044] transition-colors break-all"
                >
                  info@futureline.edu.np
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-[#d3a044] shrink-0 mt-0.5" />
                <span>
                  Sun - Fri: 9 AM - 6 PM
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} Futureline Education. All rights reserved. Registered under the Ministry of Education, Science & Technology, Government of Nepal.
        </p>
        <div className="flex items-center gap-6 font-body text-xs text-white/50">
          <Link href="/privacy-policy" className="hover:text-[#d3a044] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-[#d3a044] transition-colors">
            Terms of Service
          </Link>
          <button
            onClick={handleScrollToTop}
            className="text-white hover:text-[#d3a044] transition-colors font-semibold"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
