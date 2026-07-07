'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Our Services', href: '#solutions' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Track active section */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-[rgba(10,14,16,0.92)] border-b border-[rgba(62,72,76,0.35)] shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-b border-transparent'
          }`}
        style={{ backdropFilter: scrolled ? 'blur(24px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none' }}
      >
        <div className="flex justify-between items-center h-[68px] sm:h-[76px] md:h-[70px] lg:h-[80px] px-5 sm:px-8 lg:px-12 max-w-[1280px] mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0 group" aria-label="Ad Meliora Home">

            <span className="font-display text-[25px] sm:text-[25px] md:text-[20px] lg:text-[22px] tracking-tight text-on-surface group-hover:text-primary transition-colors duration-300">
              Ad Meliora
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className={`relative px-4 py-2 font-label text-[9px] lg:text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 rounded-lg ${activeSection === l.href.replace('#', '')
                    ? 'text-primary-teal'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`}>
                {activeSection === l.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-0 bottom-0 h-1"
                    initial={{ scaleX: 0, originY: 1 }}
                    animate={{ scaleX: 1, originY: 1 }}
                    style={{ borderBottom: '1px solid rgba(11,141,166,0.5)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />

                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/book-consultation"
              className="btn-primary px-3 py-2 text-[9px] lg:text-[9px] gap-2">
              Contact Us
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-on-surface rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-on-surface rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-on-surface rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex uppercase font-label flex-col items-center justify-center gap-2"
            style={{ background: 'rgba(10,14,16,0.87)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl sm:text-2xl text-on-surface-varient hover:text-primary-teal transition-colors duration-300 py-3"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <Link href="/book-consultation"
                onClick={() => setMobileOpen(false)}
                className="btn-primary px-10 py-4 text-xs gap-2">
                Contact Us
              </Link>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(11,141,166,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
