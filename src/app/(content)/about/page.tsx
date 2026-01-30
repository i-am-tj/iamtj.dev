import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

interface JobExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  content: string;
}

async function getMarkdownContent(directory: string) {
  const dirPath = path.join(process.cwd(), 'content', directory);
  const filenames = fs.readdirSync(dirPath);

  const content = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(dirPath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents);
      const cleanContent = content.replace(/\n+/g, ' ').trim();
      const processedContent = await remark().use(html).process(cleanContent);
      return processedContent.toString();
    }),
  );
  return content;
}

async function getSingleMarkdownContent(directory: string) {
  const dirPath = path.join(process.cwd(), 'content', directory);
  const filenames = fs.readdirSync(dirPath);
  const filename = filenames.find((f) => f.endsWith('.md'));
  if (!filename) return '';

  const filePath = path.join(dirPath, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  const cleanContent = content.replace(/\n+/g, ' ').trim();
  const processedContent = await remark().use(html).process(cleanContent);
  return processedContent.toString();
}

async function getJobExperiences(): Promise<JobExperience[]> {
  const jobsDir = path.join(process.cwd(), 'content/about/experience/jobs');
  const subdirs = fs.readdirSync(jobsDir);

  const experiences = await Promise.all(
    subdirs.map(async (subdir) => {
      const subdirPath = path.join(jobsDir, subdir);
      if (!fs.statSync(subdirPath).isDirectory()) return null;

      const files = fs.readdirSync(subdirPath);
      const mdFile = files.find((f) => f.endsWith('.md'));
      if (!mdFile) return null;

      const filePath = path.join(subdirPath, mdFile);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content: rawContent } = matter(fileContents);

      const processedContent = await remark().use(html).process(rawContent);

      return {
        ...data,
        content: processedContent.toString(),
      } as JobExperience;
    }),
  ).then((results) =>
    results.filter((exp): exp is JobExperience => exp !== null),
  );

  // Sort recent first
  experiences.sort((a, b) => {
    const getStartYearMonth = (duration: string): number => {
      const match = duration.match(/^(\w+)\s+(\d{4})/);
      if (match) {
        const months = {
          January: 1,
          February: 2,
          March: 3,
          April: 4,
          May: 5,
          June: 6,
          July: 7,
          August: 8,
          September: 9,
          October: 10,
          November: 11,
          December: 12,
        };
        return new Date(
          parseInt(match[2]),
          months[match[1] as keyof typeof months] || 0,
          1,
        ).getTime();
      }
      return 0;
    };

    const aTime = a.duration.includes('Present')
      ? Date.now()
      : getStartYearMonth(a.duration);
    const bTime = b.duration.includes('Present')
      ? Date.now()
      : getStartYearMonth(b.duration);

    return bTime - aTime;
  });

  return experiences;
}

export default async function Page() {
  const introContent = await getSingleMarkdownContent('about/intro');
  const coworkContent = await getSingleMarkdownContent('about/cowork');
  const interestsContent = await getSingleMarkdownContent('about/interests');
  const skillsContent = await getMarkdownContent('about/skills');
  const linksContent = await getMarkdownContent('about/links');
  const jobExperiences = await getJobExperiences();

  return (
    <main className="min-h-[50rem] flex flex-col items-center justify-center px-4 mt-12 font-[family-name:var(--font-geist-sans)]">
      {/* Intro Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-center">About Me</h1>
      <div className="text-base md:text-lg mt-6 mb-4 text-center max-w-3xl px-16">
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: introContent }}
        />
      </div>

      {/* Co-Work Section */}
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Co-Work
      </h2>
      <div className="text-base md:text-lg mt-6 mb-20 text-center max-w-3xl px-16">
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: coworkContent }}
        />
      </div>

      {/* Interests Section */}
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Interests
      </h2>
      <div className="text-base md:text-lg mt-6 mb-20 text-center max-w-3xl px-16">
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: interestsContent }}
        />
      </div>

      {/* Skills Section */}
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

      {/* Work Experience Section */}
      <h2 className="text-xl md:text-3xl font-bold text-center mt-16">
        Work Experience
      </h2>
      <div className="relative w-full max-w-5xl mt-6 px-4 mb-20">
        {/* Vertical timeline rail */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-500" />
        {jobExperiences.map((job, index) => (
          <section key={index} className="relative pl-16 group mb-10">
            {/* Card */}
            <div
              className="rounded-lg border border-gray-200/80 backdrop-blur p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white-100">
                    {job.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-500">
                    {job.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
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

      {/* Links Section */}
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
    </main>
  );
}
