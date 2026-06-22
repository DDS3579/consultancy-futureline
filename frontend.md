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