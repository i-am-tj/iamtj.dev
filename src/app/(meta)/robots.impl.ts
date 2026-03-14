import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/blog',
    },
    sitemap: 'https://iamtj.dev/sitemap.xml',
    host: 'https://iamtj.dev',
  };
}
