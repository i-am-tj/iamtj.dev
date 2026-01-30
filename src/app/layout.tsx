import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteMetadata } from '@/config/site';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.titleAlt,
    description: siteMetadata.headerAltTitle,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.titleAlt,
    locale: siteMetadata.locale,
    images: [
      {
        url: siteMetadata.avatarImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.imageAltDesc,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitterHandle,
    title: siteMetadata.titleAlt,
    description: siteMetadata.headerTitle,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: siteMetadata.imageAltDesc,
      },
    ],
  },
  icons: {
    icon: '/static/icons/default-favico.ico',
    shortcut: '/static/icons/shortcut-favico.ico',
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      'en-US': siteMetadata.localeSiteUrl, // English
    },
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative isolate min-h-screen">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
            <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-400/40 via-sky-400/30 to-emerald-400/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.200)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.800)_1px,transparent_1px)]" />
          </div>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
