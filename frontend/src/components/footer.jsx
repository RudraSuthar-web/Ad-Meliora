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

      <div className="max-w-[1480px] mx-auto pl-5 sm:pl-8 md:pl-10 pr-5 sm:pr-8 md:pr-10 relative z-10 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
        {/* Main footer row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-14 items-start">

          {/* Brand */}
          <div className="space-y-4 max-w-xs text-left">
            <div className="flex items-center gap-3 justify-start">
              <span className="font-display text-lg sm:text-xl text-on-surface tracking-tight">Ad Meliora</span>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed text-md sm:text-md md:text-[15px] xl:text-base">
              Better things through intelligent automation. The future of work, redefined for today.
            </p>
          </div>

          {/* Links (Centered) */}
          <div className="space-y-3 sm:space-y-4 text-left sm:text-center flex flex-col sm:items-center">
            <h5 className="font-label uppercase tracking-[0.22em] text-primary-teal font-semibold w-full text-left sm:text-center" style={{ fontSize: '12px' }}>
              Contact
            </h5>
            <div className="flex flex-row gap-3 items-center justify-start sm:justify-center w-full">
              {[
                { 
                  label: 'LinkedIn', 
                  href: 'https://www.linkedin.com/company/admeliora-ai',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                { 
                  label: 'Instagram', 
                  href: 'https://www.instagram.com/admeliora.ai?igsh=MXg3OWxsYWVyeG41eQ==',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  label: 'X', 
                  href: 'https://x.com/admeliora_ai',
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                { 
                  label: 'Youtube', 
                  href: 'https://youtube.com/@admeliora_ai?si=3ifFUOiEppsogmlo',
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163c-.272-1.023-1.077-1.83-2.099-2.103-1.859-.5-9.4-.5-9.4-.5s-7.54 0-9.4.5c-1.022.273-1.827 1.08-2.099 2.103-.5 1.86-.5 5.837-.5 5.837s0 3.978.5 5.838c.272 1.022 1.077 1.826 2.099 2.099 1.86.5 9.4.5 9.4.5s7.54 0 9.4-.5c1.022-.273 1.827-1.077 2.099-2.099.5-1.86.5-5.838.5-5.838s0-3.977-.5-5.837zm-14.194 9.176V8.824L15.6 12l-6.296 3.339z"/>
                    </svg>
                  )
                }
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-on-surface-variant hover:text-[#70d4ef] hover:border-[rgba(11,141,166,0.3)] hover:bg-[rgba(11,141,166,0.05)] transition-all duration-200"
                  aria-label={l.label}>
                  {l.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden sm:block" />

        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6 sm:mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:pr-60">
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