import type { MetadataRoute } from 'next';
import { site } from '../lib/content';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = site.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
