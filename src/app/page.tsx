import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="container mx-auto flex min-h-[calc(100vh-6rem)] items-center px-6 py-20 md:py-28">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Portrait */}
          <div className="order-last mx-auto md:order-first">
            <div className="group relative h-[26rem] w-[18rem] rotate-[-6deg] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 shadow-xl ring-1 ring-black/5 backdrop-blur transition-transform duration-300 hover:rotate-[-3deg] dark:border-slate-800 dark:bg-slate-900/40">
              <Image
                src="/static/images/TJ_DP.jpg"
                alt="Tanuj Chakraborty"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent dark:from-black/20" />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Software Developer • India 🇮🇳
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Hey, I&#39;m{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Tanuj
              </span>{' '}
              👋
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
              I turn ideas into reliable, human-centered software. Focused on
              product impact, performance, and delightful UX.
            </p>
            <p className="mt-1 max-w-xl text-sm text-slate-500 dark:text-slate-400 md:text-base">
              Writing code that creates value. Glad you stopped by.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-slate-300/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900/70"
              >
                About Me
              </Link>
              <a
                href="/static/documents/Tanuj_Chakraborty.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900/70"
              >
                Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-slate-700 underline-offset-4 hover:underline dark:text-slate-300"
              >
                Contact
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 md:justify-start">
              <li className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                TypeScript
              </li>
              <li className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                React
              </li>
              <li className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                Next.js
              </li>
              <li className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                Node.js
              </li>
              <li className="rounded-full border border-slate-200/70 bg-white/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                Tailwind
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
