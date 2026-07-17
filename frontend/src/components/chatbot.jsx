'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Chatbot() {
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'bot',
      text: "Hello! How may I help you?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isChatOpen]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const shouldAnimate = !prefersReducedMotion;

  const motionInitial = shouldAnimate ? { opacity: 0, y: 16, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 };
  const motionAnimate = { opacity: 1, y: 0, scale: 1 };
  const motionExit = shouldAnimate ? { opacity: 0, y: 12, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 };

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' && window.sessionStorage.getItem('chatbot-prompt-dismissed');
    if (dismissed || isChatOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsPromptVisible(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [isChatOpen]);

  const dismissPrompt = () => {
    setIsPromptVisible(false);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('chatbot-prompt-dismissed', 'true');
    }
  };

  const handleSend = async (textToSend) => {
    const cleanText = textToSend || input.trim();
    if (!cleanText) return;

    if (!textToSend) {
      setInput('');
    }

    const newUserMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: cleanText
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: data.text
        }
      ]);
    } catch (err) {
      console.error('Error fetching chat response:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: "I'm sorry, I'm having trouble connecting to my server. Please try again, or visit our [Contact Us](/book-consultation) page."
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      let content = line;
      let isBullet = false;

      // Handle simple bullet points
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        content = line.trim().substring(2);
        isBullet = true;
      }

      // Parse bolding (double asterisks)
      const boldParts = content.split(/(\*\*.*?\*\*)/g);
      const parsedLine = boldParts.map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIdx} className="font-semibold text-[#70d4ef]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIdx} className="ml-4 list-disc pl-1 my-1 text-[13px] sm:text-[14px]">
            {parsedLine}
          </li>
        );
      }

      return (
        <p key={lineIdx} className="my-1 text-[13px] sm:text-[14px] min-h-[1em]">
          {parsedLine}
        </p>
      );
    });
  };

  const toggleChat = () => {
    if (!isChatOpen) {
      setIsPromptVisible(false);
    }
    setIsChatOpen(!isChatOpen);
  };

  const SUGGESTIONS = [
    { label: "What solutions do you build?", query: "What solutions do you build?" },
    { label: "How does the pipeline work?", query: "How does your pipeline work?" },
    { label: "Book a consultation", query: "I would like to book a consultation." }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1">
      {/* ── Chat Modal Window ── */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            exit={motionExit}
            transition={{ duration: shouldAnimate ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-[rgba(11,16,18,0.98)] shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl flex flex-col overflow-hidden w-[calc(100vw-32px)] sm:w-[460px] md:w-[520px] h-[500px] sm:h-[580px] mb-2"
          >
            {/* Header */}
            <div className="h-14 flex items-center justify-between px-5 bg-[rgba(11,141,166,0.06)] border-b border-white/5 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0b8da6] shadow-[0_0_8px_#0b8da6] animate-pulse" />
                <span className="font-label uppercase text-[10px] tracking-[0.18em] text-[#70d4ef] font-semibold">
                  Ad Meliora AI Assistant
                </span>
              </div>
              <button
                type="button"
                onClick={toggleChat}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  close
                </span>
              </button>
            </div>

            {/* Scrollable Message Box */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 flex flex-col">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[82%] ${
                    msg.role === 'user' ? 'self-end ml-auto' : 'self-start mr-auto'
                  }`}
                >
                  <div
                    className={`p-3 sm:p-3.5 rounded-2xl leading-relaxed text-left text-on-surface ${
                      msg.role === 'user'
                        ? 'bg-[rgba(11,141,166,0.15)] border border-[rgba(11,141,166,0.25)] rounded-tr-none'
                        : 'bg-[rgba(17,22,25,0.7)] border border-white/5 text-on-surface-variant rounded-tl-none'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-[13px] sm:text-[14px]">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}
                  </div>
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="self-start mr-auto flex flex-col max-w-[82%]">
                  <div className="p-3 sm:p-3.5 rounded-2xl rounded-tl-none bg-[rgba(17,22,25,0.7)] border border-white/5 flex items-center justify-center gap-1.5 min-w-[70px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b8da6] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b8da6] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b8da6] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            {messages.length === 1 && !isTyping && (
              <div className="w-full overflow-hidden pb-3 flex-shrink-0">
                <div className="marquee-track flex gap-3 whitespace-nowrap" style={{ animationDuration: '16s' }}>
                  {/* First set of chips */}
                  {SUGGESTIONS.map((chip, idx) => (
                    <button
                      key={`first-${idx}`}
                      type="button"
                      onClick={() => handleSend(chip.query)}
                      className="hud-chip cursor-pointer text-[9px] py-1.5 px-3 rounded-full border border-[rgba(11,141,166,0.3)] bg-[rgba(11,141,166,0.05)] hover:bg-[rgba(11,141,166,0.15)] text-[#70d4ef] transition-colors whitespace-nowrap"
                    >
                      {chip.label}
                    </button>
                  ))}
                  {/* Second set of chips (for seamless looping) */}
                  {SUGGESTIONS.map((chip, idx) => (
                    <button
                      key={`second-${idx}`}
                      type="button"
                      onClick={() => handleSend(chip.query)}
                      className="hud-chip cursor-pointer text-[9px] py-1.5 px-3 rounded-full border border-[rgba(11,141,166,0.3)] bg-[rgba(11,141,166,0.05)] hover:bg-[rgba(11,141,166,0.15)] text-[#70d4ef] transition-colors whitespace-nowrap"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-4 bg-[rgba(11,141,166,0.02)] border-t border-white/5 flex gap-2 items-center flex-shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                disabled={isTyping}
                className="flex-1 bg-[rgba(10,14,16,0.6)] border border-[rgba(62,72,76,0.35)] rounded-xl px-4 py-2.5 text-[13px] sm:text-[14px] text-on-surface outline-none transition-all focus:border-[rgba(11,141,166,0.55)] placeholder:text-on-surface-variant/30 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b8da6] to-[#0e9dbf] flex items-center justify-center text-white font-bold transition-transform hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  send
                </span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mascot Notification Bubble ── */}
      <AnimatePresence>
        {isPromptVisible && !isChatOpen && (
          <motion.div
            initial={motionInitial}
            animate={motionAnimate}
            exit={motionExit}
            transition={{ duration: shouldAnimate ? 0.25 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-[rgba(11,16,18,0.96)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl mb-2 max-w-[280px] self-end"
          >
            <div className="flex items-start">
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-3 justify-between">
                  <h3 className="font-display text-md sm:text-md text-on-surface">
                    How may I help you?
                  </h3>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mascot Toggle Button ── */}
      <button
        type="button"
        onClick={toggleChat}
        aria-label={isChatOpen ? "Close assistant" : "Open assistant"}
        className="group flex items-end gap-3 rounded-full py-2 transition-all duration-200 focus:outline-none"
      >
        <Image
          src="/robot-mascot.png"
          alt="Robot mascot"
          width={80}
          height={80}
          className="relative z-10 h-30 w-30 sm:h-30 sm:w-30 md:h-40 md:w-40 object-contain drop-shadow-[0_0_12px_rgba(11,141,166,0.35)] opacity-90 transition-all duration-200 hover:scale-110 hover:opacity-100"
          priority
        />
      </button>
    </div>
  );
}