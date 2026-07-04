'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {

  /* ── Scroll reveal ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Mascot parallax (desktop only) ── */
  useEffect(() => {
    const frame = document.getElementById('mascot-frame');
    if (!frame) return;
    const onMove = (e) => {
      const r = frame.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top  + r.height / 2)) / window.innerHeight;
      frame.style.transform = `perspective(900px) rotateY(${dx * 5}deg) rotateX(${-dy * 3}deg)`;
    };
    const onLeave = () => { frame.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseleave', onLeave); };
  }, []);

  const BRANDS = ['NEXUS','AETHER','ORBITAL','ZENITH','QUANTUM','VERTEX'];

  const SERVICES = [
    { icon:'sync_alt',   title:'Workflow Sync',    desc:'Synchronize data across 200+ applications with zero latency and intelligent error handling.',            accent:false },
    { icon:'psychology', title:'Neural Analytics', desc:'Predictive insights that help you understand your business velocity before the quarter ends.',           accent:true  },
    { icon:'hub',        title:'Custom Nodes',     desc:'Tailor-made AI agents trained on your proprietary data for ultra-specific business logic.',              accent:false },
  ];

  const STEPS = [
    { phase:'01', title:'Discovery', delay:'0s',   desc:'Mapping your existing manual bottlenecks and opportunity surface across all workflows.' },
    { phase:'02', title:'Architect', delay:'0.6s', desc:'Designing custom AI logic, neural flows, and integration blueprints tailored to your stack.' },
    { phase:'03', title:'Deploy',    delay:'1.2s', desc:'Live scaling and continuous optimization with real-time monitoring and performance audits.' },
  ];

  const STATS = [
    { value:'200+', label:'App Integrations' },
    { value:'60+',  label:'Enterprise Clients' },
    { value:'34%',  label:'Avg. ROI Boost' },
    { value:'99.9%',label:'Uptime SLA' },
  ];

  const FOOTER_COLS = [
    { title:'Company',   links:[{ label:'About', href:'#' },{ label:'Case Studies', href:'#' },{ label:'Careers', href:'#' }] },
    { title:'Resources', links:[{ label:'Blog',  href:'#' },{ label:'API Docs',     href:'#' },{ label:'Changelog',href:'#' }] },
    { title:'Contact',   links:[{ label:'LinkedIn', href:'#' },{ label:'Twitter / X', href:'#' },{ label:'hello@abmeliora.com', href:'mailto:hello@abmeliora.com' }] },
  ];

  return (
    <main className="overflow-x-hidden">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative
                          pt-28 pb-16
                          sm:pt-36 sm:pb-20
                          md:pt-44 md:pb-28
                          lg:pt-52 lg:pb-36
                          px-5 sm:px-8 md:px-12
                          max-w-[1280px] mx-auto">

        {/* Ambient blobs */}
        <div className="teal-glow hidden sm:block absolute -top-20 -left-32 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] -z-10 opacity-60" />
        <div className="gold-glow hidden sm:block absolute top-1/3 right-0 w-[250px] h-[250px] md:w-[380px] md:h-[380px] -z-10 opacity-50" />

        {/* Two-column: stacked mobile → side-by-side lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 z-10 text-center lg:text-left items-center lg:items-start">

            {/* HUD badge */}
            <div className="hud-chip">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-teal"
                style={{ boxShadow:'0 0 6px #0b8da6', animation:'pulse-glow 2s ease-in-out infinite' }} />
              Intelligence Refined
            </div>

            {/* H1 — scales from 32px mobile → 72px+ desktop */}
            <h1 className="font-display tracking-tight text-on-surface leading-[1.08]
                           text-[2rem]
                           sm:text-[2.8rem]
                           md:text-[3.5rem]
                           lg:text-[4rem]
                           xl:text-[4.75rem]
                           2xl:text-[5.25rem]">
              Uncover{' '}
              <span className="gradient-text">hidden</span>
              {' '}inefficiencies<br className="hidden md:block" />
              {' '}and maximize productivity.
            </h1>

            {/* Sub-copy — scales comfortably */}
            <p className="text-on-surface-variant leading-relaxed font-body max-w-lg
                          text-base
                          sm:text-lg
                          md:text-xl
                          lg:text-xl">
              Get clarity on your AI potential. We bridge the gap between complex data and actionable automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/book-consultation"
                className="btn-primary flex items-center justify-center gap-2
                           px-6 py-3.5
                           sm:px-7 sm:py-4
                           md:px-8 md:py-4
                           lg:px-9 lg:py-5
                           text-xs sm:text-sm md:text-sm lg:text-base
                           w-full xs:w-auto">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">schedule</span>
                Time Savings Audit
              </Link>
              <Link href="/book-consultation"
                className="btn-ghost flex items-center justify-center gap-2
                           px-6 py-3.5
                           sm:px-7 sm:py-4
                           md:px-8 md:py-4
                           lg:px-9 lg:py-5
                           text-xs sm:text-sm md:text-sm lg:text-base
                           w-full xs:w-auto">
                Book Free AI Audit
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
              </Link>
            </div>

            {/* Trust pill */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['A','B','C'].map((l, i) => (
                  <div key={l}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-surface
                               flex items-center justify-center text-[10px] sm:text-xs
                               font-display text-on-primary"
                    style={{ background: i===0 ? 'linear-gradient(135deg,#0b8da6,#70d4ef)'
                                       : i===1 ? 'linear-gradient(135deg,#1b2022,#262b2d)'
                                               : 'linear-gradient(135deg,#2e9db7,#0b8da6)' }}>
                    {l}
                  </div>
                ))}
              </div>
              <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.15em] text-on-surface-variant">
                Trusted by 60+ enterprises
              </span>
            </div>
          </div>

          {/* ── Right: Mascot ── */}
          <div className="flex justify-center lg:justify-end z-10 mt-4 lg:mt-0">
            <div className="relative
                            w-[260px]
                            xs:w-[300px]
                            sm:w-[380px]
                            md:w-[430px]
                            lg:w-[460px]
                            xl:w-[500px]">

              {/* Tech frame */}
              <div id="mascot-frame" className="tech-frame w-full aspect-square"
                style={{ transition:'transform 0.12s linear' }}>
                <div className="tech-frame-inner scan-line-overlay">
                  <div className="corner-deco corner-tl" />
                  <div className="corner-deco corner-tr" />
                  <div className="corner-deco corner-bl" />
                  <div className="corner-deco corner-br" />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background:'radial-gradient(ellipse at 30% 80%, rgba(11,141,166,0.18) 0%, transparent 60%)' }} />
                  <Image src="/robot-mascot.png" alt="Ab Meliora AI Robot Mascot"
                    width={500} height={500} priority
                    className="relative z-10 w-[92%] h-auto object-contain mx-auto mt-auto
                               transition-transform duration-700 hover:scale-105"
                    style={{ transformOrigin:'bottom center' }} />
                </div>
              </div>

              {/* Floating badge – analytics */}
              <div className="hidden xs:flex float-badge glass-card
                              absolute -top-4 -right-4 sm:-top-5 sm:-right-5
                              p-2.5 sm:p-3 md:p-3.5
                              rounded-xl sm:rounded-2xl items-center gap-2 sm:gap-2.5"
                style={{ borderColor:'rgba(11,141,166,0.35)' }}>
                <span className="material-symbols-outlined text-primary-teal"
                  style={{ fontSize:'22px', filter:'drop-shadow(0 0 5px rgba(11,141,166,0.8))' }}>analytics</span>
                <div>
                  <div className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-on-surface-variant">Live Data</div>
                  <div className="font-display text-xs sm:text-sm lg:text-base text-on-surface">+34% ROI</div>
                </div>
              </div>

              {/* Floating badge – memory */}
              <div className="hidden xs:flex float-badge-slow glass-card
                              absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5
                              p-2.5 sm:p-3 md:p-3.5
                              rounded-xl sm:rounded-2xl items-center gap-2 sm:gap-2.5"
                style={{ borderColor:'rgba(11,141,166,0.35)' }}>
                <span className="material-symbols-outlined text-tertiary"
                  style={{ fontSize:'22px', filter:'drop-shadow(0 0 5px rgba(239,194,0,0.7))' }}>memory</span>
                <div>
                  <div className="font-label text-[8px] sm:text-[10px] uppercase tracking-widest text-on-surface-variant">Neural Core</div>
                  <div className="font-display text-xs sm:text-sm lg:text-base text-on-surface">AI-Powered</div>
                </div>
              </div>

              {/* Status chip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                <div className="hud-chip" style={{ fontSize:'8px', padding:'0.2rem 0.7rem' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-teal"
                    style={{ boxShadow:'0 0 6px #0b8da6', animation:'pulse-glow 1.5s ease-in-out infinite' }} />
                  System Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div className="section-divider" />
      <section className="py-8 sm:py-10 overflow-hidden" style={{ background:'rgba(27,32,34,0.2)' }}>
        <div className="marquee-track items-center">
          {[1,2].map((copy) => (
            <div key={copy} className="flex items-center gap-8 sm:gap-16 md:gap-20 lg:gap-28 px-8 sm:px-14 shrink-0"
              aria-hidden={copy===2}>
              {BRANDS.map((name, i) => (
                <React.Fragment key={name}>
                  <span className="font-display uppercase tracking-[0.2em] text-on-surface-variant
                                   text-sm sm:text-lg md:text-xl lg:text-2xl"
                    style={{ opacity:0.28 }}>{name}</span>
                  {i < BRANDS.length-1 && (
                    <span className="w-1 h-1 rounded-full bg-primary-teal flex-shrink-0" style={{ opacity:0.4 }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section id="solutions"
        className="py-16 sm:py-20 md:py-28 lg:py-36
                   px-5 sm:px-8 md:px-12
                   max-w-[1280px] mx-auto relative">
        <div className="teal-glow hidden lg:block absolute top-1/2 -right-40 w-[450px] h-[450px] -z-10 opacity-40" />

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 reveal">
          <div className="hud-chip mx-auto">
            <span className="material-symbols-outlined text-sm sm:text-base">auto_awesome</span>
            Specialized Solutions
          </div>
          <h2 className="font-display font-normal text-on-surface
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Built for Precision
          </h2>
          <p className="text-on-surface-variant font-body leading-relaxed max-w-xl mx-auto
                        text-sm sm:text-base md:text-lg lg:text-xl">
            Modular AI tools designed to integrate seamlessly with your existing tech stack —
            zero disruption, maximum impact.
          </p>
        </div>

        {/* Cards — 1 col mobile, 2 col sm, 3 col md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {SERVICES.map((svc) => (
            <div key={svc.title}
              className="glass-card group relative overflow-hidden reveal
                         p-7 sm:p-8 md:p-9 lg:p-10
                         rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem]"
              style={svc.accent ? { background:'rgba(11,141,166,0.05)', borderColor:'rgba(11,141,166,0.2)' } : {}}>
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
                style={{ background:`radial-gradient(circle, ${svc.accent ? 'rgba(11,141,166,0.18)' : 'rgba(11,141,166,0.1)'} 0%, transparent 70%)` }} />
              {svc.accent && (
                <div className="absolute top-5 right-5">
                  <div className="hud-chip" style={{ fontSize:'8px', padding:'0.18rem 0.55rem' }}>
                    <span className="w-1 h-1 rounded-full bg-primary-teal" style={{ boxShadow:'0 0 4px #0b8da6' }} />
                    Popular
                  </div>
                </div>
              )}
              {/* Icon */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16
                              rounded-xl sm:rounded-2xl flex items-center justify-center text-primary-teal
                              mb-6 sm:mb-7 md:mb-8 group-hover:scale-110 transition-transform duration-300"
                style={{ background:`rgba(11,141,166,${svc.accent ? '0.12' : '0.1'})`, border:'1px solid rgba(11,141,166,0.25)' }}>
                <span className="material-symbols-outlined text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px]">{svc.icon}</span>
              </div>
              <h3 className="font-display font-normal text-on-surface mb-3 sm:mb-4
                             text-xl sm:text-2xl md:text-2xl lg:text-3xl">
                {svc.title}
              </h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-6 sm:mb-7 md:mb-8
                            text-sm sm:text-base md:text-base lg:text-lg">
                {svc.desc}
              </p>
              <div className="card-bar" style={svc.accent ? { background:'rgba(11,141,166,0.6)' } : {}} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <div className="section-divider" />
      <section className="py-12 sm:py-14 md:py-16 lg:py-20
                          px-5 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="space-y-2 sm:space-y-3 reveal">
              <div className="font-display text-on-surface text-primary-teal
                              text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ filter:'drop-shadow(0 0 12px rgba(11,141,166,0.5))' }}>
                {s.value}
              </div>
              <div className="font-label uppercase tracking-widest text-on-surface-variant
                              text-[10px] sm:text-xs md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ══════════════════ PIPELINE ══════════════════ */}
      <section id="methodology"
        className="py-16 sm:py-20 md:py-28 lg:py-36
                   px-5 sm:px-8 md:px-12 max-w-[1280px] mx-auto relative">
        <div className="teal-glow hidden lg:block absolute -left-40 bottom-0 w-[380px] h-[380px] -z-10 opacity-40" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 reveal">
            <div className="hud-chip mx-auto">
              <span className="material-symbols-outlined text-sm sm:text-base">account_tree</span>
              The Automation Pipeline
            </div>
            <h2 className="font-display font-normal text-on-surface
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              From Signal to Scale
            </h2>
          </div>

          <div className="relative">
            {/* Desktop horizontal connector */}
            <div className="hidden md:block absolute top-4 left-0 w-full h-px"
              style={{ background:'linear-gradient(to right, transparent 5%, rgba(11,141,166,0.3) 30%, rgba(11,141,166,0.5) 50%, rgba(11,141,166,0.3) 70%, transparent 95%)' }} />
            {/* Mobile vertical connector */}
            <div className="md:hidden absolute left-4 top-0 h-full w-px"
              style={{ background:'linear-gradient(to bottom, transparent 5%, rgba(11,141,166,0.35) 20%, rgba(11,141,166,0.35) 80%, transparent 95%)' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-8 relative z-10">
              {STEPS.map((step) => (
                <div key={step.phase}
                  className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center reveal
                             pl-10 md:pl-0">
                  {/* Node */}
                  <div className="w-8 h-8 rounded-full node-glow flex items-center justify-center relative
                                  md:mb-8 -ml-10 md:ml-0 md:mx-auto flex-shrink-0"
                    style={{ background:'#0a0f11', border:'2px solid #0b8da6' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-teal"
                      style={{ animation:'pulse-glow 2s ease-in-out infinite', animationDelay:step.delay }} />
                    <div className="absolute inset-0 rounded-full"
                      style={{ border:'1px solid rgba(11,141,166,0.4)', transform:'scale(1.8)',
                               animation:'pulse-glow 2s ease-in-out infinite', animationDelay:step.delay }} />
                  </div>
                  {/* Text */}
                  <div>
                    <div className="font-label uppercase tracking-[0.2em] text-primary-teal mb-1.5 sm:mb-2
                                    text-[10px] sm:text-xs md:text-sm">
                      Phase {step.phase}
                    </div>
                    <h4 className="font-display font-normal text-on-surface mb-2 sm:mb-3
                                   text-lg sm:text-xl md:text-xl lg:text-2xl">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant font-body leading-relaxed md:max-w-[200px] md:mx-auto
                                  text-sm sm:text-base md:text-base lg:text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section id="about"
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card text-center relative overflow-hidden reveal
                          rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem]
                          p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24">
            <div className="teal-glow absolute -top-16 -right-16 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 opacity-50 pointer-events-none" />
            <div className="gold-glow absolute -bottom-16 -left-16 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-5 sm:space-y-6 md:space-y-8">
              <div className="hud-chip mx-auto">
                <span className="material-symbols-outlined text-sm sm:text-base">rocket_launch</span>
                Let&apos;s Build Together
              </div>
              <h2 className="font-display font-normal text-on-surface leading-[1.1]
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Ready to reclaim<br className="hidden sm:block" /> your time?
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed
                            max-w-xs sm:max-w-sm md:max-w-xl mx-auto
                            text-sm sm:text-base md:text-lg lg:text-xl">
                Join the next wave of high-performance enterprises. We handle the complexity, you enjoy the results.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                <Link href="/book-consultation"
                  className="btn-primary flex items-center justify-center gap-2
                             px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6
                             text-sm sm:text-base md:text-base lg:text-lg">
                  Talk to an Expert
                </Link>
                <button className="btn-ghost flex items-center justify-center gap-2
                                   px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6
                                   text-sm sm:text-base md:text-base lg:text-lg">
                  View Case Studies
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] md:text-[20px]">open_in_new</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer id="success"
        className="border-t pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-8 relative overflow-hidden"
        style={{ borderColor:'rgba(62,72,76,0.3)', background:'rgba(10,15,17,0.85)' }}>
        <div className="teal-glow absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-15 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          {/* Grid: 1col → 2col → 4col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-14 md:mb-16">
            {/* Brand col */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:'linear-gradient(135deg,#0b8da6,#70d4ef)' }}>
                  <span className="material-symbols-outlined text-[#003641]"
                    style={{ fontSize:'17px', fontVariationSettings:"'FILL' 1" }}>bolt</span>
                </div>
                <span className="font-display text-lg sm:text-xl text-on-surface">Ab Meliora</span>
              </div>
              <p className="text-on-surface-variant font-body leading-relaxed max-w-xs
                            text-sm sm:text-base">
                Better things through intelligent automation. The future of work, redefined for today.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="space-y-3 sm:space-y-4">
                <h5 className="font-label uppercase tracking-[0.2em] text-primary-teal font-semibold
                               text-[10px] sm:text-xs md:text-sm">
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href}
                    className="block text-on-surface-variant hover:text-primary-teal transition-colors font-body
                               text-sm sm:text-base">
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="section-divider mb-6 sm:mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-label uppercase tracking-[0.12em] text-on-surface-variant text-center sm:text-left
                          text-[10px] sm:text-xs">
              © 2024 Ab Meliora. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" style={{ boxShadow:'0 0 6px #0b8da6' }} />
              <span className="font-label uppercase tracking-[0.12em] text-on-surface-variant
                               text-[10px] sm:text-xs">
                System Status: Optimized
              </span>
            </div>
            <div className="flex gap-4 sm:gap-6">
              {['Privacy','Terms'].map((t) => (
                <a key={t} href="#"
                  className="font-label uppercase tracking-[0.12em] text-on-surface-variant hover:text-primary-teal transition-colors
                             text-[10px] sm:text-xs">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
