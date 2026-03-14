import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { Metadata } from 'next';

type Post = {
  slug: string;
  title: string;
  description?: string | null;
  date?: string | null;
};

export const metadata: Metadata = {
  title: 'Blog',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function Blog() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');

  let posts: Post[] = [];
  if (fs.existsSync(blogDir)) {
    const filenames = fs
      .readdirSync(blogDir)
      .filter((f) => f.toLowerCase().endsWith('.md'));

    posts = filenames
      .map((filename) => {
        const filePath = path.join(blogDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: fm } = matter(fileContents);

        const slug = filename.replace(/\.md$/i, '');
        return {
          slug,
          title: fm.title ?? slug,
          description: fm.description ?? null,
          date: fm.date ?? null,
        };
      })
      .sort((a, b) => {
        const aTime = a.date ? new Date(a.date).getTime() : 0;
        const bTime = b.date ? new Date(b.date).getTime() : 0;
        // Newest first, then by title
        if (bTime !== aTime) return bTime - aTime;
        return a.title.localeCompare(b.title);
      });
  }

  return (
    <div className="relative min-h-[50rem] px-4 mt-12 md:mt-16 font-[family-name:var(--font-geist-sans)] aurora-blue">
      <div className="relative mx-auto max-w-5xl text-center mb-10 md:mb-16">
        <h1 className="heading-glow text-3xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-tr from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-base text-slate-600 dark:text-slate-300 md:text-lg max-w-6xl mx-auto">
          Notes, ideas, and write-ups. This page is intentionally unlinked and
          accessible only via direct URL.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="mx-auto max-w-3xl">
          <div className="glass glass-hover p-6 md:p-8 text-center">
            <p className="text-sm md:text-base">
              No posts yet. Check back soon.
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl flex flex-col gap-4 md:gap-6 mb-14">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group glass glass-hover p-5 sm:p-6"
            >
              <header className="mb-2">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}
              </header>
              {post.description && (
                <p className="text-sm md:text-base text-gray-500">
                  {post.description}
                </p>
              )}
              {!post.description && (
                <p className="text-sm md:text-base text-gray-500">
                  Post details coming soon.
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
