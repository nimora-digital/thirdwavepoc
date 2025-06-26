'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Forum', href: '/forum' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-[#0A1F63] shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
        {/* Logo or Brand */}
        <Link href="/" className="text-xl font-bold tracking-wide text-[#FFE66D]">
          3RD WAVE IDENTITY
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? 'text-[#FFE66D]'
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="bg-[#FFE66D] text-black font-semibold py-1.5 px-4 rounded hover:scale-105 transition">
              Sign in
            </button>
          </li>
          <li>
            <a
              href="tel:+442080788469"
              className="border border-[#FFE66D] text-[#FFE66D] py-1.5 px-4 rounded hover:bg-[#FFE66D] hover:text-black transition"
            >
              +44 20 8078 8469
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1F63] px-6 pb-4 space-y-3 text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block font-medium ${
                pathname === item.href
                  ? 'text-[#FFE66D]'
                  : 'text-gray-300 hover:text-yellow-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-[#FFE66D] text-black py-2 rounded font-semibold mt-2">
            Sign in

          </button>
          <a
            href="tel:+442080788469"
            className="block text-center border border-[#FFE66D] text-[#FFE66D] py-2 rounded hover:bg-[#FFE66D] hover:text-black transition"
          >
             📞+44 20 8078 8469
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
