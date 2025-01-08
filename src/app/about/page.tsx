import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

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

export default async function Page() {
  const aboutContent = await getMarkdownContent('about');
  const skillsContent = await getMarkdownContent('skills');
  const linksContent = await getMarkdownContent('links');

  return (
    <div className="min-h-[50rem] flex flex-col items-center justify-center px-4 mt-12 font-[family-name:var(--font-geist-sans)]">
      {/* About Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-center">About Me</h1>
      <div className="text-base md:text-lg mt-6 mb-4 text-center max-w-3xl px-16">
        {aboutContent.map((htmlContent, index) => (
          <div
            key={index}
            className="mb-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ))}
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
    </div>
  );
}
