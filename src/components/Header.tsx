"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-100 border-b-4 border-black sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 border-2 border-black">
              <Image
                src="/premchand-4.jpeg"
                alt="प्रेमचंद लोगो"
                fill
                sizes="40px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-xl font-bold">प्रेमचंद साहित्य</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/books">पुस्तकें</NavLink>
            <NavLink href="/stories">कहानियाँ</NavLink>
            <NavLink href="/about">प्रेमचंद के बारे में</NavLink>
            <NavLink href="/favorites">मेरी पसंदीदा</NavLink>
          </nav>

          <button 
            className="md:hidden p-2 border-2 border-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="मेनू खोलें"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black py-4">
            <nav className="flex flex-col gap-2">
              <MobileNavLink href="/books" onClick={() => setIsMenuOpen(false)}>पुस्तकें</MobileNavLink>
              <MobileNavLink href="/stories" onClick={() => setIsMenuOpen(false)}>कहानियाँ</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>प्रेमचंद के बारे में</MobileNavLink>
              <MobileNavLink href="/favorites" onClick={() => setIsMenuOpen(false)}>मेरी पसंदीदा</MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 font-medium hover:bg-black hover:text-amber-100 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link 
      href={href}
      className="block py-2 px-4 border-l-4 border-black hover:bg-black hover:text-amber-100 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}