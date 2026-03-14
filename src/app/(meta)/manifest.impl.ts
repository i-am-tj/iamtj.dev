import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.titleAlt,
    short_name: siteMetadata.logoText,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/static/icons/i-am-tj-branding.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/static/icons/default-favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  };
}
