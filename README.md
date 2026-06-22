# 🏢 Futureline Consultant - Full-Stack Architecture Plan

## 1. Project Overview
**Futureline Consultant** is a bilingual educational consultancy platform based in Kathmandu, Nepal. This project represents a complete architectural migration from a fragmented Create React App (CRA) + Firebase/EmailJS stack to a **Unified Full-Stack Next.js 15 (App Router)** architecture. 

The new system resolves previous data disconnects, eliminates the need for a separate backend server, ensures SEO optimization via React Server Components (RSC), and provides a fully functional, database-driven Content Management System (CMS) for the admin team.

---

## 2. System Architecture

The application utilizes a **Monolithic Full-Stack Next.js** approach. The frontend and backend logic coexist in a single deployable unit, communicating directly with a managed cloud database.

*   **Client Layer:** React 19 Server & Client Components, Shadcn UI, Three.js (WebGL).
*   **Server Layer:** Next.js Route Handlers, Next.js Server Actions, NextAuth.js (Session Management).
*   **Data Layer:** MongoDB Atlas (Document Database) via Mongoose ODM.
*   **External Services:** EmailJS (Client-side transactional emails).

### Data Flow Diagram
```text
[Browser / Client] 
      │
      ├──(Reads UI)──► React Server Components (SSG/ISR) ──► Mongoose ──► MongoDB
      │
      └──(Mutates)───► Next.js Server Actions ──────────────► Mongoose ──► MongoDB
                             │
                             └──(Triggers)──► EmailJS API ──► futurelineeducation@gmail.com
```

---

## 3. Technology Stack & Dependencies

### Core Framework
*   **Next.js 15** (App Router, React 19)
*   **TypeScript** (Strict typing across the stack)

### UI & Styling
*   **Tailwind CSS** (Utility-first styling engine)
*   **Shadcn UI** (Accessible, unstyled React components built on Radix UI)
*   **Lucide React** (Iconography)
*   **Three.js** (`@react-three/fiber`, `@react-three/drei`) (3D Hero Background)

### Database & Backend Logic
*   **MongoDB Atlas** (NoSQL Cloud Database)
*   **Mongoose** (Elegant MongoDB object modeling for Node.js)
*   **NextAuth.js / Auth.js** (Authentication & Session Management)

### Forms, Validation & State
*   **React Hook Form** (Performant form state management)
*   **Zod** (`@hookform/resolvers/zod`) (TypeScript-first schema validation)
*   **Sonner** (Toast notification system)

### Localization & Utilities
*   **next-intl** (Internationalization for English/Nepali)
*   **@emailjs/browser** (Client-side email routing)
*   **date-fns** (Date manipulation and formatting)

---

## 4. Directory Architecture (Non-`src` Root)

