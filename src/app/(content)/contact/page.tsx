import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-[50rem] flex flex-col items-center justify-center mt-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl md:text-5xl font-bold">Get In Touch</h1>
      <p className="text-base md:text-lg mt-20 mb-16 text-center max-w-3xl px-16">
        Feel free to reach out if you have any questions or just want to say
        hello! I&apos;m always open to discussing new opportunities,
        collaborating on projects, or simply connecting with like-minded
        individuals.
      </p>
      <div className="flex space-x-4">
        <Link
          href="mailto:connect.with.iamtj@gmail.com"
          target="_blank"
          className="bg-blue-500 text-sm md:text-base text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Mail Me
        </Link>
        <Link
          href="/static/documents/Tanuj_Chakraborty.pdf"
          target="_blank"
          className="bg-gray-800 text-sm md:text-base text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
        >
          View Resume
        </Link>
      </div>
    </main>
  );
}
