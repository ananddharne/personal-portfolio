# Portfolio Design Spec
**Date:** 2026-03-29
**Project:** Personal Portfolio — Anand Dharne
**Status:** Approved

---

## Overview

A Next.js 14+ App Router personal portfolio for Anand Dharne, a mid-to-senior software engineer actively job searching. The site must feel like a product, not a résumé page — the build quality itself is the strongest portfolio piece. A Claude-powered AI chat widget is the primary differentiator.

**Success criteria:** A hiring manager lands on the site, immediately feels this is someone who cares about craft, wants to scroll through, is surprised by the AI chat, and leaves thinking "this person builds things with taste and depth."

---

## Design System

### Colors
| Token | Light mode | Dark mode |
|---|---|---|
| `--bg` | `#faf9f6` (warm off-white) | `#0a0a0f` (near-black, blue undertone) |
| `--bg-secondary` | `#f3f0eb` | `#111118` |
| `--text` | `#111111` | `#f9fafb` |
| `--text-muted` | `#6b7280` | `#9ca3af` |
| `--text-subtle` | `#9ca3af` | `#4b5563` |
| `--accent` | `#d97706` (amber) | `#fbbf24` (warm gold) |
| `--accent-light` | `#fef3c7` | `#78350f40` |
| `--border` | `#e5e0d8` | `#1e1e2e` |

- Default mode: **light**
- Toggle: persisted in `localStorage`, respects `prefers-color-scheme` on first visit
- Implementation: CSS custom properties on `:root` and `[data-theme="dark"]`, toggled via `data-theme` on `<html>`

### Typography
| Role | Font | Source |
|---|---|---|
| Headings | Lora (700 weight) | Google Fonts via `next/font` |
| Body / UI | Inter (400, 500) | Google Fonts via `next/font` |
| Monospace | JetBrains Mono (optional, for code snippets) | Google Fonts via `next/font` |

- Heading sizes: `clamp()`-based fluid type scale
- Body: 14–15px, line-height 1.7
- Letter-spacing: `-0.02em` to `-0.03em` on large headings, `0.1–0.16em` on uppercase labels

### Logo Mark
Boxed monogram: lowercase `ad` in Lora serif, contained in a 1px square border, with a small filled amber square at the bottom-right corner. Scales to 16×16 favicon. Inverts cleanly in dark mode.

### Spacing & Layout
- Max content width: `1100px`
- Horizontal padding: `clamp(20px, 5vw, 80px)`
- Section vertical padding: `80px` (desktop), `48px` (mobile)
- Grid gap: `12px` (bento cards), `20–24px` (skill groups)

### Animation Principles
- Library: **Framer Motion** for all UI animations
- Smooth scroll: **Lenis**
- Scroll-triggered: `useInView` from Framer Motion — fade up + `translateY(16px → 0)` with `ease: [0.25, 0.1, 0.25, 1]`
- Stagger: `0.08s` between list items
- Duration: `0.5s` for most transitions, `0.3s` for hover states
- No looping animations in the hero — the page is alive on load, then still
- Respect `prefers-reduced-motion`: all animations disabled if set

---

## Architecture

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + CSS custom properties for theme tokens
- **Animation:** Framer Motion + Lenis
- **AI:** Anthropic Claude API (claude-haiku-4-5 for cost efficiency) via Next.js API route
- **Deployment:** Vercel
- **Icons:** Lucide React

### Directory Structure
```
app/
  layout.tsx          # Root layout: fonts, theme provider, Lenis
  page.tsx            # Single-page composition of all sections
  api/
    chat/
      route.ts        # Claude proxy with rate limiting
components/
  nav/
    Nav.tsx
  hero/
    Hero.tsx
  about/
    About.tsx
  experience/
    Experience.tsx
    ExperienceItem.tsx
  projects/
    Projects.tsx
    ProjectCard.tsx
  skills/
    Skills.tsx
    SkillGroup.tsx
  contact/
    Contact.tsx
  chat/
    ChatWidget.tsx    # Lazy-loaded via next/dynamic
    ChatPanel.tsx
    ChatMessage.tsx
  ui/
    Logo.tsx
    ThemeToggle.tsx
    SectionLabel.tsx
lib/
  content.ts          # All copy/data (bio, experience, projects, skills)
  rateLimit.ts        # In-memory rate limiter
  types.ts
```