```text
futureline-consultant/
├── app/
│   ├── (public)/                  # 🌐 Public Marketing Routes
│   │   ├── layout.tsx             # Navbar, Footer, 3D Wrapper
│   │   ├── page.tsx               # Home (/)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── destinations/page.tsx
│   │   ├── courses/page.tsx       # Server Component (Fetches from DB)
│   │   ├── success-stories/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx           # Blog Directory (ISR)
│   │   │   └── [slug]/page.tsx    # Individual Blog Post
│   │   └── contact/page.tsx       # Lead Form (EmailJS + Server Action)
│   │
│   ├── (admin)/                   # 🔒 Protected CMS Routes
│   │   ├── layout.tsx             # Admin Sidebar, Auth Guards
│   │   ├── admin/page.tsx         # Dashboard Overview
│   │   ├── admin/leads/page.tsx
│   │   ├── admin/blogs/page.tsx
│   │   ├── admin/courses/page.tsx
│   │   └── admin/testimonials/page.tsx
│   │
│   ├── api/                       # ⚙️ Next.js API Routes
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── upload/route.ts        # Image/File handling (Optional)
│   │
│   ├── globals.css                # Tailwind directives
│   └── layout.tsx                 # Root HTML Layout
│
├── components/                    # 🧩 Reusable UI Components
│   ├── ui/                        # Shadcn UI Primitives
│   ├── 3d/                        # Three.js Canvas Components
│   └── layout/                    # Navbar, Footer, LocaleSwitcher
│
├── lib/                           # 🛠️ Utilities & Core Logic
│   ├── db.ts                      # Mongoose Connection Singleton
│   ├── auth.ts                    # NextAuth Configuration
│   ├── actions.ts                 # Next.js Server Actions (Mutations)
│   └── utils.ts                   # cn() helper for Tailwind/Shadcn
│
├── models/                        # 🗄️ Mongoose Database Schemas
│   ├── User.ts
│   ├── Lead.ts
│   ├── Blog.ts
│   ├── Course.ts
│   └── Testimonial.ts
│
├── locales/                       # 🌍 i18n Dictionaries
│   ├── en.json
│   └── ne.json
│
├── middleware.ts                  # Route Protection & i18n Routing
├── next.config.ts                 # Next.js Configuration
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. Database Schema Design (Mongoose)

The MongoDB database consists of five primary collections:

1.  **`User`**: Admin credentials (Email, Hashed Password).
2.  **`Lead`**: Contact form submissions (Name, Email, Phone, Message, Timestamp, Status).
3.  **`Blog`**: CMS Articles (Title, Slug, Content, CoverImage, Author, PublishedAt).
4.  **`Course`**: Study abroad directory (Title, University, Country, Duration, Tuition, Level).
5.  **`Testimonial`**: Student success stories (Name, Image, Story, Rating, University).

---

## 6. Implementation Phases

### Phase 1: Environment & Bootstrapping
*   Initialize Next.js App Router with TypeScript and Tailwind.
*   Configure `tsconfig.json` path aliases (`@/*`).
*   Initialize Shadcn UI and install core components (`button`, `input`, `card`, `dialog`, `form`, `table`).
*   Setup MongoDB Atlas cluster and obtain connection string.

### Phase 2: Database & Authentication Layer
*   Implement `lib/db.ts` (Mongoose connection singleton to prevent serverless hot-starts).
*   Define all Mongoose models in `/models`.
*   Configure `lib/auth.ts` (NextAuth v5) using the `Credentials` provider.
*   Implement `middleware.ts` to protect `/(admin)/*` routes from unauthenticated access.

### Phase 3: Public Frontend & 3D Integration
*   Build the Root and Public Layouts (Navbar, Footer).
*   Implement `next-intl` for English/Nepali language switching.
*   Wrap Three.js `HeroCanvas` in `next/dynamic` with `ssr: false` to ensure safe client-side rendering.
*   Develop `Contact` page: Integrate `react-hook-form`, `zod`, `emailjs`, and a Server Action to persist leads to MongoDB simultaneously.

### Phase 4: The CMS (Admin Dashboard)
*   Build the Admin Layout with a sidebar navigation.
*   Develop CRUD Server Actions (`lib/actions.ts`) for Blogs, Courses, and Testimonials.
*   Implement Shadcn `DataTable` for viewing and managing Leads and CMS content.
*   Build the Blog Editor (Rich text or Markdown) and Image upload handling.

### Phase 5: Optimization & SEO
*   Implement `generateMetadata()` for all public pages (Dynamic SEO for Destinations and Blog Posts).
*   Configure Next.js `<Image>` component with `remotePatterns` for MongoDB image URLs.
*   Enable ISR (Incremental Static Regeneration) for the Blog directory.

---

## 7. Installation & Setup Commands

Run the following commands in your terminal to install all required dependencies for the unified stack:

```bash
# 1. Core Next.js & React Dependencies (if starting from scratch)
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"

# 2. Database, Auth, and Backend Utilities
npm install mongoose next-auth@beta

# 3. Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# 4. 3D Background (Three.js)
npm install three @react-three/fiber @react-three/drei

# 5. Localization, Notifications, and Email
npm install next-intl sonner @emailjs/browser

# 6. Icons & Date Utilities
npm install lucide-react date-fns

# 7. Initialize Shadcn UI
npx shadcn@latest init
# (Select: New York style, Zinc base color, Yes to CSS variables)

# 8. Add required Shadcn components
npx shadcn@latest add button input label card form dialog sheet table badge dropdown-menu select textarea
```

---

## 8. Environment Variables (`.env.local`)

Create a `.env.local` file in the root directory. **Never commit this file to version control.**

```env
# ==========================================
# DATABASE
# ==========================================
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/futureline?retryWrites=true&w=majority"

# ==========================================
# AUTHENTICATION (NextAuth.js)
# ==========================================
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate_a_long_random_string_here"

# ==========================================
# EXTERNAL SERVICES (EmailJS)
# ==========================================
NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_xxxxxxx"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_xxxxxxx"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key_here"
```

---

## 9. Engineering Standards & Best Practices

1.  **Server Components by Default:** All pages in `app/(public)` must be React Server Components unless `"use client"` is strictly required (e.g., for React Hook Form or Three.js).
2.  **Data Mutations:** Use **Next.js Server Actions** for all form submissions and CMS updates. Avoid creating `app/api/...` routes for internal form submissions.
3.  **Type Safety:** All Mongoose schemas must have corresponding TypeScript interfaces exported to ensure type safety when data is passed to frontend components.
4.  **Error Handling:** Wrap Server Actions in `try/catch` blocks and return standard `{ success: boolean, error?: string }` objects to trigger `sonner` toast notifications on the client.

***

