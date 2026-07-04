'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax tilt on mascot
  useEffect(() => {
    const frame = document.getElementById('mascot-frame');
    if (!frame) return;
    const handleMove = (e) => {
      const rect = frame.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      frame.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`;
    };
    const handleLeave = () => { frame.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'; };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <main>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-visible">

        {/* Ambient glows */}
        <div className="teal-glow absolute -top-20 -left-40 w-[600px] h-[600px] -z-10 opacity-70 pointer-events-none" />
        <div className="gold-glow absolute top-1/2 right-0 w-[400px] h-[400px] -z-10 opacity-60 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left copy ── */}
          <div className="space-y-8 z-10">

            {/* HUD badge */}
            <div className="hud-chip">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary-teal"
                style={{ animation:'pulse-glow 2s ease-in-out infinite', boxShadow:'0 0 6px #0b8da6' }}
              />
              Intelligence Refined
            </div>

            {/* Headline */}
            <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl xl:text-[4.5rem] leading-[1.08] tracking-tight text-on-surface">
              Uncover{' '}
              <span className="gradient-text">hidden</span>
              {' '}inefficiencies<br className="hidden sm:block" /> and maximize productivity.
            </h1>

            {/* Sub-copy */}
            <p className="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed font-body">
              Get clarity on your AI potential. We bridge the gap between complex data and actionable automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/book-consultation"
                className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 text-xs"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>schedule</span>
                Time Savings Audit
              </Link>
              <Link
                href="/book-consultation"
                className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 text-xs"
              >
                Book Free AI Audit
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </Link>
            </div>

            {/* Trust pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {['A','B','C'].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-display text-on-primary"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(135deg,#0b8da6,#70d4ef)'
                        : i === 1
                          ? 'linear-gradient(135deg,#1b2022,#262b2d)'
                          : 'linear-gradient(135deg,#2e9db7,#0b8da6)',
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
                Trusted by 60+ enterprises
              </span>
            </div>
          </div>

          {/* ── Right: Mascot ── */}
          <div className="flex flex-col items-center lg:items-end z-10">
            <div className="relative w-full max-w-[480px]">

              {/* Tech frame */}
              <div
                id="mascot-frame"
                className="tech-frame w-full aspect-square"
                style={{ transition: 'transform 0.12s linear' }}
              >
                <div className="tech-frame-inner scan-line-overlay">
                  {/* Corner HUD decorations */}
                  <div className="corner-deco corner-tl" />
                  <div className="corner-deco corner-tr" />
                  <div className="corner-deco corner-bl" />
                  <div className="corner-deco corner-br" />

                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(11,141,166,0.18) 0%, transparent 60%)' }}
                  />

                  {/* Robot mascot */}
                  <Image
                    src="/robot-mascot.png"
                    alt="Ad Meliora AI Robot Mascot"
                    width={480}
                    height={480}
                    className="relative z-10 w-[92%] h-auto object-contain mx-auto mt-auto transition-transform duration-700 hover:scale-105"
                    style={{ transformOrigin: 'bottom center' }}
                    priority
                  />
                </div>
              </div>

              {/* Floating badge – analytics */}
              <div
                className="float-badge glass-card absolute -top-5 -right-5 p-3.5 rounded-2xl flex items-center gap-2.5"
                style={{ borderColor: 'rgba(11,141,166,0.35)' }}
              >
                <span
                  className="material-symbols-outlined text-primary-teal"
                  style={{ fontSize: '26px', filter: 'drop-shadow(0 0 6px rgba(11,141,166,0.8))' }}
                >
                  analytics
                </span>
                <div>
                  <div className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Live Data</div>
                  <div className="font-display text-sm text-on-surface">+34% ROI</div>
                </div>
              </div>

              {/* Floating badge – memory */}
              <div
                className="float-badge-slow glass-card absolute -bottom-5 -left-5 p-3.5 rounded-2xl flex items-center gap-2.5"
                style={{ borderColor: 'rgba(11,141,166,0.35)' }}
              >
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontSize: '26px', filter: 'drop-shadow(0 0 6px rgba(239,194,0,0.7))' }}
                >
                  memory
                </span>
                <div>
                  <div className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Neural Core</div>
                  <div className="font-display text-sm text-on-surface">AI-Powered</div>
                </div>
              </div>

              {/* Status chip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="hud-chip" style={{ fontSize: '9px' }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary-teal"
                    style={{ boxShadow:'0 0 6px #0b8da6', animation:'pulse-glow 1.5s ease-in-out infinite' }}
                  />
                  System Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="section-divider" />
      <section className="py-10 overflow-hidden" style={{ background: 'rgba(27,32,34,0.2)' }}>
        <div className="marquee-track gap-16 md:gap-28 items-center">
          {[1, 2].map((copy) => (
            <div key={copy} className="flex items-center gap-16 md:gap-28 px-14 shrink-0" aria-hidden={copy === 2}>
              {['NEXUS','AETHER','ORBITAL','ZENITH','QUANTUM','VERTEX'].map((name, i) => (
                <React.Fragment key={name}>
                  <span className="font-display text-xl text-on-surface-variant uppercase tracking-[0.2em]" style={{ opacity: 0.28 }}>{name}</span>
                  {i < 5 && <span className="w-1 h-1 rounded-full bg-primary-teal" style={{ opacity: 0.4 }} />}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="solutions" className="py-24 md:py-36 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <div className="teal-glow absolute top-1/2 -right-40 w-[500px] h-[500px] -z-10 opacity-40 pointer-events-none" />

        {/* Section header */}
        <div className="text-center mb-20 space-y-5 reveal">
          <div className="hud-chip mx-auto">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>auto_awesome</span>
            Specialized Solutions
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-normal text-on-surface">Built for Precision</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-body leading-relaxed">
            Modular AI tools designed to integrate seamlessly with your existing tech stack — zero disruption, maximum impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="glass-card p-10 rounded-[2.5rem] group relative overflow-hidden reveal">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(11,141,166,0.12) 0%, transparent 70%)' }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-teal mb-8
              group-hover:scale-110 transition-transform duration-300"
              style={{ background:'rgba(11,141,166,0.1)', border:'1px solid rgba(11,141,166,0.2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize:'28px' }}>sync_alt</span>
            </div>
            <h3 className="font-display text-2xl font-normal mb-4 text-on-surface">Workflow Sync</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">
              Synchronize data across 200+ applications with zero latency and intelligent error handling.
            </p>
            <div className="card-bar" />
          </div>

          {/* Card 2 – Featured */}
          <div className="glass-card p-10 rounded-[2.5rem] group relative overflow-hidden reveal"
            style={{ background:'rgba(11,141,166,0.05)', borderColor:'rgba(11,141,166,0.2)' }}>
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background:'radial-gradient(circle, rgba(11,141,166,0.18) 0%, transparent 70%)' }} />
            <div className="absolute top-6 right-6">
              <div className="hud-chip" style={{ fontSize:'8px', padding:'0.2rem 0.6rem' }}>
                <span className="w-1 h-1 rounded-full bg-primary-teal" style={{ boxShadow:'0 0 4px #0b8da6' }} />
                Popular
              </div>
            </div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-teal mb-8
              group-hover:scale-110 transition-transform duration-300"
              style={{ background:'rgba(11,141,166,0.12)', border:'1px solid rgba(11,141,166,0.3)' }}>
              <span className="material-symbols-outlined" style={{ fontSize:'28px' }}>psychology</span>
            </div>
            <h3 className="font-display text-2xl font-normal mb-4 text-on-surface">Neural Analytics</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">
              Predictive insights that help you understand your business velocity before the quarter ends.
            </p>
            <div className="card-bar" style={{ background:'rgba(11,141,166,0.6)' }} />
          </div>

          {/* Card 3 */}
          <div className="glass-card p-10 rounded-[2.5rem] group relative overflow-hidden reveal">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
              style={{ background:'radial-gradient(circle, rgba(239,194,0,0.08) 0%, transparent 70%)' }} />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-teal mb-8
              group-hover:scale-110 transition-transform duration-300"
              style={{ background:'rgba(11,141,166,0.1)', border:'1px solid rgba(11,141,166,0.2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize:'28px' }}>hub</span>
            </div>
            <h3 className="font-display text-2xl font-normal mb-4 text-on-surface">Custom Nodes</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">
              Tailor-made AI agents trained on your proprietary data for ultra-specific business logic.
            </p>
            <div className="card-bar" />
          </div>
        </div>
      </section>

      {/* ═══════════ STATS STRIP ═══════════ */}
      <div className="section-divider" />
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '200+', label: 'App Integrations' },
            { value: '60+',  label: 'Enterprise Clients' },
            { value: '34%',  label: 'Avg. ROI Boost' },
            { value: '99.9%',label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2 reveal">
              <div className="font-display text-4xl text-primary-teal"
                style={{ filter:'drop-shadow(0 0 12px rgba(11,141,166,0.5))' }}>
                {stat.value}
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ═══════════ PROCESS PIPELINE ═══════════ */}
      <section id="methodology" className="py-24 md:py-36 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        <div className="teal-glow absolute -left-40 bottom-0 w-[400px] h-[400px] -z-10 opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-5 reveal">
            <div className="hud-chip mx-auto">
              <span className="material-symbols-outlined" style={{ fontSize:'13px' }}>account_tree</span>
              The Automation Pipeline
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-on-surface">From Signal to Scale</h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-4 left-0 w-full h-px"
              style={{ background:'linear-gradient(to right, transparent 5%, rgba(11,141,166,0.3) 30%, rgba(11,141,166,0.5) 50%, rgba(11,141,166,0.3) 70%, transparent 95%)' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative z-10">
              {[
                { phase:'01', title:'Discovery', delay:'0s',   desc:'Mapping your existing manual bottlenecks and opportunity surface across all workflows.' },
                { phase:'02', title:'Architect',  delay:'0.7s', desc:'Designing custom AI logic, neural flows, and integration blueprints tailored to your stack.' },
                { phase:'03', title:'Deploy',     delay:'1.4s', desc:'Live scaling and continuous optimization with real-time monitoring and performance audits.' },
              ].map((step) => (
                <div key={step.phase} className="text-center group reveal">
                  <div className="w-8 h-8 rounded-full mx-auto mb-8 node-glow flex items-center justify-center relative"
                    style={{ background:'#0a0f11', border:'2px solid #0b8da6' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-teal"
                      style={{ animation:`pulse-glow 2s ease-in-out infinite`, animationDelay:step.delay }} />
                    <div className="absolute inset-0 rounded-full"
                      style={{ border:'1px solid rgba(11,141,166,0.4)', transform:'scale(1.8)', animation:`pulse-glow 2s ease-in-out infinite`, animationDelay:step.delay }} />
                  </div>
                  <div className="font-label text-[9px] uppercase tracking-[0.2em] text-primary-teal mb-3">Phase {step.phase}</div>
                  <h4 className="font-display text-xl font-normal mb-3 text-on-surface">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section id="about" className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden reveal">
            {/* Glow orbs */}
            <div className="teal-glow absolute -top-20 -right-20 w-80 h-80 opacity-50 pointer-events-none" />
            <div className="gold-glow absolute -bottom-20 -left-20 w-60 h-60 opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="hud-chip mx-auto">
                <span className="material-symbols-outlined" style={{ fontSize:'13px' }}>rocket_launch</span>
                Let&apos;s Build Together
              </div>
              <h2 className="font-display text-4xl md:text-5xl xl:text-6xl font-normal text-on-surface leading-[1.1]">
                Ready to reclaim<br className="hidden md:block" /> your time?
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xl mx-auto font-body leading-relaxed">
                Join the next wave of high-performance enterprises. We handle the complexity, you enjoy the results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/book-consultation" className="btn-primary px-10 py-5 text-xs">
                  Talk to an Expert
                </Link>
                <button className="btn-ghost px-10 py-5 text-xs flex items-center justify-center gap-2">
                  View Case Studies
                  <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>open_in_new</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer
        id="success"
        className="border-t pt-16 pb-8 relative overflow-hidden"
        style={{ borderColor:'rgba(62,72,76,0.3)', background:'rgba(10,15,17,0.8)' }}
      >
        <div className="teal-glow absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:'linear-gradient(135deg,#0b8da6,#70d4ef)' }}>
                  <span className="material-symbols-outlined text-[#003641]" style={{ fontSize:'17px', fontVariationSettings:"'FILL' 1" }}>bolt</span>
                </div>
                <span className="font-display text-lg text-on-surface">Ad Meliora</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body max-w-xs">
                Better things through intelligent automation. The future of work, redefined for today.
              </p>
            </div>

            {[
              { title:'Company',   links:[{ label:'About', href:'#' },{ label:'Case Studies', href:'#' },{ label:'Careers', href:'#' }] },
              { title:'Resources', links:[{ label:'Blog', href:'#' },{ label:'API Docs', href:'#' },{ label:'Changelog', href:'#' }] },
              { title:'Contact',   links:[{ label:'LinkedIn', href:'#' },{ label:'Twitter / X', href:'#' },{ label:'hello@abmeliora.com', href:'mailto:hello@abmeliora.com' }] },
            ].map((col) => (
              <div key={col.title} className="space-y-4">
                <h5 className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-teal font-semibold">{col.title}</h5>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} className="block text-on-surface-variant hover:text-primary-teal transition-colors text-sm font-body">
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
              © 2024 Ad Meliora. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" style={{ boxShadow:'0 0 6px #0b8da6' }} />
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">System Status: Optimized</span>
            </div>
            <div className="flex gap-6">
              {['Privacy','Terms'].map((t) => (
                <a key={t} href="#" className="font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary-teal transition-colors">{t}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
