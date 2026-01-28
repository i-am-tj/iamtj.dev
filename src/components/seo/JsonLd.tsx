import { siteMetadata } from '@/config/site';

function toAbsoluteUrl(url: string, base: string) {
  if (!url) return '';
  try {
    // If already absolute, return as-is
    const parsed = new URL(url, base);
    return parsed.toString();
  } catch {
    return url.startsWith('/') ? `${base}${url}` : `${base}/${url}`;
  }
}

export default function JsonLd() {
  const {
    siteUrl,
    author,
    avatarImage,
    github,
    linkedin,
    twitter,
    medium,
    hashnode,
    buymeacoffee,
    email,
    title,
  } = siteMetadata;

  const sameAs = [
    github,
    linkedin,
    twitter,
    medium,
    hashnode,
    buymeacoffee,
  ].filter(Boolean) as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author,
    url: siteUrl,
    image: toAbsoluteUrl(avatarImage, siteUrl),
    email,
    jobTitle: 'Software Developer',
    sameAs,
    mainEntityOfPage: {
      '@type': 'WebSite',
      '@id': siteUrl,
      name: title,
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
