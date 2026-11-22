/**
 * All website copy and data lives here.
 * Anything in [SQUARE BRACKETS] is a placeholder to replace before launch.
 */

export const site = {
  name: '24digital',
  url: 'https://www.24digital.store',
  email: '[EMAIL]',
  phone: '+91 8699260386',
  whatsapp: '918699260386',
  city: '[CITY, INDIA]',
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'How we work', href: '#process' },
  { label: 'Hosting', href: '#hosting' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Tech · Hosting · Marketing — one team',
  lines: ['We build it,', 'host it, and get', 'people'],
  highlight: 'talking.',
  sub: 'Websites, apps, hosting, bulk SMS and email — plus the campus tours, office activations and creator campaigns that get it all noticed. One team does the whole job, so you only brief once.',
};

export const marquee = [
  'Websites', 'Mobile apps', 'Hosting & domains', 'VPS servers', 'Bulk SMS', 'Email marketing',
  'Brand identity', 'Social & content', 'College activations', 'Corporate activations', 'Creators & UGC', 'SEO',
];

/** Words wrapped in *asterisks* are highlighted in brand blue. */
export const manifesto =
  'Most launches need a web agency, a hosting company, an SMS vendor and an events crew — and half the budget goes into getting them to talk to each other. *We *are *all *four. One brief. One team. *One *number *to *call.';

export type Service = {
  id: string;
  num: string;
  pillar: 'Build' | 'Host' | 'Reach' | 'Brand' | 'Activate';
  name: string;
  short: string;
  desc: string;
  items: string[];
};

export const services: Service[] = [
  { id: 'web', num: '01', pillar: 'Build', name: 'Websites & E-commerce', short: 'your website',
    desc: 'Sites that load fast, rank well and are easy for your team to update — from a one-page launch to a full online store.',
    items: ['Business websites', 'E-commerce stores', 'Landing pages', 'SEO', 'AR filters', 'Interactive campaigns'] },
  { id: 'app', num: '02', pillar: 'Build', name: 'App Development', short: 'your app',
    desc: 'Android and iOS apps designed around how people really use them, with the admin panel and back end to run the business behind them.',
    items: ['Android apps', 'iOS apps', 'Admin panels', 'Ongoing support'] },
  { id: 'host', num: '03', pillar: 'Host', name: 'Hosting & Domains', short: 'hosting',
    desc: 'Hosting, domains and VPS that stay up, plus email on your own domain — set up and maintained by the people who built your site.',
    items: ['Web hosting', 'Domain registration', 'VPS servers', 'Business email'] },
  { id: 'msg', num: '04', pillar: 'Reach', name: 'SMS & Email Marketing', short: 'SMS & email',
    desc: 'Bulk SMS and email that get delivered and get read: launch blasts, order alerts, OTPs and newsletters that bring people back.',
    items: ['Promotional SMS', 'Transactional & OTP SMS', 'Email campaigns', 'Newsletters'] },
  { id: 'brand', num: '05', pillar: 'Brand', name: 'Brand Strategy & Identity', short: 'your brand',
    desc: 'A clear position and a look people remember, written down so everyone who touches the brand gets it right.',
    items: ['Positioning', 'Naming', 'Visual identity', 'Tone of voice', 'Brand guidelines', 'Packaging'] },
  { id: 'social', num: '06', pillar: 'Brand', name: 'Social & Content', short: 'social',
    desc: 'Content that sounds like you and moves with the moment — planned, shot, written and replied to, every single week.',
    items: ['Content calendars', 'Reels & shorts', 'Topical content', 'Community management', 'Copywriting'] },
  { id: 'campus', num: '07', pillar: 'Activate', name: 'College Activations', short: 'campus',
    desc: 'Youth marketing where students actually are: on campus, at fests and in their feeds. Ambassadors, stalls, stage moments and sampling.',
    items: ['Campus ambassadors', 'Fest partnerships', 'On-ground activations', 'Sampling drives', 'Student creator content'] },
  { id: 'corp', num: '08', pillar: 'Activate', name: 'Corporate Activations', short: 'corporate',
    desc: 'Put your product in front of working professionals — in offices, tech parks and company events.',
    items: ['Office & tech-park activations', 'Corporate events', 'Employee engagement', 'Product sampling & demos', 'Lead capture & follow-up'] },
  { id: 'creators', num: '09', pillar: 'Brand', name: 'Creators & Influence', short: 'creators',
    desc: 'The right creators for your audience, briefed well and measured properly — from one launch to a long-term programme.',
    items: ['Creator scouting', 'UGC programmes', 'Ambassador programmes', 'Creator-led launches', 'Usage rights'] },
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
      text: 'SMS and email that turn a first visit into a second, third and fourth — offers, reminders and updates people open.',
      tags: ['Bulk SMS', 'Email', 'Automation'] },
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
  { name: 'Starter hosting', desc: 'For a personal site, a portfolio or a single landing page.', price: '[₹ PRICE]' },
  { name: 'Business hosting', desc: 'For growing business sites and online stores.', price: '[₹ PRICE]', featured: true },
  { name: 'VPS server', desc: 'Dedicated resources for apps and high-traffic sites.', price: '[₹ PRICE]' },
  { name: 'Business email', desc: 'Professional email on your own domain, for the whole team.', price: '[₹ PRICE]' },
];

export const work = [
  { tag: 'WEB + HOSTING', client: '[Client name]', result: '[One-line result — what changed for the client]', services: 'Website · Hosting · SEO', tone: 'a' },
  { tag: 'COLLEGE ACTIVATION', client: '[Client name]', result: '[One-line result — what changed for the client]', services: 'Campus · Creators', tone: 'b' },
  { tag: 'SMS + EMAIL', client: '[Client name]', result: '[One-line result — what changed for the client]', services: 'Bulk SMS · Email', tone: 'c' },
];

export const faqs = [
  { q: 'Can you handle the website and the marketing together?',
    a: 'Yes — that’s the point of us. The same team plans your site, hosts it, and runs the campaigns that send people to it, so nothing gets lost between vendors.' },
  { q: 'Do you register domains and set up business email?',
    a: 'Yes. We register or transfer your domain, set up hosting, and create email accounts on your own domain, like you@yourbrand.in.' },
  { q: 'What kind of SMS do you send?',
    a: 'Promotional campaigns, transactional alerts and OTPs. We help with sender-ID and template registration before your first send.' },
  { q: 'Where do you run college activations?', a: '[List the cities and campuses you cover.]' },
  { q: 'How do we get started?',
    a: 'Send your brief and budget through the form below. We’ll come back with a plan and a quote.' },
];

export const needs = ['Website', 'App', 'Hosting & domain', 'SMS / Email', 'Branding', 'Social', 'College activation', 'Corporate activation', 'Creators'];

export const footerCols = [
  { h: 'Build', links: ['Websites', 'E-commerce', 'Mobile apps', 'SEO'] },
  { h: 'Host', links: ['Web hosting', 'Domains', 'VPS servers', 'Business email'] },
  { h: 'Reach', links: ['Bulk SMS', 'Email marketing', 'Social & content', 'Creators & UGC'] },
  { h: 'Activate', links: ['College activations', 'Corporate activations', 'Brand identity', 'Campus ambassadors'] },
];
