# 🏢 Futureline Education — Frontend Design & Brand Blueprint (llm.md)

This document is a comprehensive, production-grade guide for any AI LLM tasked with designing and implementing pages, components, or features for **Futureline Education** (also referred to as *Futureline Consultant* or *Futureline Consultancy*). It contains all brand details, typography, color palettes, spacing rules, custom Tailwind v4 utilities, animation timelines, and structural design systems used in the application.

---

## 1. Brand Profile & Context
*   **Company Name:** Futureline Education (official logo uses *Futureline Education*, sometimes referred to in text/databases as *Futureline Consultant*).
*   **Industry:** Premium Educational Consultancy (helping students study abroad, visa processing, test preparation like IELTS/PTE/TOEFL, and career counseling).
*   **Location:** Based in Kathmandu, Nepal.
*   **Aesthetics:** High-end, premium, modern, professional, trustworthy, and bilingual (English and Nepali).
*   **Aesthetic Target:** A corporate yet modern aesthetic characterized by rich dark blues, gold highlights, smooth scrolling, clean typography, soft container radii, and immersive micro-interactions.

---

## 2. Technical Stack & Architecture
Any component or page built must strictly align with the following modern architecture:
*   **Framework:** Next.js (using the **App Router** style: `app/` folder, React 19).
*   **CSS Engine:** **Tailwind CSS v4** (CSS-first engine). Configured directly in `app/globals.css` using CSS `@theme` and `@utility` rules rather than a standalone `tailwind.config.js`.
*   **Animation Library:** **Framer Motion** (v12.x) for advanced scroll animations and state-based page transitions.
*   **Smooth Scroll:** **Lenis** (configured globally through `SmoothScrollProvider` in `app/layout.tsx`).
*   **UI Components:** **Shadcn UI** (built on Radix UI, located in `@/components/ui/`, styled via Tailwind CSS variables and standard Tailwind classes).
*   **Icon Library:** **Lucide React** (`lucide-react`) exclusively.
*   **Type Safety:** Strict **TypeScript** for all component interfaces and Mongoose schema models.
*   **Internationalization (i18n):** **next-intl** for bilingual content rendering (English/Nepali dictionaries in `/locales`).

---

## 3. Typography System
Futureline uses a **dual-font system** loaded dynamically using Next.js Google Fonts in the root layout (`app/layout.tsx`).

### Core Fonts
1.  **Display/Heading Font:** **Playfair Display** (`Playfair_Display`)
    *   **Class:** `font-display`
    *   **Application:** Applied to all headings (`h1`, `h2`, `h3`), hero banners, major section headers, accent titles, and the company logo text.
    *   **Styling Note:** Headings should often be styled with an italic style (`italic`) or semi-bold/bold weights to evoke a classic, premium look.
2.  **Body & UI Font:** **DM Sans** (`DM_Sans`)
    *   **Class:** `font-body` (or default `font-sans` depending on application; layout uses `font-body` as body default).
    *   **Application:** Used for paragraphs, body copy, navigations, form inputs, button text, labels, metadata, and cards.

---

## 4. Brand Color System
Colors are defined using exact hex values in the brand styling guidelines, mapped into standard Tailwind utility classes or custom theme tokens.

### A. Core Hex Codes (Use for Arbitrary Classes if Custom Theme is unavailable)
*   **Primary Navy:** `#124a6d` (applied as `[#124a6d]`)
    *   *Usage:* Primary CTA backgrounds, key text headers, website footer backgrounds, active navigation links, and branding accents.
    *   *Hover State Variant:* `#0f3c58` (applied as `hover:bg-[#0f3c58]`)
*   **Accent Gold:** `#d3a044` (applied as `[#d3a044]`)
    *   *Usage:* Secondary CTA backgrounds, highlight badges, custom icons, border accents, scroll indicators, and hover text states.
    *   *Hover State Variant:* `#b88b3a` (applied as `hover:bg-[#b88b3a]`)
*   **Base Background:** `bg-white` (`#ffffff`) for main page backgrounds.
*   **Alternate Background:** `bg-gray-50` or `bg-[#F9FAFB]` for consecutive sections to create visual layering.
*   **Text (Primary):** `text-gray-900` for readable, high-contrast headings and primary content.
*   **Text (Muted):** `text-gray-600` for descriptions, subtitles, and less critical copy.