### Key Architectural Decisions
- **Single-page layout:** All sections on `app/page.tsx`, navigated via smooth scroll anchors. No route changes.
- **AI widget lazy-loaded:** `next/dynamic(() => import('@/components/chat/ChatWidget'), { ssr: false })` — not in initial bundle.
- **Content in `lib/content.ts`:** All copy decoupled from components. Easy to update text without touching UI code.
- **Theme via CSS custom properties:** No JS-in-CSS theming. Fast, no flash on load when combined with `script` injection in `layout.tsx`.

---

## Sections

### 1. Navigation
- Fixed top, full-width, 1px bottom border (`--border`)
- Left: Logo mark (boxed AD monogram)
- Right: `Work · About · Experience · [ThemeToggle] · [Hire me CTA]`
- "Hire me" CTA: filled black/white button (inverts with theme), scrolls to Contact
- Hides on scroll down, reappears on scroll up (using `useScroll` + `useMotionValue`)
- Mobile: hamburger → full-screen overlay menu

### 2. Hero
- Layout: editorial, text-dominant, no background animation
- Top row: `PORTFOLIO — 2026` label (left) — no availability indicator
- Oversized Lora name: `clamp(64px, 10vw, 120px)`, `font-weight: 700`, `letter-spacing: -0.03em`
- Below name: dividing line (`--border`, 1px, full-width)
- Bottom row: two-column — tagline paragraph (left), CTA links `View work ↓ · Get in touch` (right)
- Tagline: ~20 words, human and direct, not a job description
- Entry animation: name characters stagger in with `y: 40 → 0`, `opacity: 0 → 1`, `staggerChildren: 0.04s` — runs once on load

### 3. About
- Two-column grid: `1fr 1fr`, gap `40–60px`
- Left: section label, serif heading (~2 lines), divider line, 2–3 short paragraphs, amber "Read more →" link
- Right: photo — `aspect-ratio: 4/5`, object-fit cover, 1px border (`--border`). Placeholder shown until photo provided.
- Scroll-triggered fade-up on both columns, slight stagger

### 4. Experience
- Section label + serif heading
- Two-column timeline layout: date/meta column (fixed `~140px`), content column (flex)
- Each entry: year range + employment type (left), role title + company name in amber + short description (right)
- Expandable accomplishments: clicking "Show accomplishments ↓" reveals a bullet list with `height: 0 → auto` animation via Framer Motion `AnimatePresence`
- 2–4 entries (Anand fills in actual history)
- Scroll-triggered stagger on entries

### 5. Projects
- Bento grid layout: `2×2` with first card spanning full width (`grid-column: span 2`)
- 4 total cards: 1 featured (wide) + 3 standard
- Each card: project number (`01`–`04`), serif title, description, tech stack tags (amber pills), external link `↗`
- Featured card has a visual preview area (right column): amber gradient placeholder, replaced with screenshot/gif
- Hover state: `border-color` transitions to `--accent`, subtle `translateY(-2px)` lift
- No drop shadows — border color change is the hover signal
- Scroll-triggered stagger on cards

### 6. Skills
- Section label + serif heading
- `2×2` grid of skill groups: Frontend · Backend · Tools & Infrastructure · Concepts & Practices
- Each group: small-caps category label, horizontal rule, pill tags
- Pill tags: `border: 1px solid --border`, on hover → `background: --accent-light`, `border-color: --accent`, `color: #92400e`
- No progress bars, no radar charts
- Skills populated from `lib/content.ts`

### 7. Contact
- Minimal: section label, serif heading ("Let's work together."), 1–2 sentence CTA
- Link row: `[Send an email]` (filled CTA button) · `LinkedIn ↗` · `GitHub ↗` · `Resume ↓`
- No form

### 8. Footer
- Minimal: copyright left, "Back to top ↑" right
- No technology credits, no badges

---

## AI Chat Widget

