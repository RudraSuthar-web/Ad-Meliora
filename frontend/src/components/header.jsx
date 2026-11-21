'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const WHATSAPP_URL = 'https://wa.me/?text=Hi%20Ad%20Meliora%2C%20I%20have%20a%20problem%20to%20solve';

const NAV_LINKS = [
  { label: 'What We Do', href: '/#what-we-do', id: 'what-we-do' },
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'DMs', href: '/#dms', id: 'dms' },
  { label: 'Process', href: '/#process', id: 'process' },
];

export default function Header() {
  const [active, setActive] = useState('what-we-do');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      NAV_LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = l.id;
      });
      setActive(current || 'what-we-do');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="absolute top-0 inset-x-0 z-50 font-brut">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-5 flex items-center justify-between">
        <Link href="/" className="font-brut font-bold text-xl text-ink no-underline">
          Ad meliora
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-canvas border-2 border-ink rounded-full p-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold text-ink no-underline transition-colors ${
                active === l.id ? 'bg-sun border border-ink' : 'hover:bg-white/60'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brut-btn bg-brut-cyan text-ink text-xs px-4 py-2 no-underline"
          >
            <span className="material-symbols-outlined text-base">chat</span> Message Us
          </a>
        </div>

        <div className="block md:hidden">
          <button
            className="brut-btn bg-white px-3 py-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-5 mt-3 brut-card p-4 flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-semibold text-ink no-underline py-2 border-b border-ink/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brut-btn bg-brut-cyan text-ink text-xs px-4 py-2 justify-center no-underline"
          >
            Message Us
          </a>
        </div>
      )}
    </header>
  );
}
