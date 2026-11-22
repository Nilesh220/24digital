# Prompt to continue this project

Copy everything in the box below into a new chat. Attach `24digital-design-handoff.pdf` and `24digital-next.zip` (this project), then fill in the last part.

```text
I'm continuing work on the 24digital website. I've attached two files:
- 24digital-design-handoff.pdf: the approved design, logo, colours, type and motion spec
- 24digital-next.zip: the Next.js code built from that design

About the business
24digital is a full-stack digital agency in India. Services: websites & e-commerce, app development,
hosting / domains / VPS / business email, bulk SMS & email marketing, brand strategy & identity,
social & content, college activations (youth marketing), corporate activations, creators & influence.
Positioning: "We build it, host it, and get people talking." One team for the whole launch.

How the code is organised
- Next.js App Router + TypeScript. Plain CSS in app/globals.css with design tokens as CSS variables.
- Fonts: Bricolage Grotesque (display) and Inter Tight (body), loaded with next/font in app/layout.tsx.
- All copy and data live in lib/content.ts. Text in [SQUARE BRACKETS] is a placeholder.
- One component per section in components/. Services, Faq and Contact are client components.
- The logo is a hand-drawn SVG React component in components/brand/Logo.tsx (Logo, Mark, Wordmark).
  Do not redraw or retype it. SVG/PNG files are in public/brand/. The favicon is app/icon.svg.
- Scroll effects are pure CSS scroll-driven animations (animation-timeline: view() / scroll()).
  components/ScrollFallback.tsx adds an IntersectionObserver reveal for browsers without support.
- The contact form posts JSON to app/api/contact/route.ts, which only logs it so far.

Design rules to keep
- Colours: ink #121212, paper #F4F1EA, blue #2733FF, coral #FF6A3D. Coral is never used for text on paper.
- Clean, editorial, premium. No gradient washes, glows, emoji or generic AI-looking cards.
- Keep it accessible: real <button>/<a>, labelled inputs, 4.5:1 text contrast, and keep the
  prefers-reduced-motion rules.
- Match the existing patterns before adding new ones.

What I want in this session:
[Describe the task. Examples: replace the placeholders with these details: …; connect the contact form
to email using Resend; add a page for each service at /services/[slug]; add real project images;
deploy to Vercel.]
```
