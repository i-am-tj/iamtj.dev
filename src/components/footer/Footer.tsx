import { footerData as data } from './data/footerData';
import { siteMetadata } from '../../data/siteMetadata';

const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
        <div className="flex items-center space-x-6">
          {data.socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-600 dark:text-gray-400 important"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-center cursor-pointer space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          Developed with ❤️ by {siteMetadata.author} &copy;{' '}
          {new Date().getFullYear()}
        </div>
        <div className="flex flex-col items-center justify-center text-center font-extralight cursor-pointer space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <span className="flex items-center space-x-1">
              <span>Deployed on:</span>
              <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:underline"
              >
                  Vercel
              </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
