import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Chatbot() {
  return (
    
    <Link
        href="/book-consultation"
        aria-label="Open consultation"
        className="fixed bottom-4 right-4 z-50 group flex items-end gap-3 rounded-full  px-3 py-2   transition-all duration-200  "
      >
        
         <Image
            src="/robot-mascot.png"
            alt="Robot mascot"
            width={100}
            height={100}
            className="relative z-10 h-22 w-22 object-contain drop-shadow-[0_0_12px_rgba(11,141,166,0.35)]   opacity-90 hover:opacity-110 hover:scale-110 transition-all duration-200"
            priority
          />
        
      </Link>);}