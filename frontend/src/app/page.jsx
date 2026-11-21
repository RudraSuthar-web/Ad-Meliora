'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import Chatbot from '../components/chatbot';
import { WHATSAPP_URL } from '../components/header';
import { FadeUp } from '../functions/fadeup';

/* Swap these paths when the individual mascot poses are added to /public/mascots */
const MASCOT = {
  wave: '/robot-mascot.png',
  laptop: '/robot-mascot.png',
  think: '/robot-mascot.png',
  sit: '/robot-mascot.png',
  stand: '/robot-mascot.png',
  jump: '/robot-mascot.png',
};

const MARQUEE = [
  'AI Workflows',
  'Custom LLM Apps',
  'Next-Gen Automations',
  'High-Converting Landing Pages',
  'Prototype to Prod in 7 Days',
  'Fast Execution',
];

const SERVICES = [
  { n: '01', title: 'Conversion-First Websites', desc: 'Turn passive lurkers into paying customers in under 3 seconds flat.', color: 'bg-sun' },
  { n: '02', title: 'AI Automations & Bots', desc: 'Automate 80% of client inquiries and lead qualification 24/7.', color: 'bg-brut-cyan' },
  { n: '03', title: 'Brand Identity & Polish', desc: 'Sharp visuals and messaging that make your brand impossible to forget.', color: 'bg-brut-cyan' },
];

const PROJECTS = [
  { name: 'Thrill Hikers', tag: 'E-Commerce', tagColor: 'bg-sun', metric: '+$120k first month', bg: 'from-slate-700 via-slate-500 to-orange-500', headline: 'ASCEND EVERYTHING.' },
  { name: 'Clay & Glaze', tag: 'DTC Artisan', tagColor: 'bg-brut-cyan', metric: '3.8x checkout conversion', bg: 'from-amber-100 via-stone-200 to-orange-300', headline: 'Ceramic Studio' },
];

const STEPS = [
  { n: 1, title: 'Brief', pose: 'sit', desc: 'Tell us what you need. One quick WhatsApp voice note or message is enough to get moving. No 20-page scoping docs.' },
  { n: 2, title: 'Build', pose: 'stand', desc: 'Design, code, and AI wired together — with transparent staging links and live Loom updates along the way.' },
  { n: 3, title: 'Launch', pose: 'jump', desc: 'You go live with zero headaches. We stick around for post-launch speed tuning, conversions, and maintenance.' },
];

const TEAM = [
  { initials: 'SS', name: 'Angel', role: 'Head of Design & Conversion Systems', color: 'bg-sun' },
  { initials: 'SA', name: 'Dhairya', role: 'Head of Code, Next.js & AI Automations', color: 'bg-brut-cyan' },
  { initials: 'SS', name: 'Rudra', role: 'Head of Design & Conversion Systems', color: 'bg-sun' },
  { initials: 'SA', name: 'Hardik', role: 'Head of Code, Next.js & AI Automations', color: 'bg-brut-cyan' },
];

const Mascot = ({ pose, className = '', priority = false }) => (
  <div className={`relative ${className}`}>
    <Image
      src={MASCOT[pose]}
      alt="Ad Meliora robot mascot"
      fill
      sizes="(max-width: 768px) 80vw, 40vw"
      priority={priority}
      className="object-contain sticker"
    />
  </div>
);

const Title = ({ children }) => (
  <h2 className="font-brut font-bold uppercase text-3xl md:text-4xl text-ink tracking-tight">{children}</h2>
);

const IconBtn = ({ icon }) => (
  <span className="w-8 h-8 rounded-full border-2 border-ink bg-canvas shadow-brut-sm flex items-center justify-center">
    <span className="material-symbols-outlined text-base">{icon}</span>
  </span>
);

