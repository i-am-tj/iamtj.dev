import React from 'react';

export interface JobExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  content: string;
}

interface ExperienceSectionProps {
  jobExperiences: JobExperience[];
}

export default function ExperienceSection({
  jobExperiences,
}: ExperienceSectionProps) {
  return (
    <>
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Work Experience
      </h2>
      <div className="relative w-full max-w-5xl mt-6 px-4 mb-20">
        {/* Vertical timeline rail */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
        {jobExperiences.map((job, index) => (
          <section key={index} className="relative pl-16 group mb-10">
            {/* Card */}
            <div
              className="rounded-lg border border-gray-200/80 bg-white/80 backdrop-blur p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {job.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700">
                    {job.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  {job.duration} • {job.location}
                </p>
              </div>

              {/* Hover-to-toggle details (slides down) */}
              <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 opacity-0 -translate-y-1 group-hover:max-h-[40rem] group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:max-h-[40rem] group-focus-within:opacity-100 group-focus-within:translate-y-0">
                <div
                  className="pt-3 space-y-2 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: job.content }}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
