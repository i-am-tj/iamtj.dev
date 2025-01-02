import type { Metadata } from 'next';
import { siteMetadata } from '@/data/siteMetadata';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

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
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.titleAlt,
    description: siteMetadata.headerAltTitle,
    url: siteMetadata.siteUrl,
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
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      'en-US': siteMetadata.localeSiteUrl, // English
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
