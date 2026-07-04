'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const NAV_LINKS = [
    { label:'Solutions',   href:'#solutions'   },
    { label:'Methodology', href:'#methodology' },
    { label:'Success',     href:'#success'     },
    { label:'About',       href:'#about'       },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,15,17,0.94)] border-b border-[rgba(62,72,76,0.45)] shadow-xl'
            : 'bg-[rgba(15,20,22,0.7)]  border-b border-[rgba(62,72,76,0.18)]'
        }`}
        style={{ backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)' }}
      >
        <div className="flex justify-between items-center
                        h-16 sm:h-18 md:h-20
                        px-4 sm:px-6 md:px-8 lg:px-12
                        max-w-[1280px] mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 no-underline flex-shrink-0"
            aria-label="Ad Meliora Home">
            {/* <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ background:'linear-gradient(135deg,#0b8da6,#70d4ef)' }}>
              <span className="material-symbols-outlined text-[#003641]"
                style={{ fontSize:'18px', fontVariationSettings:"'FILL' 1" }}>bolt</span>
            </div> */}
            <span className="font-display text-base sm:text-2xl md:text-3xl tracking-tight text-on-surface">
              Ad Meliora
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="font-label text-[10px] lg:text-[11px] uppercase tracking-[0.16em] lg:tracking-[0.18em]
                           text-on-surface-variant hover:text-primary-teal transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/book-consultation"
              className="btn-ghost px-5 py-2 lg:px-6 lg:py-2.5 text-[10px] lg:text-xs">
              Get Started
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5
                       text-on-surface focus:outline-none z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300
              ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300
              ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-on-surface rounded-full transition-all duration-300
              ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-6 sm:gap-8
                    transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background:'rgba(10,15,17,0.97)', backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)' }}
      >
        {NAV_LINKS.map((l, i) => (
          <a key={l.href} href={l.href}
            className={`font-display text-3xl sm:text-4xl tracking-wide text-on-surface
                        hover:text-primary-teal transition-all duration-400
                        ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay:`${i * 55}ms` }}
            onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <Link href="/book-consultation"
          onClick={() => setMobileOpen(false)}
          className={`mt-4 btn-primary px-10 py-4 text-sm transition-all duration-400
                      ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          style={{ transitionDelay:'260ms' }}>
          Get Started
        </Link>
      </div>
    </>
  );
}
