
import React from 'react';

const Marquee: React.FC<{ text: string, speed?: string }> = ({ text, speed = '30s' }) => {
  return (
    <div className="relative py-4 md:py-6 overflow-hidden border-y border-heritageBlack/10 bg-white/30 backdrop-blur-sm">
      <div className={`flex whitespace-nowrap animate-[marquee_${speed}_linear_infinite]`}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-2xl md:text-3xl font-serif italic font-black text-heritageBlack/20 uppercase mx-12 tracking-tight">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
