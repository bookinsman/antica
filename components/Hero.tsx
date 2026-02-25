
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center bg-heritageBlack">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=2000" 
          alt="Ancient Wood-Fired Roasting" 
          className="w-full h-full object-cover grayscale brightness-50 opacity-80 animate-[zoom_40s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heritageBlack/40 via-transparent to-paper"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-6">
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.8em] font-black text-terracotta animate-[reveal_1s_ease-out_forwards]">
              TRIESTE • SINCE 1892
            </span>
          </div>
          
          <div className="mb-10 overflow-hidden">
            <h1 className="text-7xl md:text-[180px] font-serif font-black leading-[0.75] text-heritageBlack tracking-tighter animate-[reveal_1.2s_ease-out_forwards]">
              {t('heroTitle').split('.')[0]}<span className="text-terracotta">.</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-5xl font-serif italic text-heritageBlack/80 leading-[1.1] max-w-4xl animate-[reveal_1.5s_ease-out_forwards]">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          from { transform: translateY(115%); }
          to { transform: translateY(0); }
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
