'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300 ${isScrolled ? 'h-16 bg-surface/90 border-white/10 shadow-lg' : 'h-20 bg-surface/50 border-transparent'}`}>
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="/" className="z-50">
          <div className="text-headline-lg font-display-lg text-primary hover:opacity-90 transition-opacity">Ad Meliora</div>
        </a> 
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#solutions">Solutions</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#about">Methodology</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#solutions">Success Stories</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#about">About</a>
        </div>
        <div className="hidden md:block">
          <Link href="/book-consultation" className="bg-primary text-on-primary px-6 py-2 rounded-full font-display-md text-body-md active:scale-95 duration-200 transition-all hover:shadow-[0_0_20px_rgba(112,212,239,0.4)]">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Morphing Hamburger) */}
        <button 
          className="relative w-10 h-10 md:hidden text-on-surface z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-on-surface rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay with Premium Scale-Up & Staggered Transitions */}
      <div className={`fixed inset-0 bg-surface/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-start py-32 gap-8 md:hidden overflow-y-auto transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}>
        <a className={`text-on-surface hover:text-primary font-display-md text-[32px] tracking-wide transform transition-all duration-500 delay-75 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
        <a className={`text-on-surface hover:text-primary font-display-md text-[32px] tracking-wide transform transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} href="#about" onClick={() => setIsMobileMenuOpen(false)}>Methodology</a>
        <a className={`text-on-surface hover:text-primary font-display-md text-[32px] tracking-wide transform transition-all duration-500 delay-155 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Success Stories</a>
        <a className={`text-on-surface hover:text-primary font-display-md text-[32px] tracking-wide transform transition-all duration-500 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        
        <Link href="/book-consultation" onClick={() => setIsMobileMenuOpen(false)} className={`mt-8 bg-primary text-on-primary px-10 py-4 rounded-full font-display-md text-[24px] active:scale-95 transition-all duration-500 delay-300 shadow-[0_0_20px_rgba(112,212,239,0.4)] transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
