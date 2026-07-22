'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

/* ── Reusable fade-up animation wrapper ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const INFO_ITEMS = [
  {
    icon: 'mail',
    label: 'Email Us',
    value: 'hello@admeliora.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@admeliora.com',
  },
  {
    icon: 'schedule',
    label: 'Response Time',
    value: '< 24 Hours',
    sub: 'Guaranteed response SLA',
    href: null,
  },
  {
    icon: 'language',
    label: 'Follow Along',
    value: 'LinkedIn & Instagram',
    sub: 'Stay updated on our work',
    href: '#',
  },
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [focusedField, setFocusedField] = useState(null);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && errors.email) {
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        delete nextErrors.email;
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!isValidEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('loading');
    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      console.error('Error submitting consultation: ', err);
      setStatus('error');
    }
  };

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'email', label: 'Email Address', type: 'email', required: true },
    { id: 'company', label: 'Company (Optional)', type: 'text', required: false },
  ];

  return (
    <main
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: '#0a0e10' }}
    >
      {/* ── Ambient atmosphere ── */}
      <div className="teal-glow pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] opacity-20" />
      <div className="gold-glow pointer-events-none absolute bottom-0 -right-48 w-[600px] h-[600px] opacity-15" />
      <div className="teal-glow pointer-events-none absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-8" />
      <div className="grid-bg absolute inset-0 pointer-events-none opacity-60" />

      {/* ── Back link ── */}
      <div className="relative z-10 pt-20 sm:pt-20 lg:pt-25 pb-4 px-5 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary-teal transition-colors duration-200"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_back</span>
          Back to Home
        </Link>
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-[880px] mx-auto px-5 sm:px-2 md:px-12 pb-24 sm:pb-32">
        <div className="  items-start">


          {/* ══ RIGHT — Form card ══ */}
          <FadeUp delay={0.1} className="lg:sticky lg:top-28">
            <div
              className="relative rounded-[2rem] md:rounded-[1.75rem] lg:rounded-[1.85rem] xl:rounded-[2rem] overflow-hidden"
              style={{
                background: 'rgba(17,22,25,0.65)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(11,141,166,0.06)',
              }}
            >
              {/* Top teal shimmer line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    'linear-gradient(to right, transparent 0%, rgba(11,141,166,0.5) 40%, rgba(112,212,239,0.6) 60%, transparent 100%)',
                }}
              />

              {/* Inner glow */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(11,141,166,0.12) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <div className="relative z-10 p-5 sm:p-6 md:p-9 lg:p-10 xl:p-12">
                {/* Form header */}
                <div className="mb-8">
                  <h2
                    className="font-display font-normal text-on-surface mb-2"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}
                  >
                    Send us a message
                  </h2>
                  {/* <p className="font-body text-on-surface-variant text-md sm:text-sm md:text-sm lg:text-[15px] xl:text-base">
                    Fill in the details below and we'll get back to you within 24 hours.
                  </p> */}
                </div>

                {status === 'success' ? (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-12 gap-5"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(11,141,166,0.1)',
                        border: '1px solid rgba(11,141,166,0.35)',
                        boxShadow: '0 0 30px rgba(11,141,166,0.2)',
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-primary-teal"
                        style={{ fontSize: '40px' }}
                      >
                        check
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-normal text-on-surface text-2xl md:text-xl lg:text-[1.35rem] xl:text-2xl mb-2">
                        Message Received
                      </h3>
                      <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-xs mx-auto">
                        Your request has been securely transmitted. Our team will be in touch within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-ghost px-6 py-3 text-[10px] mt-2"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Contact fields */}
                    <div className="grid grid-cols-1 gap-5">
                      {fields.slice(0, 2).map((field) => (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label
                            htmlFor={field.id}
                            className="font-label uppercase tracking-[0.18em] text-on-surface-variant"
                            style={{ fontSize: '13px' }}
                          >
                            {field.label}
                            {field.required && (
                              <span className="text-primary-teal ml-1">*</span>
                            )}
                          </label>
                          <div className="relative">
                            <input
                              type={field.type}
                              id={field.id}
                              name={field.id}
                              required={field.required}
                              aria-invalid={field.id === 'email' && Boolean(errors.email)}
                              aria-describedby={field.id === 'email' && errors.email ? 'email-error' : undefined}
                              value={formData[field.id]}
                              onChange={handleChange}
                              onFocus={() => setFocusedField(field.id)}
                              onBlur={() => setFocusedField(null)}
                              placeholder={field.placeholder}
                              className="w-full font-body text-on-surface text-md sm:text-md md:text-md lg:text-[15px] xl:text-base px-4 py-3.5 rounded-xl outline-none transition-all duration-300 placeholder:text-on-surface-variant/40"
                              style={{
                                background: 'rgba(10,14,16,0.6)',
                                border: `1px solid ${focusedField === field.id
                                    ? 'rgba(11,141,166,0.55)'
                                    : 'rgba(62,72,76,0.35)'
                                  }`,
                                boxShadow:
                                  focusedField === field.id
                                    ? '0 0 0 3px rgba(11,141,166,0.08), 0 0 16px rgba(11,141,166,0.08)'
                                    : 'none',
                              }}
                            />
                          </div>
                          {field.id === 'email' && errors.email && (
                            <p id="email-error" className="font-body text-xs text-red-400">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Company field */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company"
                        className="font-label uppercase tracking-[0.18em] text-on-surface-variant"
                        style={{ fontSize: '13px' }}
                      >
                        {fields[2].label}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={fields[2].placeholder}
                        className="w-full font-body text-on-surface text-md sm:text-md md:text-md lg:text-[15px] xl:text-base px-4 py-3.5 rounded-xl outline-none transition-all duration-300 placeholder:text-on-surface-variant/40"
                        style={{
                          background: 'rgba(10,14,16,0.6)',
                          border: `1px solid ${focusedField === 'company'
                              ? 'rgba(11,141,166,0.55)'
                              : 'rgba(62,72,76,0.35)'
                            }`,
                          boxShadow:
                            focusedField === 'company'
                              ? '0 0 0 3px rgba(11,141,166,0.08), 0 0 16px rgba(11,141,166,0.08)'
                              : 'none',
                        }}
                      />
                    </div>

                    {/* Message / objective */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-label uppercase tracking-[0.18em] text-on-surface-variant"
                        style={{ fontSize: '13px' }}
                      >
                        How can we help? <span className="text-primary-teal">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        // placeholder="We are looking to automate our data ingestion pipeline and reduce manual handoffs across our team…"
                        className="w-full font-body text-on-surface text-md sm:text-md md:text-md lg:text-[15px] xl:text-base px-4 py-3.5 rounded-xl outline-none transition-all duration-300 placeholder:text-on-surface-variant/40 resize-none"
                        style={{
                          background: 'rgba(10,14,16,0.6)',
                          border: `1px solid ${focusedField === 'message'
                              ? 'rgba(11,141,166,0.55)'
                              : 'rgba(62,72,76,0.35)'
                            }`,
                          boxShadow:
                            focusedField === 'message'
                              ? '0 0 0 3px rgba(11,141,166,0.08), 0 0 16px rgba(11,141,166,0.08)'
                              : 'none',
                        }}
                      />
                    </div>

                    {/* Error state */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body"
                        style={{
                          background: 'rgba(220,38,38,0.06)',
                          border: '1px solid rgba(220,38,38,0.2)',
                          color: '#f87171',
                        }}
                      >
                        <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: '18px' }}>
                          error
                        </span>
                        There was an issue submitting your request. Please check your connection and try again.
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      id="submit-consultation"
                      disabled={status === 'loading'}
                      className="btn-primary mt-2 py-4 md:py-3.5 lg:py-4 w-full text-[11px] gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '16px', animation: 'spin 1s linear infinite' }}
                          >
                            progress_activity
                          </span>
                          Transmitting…
                        </>
                      ) : (
                        <>

                          Request Consultation
                        </>
                      )}
                    </button>

                    {/* <p
                      className="font-body text-on-surface-variant text-center leading-relaxed"
                      style={{ fontSize: '12  px' }}
                    >
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p> */}
                  </form>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── Spin keyframe for loading icon ── */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