export default function Page() {
  return (
    <main className="brut-page overflow-x-hidden relative">
      <Chatbot />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* ── Hero ── */}
        <section className="pt-28 md:pt-32 pb-16 grid md:grid-cols-2 gap-8 items-center min-h-[640px]">
          <div>
            <h1 className="font-brut font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              uncover hidden{' '}
              <span className="inline-block bg-ink text-brut-cyan-bright px-3 my-1 rounded-md shadow-brut">inefficiencies</span>{' '}
              <span className="block mt-2">And maximize productivity</span>
            </h1>
            <p className="mt-6 max-w-md text-xs font-semibold uppercase tracking-wide text-ink">
              Get clarity on your AI potential. We bridge the gap between complex data and actionable automation — with zero disruption to your stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="brut-btn bg-brut-cyan-bright text-ink text-xs px-5 py-3 no-underline">
                <span className="material-symbols-outlined text-base">chat</span> Message Us on WhatsApp →
                <span className="bg-ink text-white text-[10px] px-2 py-0.5 rounded">Instant reply</span>
              </a>
              <a href="#work" className="brut-btn bg-ink text-white text-xs px-5 py-3 no-underline">
                Explore Shipped Builds ↓
              </a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="brut-bob">
            <Mascot pose="wave" priority className="w-full h-[360px] md:h-[520px]" />
          </motion.div>
        </section>
      </div>

      {/* ── Marquee ── */}
      <div className="-rotate-1 bg-brut-cyan-bright border-y-2 border-ink overflow-hidden py-3 shadow-brut">
        <div className="brut-marquee flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="text-xs font-bold uppercase text-ink flex items-center gap-2">
              <span className="w-1 h-4 bg-ink inline-block" /> {m}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* ── What We Do ── */}
        <section id="what-we-do" className="pt-20 pb-16 scroll-mt-8">
          <FadeUp><Title>What We Do</Title></FadeUp>
          <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
            <Mascot pose="laptop" className="w-full h-[320px] md:h-[400px]" />
            <div className="flex flex-col gap-6">
              {SERVICES.map((s, i) => (
                <FadeUp key={s.n} delay={i * 0.1}>
                  <div className="brut-card p-5">
                    <div className="flex items-center gap-3">
                      <span className={`${s.color} border-2 border-ink rounded-md px-2 py-0.5 font-bold text-xl`}>{s.n}</span>
                      <h3 className="font-bold uppercase text-lg">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-ink/80">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clients ── */}
        <section id="work" className="py-16 scroll-mt-8">
          <FadeUp><Title>What We Did For Clients</Title></FadeUp>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.1}>
                <div className="brut-card overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 border-b-2 border-ink text-[10px] font-bold uppercase text-primary-teal">
                    <span>Selected work — no fluff, just numbers</span>
                    <span className={`${p.tagColor} text-ink border-2 border-ink rounded px-2 py-0.5`}>{p.tag}</span>
                  </div>
                  <div className={`relative h-56 bg-gradient-to-br ${p.bg} flex items-center justify-center`}>
                    <span className="font-brut font-bold text-3xl text-white drop-shadow-[2px_2px_0_#141414] text-center px-4">{p.headline}</span>
                    <span className="absolute bottom-3 left-3 bg-ink text-white text-xs px-2 py-1 rounded">{p.metric}</span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-bold uppercase text-lg">{p.name}</h3>
                    <span className="w-10 h-10 rounded-full border-2 border-ink bg-[#fbf3e4] shadow-brut-sm flex items-center justify-center text-xl">↗</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── How We Do ── */}
        <section id="process" className="py-16 scroll-mt-8">
          <FadeUp><Title>How We Do</Title></FadeUp>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.1}>
                <p className="text-sm font-semibold text-ink/40 mb-2">Step {s.n}</p>
                <div className="brut-card p-5 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brut-cyan border-2 border-ink flex items-center justify-center font-bold text-sm">{s.n}</span>
                    <h3 className="font-bold uppercase">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-xs text-ink/80">{s.desc}</p>
                  <Mascot pose={s.pose} className="w-full h-48 mt-auto" />
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── Makers Direct ── */}
        <section id="dms" className="py-16 scroll-mt-8">
          <FadeUp><Title>Makers Direct</Title></FadeUp>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {TEAM.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <div className="brut-card p-4 flex items-center gap-3">
                  <span className={`${t.color} w-11 h-11 rounded-full border-2 border-ink shadow-brut-sm flex items-center justify-center font-bold`}>{t.initials}</span>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase leading-tight">{t.name}</h3>
                    <p className="text-[10px] font-semibold text-ink/70">{t.role}</p>
                  </div>
                  <IconBtn icon="photo_camera" />
                  <IconBtn icon="share" />
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 grid md:grid-cols-2 gap-8 items-center">
          <Mascot pose="think" className="w-full h-[360px] md:h-[460px]" />
          <div className="text-center md:text-left">
            <h2 className="font-brut font-bold uppercase text-brut-cyan text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Got a problem?<br />Let’s build it.
            </h2>
            <p className="mt-6 text-sm font-semibold max-w-md mx-auto md:mx-0">
              We bridge the gap between complex data and actionable automation. At Ad Meliora, we engineer custom AI.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="brut-btn mt-8 bg-brut-cyan text-ink text-xs px-6 py-3 no-underline">
              <span className="material-symbols-outlined text-base">chat</span> Message us on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
