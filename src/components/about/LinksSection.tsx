import React from 'react';

interface LinksSectionProps {
  linksContent: string[];
}

export default function LinksSection({ linksContent }: LinksSectionProps) {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Find Me Online
      </h2>
      <div className="text-base md:text-lg text-center max-w-3xl px-16 mb-20">
        <div className="flex flex-wrap justify-center mt-6 gap-6">
          {linksContent.map((content) => {
            const cleanContent = content.replace(/<\/?p>/g, '');
            const links = cleanContent.match(/<a href="([^"]+)">([^<]+)<\/a>/g);

            return links
              ? links.map((link, i) => {
                  const hrefMatch = link.match(/href="([^"]+)"/);
                  const textMatch = link.match(/>([^<]+)<\/a>/);

                  if (hrefMatch && textMatch) {
                    const href = hrefMatch[1];
                    const text = textMatch[1];
                    return (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 transition-colors"
                      >
                        {text}
                      </a>
                    );
                  }
                  return null;
                })
              : null;
          })}
        </div>
      </div>
    </>
  );
}
