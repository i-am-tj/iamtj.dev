import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export default async function Page() {
  const aboutDir = path.join(process.cwd(), 'content', 'about');
  const filenames = fs.readdirSync(aboutDir);

  const about = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(aboutDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents);

      const processedContent = await remark().use(html).process(content);
      return processedContent.toString();
    }),
  );

  return (
    <div className="min-h-[50rem] flex flex-col items-center justify-center px-4 mt-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl md:text-5xl font-bold text-center">About Me</h1>
      <div className="text-base md:text-lg mt-20 mb-12 text-center max-w-3xl px-16">
        {about.map((htmlContent, index) => (
          <div
            key={index}
            className="mb-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ))}
      </div>
    </div>
  );
}
