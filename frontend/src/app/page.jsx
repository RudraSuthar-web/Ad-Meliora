'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

/* ── Reusable fade-up animation wrapper ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger children wrapper ── */
function StaggerContainer({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Data ─────────────────────────────────────────── */
const SERVICES = [
  {
    icon: 'sync_alt',
    title: 'Workflow Sync',
    desc: 'Synchronize data across 200+ applications with zero latency and intelligent error handling.',
    accent: false,
    tag: null,
  },
  {
    icon: 'psychology',
    title: 'Neural Analytics',
    desc: 'Predictive insights that help you understand your business velocity before the quarter ends.',
    accent: true,
    tag: 'Popular',
  },
  {
    icon: 'hub',
    title: 'Custom AI Nodes',
    desc: 'Tailor-made AI agents trained on your proprietary data for ultra-specific business logic.',
    accent: false,
    tag: null,
  },
];

const STEPS = [
  {
    phase: '01',
    title: 'Discovery',
    desc: 'Mapping your existing manual bottlenecks and opportunity surface across all workflows.',
  },
  {
    phase: '02',
    title: 'Architect',
    desc: 'Designing custom AI logic, neural flows, and integration blueprints tailored to your stack.',
  },
  {
    phase: '03',
    title: 'Deploy',
    desc: 'Live scaling and continuous optimization with real-time monitoring and performance audits.',
  },
];

/* ─── Page ─────────────────────────────────────────── */
export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY    = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="overflow-x-hidden" style={{ background: '#0a0e10' }}>
    
      <Link
        href="/book-consultation"
        aria-label="Open consultation"
        className="fixed bottom-4 right-4 z-50 group flex items-end gap-3 rounded-full  px-3 py-2  backdrop-blur-lg transition-all duration-200 hover:scale-110 "
      >
        
         <Image
            src="/robot-mascot.png"
            alt="Robot mascot"
            width={100}
            height={100}
            className="relative z-10 h-20 w-20 object-contain drop-shadow-[0_0_12px_rgba(11,141,166,0.35)]"
            priority
          />
        
      </Link>

      {/* ═══════════════════ ═════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}  
      <section
        ref={heroRef}
        className="relative min-h-[90svh] flex flex-col items-center justify-center text-center
                   px-5 sm:px-8 overflow-hidden"
      >
        {/* Grid background */}
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-80" />

        {/* Ambient glows */} 
        <div className="teal-glow absolute -top-32 -left-32 w-[600px] h-[600px] opacity-30 pointer-events-none" />
        <div className="gold-glow absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none" />
        <div className="teal-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-10 pointer-events-none" />

        {/* Content — parallax on scroll */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto pt-25 lg:pt-28 sm:pt-18"
        >
         

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-on-surface leading-[1.08] tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.0rem)',
            }}
          >
            Uncover{' '}
            <span className="gradient-text">hidden</span>
            {' '}inefficiencies
            <br className="hidden sm:block" />
            {' '}and maximize productivity.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-on-surface-variant leading-relaxed max-w-[540px] mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            Get clarity on your AI potential. We bridge the gap between complex data
            and actionable automation — with zero disruption to your stack.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-2"
          >
            <Link href="/book-consultation"
              className="btn-primary gap-2.5 px-7 py-4 sm:px-8 sm:py-4.5 text-[11px] sm:text-xs">
              Contact Us
           </Link> {/* 
            <Link href="/book-consultation"
              className="btn-ghost gap-2.5 px-7 py-4 sm:px-8 sm:py-4.5 text-[11px] sm:text-xs">
              Book Free AI Audit
            </Link> */}
          </motion.div>

          {/* Trust indicators */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 sm:gap-6 mt-4"
          >
            {[
              { value: '200+', label: 'Integrations' },
              { value: '60+',  label: 'Clients' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-6 bg-outline-variant opacity-40" />}
                <div className="text-center">
                  <div className="font-display text-primary-teal text-sm sm:text-base font-normal">{stat.value}</div>
                  <div className="font-label text-on-surface-variant uppercase tracking-[0.14em]" style={{ fontSize: '9px' }}>{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </motion.div> */}
        </motion.div>

    
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════ */}
      <section
        id="solutions"
        className="py-24 sm:py-28 md:py-32 lg:py-36 px-5 sm:px-8 md:px-12 max-w-[1280px] mx-auto relative"
      >
        {/* Section glow */}
        <div className="teal-glow hidden lg:block absolute top-1/2 -right-48 w-[500px] h-[500px] -z-10 opacity-25 pointer-events-none" />

        {/* Section header */}
        <FadeUp className="text-center mb-14 sm:mb-18 md:mb-20 space-y-4 sm:space-y-5">
          <div className="hud-chip mx-auto">Specialized Solutions</div>
          <h2 className="font-display font-normal text-on-surface"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
            Built for Precision
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-lg mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)' }}>
            Modular AI tools designed to integrate seamlessly with your existing
            tech stack — zero disruption, maximum impact.
          </p>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariant}
              className="glass-card group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] p-7 sm:p-8 md:p-7 lg:p-8 xl:p-9 flex flex-col"
              style={svc.accent ? { background: 'rgba(11,141,166,0.04)', borderColor: 'rgba(11,141,166,0.18)' } : {}}
            >
              {/* Top accent glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${svc.accent ? 'rgba(11,141,166,0.18)' : 'rgba(11,141,166,0.09)'} 0%, transparent 70%)` }}
              />

              {/* Popular badge */}
              {svc.accent && (
                <div className="absolute top-3 right-5">
                  <div className="hud-chip" style={{ fontSize: '8px', padding: '0.18rem 0.6rem' }}>
                    <span className="w-1 h-1 rounded-full bg-primary-teal flex-shrink-0"
                      style={{ boxShadow: '0 0 4px #0b8da6' }} />
                    Popular
                  </div>
                </div>
              )}

              <h3 className="font-display font-normal text-on-surface mb-3 text-xl sm:text-2xl md:text-[1.4rem] lg:text-[1.5rem] xl:text-2xl">
                {svc.title}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed mb-7 flex-grow text-sm sm:text-base md:text-[15px] xl:text-base">
                {svc.desc}
              </p>

              {/* Bottom bar */}
              <div className="card-bar" style={svc.accent ? { background: 'rgba(11,141,166,0.55)' } : {}} />
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* ════════════════════════════════════════════════
          PIPELINE / METHODOLOGY
      ════════════════════════════════════════════════ */}
      <section
        id="methodology"
        className="py-15 sm:py-18 md:py-32 lg:py-36 px-5 sm:px-8 md:px-12 relative"
        style={{ background: 'rgba(11,141,166,0.022)' }}
      >
        {/* Top/Bottom fade */}
        <div className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #0a0e10, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0a0e10, transparent)' }} />

        <div className="teal-glow hidden lg:block absolute -left-48 bottom-1/4 w-[400px] h-[400px] -z-10 opacity-20 pointer-events-none" />

        <div className="max-w-[880px] mx-auto">
          {/* Header */}
          <FadeUp className="text-center mb-16 sm:mb-20 space-y-4 sm:space-y-5">
            <div className="hud-chip mx-auto">The Automation Pipeline</div>
            <h2 className="font-display font-normal text-on-surface"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1' }}>
              From Signal to Scale
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-md mx-auto"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
              A proven three-phase methodology built for speed, precision, and lasting ROI.
            </p>
          </FadeUp>

          {/* Mobile steps */}
          <StaggerContainer className="relative mx-auto max-w-5xl md:hidden">
            <div
              className="absolute left-4 top-4 bottom-4 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(11,141,166,0.35), rgba(11,141,166,0.35), transparent)' }}
            />

            <div className="relative z-10 space-y-4 sm:space-y-5">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.phase}
                  variants={cardVariant}
                  className="flex items-start gap-6 pl-0"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 rounded-full node-glow flex items-center justify-center"
                      style={{ background: '#0a0e10', border: '1.5px solid #0b8da6' }}>
                      <span className="font-label text-primary-teal font-semibold" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>
                        {step.phase}
                      </span>
                    </div>
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: '1px solid rgba(11,141,166,0.3)',
                        transform: 'scale(1.65)',
                        animation: 'pulse-glow 2.5s ease-in-out infinite',
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  </div>

                  <div className="min-w-0 space-y-2 pt-1">
                    <h4 className="font-display font-normal text-on-surface text-xl sm:text-2xl leading-tight">
                      {step.title}
                    </h4>
                    <p className="font-body text-on-surface-variant leading-relaxed text-sm sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>

          {/* Desktop steps */}
          <StaggerContainer className="relative mx-auto hidden max-w-5xl md:block">
            <div
              className="absolute left-10 right-10 top-[27px] h-px"
              style={{ background: 'linear-gradient(to right, transparent 5%, rgba(11,141,166,0.25) 30%, rgba(11,141,166,0.45) 50%, rgba(11,141,166,0.25) 70%, transparent 95%)' }}
            />

            <div className="relative z-10 grid grid-cols-3 gap-8 lg:gap-15">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.phase}
                  variants={cardVariant}
                  className="flex flex-col  items-center text-center"
                >
                  <div className="flex items-center gap-10 -translate-x-10 xl:-translate-x-10">
                    <div className="relative flex-shrink-0 ">
                      <div className="w-11 h-11 rounded-full node-glow flex items-center justify-center"
                        style={{ background: '#0a0e10', border: '1.5px solid #0b8da6' }}>
                        <span className="font-label text-primary-teal font-semibold" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
                          {step.phase}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: '1px solid rgba(11,141,166,0.3)',
                          transform: 'scale(2.0)',
                          animation: 'pulse-glow 2.5s ease-in-out infinite',
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    </div>

                    <h4 className="font-display font-normal text-on-surface text-[1.45rem] lg:text-[1.6rem] xl:text-[1.8rem] leading-tight text-left">
                      {step.title}
                    </h4>
                  </div>

                  <p className="mt-8 font-body text-on-surface-variant leading-relaxed text-[15px] xl:text-base max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════ */}
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12"
      >
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <div className="glass-card relative overflow-hidden text-center
                            rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[2.35rem] lg:rounded-[2.6rem] xl:rounded-[3rem]
                            p-10 sm:p-14 md:p-12 lg:p-14 xl:p-20">

              {/* Background decoration */}
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
              <div className="teal-glow absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 opacity-40 pointer-events-none" />
              <div className="gold-glow absolute -bottom-20 -left-20 w-64 sm:w-80 h-64 sm:h-80 opacity-30 pointer-events-none" />

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{ boxShadow: 'inset 0 0 60px rgba(11,141,166,0.04)' }} />

              <div className="relative z-10 space-y-6 sm:space-y-7 md:space-y-8">
                <div className="hud-chip mx-auto">Ready to Transform?</div>

                <h2
                  className="font-display font-normal text-on-surface leading-[1.1]"
                  style={{ fontSize: 'clamp(1.9rem, 5vw, 4rem)' }}
                >
                  Ready to reclaim
                  <br className="hidden sm:block" />
                  {' '}your time?
                </h2>

                <p className="font-body text-on-surface-variant leading-relaxed max-w-md mx-auto"
                  style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)' }}>
                  Join the next wave of high-performance enterprises. We handle
                  the complexity, you enjoy the results.
                </p>

                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                  {/* <Link href="/book-consultation"
                    className="btn-primary gap-2.5 px-8 py-4 sm:px-10 sm:py-5 text-[11px] sm:text-xs">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                    Book Free Consultation
                  </Link> */}
                  <Link href="/book-consultation"
                    className="btn-ghost gap-2.5 px-8 py-4 sm:px-10 sm:py-5 text-[11px] sm:text-xs">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
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

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
          {/* Main footer row */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-12 mb-12 sm:mb-14">

            {/* Brand */}
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center gap-3">
                
                <span className="font-display text-base sm:text-lg text-on-surface tracking-tight">Ad Meliora</span>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm sm:text-base">
                Better things through intelligent automation. The future of work, redefined for today.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3 sm:space-y-4">
              <h5 className="font-label uppercase tracking-[0.22em] text-primary-teal font-semibold" style={{ fontSize: '10px' }}>
                Contact
              </h5>
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Instagram', href: '#' },
                { label: 'Chat with us', href: 'mailto:hello@admeliora.com' },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  className="block font-body text-on-surface-variant hover:text-primary-teal transition-colors duration-200 text-sm sm:text-base">
                  {l.label}
                </a>
              ))}
            </div>  

         
          </div>

          {/* Bottom bar */}
          <div className="section-divider mb-6 sm:mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-label uppercase tracking-[0.14em] text-on-surface-variant text-center sm:text-left" style={{ fontSize: '9.5px' }}>
              © 2026 Ad Meliora. All rights reserved.
            </p>
            <p className="font-label uppercase tracking-[0.14em] text-on-surface-variant opacity-50" style={{ fontSize: '9.5px' }}>
              Ad Meliora — Latin for "Towards Better Things"
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
