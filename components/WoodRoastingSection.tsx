
import React from 'react';
import { useLanguage } from '../LanguageContext';

const WoodRoastingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="roastery" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-terracotta mb-4 block">{t('ourRitual')}</span>
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">{t('woodWhyTitle')}</h2>
              <p className="text-xl text-heritageBlack/70 font-light leading-relaxed">
                {t('woodWhyBody')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-heritageBlack/5 bg-paper/30">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">{t('woodCard1Title')}</h4>
                <p className="text-sm font-light text-heritageBlack/60 leading-relaxed">{t('woodCard1Body')}</p>
              </div>
              <div className="p-8 border border-heritageBlack/5 bg-paper/30">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">{t('woodCard2Title')}</h4>
                <p className="text-sm font-light text-heritageBlack/60 leading-relaxed">{t('woodCard2Body')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Process"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-heritageBlack p-12 hidden md:block">
                <span className="text-paper font-serif italic text-3xl">{t('woodBadge')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WoodRoastingSection;
