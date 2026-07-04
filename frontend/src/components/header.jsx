'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions',   href: '#solutions'   },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Success',     href: '#success'     },
    { label: 'About',       href: '#about'       },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(10,15,17,0.92)] border-b border-[rgba(62,72,76,0.4)] shadow-lg'
          : 'bg-[rgba(15,20,22,0.75)] border-b border-[rgba(62,72,76,0.2)]'
      }`}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Ad Meliora Home">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0b8da6, #70d4ef)' }}
          >
            <span className="material-symbols-outlined text-[#003641]" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
          </div>
          <span className="font-display text-xl tracking-tight text-on-surface">Ad Meliora</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-[11px] uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/book-consultation"
            className="btn-ghost px-6 py-2 text-xs"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative w-10 h-10 md:hidden text-on-surface z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,15,17,0.97)', backdropFilter: 'blur(24px)' }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-display text-[32px] tracking-wide text-on-surface hover:text-primary-teal transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link
          href="/book-consultation"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`mt-6 btn-primary px-10 py-4 text-base transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
