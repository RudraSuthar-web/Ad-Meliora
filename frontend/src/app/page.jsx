import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center pt-32 sm:pt-40 md:pt-60 px-margin-mobile hero-glow">
        <div className="max-w-container-max mx-auto text-center z-10">
          <h1 className="font-display-lg text-[36px] sm:text-[48px] md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
            An AI Automation Partner for Enterprises Ready to Scale
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Engineering precision intelligence into every layer of your operations. From strategic planning to neural transformation, we bridge the gap between concept and scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/book-consultation" className="bg-primary text-on-primary px-8 py-4 rounded-full font-display-md text-body-md hover:shadow-lg transition-all">
              Book Consultation
            </Link>
            <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-body-lg text-body-md hover:bg-white/5 transition-all">
              View Services
            </button>
          </div>
        </div>
        
      
      </header>

      

      {/* Strategy Quote */}
      <section id="about" className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter items-start">
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant bg-surface-variant/30">
              <span className="material-symbols-outlined text-[14px] text-tertiary">star</span>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant">About Us</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="font-body-lg text-[28px] sm:text-[36px] md:text-[40px] leading-tight text-on-surface">
              Great companies are built on clear decisions. We combine <span className="text-primary italic">strategic insight</span>, operational expertise, and modern technology to help businesses move faster.
            </h2>
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-3">
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVB9TGUjV6usINL39Im59VhVQCsv7PlOC6IQanEghaW839SwDrkdbpop_mLlo5Lq4yKEmyA4cUl4LceYpxEJCcCSShKwhc5Z8T8APyAtJR_o7uugQbB1HDeZJZeBZPa5elPRrywmz4HEPfwdr5ADFyIYa2KoFaT1fp8Q2cRGdn806JohIgaZ_B6mowCTwVHJ37aw6EiRUdzeRJ1QeDcUZ0vwwuBcIrypPYziAvnRY-xq2CGzW-GNN_hD8tycOJtPqQYHZuDSPqlAY"/>
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEFeMyAsGNw2gofBLyz-BuIZdIiQXMypuih2nXMt6GOMOVAOBg2boD-RChvi5_ABqSakgWE5-nmmnbRgSew80BTpZwkqa_aJH9Jwsvlf7Sf-l7SZtmiEJvvo4Wvej38pLdGq9DBDi6YAr5GJkB-VVO4K5g3VOyr3SZxDO_xXJ7Tx62EgIe-neSxJnXFhnqXkG0mZq07yPd2Gv4JJAKnHhUsCDEJpSo_9a245JI2OxtSJWC9bu1x4MHKvVhdMZ9_AN-Gu0epiWWeXc"/>
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACppE_2iXbxTigrSvCTQ8EtqFRaYPrFj1jVThMnQhV2g8k8HO5Ec7Y4xosIswUdowWa9CmMNVzJOrhhXNQiw3MVmqwiU1eA_ZfB1Upg0JalsqcLvaBgjMddCOPXiGVgxxncUE8GnUIKXV9N6dchoYfnxK2rWwGlb-wTDwZkv1Dm0F_wjqGBY-xVEJ_5zgkZugCH_hWWyz1sYadCWCuWCkfmmr76SBm9vZl_zMdnLsT1_5bQaHxsqGNBMyi-SxXD9a7d5Kh1aO4j6M"/>
              </div>
              <span className="text-on-surface-variant font-label-sm text-label-sm">Chosen by 60+ companies worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Service Tiers */}
      <section id="solutions" className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-4 md:gap-8">
            <div>
              <span className="text-primary font-label-sm uppercase tracking-widest block mb-4">Pricing Plan</span>
              <h2 className="font-display-md text-[32px] sm:text-[40px] md:text-display-md text-on-surface leading-tight">Built for Every Stage of Growth.</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-left md:text-right font-body-md">
              From early clarity to full-scale execution, our services are designed to support your business as it evolves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[32px] flex flex-col">
              <div className="mb-8 w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <h3 className="font-display-md text-headline-lg mb-4 text-on-surface">Growth Blueprint</h3>
              <p className="text-on-surface-variant text-body-md mb-8">For founders who feel stuck between ideas and execution. We help you define.</p>
              <div className="mb-10">
                <span className="text-display-md font-display-md text-on-surface">$2.500</span>
                <span className="text-on-surface-variant text-label-sm ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Deep business &amp; market breakdown
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Clear growth priorities
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Strategic roadmap tailored to your stage
                </li>
              </ul>
              <Link href="/book-consultation" className="block text-center w-full py-4 rounded-2xl border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary transition-all">Get Started</Link>
            </div>
            {/* Card 2 - Featured */}
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[32px] flex flex-col border-primary/30 relative overflow-hidden bg-surface-container-high">
              <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-on-primary font-label-sm rounded-bl-2xl uppercase">Most Popular</div>
              <div className="mb-8 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">hub</span>
              </div>
              <h3 className="font-display-md text-headline-lg mb-4 text-on-surface">Scale Systems</h3>
              <p className="text-on-surface-variant text-body-md mb-8">Growth breeds messy systems. We redesign your operations, workflows, and tools.</p>
              <div className="mb-10">
                <span className="text-display-md font-display-md text-on-surface">$5.000</span>
                <span className="text-on-surface-variant text-label-sm ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Full operations &amp; workflow audit
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Process simplification &amp; optimization
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Tooling &amp; system recommendations
                </li>
              </ul>
              <Link href="/book-consultation" className="block text-center w-full py-4 rounded-2xl bg-primary text-on-primary font-display-md shadow-[0_0_30px_rgba(112,212,239,0.3)] hover:scale-[1.02] transition-all">Get Started</Link>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[32px] flex flex-col">
              <div className="mb-8 w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">groups</span>
              </div>
              <h3 className="font-display-md text-headline-lg mb-4 text-on-surface">Growth Partner</h3>
              <p className="text-on-surface-variant text-body-md mb-8">To just advise isn't enough. We work closely with your team to continuously refine strategy.</p>
              <div className="mb-10">
                <span className="text-display-md font-display-md text-on-surface">$2.000</span>
                <span className="text-on-surface-variant text-label-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Ongoing strategy &amp; growth advisory
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Weekly or bi-weekly working sessions
                </li>
                <li className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Performance tracking &amp; optimization
                </li>
              </ul>
              <Link href="/book-consultation" className="block text-center w-full py-4 rounded-2xl border border-outline-variant text-on-surface hover:bg-primary hover:text-on-primary transition-all">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Section Atmospheric CTA */}
      <section className="relative min-h-[500px] md:h-[819px] py-20 md:py-0 flex items-center justify-center overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" alt="CTA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwbDF6eYuMEWTahjLiuxtNLdlmocSZAlOdOBELOYPnCT34Tq6x_HE9cdbEf8kPPJmZS1wlKROqWBN0ovQ60eyskEz3XS9oZ3_ITlLg3rqmdF3RIq-XBt1RiAIuwfOy2eWbhoz0y4hBSSLPeoOSLt2DoMG9qRUF_piObqZ4RFqB7j5aT2CV_M1DrfhsMcp11ctIgsZ3hx1prOBV2wy0UGgWMpFWzI1QaVhBxm3o7bS7nw6ZPj-9vGRjKnCNvcJ4ZXdATxZSmpDuS9I"/>
        <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-margin-mobile">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md mb-8">
            <span className="material-symbols-outlined text-[16px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
            <span className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface">Data-First Strategy</span>
          </div>
          <h2 className="font-display-md text-[32px] sm:text-[40px] md:text-display-md text-on-surface mb-10 max-w-2xl leading-tight">Ready to Scale Your Business with Clarity?</h2>
          <Link href="/book-consultation" className="inline-block bg-primary text-on-primary px-12 py-5 rounded-full font-display-md text-body-lg shadow-[0_0_40px_rgba(112,212,239,0.4)] active:scale-95 transition-all">
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-surface-container-lowest border-t border-white/5 pt-section-gap-mobile md:pt-section-gap-desktop pb-12 md:pb-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter mb-16 md:mb-32">
            <div className="col-span-1">
              <div className="text-headline-lg font-display-lg text-primary mb-6">Ad Meliora</div>
              <p className="text-on-surface-variant text-body-md max-w-xs">We help startups and growing businesses make better decisions, move faster.</p>
              <div className="flex gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-1"></div>
            <div className="col-span-1">
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant block mb-6">We'd love to help you with ease</span>
              <a className="text-headline-lg font-body-lg text-on-surface hover:text-primary transition-colors block mb-12" href="mailto:hello@abmeliora.com">hello@abmeliora.com</a>
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant block mb-4">Location</span>
              <p className="text-body-md text-on-surface-variant">8922 Preston Rd, Inglewood,<br/>Maine 98380</p>
            </div>
            <div className="col-span-1 md:text-right">
              <span className="text-label-sm font-label-sm uppercase text-on-surface-variant block mb-6">Menu</span>
              <ul className="space-y-3">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Home</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">About Us</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Our Services</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Process</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Testimonials</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
          {/* Large Branding Footer Overlay */}
          <div className="relative pt-12 md:pt-20 pb-8 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-[64px] sm:text-[120px] md:text-[240px] lg:text-[280px] font-display-lg leading-none tracking-tighter text-mask-nature select-none mb-8 text-center">
              Ad Meliora
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center text-label-sm font-label-sm text-on-surface-variant/40 uppercase tracking-widest pt-8 border-t border-white/5">
              <span>© 2026 Ad Meliora. Precision Engineering for the Deep Signal.</span>
              <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
