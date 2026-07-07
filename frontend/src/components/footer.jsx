'use client';
import Link from 'next/link';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Footer() {
  return (

    <footer
      id="success"
      className="relative overflow-hidden border-t"
      style={{
        borderColor: 'rgba(62,72,76,0.25)',
        background: 'rgba(8,12,14,0.95)',
      }}
    >
      {/* Top glow */}
      <div className="teal-glow absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10 pointer-events-none" />

      <div className="max-w-[1480px] mx-auto pl-5 sm:pl-8 md:pl-10 pr-60 relative z-10 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
        {/* Main footer row */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-12 mb-12 sm:mb-14">

          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">

              <span className="font-display text-lg sm:text-xl text-on-surface tracking-tight">Ad Meliora</span>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed text-md sm:text-md md:text-[15px] xl:text-base">
              Better things through intelligent automation. The future of work, redefined for today.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 sm:space-y-4">
            <h5 className="font-label uppercase tracking-[0.22em] text-primary-teal font-semibold" style={{ fontSize: '12px' }}>
              Contact
            </h5>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/admeliora' },
              { label: 'Instagram', href: 'https://www.instagram.com/admeliora.ai?igsh=MXg3OWxsYWVyeG41eQ==', },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="block font-body text-on-surface-variant hover:text-primary-teal transition-colors duration-200 text-md sm:text-md md:text-[15px] xl:text-base">
                {l.label}
              </a>
            ))}
          </div>


        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6 sm:mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="font-label uppercase tracking-[0.14em] text-on-surface-variant text-center sm:text-left" style={{ fontSize: '10px' }}>
            © 2026 Ad Meliora. All rights reserved.
          </p>
          <p className="font-label uppercase tracking-[0.14em] text-on-surface-variant opacity-50" style={{ fontSize: '10px' }}>
            Ad Meliora
          </p>
        </div>
      </div>
    </footer>
  );
}