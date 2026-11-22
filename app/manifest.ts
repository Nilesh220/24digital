import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '24digital — Full-stack Digital Agency',
    short_name: '24digital',
    description:
      'Websites, apps, hosting, bulk SMS and email, plus college, corporate and creator marketing in India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#2733FF',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/brand/24digital-app-icon-1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}
