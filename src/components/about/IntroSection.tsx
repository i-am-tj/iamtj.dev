import React from 'react';

interface IntroSectionProps {
  content: string;
}

export default function IntroSection({ content }: IntroSectionProps) {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center">About Me</h1>
      <div className="text-base md:text-lg mt-6 mb-4 text-center max-w-3xl px-16">
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