### B. Tailwind v4 Theme Variables (`app/globals.css`)
Tailwind CSS v4 binds custom tokens under the `@theme` directive in CSS:
```css
@theme {
  --font-display: var(--font-display);
  --font-body: var(--font-body);

  --color-brand-white: #ffffff;
  --color-brand-gold: #d3a044;
  --color-brand-main: #124a6d;
}
```
*For Shadcn UI components, the standard variables map to `oklch` theme tokens (e.g. `--background`, `--foreground`, `--primary`, `--border`, `--radius`) inside the CSS file.*

---

## 5. Spacing, Layout & Corner Radius
To maintain structural consistency across all pages:

### Spacing & Grid Rules
*   **Page Container:** Always wrap page sections in the standard responsive layout container:
    ```tsx
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ```
*   **Section Padding:** Major sections should have generous top/bottom padding to give the design breathing room:
    *   *Class:* `py-20 md:py-28`
*   **Grids & Flexbox Gaps:**
    *   *Grid Lists (Cards):* Use `gap-8` (e.g. `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
    *   *Flex Layouts:* Use `gap-4` for horizontal items or simple vertical layouts.

### Border Radius Rules
*   **Buttons:** Standard button corner rounding is medium/large: `rounded-lg` (or `rounded-full` for interactive/dynamic CTAs like the hero button).
*   **Cards:** Modern, soft roundness: `rounded-2xl`.
*   **Inputs & Controls:** Clean, standard roundness: `rounded-md`.
*   **Images:** Smooth corners: `rounded-xl` (avatars use `rounded-full`).

---

## 6. Pre-Built Custom Tailwind Utilities & Animations
The project implements specific CSS-first animations in `app/globals.css` using Tailwind v4 custom utilities. Use these classes directly:

### Custom CSS Classes
1.  **`animate-fade-rise`**
    *   *Effect:* Fades in content while translating it upwards by `20px` over `0.8s` with `ease-out` timing.
2.  **`animate-fade-rise-delay`**
    *   *Effect:* Same as `animate-fade-rise`, but with a `0.2s` start delay. Perfect for staggered heading reveals.
3.  **`animate-fade-rise-delay-2`**
    *   *Effect:* Same as `animate-fade-rise`, but with a `0.4s` start delay. Used to stagger third-tier content.
4.  **`animate-shimmer`**
    *   *Effect:* Sweeps a bright glow light-effect horizontally across the background continuously (cycles every 3 seconds).
    *   *Requirement:* Must be combined with a specific linear-gradient background. (See Button Patterns below).
5.  **`animate-pulse-ring`**
    *   *Effect:* Emits a radial expanding shadow ring from an element. Used for scroll anchors and attention-drawing indicators.

---

## 7. Reusable Design & UI Patterns

### A. Standard Section Structure
When adding new marketing sections, follow this structure. Always alternate backgrounds (e.g., section 1: `bg-white`, section 2: `bg-gray-50`, section 3: `bg-white`).
```tsx
<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4 font-semibold italic">
        Section Heading Title
      </h2>
      <p className="text-lg text-gray-600 font-body">
        This is a supportive section subtitle explaining what the user is reading.
      </p>
    </div>
    
    {/* Grid / Component Body */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cards or elements go here */}
    </div>
    
  </div>
</section>
```

### B. Core Button Styles
Always style buttons or links mapping to buttons using the following Tailwind styles:

1.  **Primary Button (Navy):**
    ```tsx
    <button className="bg-[#124a6d] text-white hover:bg-[#0f3c58] px-6 py-3 rounded-lg font-body font-medium transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124a6d] focus-visible:ring-offset-2">
      Apply Now
    </button>
    ```
2.  **Secondary Button (Gold):**
    ```tsx
    <button className="bg-[#d3a044] text-white hover:bg-[#b88b3a] px-6 py-3 rounded-lg font-body font-medium transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a044] focus-visible:ring-offset-2">
      View Services
    </button>
    ```
3.  **Outline Button:**
    ```tsx
    <button className="border border-[#124a6d] text-[#124a6d] hover:bg-[#124a6d] hover:text-white px-6 py-3 rounded-lg font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124a6d] focus-visible:ring-offset-2">
      Contact Us
    </button>
    ```
4.  **Premium Animated Shimmer Button (Used for main Header/Nav CTA):**
    *   Uses a multi-stop gold gradient with the `animate-shimmer` class for a glowing effect.
    ```tsx
    <Link
      href="/contact"
      className="inline-flex items-center justify-center px-6 py-2.5 text-white font-body font-semibold text-sm rounded-full shadow-md shadow-[#d3a044]/25 hover:shadow-lg hover:shadow-[#d3a044]/35 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 animate-shimmer"
      style={{
        background: "linear-gradient(110deg, #d3a044 0%, #d3a044 40%, #e8c878 50%, #d3a044 60%, #d3a044 100%)",
        backgroundSize: "200% 100%",
      }}
    >
      Get Started
    </Link>
    ```

### C. Standard Card Pattern
Used to display items like Study Abroad Destinations (e.g., Australia, UK, USA, Canada, Japan), Courses, Testimonials, or Blog Posts.
```tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ContentCard({ title, description, imageUrl, linkUrl }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Aspect Ratio Image Container */}
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-display text-gray-900 mb-2 font-semibold">{title}</h3>
          <p className="text-gray-600 font-body text-sm mb-6 line-clamp-3 leading-relaxed">{description}</p>
        </div>
        
        <div>
          <button className="text-[#124a6d] font-body font-semibold text-sm hover:text-[#d3a044] transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-200">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 8. High-Fidelity Interactive Components (Already Built)

### A. The Cinematic Scroll-Driven Hero Door Reveal (`components/home/HeroDoorReveal.tsx`)
This is the core signature landing experience of the website:
*   **Concept:** A user lands on the page and sees a closed set of massive doors. As they scroll, the doors physically swing open in 3D perspective to reveal a premium office background showing the Futureline reception, while staggered headlines slide up into view.
*   **Timeline mapping to scroll progress (`scrollYProgress` 0.0 → 1.0):**
    *   `0.00–0.10`: Intro text "The path to your dreams is..." fades in.
    *   `0.10–0.18`: Intro text holds in center screen.
    *   `0.18–0.28`: Intro text translates up and fades out.
    *   `0.28–0.68`: 3D Door panels rotate open (Left: `0` to `-110deg`, Right: `0` to `110deg`).
    *   `0.58–0.68`: Door panels fade out completely.
    *   `0.28–0.72`: Background image settles (scales down slightly from `1.08` to `1.00`).
    *   `0.62–0.76`: Primary headline "Unlock Your Future" fades in.
    *   `0.68–0.82`: Sub-headline "Where dreams become global opportunities" fades in.
    *   `0.74–0.88`: Gold CTA "Get Started" fades in.
    *   `0.00–0.12`: Scroll indicator ("Scroll to explore" mouse symbol) is visible, then fades away.
*   **Reduced Motion Support:** If the client OS requests reduced motion, the animation transitions instantly to the final open state to prevent accessibility issues.
*   **Performance:** Uses hardware-accelerated Framer Motion properties (`rotateY` with `preserve-3d` perspective and `will-change-transform` attributes).

### B. Sticky Scrolling Header/Navbar (`components/layout/Navbar.tsx`)
*   **Transition:** Nav bar starts completely transparent with white text (so it sits cleanly over the dark hero section). When the user scrolls past the hero section threshold, the navbar transitions smoothly to a solid white header with a drop shadow, thin border, and dark gray text.
*   **Components:** Logo image (left), Navigation links (middle), "More" hover dropdown menu (middle right), and Gold Shimmer CTA (right).

---

## 9. Coding Guidelines & Implementation Rules
When implementing frontend files, you must strictly follow these coding guidelines:

1.  **Server Components First:** Always default pages and layouts to React Server Components (RSC) to maximize SEO optimization and load times. Add `"use client"` *only* when React hooks, client-side event listeners, or custom animation/scroll triggers are required.
2.  **No Custom CSS in Files:** Do not inject custom `<style>` blocks inside component code. Use standard Tailwind CSS classes or extend the theme in `app/globals.css` if absolutely necessary.
3.  **Use Next.js Native Elements:**
    *   *Links:* Always use `Link` from `next/link`.
    *   *Images:* Always use `Image` from `next/image` with proper alt text, sizing configurations, and quality controls.
4.  **Semantic Elements:** Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` appropriately to ensure high-ranking SEO indexability.
5.  **Form Implementations:** All user submission forms (such as on `/contact` or lead forms) should be handled via `react-hook-form` and validated using `zod` schemas. Data mutations should target Next.js Server Actions (`lib/actions.ts`) to interact with the database instead of exposing local client endpoints.
6.  **Responsive Layout:** Build with mobile responsiveness in mind. Ensure cards collapse to single-column arrays on mobile screens (`grid-cols-1`) and scale to multiple columns on desktop layouts (`lg:grid-cols-3` or `lg:grid-cols-4`).
7.  **Clean Modular Files:** Keep code clean. If any code file grows to exceed 150 lines, dissect and refactor interactive sub-elements or static pieces into smaller reusable sub-components.
