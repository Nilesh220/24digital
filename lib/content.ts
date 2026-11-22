/**
 * All website copy, service data, and business configuration.
 * Plain text, structured, and strictly typed.
 */

export const site = {
  name: '24digital',
  legalName: '24digital Agency',
  url: 'https://24digital.store',
  email: 'support@24digital.store',
  city: 'Mumbai, India',
  address: 'Mumbai, Maharashtra, India',
  primaryPhone: '+91 86992 60386',
  secondaryPhone: '+91 82358 49776',
  phones: ['+91 86992 60386', '+91 82358 49776'],
  primaryWhatsapp: '918699260386',
  secondaryWhatsapp: '918235849776',
  whatsapps: [
    {
      number: '+91 86992 60386',
      raw: '918699260386',
      label: 'Marketing & Websites',
      badge: 'MAIN',
      primary: true,
      role: 'marketing_web',
    },
    {
      number: '+91 82358 49776',
      raw: '918235849776',
      label: 'App Dev & SMS Services',
      badge: 'DEV & SMS',
      primary: false,
      role: 'app_sms',
    },
  ],
  // Social profiles: items with '#' are hidden in the UI until real URLs are supplied
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'How we work', href: '/#process' },
  { label: 'Hosting', href: '/#hosting' },
  { label: 'Work', href: '/#work' },
  { label: 'FAQ', href: '/#faq' },
];

export const hero = {
  eyebrow: 'Tech · Hosting · Marketing — one team',
  lines: ['We build it,', 'host it, and get', 'people'],
  highlight: 'talking.',
  sub: 'Websites, apps, hosting, bulk SMS, email and performance marketing — plus the campus tours, office activations and creator campaigns that get it all noticed. One team does the whole job, so you only brief once.',
};

export const marquee = [
  'Websites & E-commerce',
  'Mobile Apps',
  'Hosting & Domains',
  'VPS Servers',
  'Bulk SMS & Email',
  'Performance Marketing',
  'Meta & Google Ads',
  'SEO',
  'Brand Identity',
  'Social & Content',
  'College Activations',
  'Corporate Activations',
  'Creators & UGC',
];

/** Words wrapped in *asterisks* are highlighted in brand blue. */
export const manifesto =
  'Most launches need a web agency, a hosting company, an SMS vendor and an events crew — and half the budget goes into getting them to talk to each other. *We *are *all *four. One brief. One team. *One *number *to *call.';

export type Pillar = 'Build' | 'Host' | 'Reach' | 'Brand' | 'Activate';

