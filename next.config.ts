import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // 301 Permanent Redirects for old website URLs to preserve SEO rankings
      { source: '/website-development', destination: '/services/website-development', permanent: true },
      { source: '/website-designing', destination: '/services/website-development', permanent: true },
      { source: '/website-design', destination: '/services/website-development', permanent: true },
      { source: '/web-development', destination: '/services/website-development', permanent: true },
      { source: '/website-development-company', destination: '/services/website-development', permanent: true },
      { source: '/website-designing-company', destination: '/services/website-development', permanent: true },
      { source: '/app-development', destination: '/services/app-development', permanent: true },
      { source: '/mobile-app-development', destination: '/services/app-development', permanent: true },
      { source: '/app-development-company', destination: '/services/app-development', permanent: true },
      { source: '/android-app-development', destination: '/services/app-development', permanent: true },
      { source: '/ios-app-development', destination: '/services/app-development', permanent: true },
      { source: '/seo', destination: '/services/performance-marketing', permanent: true },
      { source: '/seo-services', destination: '/services/performance-marketing', permanent: true },
      { source: '/seo-company', destination: '/services/performance-marketing', permanent: true },
      { source: '/search-engine-optimization', destination: '/services/performance-marketing', permanent: true },
      { source: '/digital-marketing', destination: '/services/performance-marketing', permanent: true },
      { source: '/digital-marketing-services', destination: '/services/performance-marketing', permanent: true },
      { source: '/digital-marketing-company', destination: '/services/performance-marketing', permanent: true },
      { source: '/google-ads', destination: '/services/performance-marketing', permanent: true },
      { source: '/google-adwords', destination: '/services/performance-marketing', permanent: true },
      { source: '/ppc', destination: '/services/performance-marketing', permanent: true },
      { source: '/ppc-services', destination: '/services/performance-marketing', permanent: true },
      { source: '/meta-ads', destination: '/services/performance-marketing', permanent: true },
      { source: '/facebook-ads', destination: '/services/performance-marketing', permanent: true },
      { source: '/smo', destination: '/services/social-media-marketing', permanent: true },
      { source: '/smo-services', destination: '/services/social-media-marketing', permanent: true },
      { source: '/social-media-optimization', destination: '/services/social-media-marketing', permanent: true },
      { source: '/social-media', destination: '/services/social-media-marketing', permanent: true },
      { source: '/bulk-sms', destination: '/services/bulk-sms-email-marketing', permanent: true },
      { source: '/bulk-sms-services', destination: '/services/bulk-sms-email-marketing', permanent: true },
      { source: '/hosting', destination: '/services/web-hosting-domains', permanent: true },
      { source: '/web-hosting', destination: '/services/web-hosting-domains', permanent: true },
      { source: '/domain', destination: '/services/web-hosting-domains', permanent: true },
      { source: '/about', destination: '/#process', permanent: true },
      { source: '/about-us', destination: '/#process', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/contact-us', destination: '/#contact', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/brand/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
