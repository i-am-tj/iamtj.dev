'use client';

import Link from 'next/link';
import { useState } from 'react';
import { footerData } from '@/components/footer/data/footerData';

const EMAIL = 'connect.with.iamtj@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op if clipboard unavailable
    }
  };

  return (
    <main className="relative isolate aurora-blue">
      <section className="container mx-auto min-h-[calc(100vh-6rem)] px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="relative mx-auto max-w-5xl text-center mb-10 md:mb-16">
          <h1 className="heading-glow text-4xl font-bold tracking-tight md:text-6xl">
            Let&#39;s build something{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              remarkable
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-base text-slate-600 dark:text-slate-300 md:text-lg max-w-8xl mx-auto">
            Open to new opportunities, collaborations, and interesting problems.
            If you have an idea or a role where I can add value, reach out.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-spot glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-slate-900 shadow-lg ring-1 ring-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M3 7l9 6 9-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Mail Me</span>
          </a>

          <Link
            href="/static/documents/Tanuj_Chakraborty.pdf"
            target="_blank"
            className="glass glass-hover inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 dark:text-white"
          >
            View Resume
          </Link>

          <button
            onClick={handleCopy}
            className="glass-chip chip-animated inline-flex items-center gap-2"
            aria-label="Copy email to clipboard"
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Email copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4 text-slate-500 dark:text-slate-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="9"
                    y="9"
                    width="11"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="11"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Copy email</span>
              </>
            )}
          </button>
        </div>

        {/* Info Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card-accent glass rounded-2xl p-6 md:col-span-2">
            <h2 className="text-lg font-semibold">How I can help</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
              <li className="glass-chip chip-animated">
                Product engineering & DX
              </li>
              <li className="glass-chip chip-animated">
                Frontend systems (React/Next.js)
              </li>
              <li className="glass-chip chip-animated">
                Performance & accessibility
              </li>
              <li className="glass-chip chip-animated">
                Design implementation
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/20 p-4 text-sm text-slate-600 backdrop-blur dark:text-slate-300">
              Prefer email?{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-sky-600 hover:underline dark:text-sky-400"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="card-accent glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Quick facts</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Typically replies within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Based in India (IST, UTC+5:30)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Open to remote-first roles
              </li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Or find me on
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {footerData.socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="chip-animated tilt-on-hover glass-chip inline-flex items-center gap-2"
              >
                <Icon />
                <span className="hidden sm:inline">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
