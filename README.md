# 24digital — website

Next.js (App Router) + TypeScript. Built from the approved 24digital design handoff (see `docs/24digital-design-handoff.pdf`).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Needs Node 20 or newer.

## Deploy to Vercel

The project is pre-configured for one-click deployment on **Vercel**:

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. Framework Preset: **Next.js** (auto-detected).
4. (Optional) Set Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (defaults to `https://24digital.in`).
   - `CONTACT_WEBHOOK_URL`: Webhook URL (Slack, Discord, Zapier) to receive contact form leads.
5. Click **Deploy**.

`vercel.json` already includes:
- Strict security headers (`HSTS`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`).
- Immutable caching for brand assets and static files.
- Clean URL handling.

## SEO & Social Sharing (Included)

- **Dynamic Open Graph & Twitter Cards**: Handled via `app/opengraph-image.tsx` and `app/twitter-image.tsx` at 1200×630, rendering the custom brand mark, headline, and pill highlights.
- **Search Engine Metadata**: Configured in `app/layout.tsx` with canonical URLs, keywords, localized Open Graph tags (`en_IN`), and author/publisher tags.
- **Search Engine Sitemap**: Auto-generated dynamically at `/sitemap.xml` via `app/sitemap.ts`.
- **Robots Directives**: Configured at `/robots.txt` via `app/robots.ts`.
- **JSON-LD Structured Data**: Schema.org `ProfessionalService` definition in `<head>` for rich Google search snippets.
- **PWA Manifest**: Web app manifest at `/manifest.webmanifest` via `app/manifest.ts`.

## Where things are

| What | Where |
|---|---|
| All copy, services, plans, FAQ | `lib/content.ts` |
| Colours, type, spacing, all styles and motion | `app/globals.css` (tokens at the top) |
| Fonts + SEO metadata + JSON-LD | `app/layout.tsx` |
| Dynamic OG / Twitter preview card | `app/opengraph-image.tsx`, `app/twitter-image.tsx` |
| Sitemap & Robots | `app/sitemap.ts`, `app/robots.ts` |
| Web app manifest | `app/manifest.ts` |
| Vercel deployment config | `vercel.json` |
| Page sections, in order | `components/HomePage.tsx` |
| Logo (React, hand-drawn SVG) | `components/brand/Logo.tsx` → `<Logo/>`, `<Mark/>`, `<Wordmark/>` |
| Logo files (SVG/PNG) | `public/brand/` |
| Favicon / app icon | `app/icon.svg` |
| Contact form endpoint | `app/api/contact/route.ts` (logs + optional webhook) |
| Scroll-effect fallback (Firefox) | `components/ScrollFallback.tsx` |

## Pre-Launch Checklist

1. Replace remaining placeholders in `lib/content.ts` (marked with `[SQUARE BRACKETS]`):
   - Phone, email, city (`site.email`, `site.phone`, `site.city`)
   - Hosting plan pricing (`plans[].price`)
   - Client case studies & results (`work[]`)
   - Campuses & cities covered in FAQ (`faqs[3].a`)
   - Real social profile URLs in `site.social`
2. Add real project images in `components/Work.tsx` if desired.
3. Configure `CONTACT_WEBHOOK_URL` in Vercel to route inquiries directly to your team channel or CRM.
