import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[50rem] flex flex-col items-center justify-center text-center px-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-base md:text-lg text-gray-600 mb-8">
        Sorry, the page you&#39;re looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Go back home
      </Link>
    </main>
  );
}
