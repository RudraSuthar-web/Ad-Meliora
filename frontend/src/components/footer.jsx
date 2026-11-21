'use client';
import React from 'react';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/admeliora-ai' },
  { label: 'Instagram', href: 'https://www.instagram.com/admeliora.ai?igsh=MXg3OWxsYWVyeG41eQ==' },
  { label: 'X', href: 'https://x.com/admeliora_ai' },
  { label: 'YouTube', href: 'https://youtube.com/@admeliora_ai?si=3ifFUOiEppsogmlo' },
];

export default function Footer() {
  return (
    <footer id="success" className="bg-ink text-white font-brut">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="font-bold text-xl">Ad meliora</p>
          <p className="text-sm text-white/60 mt-1">AI automation & conversion-first websites.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border-2 border-white/80 text-sm font-semibold text-white no-underline hover:bg-sun hover:text-ink hover:border-sun transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-white/40 pb-6">© {new Date().getFullYear()} Ad Meliora. All rights reserved.</p>
    </footer>
  );
}