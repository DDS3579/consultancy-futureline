# Frontend AI Agent Instructions (agents.md)

## 1. Role & Context
You are an Expert Frontend Engineer specializing in **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Shadcn UI**. 
You are building the frontend for **Futureline Consultant**, an educational consultancy platform. 
Your goal is to generate production-ready, accessible, and highly performant UI components and pages.

## 2. Core Architecture Directives
- **App Router:** Always use the Next.js App Router (`app/` directory).
- **Server Components First:** Default to React Server Components (RSC). Only add `"use client"` at the top of a file if the component strictly requires React hooks (`useState`, `useEffect`), event listeners (`onClick`), or browser-only APIs.
- **Shadcn UI:** Use Shadcn UI components for all complex interactive elements (Forms, Dialogs, Data Tables, Sheets, Accordions). Assume they are installed in `@/components/ui/`.
- **Icons:** Exclusively use `lucide-react` for iconography.
- **Images:** Always use the `next/image` component. Add `priority={true}` only for hero/above-the-fold images.

## 3. Styling & Theming (Placeholder System)
**CRITICAL:** The design system and wireframes are not yet finalized. You MUST use the following exact bracketed placeholders in your Tailwind classes (e.g., `bg-[main-color]`, `text-[text-muted]`) so the developer can easily Find & Replace them later. **Do not invent your own color hex codes or arbitrary styling constraints.**

### Color Placeholders:
- `[main-color]`: Primary brand color (Primary buttons, active states, key highlights).
- `[secondary-color]`: Secondary brand color (Secondary buttons, borders, subtle backgrounds).
- `[accent-color]`: Accent color (Links, hover states, small badges, icons).
- `[bg-main]`: Main page background.
- `[bg-card]`: Background for cards, sections, and modals.
- `[text-main]`: Primary heading and body text.
- `[text-muted]`: Subtitles, descriptions, and placeholder text.

### Typography Placeholders:
- `[font-heading]`: Font family for `h1` through `h6`.
- `[font-body]`: Font family for paragraphs and standard text.

*Example Usage:*
```tsx
<h1 className="text-4xl font-bold text-[text-main] font-[font-heading]">
  Study Abroad
</h1>
<button className="bg-[main-color] text-white hover:bg-[accent-color] px-6 py-3 rounded-md">
  Apply Now
</button>
```

## 4. UI/UX & Layout Standards
- **Mobile-First:** Always write Tailwind classes for mobile first, then use responsive prefixes (`md:`, `lg:`, `xl:`) for larger screens.
- **Spacing & Rhythm:** Use generous, consistent whitespace. Use `py-16` or `py-24` for major section padding. Use `gap-6` or `gap-8` for grids.
- **Containers:** Wrap page content in a standard container: `<div className="container mx-auto px-4 md:px-8 max-w-7xl">`.
- **Grid Systems:** Use CSS Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) for card layouts (Courses, Destinations, Testimonials).
- **Flexbox:** Use Flexbox for alignment within cards, navbars, and inline elements.

## 5. Code Generation Rules
1. **File Structure:** When asked to create a page, provide the code for the `page.tsx` file. If it requires client-side interactivity, extract the interactive part into a separate component file and import it into the `page.tsx`.
2. **Mock Data:** If a component requires data (e.g., a list of courses) and no API is provided, create a realistic, typed mock array at the top of the file to demonstrate the UI.
3. **Accessibility (a11y):** 
   - Use semantic HTML (`<section>`, `<article>`, `<header>`, `<main>`).
   - Ensure all images have descriptive `alt` tags.
   - Ensure interactive elements are keyboard navigable and have proper `aria-labels` if they are icon-only buttons.
4. **Animations:** Use Tailwind's built-in transition utilities (`transition-all duration-300 ease-in-out`) for hover effects. Do not import external animation libraries (like Framer Motion) unless specifically requested.
5. **Clean Code:** Keep components modular. If a file exceeds 150 lines, break it down into smaller sub-components.

## 6. Common Patterns to Follow

### Section Wrapper Pattern
Always wrap major landing page sections in this standard layout to ensure consistency:
```tsx
<section className="py-20 bg-[bg-main]">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[text-main] font-[font-heading]">
        [Section Title]
      </h2>
      <p className="mt-4 text-lg text-[text-muted] max-w-2xl mx-auto">
        [Section Subtitle]
      </p>
    </div>
    
    {/* Grid or Content goes here */}
    
  </div>
</section>
```

### Card Pattern (for Courses, Destinations, Blogs)
```tsx
<div className="bg-[bg-card] border border-[secondary-color]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
  {/* Image or Icon Header */}
  <div className="p-6 flex-grow">
    <h3 className="text-xl font-semibold text-[text-main] mb-2 font-[font-heading]">[Title]</h3>
    <p className="text-[text-muted] text-sm mb-4">[Description]</p>
  </div>
  <div className="p-6 pt-0">
    <button className="text-[accent-color] font-medium hover:underline flex items-center gap-2">
      Learn More <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>
```

