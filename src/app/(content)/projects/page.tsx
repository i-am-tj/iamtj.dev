import Link from 'next/link';
import { siteMetadata as site } from '@/config/site';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import GitHubIcon from '@/components/footer/icons/GitHubIcon';

type Project = {
  slug: string;
  title: string;
  description: string;
  github?: string | null;
  deployment?: string | null;
  technologies?: string[] | null;
};

export default async function Projects() {
  const projectsDir = path.join(process.cwd(), 'content', 'projects');
  const filenames = fs.readdirSync(projectsDir);

  const projects: Project[] = filenames
    .map((filename) => {
      const filePath = path.join(projectsDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data: fm } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: fm.title ?? filename.replace(/\.md$/, ''),
        description: fm.description ?? '',
        github: fm.github ?? null,
        deployment: fm.deployment ?? null,
        technologies: Array.isArray(fm.technologies)
          ? (fm.technologies as string[])
          : typeof fm.technologies === 'string'
            ? [fm.technologies]
            : [],
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="relative min-h-[50rem] px-4 mt-12 md:mt-16 font-[family-name:var(--font-geist-sans)] aurora-blue">
      <div className="relative mx-auto max-w-5xl text-center mb-10 md:mb-16">
        <h1 className="heading-glow text-3xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Things I&#39;ve built
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-base text-slate-600 dark:text-slate-300 md:text-lg max-w-6xl mx-auto">
          A selection of projects showcasing product thinking, UX polish, and
          engineering depth.
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mb-14">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group relative glass glass-hover p-5 sm:p-6"
          >
            <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-gradient-to-tr from-indigo-400/20 via-sky-400/10 to-emerald-400/10 blur-2xl transition duration-300 group-hover:scale-110" />
            <header className="mb-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h2>
            </header>
            <p className="text-sm md:text-base text-gray-500 mb-4 md:mb-5">
              {project.description}
            </p>

            {project.technologies && project.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <li key={tech} className="glass-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex items-center gap-3 pt-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-spot inline-flex items-center gap-2 rounded-xl bg-indigo-600/90 px-3 py-1.5 text-white text-sm shadow-lg ring-1 ring-white/20 transition hover:-translate-y-0.5"
                >
                  <span className="[&>svg]:h-5 [&>svg]:w-5 -ml-0.5">
                    <GitHubIcon />
                  </span>
                  <span>View code</span>
                </Link>
              )}

              {project.deployment ? (
                <Link
                  href={project.deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip inline-flex items-center gap-2 text-sm transition hover:-translate-y-0.5"
                >
                  <span>Live demo</span>
                  <span aria-hidden>↗</span>
                </Link>
              ) : (
                <span className="glass-chip text-sm text-gray-400">
                  No live demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-base md:text-lg text-gray-500">
          Explore more on my GitHub profile.
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-spot inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500 px-4 py-2 text-white text-sm md:text-base shadow-lg transition hover:-translate-y-0.5"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5 -ml-0.5">
              <GitHubIcon />
            </span>
            <span>GitHub Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
