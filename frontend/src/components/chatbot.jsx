'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Chatbot() {
  const [isPromptVisible, setIsPromptVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Set to `true` to force animations even when user prefers reduced motion.
  const forceAnimate = false;
  const shouldAnimate = forceAnimate || !prefersReducedMotion;

  const motionInitial = shouldAnimate ? { opacity: 0, y: 16, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 };
  const motionAnimate = { opacity: 1, y: 0, scale: 1 };
  const motionExit = shouldAnimate ? { opacity: 0, y: 12, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 };

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' && window.sessionStorage.getItem('chatbot-prompt-dismissed');
    if (dismissed) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsPromptVisible(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  const dismissPrompt = () => {
    setIsPromptVisible(false);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('chatbot-prompt-dismissed', 'true');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1">
      <AnimatePresence>
        {isPromptVisible && (
          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            exit={motionExit}
            transition={{ duration: shouldAnimate ? 0.25 : 0, ease: [0.22, 1, 0.36, 1] }}
            className=" rounded-2xl border border-white/10 bg-[rgba(11,16,18,0.96)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <div className="flex items-start ">


              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-3 justify-between">
                  <div>
                    {/* <p className="font-label text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                      Ad Meliora Assistant
                    </p> */}
                    <h3 className="font-display text-md sm:text-md  lg:text-md text-on-surface">
                      How may I help you?
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={dismissPrompt}
                    aria-label="Dismiss chat prompt"
                    className="text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      close
                    </span>
                  </button>
                </div>
                {/* 
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  Start a consultation and tell us what you need. We’ll route you to the right next step.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href="/book-consultation"
                    aria-label="Open consultation"
                    className="inline-flex items-center justify-center rounded-full bg-primary-teal px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Let’s talk
                  </Link>
                  <button
                    type="button"
                    onClick={dismissPrompt}
                    className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    Maybe later
                  </button>
                </div> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/book-consultation"
        aria-label="Open consultation"
        className="group flex items-end gap-3 rounded-full py-2 transition-all duration-200"
      >
        <Image
          src="/robot-mascot.png"
          alt="Robot mascot"
          width={80}
          height={80}
          className="relative z-10 h-30 w-30 sm:h-30 sm:w-30 md:h-40 md:w-40 object-contain drop-shadow-[0_0_12px_rgba(11,141,166,0.35)] opacity-90 transition-all duration-200 hover:scale-110 hover:opacity-100"
          priority
        />
      </Link>
    </div>
  );
}