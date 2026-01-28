import Link from 'next/link';
import { siteMetadata as data } from '@/config/site';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default async function Projects() {
  const projectsDir = path.join(process.cwd(), 'content', 'projects');
  const filenames = fs.readdirSync(projectsDir);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      description: data.description,
      github: data.github,
    };
  });

  return (
    <div className="min-h-[50rem] flex flex-col items-center justify-center px-4 mt-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-center">
        Things I&apos;ve built
      </h1>
      <div className="text-base md:text-lg mb-16 text-center max-w-3xl">
        Here are some of the projects I have worked on.
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-gray-200 rounded-lg shadow-md p-6 w-80 mb-4 h-64 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-500 mb-4">{project.description}</p>
            </div>
            <div className="flex justify-end">
              {/* <Link href={`/projects/${project.slug}`} passHref>  //for later */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 cursor-pointer flex items-center"
              >
                <span className="text-sm md:text-base">View Project</span>
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-base md:text-lg mb-4 text-center max-w-2xl">
        You can find more on my GitHub profile.
      </div>
      <div className="flex space-x-4 mb-24">
        <Link
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-sm md:text-base text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          GitHub Profile
        </Link>
      </div>
    </div>
  );
}