export type Service = {
  id: string;
  slug: string;
  num: string;
  pillar: Pillar;
  name: string;
  short: string;
  desc: string;
  items: string[];
  heroIntro: string;
  metaTitle: string;
  metaDesc: string;
  whatIsIncluded: { title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  whoItIsFor: { profile: string; desc: string }[];
  visualType: 'code' | 'mobile' | 'server' | 'messaging' | 'identity' | 'social' | 'campus' | 'corporate' | 'creator' | 'ads';
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    id: 'web',
    slug: 'website-development',
    num: '01',
    pillar: 'Build',
    name: 'Websites & E-commerce',
    short: 'your website',
    desc: 'Sites that load fast, rank well and are easy for your team to update — from a one-page launch to a full online store.',
    items: ['Business websites', 'E-commerce stores', 'Landing pages', 'Next.js & Shopify', 'Speed optimization', 'Interactive campaigns'],
    heroIntro: 'Fast, secure websites engineered with clean code and modern frameworks. Designed in Mumbai for brands that need their online presence to turn visitors into paying customers.',
    metaTitle: 'Website Development & E-Commerce in Mumbai | 24digital',
    metaDesc: 'Custom high-speed website development and e-commerce stores in Mumbai. Built on Next.js and Shopify with zero bloat, mobile optimization, and built-in SEO.',
    whatIsIncluded: [
      { title: 'Custom business websites', desc: 'Handcrafted Next.js and React web builds tailored to your brand identity, with zero generic templates.' },
      { title: 'E-commerce stores', desc: 'Shopify, WooCommerce, and headless e-commerce architectures optimized for fast checkout and Indian payment gateways.' },
      { title: 'High-converting landing pages', desc: 'Laser-focused lead-generation pages built for ad traffic, festival promotions, and product drops.' },
      { title: 'Speed & Core Web Vitals', desc: 'Sub-second loading times with clean asset delivery, image compression, and modern server rendering.' },
      { title: 'CMS integration', desc: 'Sanity, Strapi, or WordPress backends that make updating copy, products, and blogs effortless for your team.' },
      { title: 'Built-in technical SEO', desc: 'Semantic HTML, structured JSON-LD schemas, automated sitemaps, and optimized open-graph previews.' },
    ],
    howItWorks: [
      { step: '01', title: 'Briefing & wireframes', desc: 'We clarify your user journey, conversions goals, and site architecture before writing a line of code.' },
      { step: '02', title: 'Design & prototyping', desc: 'High-fidelity Figma prototypes matching your exact brand colors, typography, and responsive breakpoints.' },
      { step: '03', title: 'Clean development', desc: 'Production-ready code built with modern Next.js/React, tested across devices and screen widths.' },
      { step: '04', title: 'Launch & DNS setup', desc: 'Domain configuration, SSL certificates, speed verification, and analytics installation handled in-house.' },
    ],
    whoItIsFor: [
      { profile: 'D2C & retail brands', desc: 'Businesses launching products that require fast page loads and smooth mobile checkouts.' },
      { profile: 'B2B & service firms', desc: 'Companies needing credible, executive-standard websites that win enterprise RFPs and client trust.' },
      { profile: 'Startups & funded ventures', desc: 'Founders preparing for launch week, press releases, or fundraising with tight delivery timelines.' },
    ],
    visualType: 'code',
    faqs: [
      { q: 'How long does it take to build a website with 24digital?', a: 'A standard marketing website takes 2 to 4 weeks from brief to deployment. Custom e-commerce platforms or web applications typically take 4 to 8 weeks depending on catalog size and integrations.' },
      { q: 'Can our internal team edit copy and images after launch?', a: 'Yes. We connect an intuitive CMS (Content Management System) so your team can publish blog posts, swap banners, and update text without touching code.' },
      { q: 'Do you build on Next.js or WordPress?', a: 'We build primarily with Next.js and React for ultra-fast performance, security, and scalability. For clients who specifically request standard CMS workflows, we also deploy headless WordPress and Shopify.' },
      { q: 'How much does website development cost in India?', a: 'Pricing depends on page count, e-commerce functionality, and custom integrations. WhatsApp us or submit your brief below and we will send a clear, itemized proposal within 24 hours.' },
    ],
    relatedSlugs: ['web-hosting-domains', 'performance-marketing', 'branding-agency'],
  },
  {
    id: 'app',
    slug: 'app-development',
    num: '02',
    pillar: 'Build',
    name: 'App Development',
    short: 'your app',
    desc: 'Android and iOS apps designed around how people really use them, with the admin panel and back end to run the business behind them.',
    items: ['Android apps', 'iOS apps', 'Cross-platform Flutter / React Native', 'Admin panels', 'API backend', 'Ongoing support'],
    heroIntro: 'Native and cross-platform mobile apps for Android and iOS that feel snappy, intuitive, and reliable. Engineered in Mumbai with production-grade backend infrastructure.',
    metaTitle: 'Mobile App Development in Mumbai | 24digital',
    metaDesc: 'iOS and Android mobile app development in Mumbai. From intuitive UI/UX design to scalable cloud backends, payment gateways, and app store publishing.',
    whatIsIncluded: [
      { title: 'iOS & Android mobile apps', desc: 'High-performance cross-platform applications built with React Native and Flutter for seamless experiences on both stores.' },
      { title: 'Custom admin dashboards', desc: 'Secure web admin portals for managing users, products, orders, content, and real-time operations.' },
      { title: 'Cloud APIs & backend architecture', desc: 'Scalable REST and GraphQL endpoints backed by PostgreSQL, MongoDB, and Redis caching.' },
      { title: 'Payment & notification gateways', desc: 'Seamless integration with Razorpay, Cashfree, UPI, Firebase Push Notifications, and SMS OTP providers.' },
      { title: 'App store deployment', desc: 'Complete end-to-end publishing, screenshot preparation, privacy compliance, and store approval handling.' },
      { title: 'Maintenance & version updates', desc: 'Post-launch monitoring, security patches, OS version compatibility updates, and crash diagnostics.' },
    ],
    howItWorks: [
      { step: '01', title: 'Product scope & UX flow', desc: 'Mapping user journeys, permission models, screen states, and database schema.' },
      { step: '02', title: 'Interface design', desc: 'Clean, platform-native mobile design following Apple Human Interface and Google Material guidelines.' },
      { step: '03', title: 'App & API engineering', desc: 'Simultaneous development of the mobile client and cloud API with real-time sync capabilities.' },
      { step: '04', title: 'Testing & Store Submission', desc: 'Rigorous testing across screen resolutions followed by Apple App Store and Google Play submissions.' },
    ],
    whoItIsFor: [
      { profile: 'Customer-facing apps', desc: 'Brands launching loyalty apps, shopping portals, event passes, or booking platforms.' },
      { profile: 'Internal enterprise tools', desc: 'Businesses that require field force apps, warehouse tracking, or on-ground activation check-in apps.' },
      { profile: 'Product startups', desc: 'Founders building MVPs with rapid iteration cycles and scalable database requirements.' },
    ],
    visualType: 'mobile',
    faqs: [
      { q: 'Do you develop for both Android and iOS?', a: 'Yes. We use modern cross-platform frameworks (React Native and Flutter) to build high-performance apps that share business logic while retaining native feel on both Android and iPhone.' },
      { q: 'Will you help publish our app to the Google Play Store and Apple App Store?', a: 'Yes. We handle the entire release pipeline including developer account configurations, privacy disclosures, metadata preparation, and review approvals.' },
      { q: 'Who owns the app source code and intellectual property?', a: 'You do. Upon project completion and final sign-off, full intellectual property and repository rights are transferred directly to your organization.' },
      { q: 'How much does mobile app development cost?', a: 'Costs vary depending on features, third-party APIs, and offline capabilities. Reach out via WhatsApp with your feature scope for a transparent estimate.' },
    ],
    relatedSlugs: ['website-development', 'bulk-sms-email-marketing', 'web-hosting-domains'],
  },
  {
    id: 'host',
    slug: 'web-hosting-domains',
    num: '03',
    pillar: 'Host',
    name: 'Hosting & Domains',
    short: 'hosting',
    desc: 'Hosting, domains and VPS that stay up, plus email on your own domain — set up and maintained by the people who built your site.',
    items: ['Web hosting', 'Domain registration', 'VPS servers', 'Business email', 'SSL & DNS security', 'Daily backups'],
    heroIntro: 'Enterprise cloud hosting, domain registrations, and managed VPS servers engineered to keep your website fast and accessible 24/7. Maintained by the team that built your site.',
    metaTitle: 'Web Hosting, Domains & Managed VPS in Mumbai | 24digital',
    metaDesc: 'Managed cloud hosting, domain registration, VPS servers, and professional business email in Mumbai. Zero downtime migrations, SSL certificates, and 24/7 monitoring.',
    whatIsIncluded: [
      { title: 'High-speed cloud hosting', desc: 'Optimized server stacks with NVMe storage, HTTP/3, and edge CDN caching for fast global response times.' },
      { title: 'Dedicated VPS servers', desc: 'Isolated resources for database-heavy web applications, high-concurrency campaigns, and internal tools.' },
      { title: 'Domain registration & DNS', desc: 'Assistance with domain purchases (.in, .store, .com), DNSSEC, and records management.' },
      // CONFIRM: Confirm default domain registrar used for client registrations.
      { title: 'Professional business email', desc: 'Custom domain email accounts (e.g. you@yourbrand.store) configured with proper SPF, DKIM, and DMARC records.' },
      { title: 'Automated SSL & Security', desc: 'Automated SSL renewals, firewall protection, DDoS mitigation, and brute-force shielding.' },
      { title: 'Automated backups & recovery', desc: 'Daily automated offsite snapshots with one-click restore capabilities for complete peace of mind.' },
    ],
    howItWorks: [
      { step: '01', title: 'Workload assessment', desc: 'We calculate required CPU, RAM, bandwidth, and database scaling based on your current and expected traffic.' },
      { step: '02', title: 'Server provisioning', desc: 'Clean server setup with hardened SSH keys, optimized web servers (Nginx/Node), and automated caching.' },
      { step: '03', title: 'DNS & email configuration', desc: 'Routing MX, SPF, DKIM, and DMARC records so your business emails land in inboxes rather than spam folders.' },
      { step: '04', title: '24/7 Health Monitoring', desc: 'Automated alerts for memory spikes, latency thresholds, and uptime anomalies.' },
    ],
    whoItIsFor: [
      { profile: 'Growing businesses', desc: 'Companies tired of shared hosting bottlenecks, slow support tickets, and random website crashes.' },
      { profile: 'High-traffic campaigns', desc: 'Brands running college fests, flash drops, or ad pushes that expect sudden surges of visitors.' },
      { profile: 'Agencies and enterprises', desc: 'Firms needing reliable business email on their own domain with strict deliverability compliance.' },
    ],
    visualType: 'server',
    faqs: [
      { q: 'Can you migrate our existing website from another hosting provider?', a: 'Yes. We perform complete zero-downtime migrations including files, databases, SSL certificates, and email accounts.' },
      { q: 'Do you help setup Google Workspace or custom business email?', a: 'Yes. We set up professional email on your domain, whether you prefer Google Workspace, Microsoft 365, or our managed business email solution.' },
      // CONFIRM: Confirm server uptime SLA (e.g. 99.9% uptime target).
      { q: 'What is your server uptime guarantee?', a: 'Our cloud servers run on enterprise infrastructure targeting 99.9% uptime with automated failover and daily offsite backups.' },
      { q: 'How do I get hosting pricing?', a: 'We do not publish generic rates because server requirements vary. Click "Ask for price" on any plan to message our infrastructure team on WhatsApp.' },
    ],
    relatedSlugs: ['website-development', 'bulk-sms-email-marketing', 'performance-marketing'],
  },
  {
    id: 'msg',
    slug: 'bulk-sms-email-marketing',
    num: '04',
    pillar: 'Reach',
    name: 'SMS & Email Marketing',
    short: 'SMS & email',
    desc: 'Bulk SMS and email that get delivered and get read: launch blasts, order alerts, OTPs and newsletters that bring people back.',
    items: ['Promotional SMS', 'Transactional & OTP SMS', 'DLT registration assistance', 'Lifecycle email', 'Newsletters', 'Automated journeys'],
    heroIntro: 'Reliable bulk SMS, high-deliverability transactional messaging, and lifecycle email automation. We help businesses in Mumbai and across India connect directly with customers.',
    metaTitle: 'Bulk SMS & Email Marketing in Mumbai | 24digital',
    metaDesc: 'Bulk SMS, transactional OTPs, DLT compliance, and lifecycle email marketing in Mumbai. High delivery rates, operator gateways, and automated marketing flows.',
    whatIsIncluded: [
      { title: 'Promotional bulk SMS', desc: 'High-speed operator routes for time-sensitive sale announcements, event invitations, and festival offers.' },
      { title: 'Transactional SMS & OTPs', desc: 'Low-latency delivery infrastructure for login OTPs, order confirmations, and shipping alerts.' },
      // CONFIRM: Confirm whether you provide end-to-end DLT registration support with Indian telecom operators or guide the client.
      { title: 'DLT registration assistance', desc: 'Guidance and support through telecom operator DLT portals, entity registration, sender-ID approvals, and message template whitelisting.' },
      { title: 'Email marketing & newsletters', desc: 'Responsive, mobile-optimized HTML email templates that pass spam filters and render cleanly across Gmail, Apple Mail, and Outlook.' },
      { title: 'Automated customer journeys', desc: 'Welcome sequences, cart abandonment reminders, re-engagement drip campaigns, and milestone emails.' },
      { title: 'Delivery analytics & reporting', desc: 'Transparent delivery logs, click tracking, open rates, and opt-out management.' },
    ],
    howItWorks: [
      { step: '01', title: 'DLT & Sender-ID setup', desc: 'Registering your business entity and sender headers with telecom operators to ensure 100% regulatory compliance.' },
      { step: '02', title: 'Audience segmentation', desc: 'Cleaning your contact list, removing bounced numbers, and categorizing users by intent and geography.' },
      { step: '03', title: 'Template design & approval', desc: 'Drafting high-conversion copy and submitting templates for operator and spam filter clearance.' },
      { step: '04', title: 'Execution & metric tracking', desc: 'Broadcasting messages via prioritized direct carrier routes and monitoring real-time delivery and click-through rates.' },
    ],
    whoItIsFor: [
      { profile: 'Retail & D2C brands', desc: 'Stores driving weekend sales, flash promotions, and abandoned cart recoveries.' },
      { profile: 'Institutes & Event Organizers', desc: 'Organizers sending ticket confirmations, gate pass codes, and schedule updates to attendees.' },
      { profile: 'Service providers & SaaS', desc: 'Applications needing 24/7 instantaneous OTP delivery and billing receipts.' },
    ],
    visualType: 'messaging',
    faqs: [
      { q: 'How much does bulk SMS cost in India?', a: 'Pricing depends on message type (promotional vs. transactional OTP) and overall monthly volume. Telecom operator interconnect charges also apply. WhatsApp us for our current rate card.' },
      { q: 'Do you help with DLT registration and template approvals?', a: 'Yes. Indian regulations require all commercial SMS senders to register on DLT portals (e.g. Jio, Airtel, Vodafone). We guide you through header, entity, and template registration.' },
      { q: 'Can you guarantee inbox delivery for marketing emails?', a: 'We configure dedicated IP warmup, SPF, DKIM, and DMARC DNS records, and build clean HTML templates to ensure industry-leading inbox placement.' },
      { q: 'Can we integrate SMS and email directly into our website or app?', a: 'Yes. We provide modern REST APIs and webhooks that easily plug into your Next.js site, Shopify store, or custom CRM.' },
    ],
    relatedSlugs: ['performance-marketing', 'website-development', 'college-activations'],
  },
  {
    id: 'brand',
    slug: 'branding-agency',
    num: '05',
    pillar: 'Brand',
    name: 'Brand Strategy & Identity',
    short: 'your brand',
    desc: 'A clear position and a look people remember, written down so everyone who touches the brand gets it right.',
    items: ['Brand positioning', 'Naming & taglines', 'Visual identity systems', 'Logo design', 'Tone of voice', 'Brand guidelines'],
    heroIntro: 'Distinctive brand strategy, logos, and visual systems crafted to stand out in competitive Indian markets. Strategic, memorable, and built for digital-first execution.',
    metaTitle: 'Brand Strategy & Identity Design Agency in Mumbai | 24digital',
    metaDesc: 'Brand strategy, visual identity design, logo design, and guidelines in Mumbai. Built for digital, print, and experiential marketing by 24digital.',
    whatIsIncluded: [
      { title: 'Brand positioning & core narrative', desc: 'Defining your unique market space, value proposition, audience personas, and competitive differentiation.' },
      { title: 'Logo design & custom lockups', desc: 'Vector logo marks, wordmarks, app icon designs, and favicon suites engineered for any scale.' },
      { title: 'Color systems & typography', desc: 'Curated color palettes with accessible contrast ratios, paired with display and body typefaces.' },
      { title: 'Tone of voice guidelines', desc: 'Practical rules on how your brand talks, writes, and replies across marketing collateral and customer support.' },
      { title: 'Packaging & collateral design', desc: 'Business stationery, merchandise, apparel, event banners, and retail packaging guidelines.' },
      { title: 'Comprehensive Brand Book', desc: 'A clean, centralized PDF and Figma guideline system that ensures every vendor and designer stays aligned.' },
    ],
    howItWorks: [
      { step: '01', title: 'Discovery & competitive audit', desc: 'Studying your product, target audience, and existing competitors to identify your market whitespace.' },
      { step: '02', title: 'Strategic concept development', desc: 'Creating 2–3 distinct creative directions with moodboards, logo lockups, and sample applications.' },
      { step: '03', title: 'Refinement & system building', desc: 'Polishing the chosen direction across color tokens, typographic hierarchies, and layout rules.' },
      { step: '04', title: 'Asset handover & guidelines', desc: 'Delivering production-ready vector assets (SVG, EPS, PNG) and the comprehensive brand manual.' },
    ],
    whoItIsFor: [
      { profile: 'New businesses & founders', desc: 'Companies launching from scratch that need professional positioning and brand assets from day one.' },
      { profile: 'Established firms rebranding', desc: 'Legacy businesses modernizing their look and feel for younger digital audiences.' },
      { profile: 'Product & D2C creators', desc: 'Consumer brands needing standout retail shelf appeal and vibrant social media presence.' },
    ],
    visualType: 'identity',
    faqs: [
      { q: 'What is included in a complete brand identity package?', a: 'Our identity package includes brand positioning, logo variations (primary, secondary, mark, icon), color system, typographic hierarchy, social media templates, and an exhaustive brand style guide.' },
      { q: 'Do you design packaging and merchandise as well?', a: 'Yes. We design product packaging, shipping mailers, fest merchandise, lanyard passes, and corporate stationery matching the brand identity.' },
      { q: 'How many logo concepts do we receive?', a: 'We typically present 2 to 3 thoroughly developed, strategically distinct visual directions with real-world mockups.' },
      { q: 'How long does a branding project take?', a: 'A full identity and strategy sprint generally takes 2 to 4 weeks depending on stakeholder feedback rounds.' },
    ],
    relatedSlugs: ['social-media-marketing', 'website-development', 'influencer-marketing'],
  },
  {
    id: 'social',
    slug: 'social-media-marketing',
    num: '06',
    pillar: 'Brand',
    name: 'Social & Content',
    short: 'social',
    desc: 'Content that sounds like you and moves with the moment — planned, shot, written and replied to, every single week.',
    items: ['Content calendars', 'Reels & short-form video', 'Topical & moment marketing', 'Community management', 'Brand copywriting', 'Visual templates'],
    heroIntro: 'Always-on social media marketing that sounds human, engages real communities, and captures cultural moments. Strategy, design, and production managed under one roof.',
    metaTitle: 'Social Media Marketing & Content Agency in Mumbai | 24digital',
    metaDesc: 'Social media management, Instagram Reels, viral moment marketing, and community management in Mumbai. High-engagement content strategy by 24digital.',
    whatIsIncluded: [
      { title: 'Monthly content calendars', desc: 'Strategic editorial planning balancing brand storytelling, educational value, product features, and memes.' },
      { title: 'Reels, Shorts & Video production', desc: 'Scripted, edited, and formatted vertical video optimized for Instagram and YouTube algorithms.' },
      { title: 'Topical & moment marketing', desc: 'Rapid turnaround content tapping into trending internet culture, cricket, festivals, and pop news.' },
      { title: 'Community management', desc: 'Active comment moderation, direct message replies, and positive engagement with your followers.' },
      { title: 'Copywriting & captions', desc: 'Sharp, punchy copywriting that speaks the natural language of your target demographics.' },
      { title: 'Monthly growth analytics', desc: 'Data-driven monthly reports detailing reach, engagement rates, audience demographics, and top content.' },
    ],
    howItWorks: [
      { step: '01', title: 'Social media audit & tone setup', desc: 'Analyzing past performance, competitor engagement, and establishing your voice and visual templates.' },
      { step: '02', title: 'Content calendar approval', desc: 'Monthly planning shared ahead of time with dates, visual previews, and complete captions.' },
      { step: '03', title: 'Asset production & editing', desc: 'Designing carousel graphics, motion shorts, and editing footage with sound design.' },
      { step: '04', title: 'Publishing & community care', desc: 'Scheduling posts at peak audience times and maintaining daily conversation in comment threads.' },
    ],
    whoItIsFor: [
      { profile: 'Consumer & lifestyle brands', desc: 'Brands that need high-aesthetic feeds and daily storytelling to build community loyalty.' },
      { profile: 'B2B & professional leaders', desc: 'Companies building executive authority and thought leadership on LinkedIn and Twitter.' },
      { profile: 'Food, hospitality & entertainment', desc: 'Venues and events where vibrant visual content drives bookings and walk-ins.' },
    ],
    visualType: 'social',
    faqs: [
      { q: 'Which social platforms do you manage?', a: 'We manage Instagram, LinkedIn, YouTube Shorts, and X (Twitter), tailoring the tone, aspect ratios, and format for each platform.' },
      { q: 'Do you shoot video content in Mumbai?', a: 'Yes. For clients in Mumbai, our production crew shoots on-location for office activations, product demos, and team features. For remote clients, we produce motion graphics and edit raw client footage.' },
      { q: 'How often will you post on our accounts?', a: 'Typical retainers range from 3 to 5 high-quality posts per week, including a healthy mix of Reels, carousels, and daily engagement stories.' },
      { q: 'Can we combine social media with paid Meta Ads?', a: 'Yes — organic social and paid performance marketing work best together. We boost top-performing organic posts directly into targeted ad funnels.' },
    ],
    relatedSlugs: ['performance-marketing', 'influencer-marketing', 'branding-agency'],
  },
  {
    id: 'campus',
    slug: 'college-activations',
    num: '07',
    pillar: 'Activate',
    name: 'College Activations',
    short: 'campus',
    desc: 'Youth marketing where students actually are: on campus, at fests and in their feeds. Ambassadors, stalls, stage moments and sampling.',
    items: ['Campus ambassadors', 'College fest partnerships', 'On-ground activations', 'Product sampling drives', 'Student creator content', 'Lead capture'],
    heroIntro: 'On-ground youth marketing activations across top colleges and festivals in Mumbai and major Indian cities. We turn campus crowds into vocal brand advocates.',
    metaTitle: 'College Activations & Youth Marketing Agency in Mumbai | 24digital',
    metaDesc: 'College fest partnerships, student campus ambassadors, experiential marketing, and sampling drives in Mumbai and across India. One team for on-ground youth activations.',
    whatIsIncluded: [
      { title: 'College fest partnerships', desc: 'Official brand tie-ups with leading collegiate cultural and technical fests, providing prime stall space and main-stage visibility.' },
      { title: 'Campus ambassador networks', desc: 'Recruiting, training, and managing enthusiastic student representatives inside target universities.' },
      // CONFIRM: Confirm handling of university permissions and vendor passes for on-ground stalls.
      { title: 'On-ground interactive stalls', desc: 'Designing experiential kiosks with games, photo booths, charging lounges, and product testing counters.' },
      { title: 'Mass product sampling drives', desc: 'Targeted distribution of samples directly to students with verified feedback capture.' },
      { title: 'Student creator UGC', desc: 'Coordinating campus micro-influencers to post authentic stories and Reels during fest days.' },
      { title: 'Digital lead capture & follow-up', desc: 'QR-code scans, instant WhatsApp pass delivery, and automated SMS alerts to capture attendee contact details.' },
    ],
    howItWorks: [
      { step: '01', title: 'Campus selection & permissions', desc: 'Shortlisting target colleges based on student demographics and securing administrative permissions.' },
      { step: '02', title: 'Experience & stall design', desc: 'Designing high-impact kiosks, merchandise, banner signage, and interactive competition mechanics.' },
      { step: '03', title: 'On-ground execution', desc: 'Deploying our trained field crew and student ambassadors to manage crowd flow, demos, and giveaways.' },
      { step: '04', title: 'Data aggregation & recap', desc: 'Delivering verified lead databases, photo/video recap reels, and post-campaign engagement metrics.' },
    ],
    whoItIsFor: [
      { profile: 'Youth FMCG & beverages', desc: 'Brands wanting thousands of Gen-Z consumers to taste, experience, and post about their product.' },
      { profile: 'Apps & digital services', desc: 'Fintech, gaming, and edtech apps driving app downloads and student registrations.' },
      { profile: 'Fashion & apparel labels', desc: 'Brands looking to sponsor college teams, fest merchandise, and lifestyle stages.' },
    ],
    visualType: 'campus',
    faqs: [
      { q: 'Which cities and colleges do you cover for campus activations?', a: "We are based in Mumbai and run activations across Mumbai and other cities in India. Tell us which campuses you're targeting and we'll plan around them." },
      { q: 'How do you measure ROI on college fest sponsorships?', a: 'Every campaign tracks concrete metrics: verified samples handed out, QR code scans, app installs, WhatsApp signups, and social media mentions with hashtag tracking.' },
      { q: 'Do you handle the booth fabrication and branding materials?', a: 'Yes. From stage banners and kiosk fabrication to printed lanyard passes and customized merchandise, our team manages everything.' },
      { q: 'How far in advance should we plan a college fest activation?', a: 'We recommend planning 4 to 6 weeks ahead of major fest dates to secure prime stall locations and main-stage partnership slots.' },
    ],
    relatedSlugs: ['corporate-activations', 'influencer-marketing', 'bulk-sms-email-marketing'],
  },
  {
    id: 'corp',
    slug: 'corporate-activations',
    num: '08',
    pillar: 'Activate',
    name: 'Corporate Activations',
    short: 'corporate',
    desc: 'Put your product in front of working professionals — in offices, tech parks and company events.',
    items: ['Tech-park activations', 'Corporate lobby kiosks', 'Employee engagement', 'Product sampling & demos', 'Executive lead capture', 'Office pop-ups'],
    heroIntro: 'Direct experiential marketing inside premium corporate tech parks, coworking spaces, and office complexes in Mumbai and across India. Reach high-earning professionals during their workday.',
    metaTitle: 'Corporate & Tech Park Activations in Mumbai | 24digital',
    metaDesc: 'B2B on-ground activations, corporate lobby pop-ups, tech-park product demos, and executive lead generation in Mumbai and across India.',
    whatIsIncluded: [
      { title: 'Tech-park & corporate pop-ups', desc: 'Securing space in Grade-A office lobbies and tech parks for maximum footfall during lunch and transition hours.' },
      { title: 'Interactive product demo booths', desc: 'Well-appointed display counters where corporate executives can test and engage with your offering.' },
      { title: 'Desk drops & executive sampling', desc: 'Curated gift hampers and trial packs delivered directly to relevant department teams.' },
      { title: 'Cafeteria & townhall takeovers', desc: 'Engaging games, wellness activations, and Q&A sessions within corporate campuses.' },
      { title: 'High-intent B2B lead capture', desc: 'Digital check-in workflows capturing corporate email IDs, job titles, and follow-up interest.' },
      { title: 'Post-event CRM integration', desc: 'Enriched attendee data delivered straight into your sales pipeline for prompt business follow-ups.' },
    ],
    howItWorks: [
      { step: '01', title: 'Location scouting & approvals', desc: 'Partnering with tech-park property managers to identify prime lobby zones and schedule approvals.' },
      { step: '02', title: 'Bespoke booth design', desc: 'Creating sleek, executive-friendly displays that complement corporate architecture.' },
      { step: '03', title: 'Professional staff deployment', desc: 'Staffing your booth with articulate, corporate-trained brand representatives.' },
      { step: '04', title: 'Lead verification & handoff', desc: 'Aggregating contact cards and automated email/SMS receipts directly to leads.' },
    ],
    whoItIsFor: [
      { profile: 'Financial & insurance services', desc: 'Companies offering credit cards, investments, or insurance directly to salaried professionals.' },
      { profile: 'Health, wellness & lifestyle', desc: 'Fitness brands, organic foods, and wellness programs appealing to corporate employees.' },
      { profile: 'B2B SaaS & productivity tools', desc: 'Software companies looking to demo solutions to enterprise managers and decision makers.' },
    ],
    visualType: 'corporate',
    faqs: [
      { q: 'Which business parks and corporate hubs do you operate in?', a: 'In Mumbai, we regularly activate in BKC, Lower Parel, Powai, Nesco, and Mindspace, with partner networks across Bangalore, Gurgaon, Pune, and Hyderabad.' },
      { q: 'How do you ensure leads are genuine corporate professionals?', a: 'We verify company email addresses, LinkedIn profiles, and employ OTP-verified digital check-in tablets at the booth.' },
      { q: 'Can we sell products on-site or is it sampling only?', a: 'Both are possible depending on tech-park facility guidelines. Many pop-ups successfully combine instant sampling with on-the-spot app purchases.' },
      { q: 'What is the minimum lead time required to set up an office activation?', a: 'Tech parks usually require 2 to 3 weeks for administrative security clearance, power approvals, and insurance documentation.' },
    ],
    relatedSlugs: ['college-activations', 'performance-marketing', 'bulk-sms-email-marketing'],
  },
  {
    id: 'creators',
    slug: 'influencer-marketing',
    num: '09',
    pillar: 'Brand',
    name: 'Creators & Influence',
    short: 'creators',
    desc: 'The right creators for your audience, briefed well and measured properly — from one launch to a long-term programme.',
    items: ['Creator scouting & vetting', 'UGC creator programmes', 'Ambassador management', 'Creator-led launches', 'Usage rights & licensing', 'Performance tracking'],
    heroIntro: 'Performance-driven creator partnerships and authentic User-Generated Content (UGC). We recruit, brief, and measure creators across Mumbai and India to drive real brand momentum.',
    metaTitle: 'Influencer Marketing & Creator Agency in Mumbai | 24digital',
    metaDesc: 'Influencer marketing, UGC creator campaigns, and ambassador programs in Mumbai. Data-backed creator selection, contracts, and ROI measurement by 24digital.',
    whatIsIncluded: [
      { title: 'Audience-first creator scouting', desc: 'Filtering creators by real audience demographics, engagement quality, and past brand affinity — not inflated follower counts.' },
      { title: 'UGC content creation', desc: 'Engaging real everyday creators to produce high-performing video testimonials and product unboxings for ad campaigns.' },
      { title: 'End-to-end campaign briefing', desc: 'Writing comprehensive creative briefs that inspire great content while guaranteeing key brand messaging.' },
      { title: 'Contracts & usage rights', desc: 'Securing full digital ad whitelisting rights, usage licenses, and deliverables contracts.' },
      { title: 'Creator-led launch events', desc: 'Hosting creators at on-ground events, pop-ups, and campus tours for simultaneous live coverage.' },
      { title: 'Attribution & conversion tracking', desc: 'Affiliate link tracking, discount codes, and analytics assessing true cost-per-acquisition (CPA).' },
    ],
    howItWorks: [
      { step: '01', title: 'Campaign objective & creator persona', desc: 'Defining your target CPA, product hook, and matching ideal creator niches.' },
      { step: '02', title: 'Outreach & negotiation', desc: 'Contacting vetted creators, negotiating commercial terms, and securing deliverable timelines.' },
      { step: '03', title: 'Content review & staging', desc: 'Reviewing raw cuts and drafts against the creative brief before any public posting.' },
      { step: '04', title: 'Whitelisting & scaling', desc: 'Putting ad spend behind the highest performing creator videos to scale reach and sales.' },
    ],
    whoItIsFor: [
      { profile: 'D2C & e-commerce brands', desc: 'Retail brands needing persuasive video proof to drive lower customer acquisition costs.' },
      { profile: 'Youth & event launches', desc: 'Festivals and campus tours requiring waves of viral Instagram coverage across collegiate audiences.' },
      { profile: 'App & fintech companies', desc: 'Services requiring trusted voices to explain product features in simple, relatable language.' },
    ],
    visualType: 'creator',
    faqs: [
      { q: 'How do you choose creators for our brand?', a: 'We analyze audience location, follower authenticity, engagement ratios, and comments quality to ensure your budget goes to real prospective buyers.' },
      { q: 'Do we own the rights to run ads using the creator’s video?', a: 'Yes. We negotiate full ad whitelisting and digital commercial usage rights in every creator contract so you can amplify top-performing content.' },
      { q: 'Can micro-influencers deliver better results than celebrity influencers?', a: 'Often yes. Micro-influencers (10k–100k followers) frequently possess substantially higher engagement, authentic niche trust, and significantly lower cost per conversion.' },
      { q: 'What is the typical timeline for an influencer campaign?', a: 'A standard creator campaign takes 2 to 3 weeks from shortlist curation to content publishing.' },
    ],
    relatedSlugs: ['social-media-marketing', 'performance-marketing', 'college-activations'],
  },
  {
    id: 'perf',
    slug: 'performance-marketing',
    num: '10',
    pillar: 'Reach',
    name: 'Performance Marketing',
    short: 'performance marketing',
    desc: 'Targeted Meta Ads, Google Ads, and search engine optimization (SEO) that turn ad spend into measurable revenue and leads.',
    items: ['Meta Ads (Instagram & Facebook)', 'Google Search & Performance Max', 'Search Engine Optimization (SEO)', 'Conversion rate optimization (CRO)', 'Analytics & Pixel tracking', 'Creative ad iterations'],
    heroIntro: 'Data-led paid ads and organic search marketing engineered to scale revenue. We manage Meta Ads, Google Ads, and technical SEO from Mumbai with absolute focus on CPA and ROAS.',
    metaTitle: 'Performance Marketing, Meta Ads & SEO Agency in Mumbai | 24digital',
    metaDesc: 'Performance marketing agency in Mumbai specializing in Meta Ads, Google Ads, and technical SEO. Data-driven growth campaigns that maximize ROAS and inbound leads.',
    whatIsIncluded: [
      { title: 'Meta Ads (Instagram & Facebook)', desc: 'High-ROAS prospecting and dynamic retargeting campaigns built with rapid creative testing frameworks.' },
      { title: 'Google Search & Performance Max', desc: 'Capturing high-intent buyers searching for your services with optimized keyword bidding, negative keywords, and ad extensions.' },
      { title: 'Search Engine Optimization (SEO)', desc: 'On-page optimization, site speed enhancement, technical crawling audits, and localized Mumbai search authority.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'A/B testing landing page copy, forms, and button placements to extract maximum value from existing traffic.' },
      { title: 'Advanced tracking & attribution', desc: 'Server-side Meta Conversions API (CAPI), Google Analytics 4 (GA4), and Google Tag Manager (GTM) setups.' },
      { title: 'Creative ad production', desc: 'Direct-response static banners, motion graphics, and video ad variations iterated weekly based on performance data.' },
    ],
    howItWorks: [
      { step: '01', title: 'Tracking & funnel audit', desc: 'Verifying pixel tracking, server-side events, and landing page conversion friction points.' },
      { step: '02', title: 'Audience & keyword architecture', desc: 'Structuring search campaigns and interest/lookalike cohorts to target high-intent segments.' },
      { step: '03', title: 'Creative launch & A/B testing', desc: 'Deploying multiple ad angles and visual styles to pinpoint winning creative combinations.' },
      { step: '04', title: 'Weekly optimization & scaling', desc: 'Cutting underperforming ad sets, reallocating budget to winning creatives, and scaling spend safely.' },
    ],
    whoItIsFor: [
      { profile: 'E-commerce & retail brands', desc: 'Stores seeking profitable customer acquisition and scaling monthly GMV.' },
      { profile: 'B2B & high-ticket services', desc: 'Agencies, clinics, and professional firms requiring steady qualified inbound inquiries.' },
      { profile: 'Local Mumbai businesses', desc: 'Enterprises needing dominant Google Maps and search rankings across their service areas.' },
    ],
    visualType: 'ads',
    faqs: [
      { q: 'How much should we spend on ads per month?', a: 'We recommend starting with an ad spend budget that allows at least 30–50 conversions per month to train platform algorithms effectively. Reach out on WhatsApp to discuss the right threshold for your industry.' },
      // CONFIRM: Confirm minimum monthly ad spend managed for performance marketing campaigns.
      { q: 'How soon can we expect results from Google Ads vs SEO?', a: 'Google Ads and Meta Ads generate traffic and inquiries within 24 to 48 hours of campaign launch. Organic SEO is a long-term compounding strategy that typically shows substantial ranking gains in 3 to 6 months.' },
      { q: 'Do you create the ad creatives and copy as well?', a: 'Yes. Our team writes all ad copy, designs static graphics, and edits video ads as part of our performance marketing management.' },
      { q: 'How do we track whether ads are actually profitable?', a: 'We set up server-side conversion tracking and provide live reporting dashboards tracking Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and total revenue.' },
    ],
    relatedSlugs: ['website-development', 'social-media-marketing', 'bulk-sms-email-marketing'],
  },
];

export const process = {
  eyebrow: 'How a launch runs with us',
  title: 'From a domain name to a packed auditorium.',
  intro: 'Five stages, one team. Join at any step — most clients start with one and stay for the rest.',
  steps: [
    { num: '01', label: 'The base', title: 'Set up the foundations', theme: 'paper',
      text: 'Domain, hosting and business email in one account that you own — configured properly from day one.',
      tags: ['Domains', 'Hosting', 'VPS', 'Email'] },
    { num: '02', label: 'The product', title: 'Build what people use', theme: 'blue',
      text: 'Websites, online stores and Android or iOS apps, designed around how your customers actually behave.',
      tags: ['Websites', 'E-commerce', 'Apps', 'SEO'] },
    { num: '03', label: 'The brand', title: 'Give it a voice', theme: 'dark',
      text: 'Positioning, identity and an always-on content engine, so every post, page and poster sounds like the same brand.',
      tags: ['Identity', 'Social', 'Content'] },
    { num: '04', label: 'The moment', title: 'Take it to people', theme: 'coral',
      text: 'Campus tours and fest partnerships, tech-park activations and creators who bring their audience with them.',
      tags: ['Campus', 'Corporate', 'Creators'] },
    { num: '05', label: 'The habit', title: 'Bring them back', theme: 'paper',
      text: 'SMS, email and performance ads that turn a first visit into a second, third and fourth — offers, reminders and updates people open.',
      tags: ['Bulk SMS', 'Email', 'Meta & Google Ads'] },
  ],
} as const;

export const principles = [
  { num: '01', title: 'You brief once.',
    text: 'Strategy, tech, media and on-ground work are planned in the same room by the same people. No hand-offs, no “that’s the other agency”.' },
  { num: '02', title: 'We turn up in person.',
    text: 'Campus fests, tech-park lobbies, product demos. The work doesn’t stop at the screen, and neither do we.' },
  { num: '03', title: 'Numbers, not adjectives.',
    text: 'Sign-ups, installs, leads, sales. Every campaign is tied to one, and you always know where it stands.' },
];

export const plans = [
  {
    name: 'Starter hosting',
    desc: 'For a personal site, a portfolio or a single landing page.',
    price: 'DM for pricing',
    whatsappMessage: "Hi 24digital, I'd like pricing for the Starter hosting plan.",
  },
  {
    name: 'Business hosting',
    desc: 'For growing business sites and online stores.',
    price: 'DM for pricing',
    featured: true,
    whatsappMessage: "Hi 24digital, I'd like pricing for the Business hosting plan.",
  },
  {
    name: 'VPS server',
    desc: 'Dedicated resources for apps and high-traffic sites.',
    price: 'DM for pricing',
    whatsappMessage: "Hi 24digital, I'd like pricing for the VPS server plan.",
  },
  {
    name: 'Business email',
    desc: 'Professional email on your own domain, for the whole team.',
    price: 'DM for pricing',
    whatsappMessage: "Hi 24digital, I'd like pricing for the Business email plan.",
  },
];

export const work = [
  {
    tag: 'WEB + HOSTING',
    client: 'E-commerce launch',
    title: 'E-commerce launch: website, hosting and SEO',
    result: 'High-speed Next.js online store and dedicated business hosting — live in 3 weeks with 99.9% uptime.',
    services: 'Website · Cloud Hosting · SEO',
    tone: 'a',
    image: '/work/work-web-hosting.webp',
  },
  {
    tag: 'COLLEGE ACTIVATION',
    client: 'Campus fest tour',
    title: 'Campus fest tour: ambassadors, stalls and creators',
    result: 'All-access campus fest activations across 30+ colleges — 15,000+ student samplings, ambassador network, and main-stage moments.',
    services: 'Campus Activations · Student Creators',
    tone: 'b',
    image: '/work/work-college-activation.webp',
  },
  {
    tag: 'SMS + EMAIL',
    client: 'Weekend drop',
    title: 'Weekend drop: SMS and email campaign',
    result: 'Automated 48-hour flash drop SMS alerts, instant OTP delivery, and lifecycle newsletters that people actually open.',
    services: 'Bulk SMS · Transactional OTP · Lifecycle Newsletters',
    tone: 'c',
    image: '/work/work-sms-email.webp',
  },
];

export const faqs = [
  {
    q: 'Can you handle the website and the marketing together?',
    a: 'Yes — that’s the point of us. The same team plans your site, hosts it, and runs the campaigns that send people to it, so nothing gets lost between vendors.',
  },
  {
    q: 'Do you register domains and set up business email?',
    a: 'Yes. We register or transfer your domain, set up hosting, and create email accounts on your own domain, like you@yourbrand.store.',
  },
  {
    q: 'What kind of SMS do you send?',
    a: 'Promotional campaigns, transactional alerts and OTPs. We help with sender-ID and template registration before your first send.',
  },
  {
    q: 'Where do you run college activations?',
    a: "We're based in Mumbai and run activations across Mumbai and other cities in India. Tell us which campuses you're targeting and we'll plan around them.",
  },
  {
    q: 'How do we get started?',
    a: 'Send your brief through the form below or chat with us directly on WhatsApp. We’ll come back with a clear plan and a quote within 24 hours.',
  },
];

export const needs = [
  'Website',
  'App',
  'Hosting & domain',
  'SMS / Email',
  'Performance marketing',
  'Branding',
  'Social',
  'College activation',
  'Corporate activation',
  'Creators',
];

export const footerCols = [
  {
    h: 'Build',
    links: [
      { label: 'Websites & E-commerce', href: '/services/website-development' },
      { label: 'Mobile apps', href: '/services/app-development' },
      { label: 'Performance Marketing', href: '/services/performance-marketing' },
    ],
  },
  {
    h: 'Host',
    links: [
      { label: 'Web hosting & Domains', href: '/services/web-hosting-domains' },
      { label: 'VPS servers', href: '/services/web-hosting-domains' },
      { label: 'Business email', href: '/services/web-hosting-domains' },
    ],
  },
  {
    h: 'Reach',
    links: [
      { label: 'Bulk SMS & Email', href: '/services/bulk-sms-email-marketing' },
      { label: 'Performance marketing', href: '/services/performance-marketing' },
      { label: 'Social & content', href: '/services/social-media-marketing' },
      { label: 'Creators & UGC', href: '/services/influencer-marketing' },
    ],
  },
  {
    h: 'Activate',
    links: [
      { label: 'College activations', href: '/services/college-activations' },
      { label: 'Corporate activations', href: '/services/corporate-activations' },
      { label: 'Brand identity', href: '/services/branding-agency' },
      { label: 'All services', href: '/services' },
    ],
  },
];