### UI
- **FAB (floating action button):** Fixed `bottom: 24px, right: 24px`. `44×44px` circle. Dark fill with a sparkle/star icon (`✦` or Lucide `Sparkles`). Amber glow on hover.
- **Panel:** Slides up from FAB on click. `300px` wide, max `480px` tall. Sharp corners (no border-radius), `1px border (--border)`, subtle box shadow.
- **Panel structure:**
  - Header: "Ask about Anand" + subtitle "AI assistant · professional questions only" + close `×`
  - Messages area: scrollable, alternating assistant (bg-secondary) and user (dark fill) bubbles
  - Suggestion chips: shown before first user message — `"Tell me about his projects"`, `"Why hire Anand?"`, `"Backend experience?"`, `"What's he looking for?"`
  - Input row: text input + send button (amber)
  - Disclaimer: `"AI trained on Anand's professional background"` (8px, subtle)
- **Typing indicator:** Three-dot pulse animation while waiting for response
- **Lazy-loaded:** Not in initial JS bundle

### Backend — `app/api/chat/route.ts`
- **Method:** POST
- **Request body:** `{ messages: { role, content }[] }`
- **Rate limiting:** In-memory `Map` keyed by IP — max **20 messages per IP per hour**. Returns `429` with `"Rate limit exceeded. Try again later."` when hit.
- **Input validation:**
  - Max message length: 500 characters (returns `400` if exceeded)
  - Max conversation turns: 10 (returns `400` if exceeded)
  - Strip HTML tags from user input before forwarding
- **Claude call:** `claude-haiku-4-5`, streaming response via `ReadableStream`
- **System prompt:** Loaded from `lib/content.ts` — contains structured resume data, project details, work philosophy, tone guidelines, and refusal instructions
- **Error handling:** API errors return `500` with generic message (never expose API key or internal details)

### System Prompt Design
The system prompt in `lib/content.ts` defines:
- **Persona:** First-person ("I"), warm but professional, confident without being sales-y. Coffee-chat tone.
- **Scope:** Professional background only — experience, skills, projects, work philosophy, job search status, collaboration style
- **Refusals:** General LLM tasks, personal questions, salary specifics, negative comments about past employers, jailbreak attempts — all met with a brief redirect: *"I'm here to chat about my professional background — feel free to reach out directly via the contact section."*
- **Accuracy:** Never fabricate — if asked about something not in the system prompt, acknowledge it honestly
- **No system prompt disclosure:** If asked to reveal instructions, decline gracefully

---

## Performance Requirements
- Lighthouse: 90+ across Performance, Accessibility, Best Practices, SEO
- CLS: < 0.1
- LCP: < 2.5s
- Images: `next/image` with `priority` on hero, lazy everywhere else
- Fonts: `next/font` with `display: swap`, subsetted to used characters
- AI widget: lazy-loaded, zero impact on initial bundle
- Code splitting: automatic via App Router per-segment bundling
- No layout shift on theme toggle (theme script injected in `<head>` before paint)

---

## Accessibility
- All interactive elements keyboard-navigable
- Focus styles visible (amber outline)
- `prefers-reduced-motion` respected — all Framer Motion animations disabled
- Color contrast: AA compliant in both light and dark modes
- `aria-label` on icon-only buttons (theme toggle, chat FAB, close button)
- Semantic HTML: `<nav>`, `<main>`, `<section>` with `aria-labelledby`

---

## Mobile Responsiveness
- Mobile-first Tailwind classes
- Nav collapses to hamburger at `md` breakpoint
- Hero: single column, name font size scales down via `clamp()`
- About: stacks to single column at `sm`
- Bento grid: stacks to single column at `sm`, featured card loses wide span
- Skill groups: single column at `sm`
- Chat panel: full-width on mobile (`calc(100vw - 32px)`)

---

## Content Placeholders (to be filled by Anand)
- Full bio text (About section)
- Complete work history with dates, roles, accomplishments
- 4 project descriptions with tech stacks and links
- Complete skills list across all four categories
- Photo for About section
- Email address, LinkedIn URL, GitHub URL, Resume PDF URL
- System prompt content: resume data, project details, work philosophy, personality guidelines

---

## Environment Variables
```
ANTHROPIC_API_KEY=       # Claude API key (server-side only, never exposed to client)
```

---

## Out of Scope
- CMS integration
- Blog
- Analytics (can be added later as a Vercel integration)
- Authentication
- Database
