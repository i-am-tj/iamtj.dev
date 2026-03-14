import React from 'react';

interface SkillsSectionProps {
  skillsContent: string[];
}

export default function SkillsSection({ skillsContent }: SkillsSectionProps) {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        My Skills
      </h2>
      <div className="w-full max-w-5xl mt-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsContent.map((content) => {
            const cleanContent = content.replace(/<\/?h2>/g, '');
            const skillList = cleanContent.split('### ').slice(1);

            return skillList.map((section, sectionIndex) => {
              const [title, ...skills] = section.split(' - ');

              return (
                <div key={sectionIndex} className="flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-3 w-full">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 shadow-sm text-center text-sm md:text-base"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
