'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A3C] text-white border-t border-gray-700 py-6 text-sm mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex gap-4 mb-2 md:mb-0">
          <Link href="/privacy-policy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-yellow-400">
            Terms & Conditions
          </Link>
          <a href="#" className="hover:text-yellow-400">
            Back To The Top
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:contact@thirdwaveidentity.com"
            className="hover:text-yellow-400"
          >
            contact@thirdwaveidentity.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.38V9h3.45v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.33 2.4 4.33 5.5v6.24zM5.34 7.43c-1.15 0-2.09-.93-2.09-2.09S4.2 3.25 5.34 3.25s2.09.93 2.09 2.09c.01 1.15-.93 2.09-2.09 2.09zM6.98 20.45H3.7V9h3.28v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
