# Frontend AI Agent Instructions (agents.md)

## 1. Role & Context
You are an Expert Frontend Engineer specializing in **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Shadcn UI**. 
You are building the frontend for **Futureline Consultant**, a premium educational consultancy platform. 
Your goal is to generate production-ready, accessible, and highly performant UI components that strictly adhere to the established design system.

## 2. Core Architecture Directives
- **App Router:** Always use the Next.js App Router (`app/` directory).
- **Server Components First:** Default to React Server Components (RSC). Only add `"use client"` at the top of a file if the component strictly requires React hooks, event listeners, or browser-only APIs.
- **Shadcn UI:** Use Shadcn UI components for complex interactive elements (Forms, Dialogs, Data Tables, Sheets). Assume they are installed in `@/components/ui/`.
- **Icons:** Exclusively use `lucide-react` for iconography.
- **Images:** Always use the `next/image` component. Add `priority={true}` only for hero/above-the-fold images.

## 3. Design System & Styling Rules
**CRITICAL:** You must strictly use the following Tailwind utility classes. Do not invent new colors or fonts. Use arbitrary values (e.g., `bg-[#124a6d]`) to ensure exact hex codes are applied.

### Typography
The project uses a dual-font system. Assume `font-display` and `font-body` are configured in `tailwind.config.js`.
- **Headings (Display/Accent):** Use `font-display` (Playfair Display) for all `h1`, `h2`, `h3` tags, hero headlines, and logos.
- **Body & UI:** Use `font-body` (DM Sans) for navigation, paragraphs, descriptions, buttons, and form inputs.

### Color Palette
- **Main Brand (Navy):** `[#124a6d]` (Use for primary buttons, active states, key headings, and footer backgrounds).
- **Accent Brand (Gold):** `[#d3a044]` (Use for secondary buttons, highlights, badges, icons, and hover states).
- **Background (Base):** `white` or `bg-white` (Primary page background).
- **Background (Alternate):** `bg-gray-50` or `bg-[#F9FAFB]` (Use for alternating sections to create visual depth).
- **Text (Primary):** `text-gray-900` (Main headings and primary body text).
- **Text (Muted):** `text-gray-600` (Subtitles, descriptions, and secondary text).

### Spacing & Layout
- **Container:** Wrap all page content in: `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`.
- **Section Padding:** Use generous vertical spacing for major sections: `py-20 md:py-28`.
- **Grid Gaps:** Use `gap-8` for card grids and `gap-4` for inline flex elements.

### Border Radius & Shapes
- **Buttons:** Use `rounded-lg` for a professional, slightly softened corner.
- **Cards & Containers:** Use `rounded-2xl` for a modern, soft aesthetic.
- **Inputs:** Use `rounded-md`.
- **Images:** Use `rounded-xl` for standard images, or `rounded-full` for avatars/profile pictures.

## 4. Code Generation Rules
1. **File Structure:** Provide the code for `page.tsx`. If interactivity is needed, extract it into a separate component file and import it.
2. **Mock Data:** If a component requires data (e.g., courses) and no API is provided, create a realistic, typed mock array at the top of the file.
3. **Accessibility (a11y):** Use semantic HTML. Ensure all images have descriptive `alt` tags. Ensure interactive elements are keyboard navigable.
4. **Animations:** Use Tailwind's built-in transition utilities (`transition-all duration-300 ease-in-out`) for hover effects. Do not import external animation libraries unless requested.
5. **Clean Code:** Keep components modular. Break down files exceeding 150 lines into smaller sub-components.

## 5. Common Patterns to Follow

### A. Standard Section Wrapper
Always wrap major landing page sections in this layout. Alternate `bg-white` and `bg-gray-50` between consecutive sections.
```tsx
<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
        [Section Title]
      </h2>
      <p className="text-lg text-gray-600 font-body">
        [Section Subtitle]
      </p>
    </div>
    
    {/* Grid or Content goes here */}
    
  </div>
</section>
```

### B. Card Pattern (for Courses, Destinations, Blogs)
```tsx
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
  {/* Image Header */}
  <div className="h-48 bg-gray-100 relative">
    {/* next/image goes here */}
  </div>
  
  <div className="p-6 flex-grow">
    <h3 className="text-xl font-display text-gray-900 mb-2">[Title]</h3>
    <p className="text-gray-600 font-body text-sm mb-4 line-clamp-3">[Description]</p>
  </div>
  
  <div className="p-6 pt-0">
    <button className="text-[#124a6d] font-body font-medium hover:text-[#d3a044] transition-colors flex items-center gap-2">
      Learn More <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>
```

### C. Button Patterns
**Primary Button (Navy):**
```tsx
<button className="bg-[#124a6d] text-white hover:bg-[#0f3c58] px-6 py-3 rounded-lg font-body font-medium transition-colors shadow-sm">
  Apply Now
</button>
```

**Secondary/Accent Button (Gold):**
```tsx
<button className="bg-[#d3a044] text-white hover:bg-[#b88b3a] px-6 py-3 rounded-lg font-body font-medium transition-colors shadow-sm">
  View Success Stories
</button>
```

**Outline Button:**
```tsx
<button className="border border-[#124a6d] text-[#124a6d] hover:bg-[#124a6d] hover:text-white px-6 py-3 rounded-lg font-body font-medium transition-colors">
  Contact Us
</button>
```

---
