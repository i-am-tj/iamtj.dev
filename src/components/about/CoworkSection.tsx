import React from 'react';

interface CoworkSectionProps {
  content: string;
}

export default function CoworkSection({ content }: CoworkSectionProps) {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Co-Work
      </h2>
      <div className="text-base md:text-lg mt-6 mb-20 text-center max-w-3xl px-16">
        <div className="mb-8" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
