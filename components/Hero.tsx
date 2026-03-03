
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[85vh] w-screen overflow-hidden flex items-center bg-heritageBlack">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/L5yxZpnT/Gemini-Generated-Image-mnoqu5mnoqu5mnoq.png" 
          alt="Ancient Wood-Fired Roasting" 
          className="w-full h-full object-cover brightness-[0.6] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heritageBlack/40 via-heritageBlack/20 to-heritageBlack/30"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-8">
            <span className="block text-xs uppercase tracking-[0.4em] font-medium text-terracotta/90">
              {t('heroTagline')}
            </span>
          </div>
          
          <div className="mb-12 overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-white">
              <span className="font-light">{t('heroTitleLine1')}</span>
              <span className="font-black text-terracotta"> {t('heroTitleLine2')}</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl font-serif italic text-white/85 leading-relaxed max-w-3xl">
              {t('heroSubtitle')}
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-heritageBlack transition-all"
            >
              {t('heroCtaPrimary')}
            </a>
            <a
              href="#roastery"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-black text-xs uppercase tracking-[0.2em] border border-white/20 hover:bg-white hover:text-heritageBlack transition-all"
            >
              {t('heroCtaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
