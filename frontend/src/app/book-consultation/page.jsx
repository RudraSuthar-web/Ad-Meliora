'use client';

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Add a new document with a generated id to the "consultations" collection
      await addDoc(collection(db, "consultations"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-margin-mobile flex justify-center items-center relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-lowest to-surface z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="font-display-lg text-[36px] sm:text-[48px] md:text-[64px] text-on-surface mb-4">Let's Talk Growth</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Ready to integrate precision AI into your workflows? Tell us a bit about your current challenges, and our strategic team will be in touch.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-[32px] border-primary/20 relative">
          {/* Subtle top-left glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-surface-container/50 border border-outline-variant/30 text-on-surface p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-body-md"
                placeholder="Jane Doe"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-surface-container/50 border border-outline-variant/30 text-on-surface p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-body-md"
                placeholder="jane@company.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">
                Your Objective
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="bg-surface-container/50 border border-outline-variant/30 text-on-surface p-4 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-body-md resize-none"
                placeholder="We are looking to automate our data ingestion pipeline..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                Your request has been securely transmitted. We will be in touch shortly.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-error/10 border border-error/30 text-error font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined">error</span>
                There was an issue submitting your request. Please check your connection.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 bg-primary text-on-primary py-4 rounded-2xl font-display-md text-[18px] shadow-[0_0_20px_rgba(112,212,239,0.2)] hover:shadow-[0_0_30px_rgba(112,212,239,0.4)] hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <span className="material-symbols-outlined animate-spin" style={{fontVariationSettings: "'FILL' 0"}}>sync</span>
                  Transmitting...
                </>
              ) : (
                'Request Consultation'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
