
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-paper pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="mb-32">
          <h2 className="text-[12vw] font-serif font-black leading-none tracking-tighter text-heritageBlack/5 uppercase select-none">
            Caffè ATT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif font-black uppercase mb-8">Caffè ATT</h3>
            <p className="text-lg font-serif italic text-heritageBlack/60 max-w-sm mb-12">
              {t('footerFindUs')}
            </p>
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-terracotta">{t('footerB2B')}</p>
              <p className="text-xs font-serif italic text-heritageBlack/40">info@caffeatt.lt</p>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-heritageBlack/30 mb-8">{t('footerContact')}</h4>
            <ul className="space-y-4 font-serif italic text-lg text-heritageBlack/70">
              <li><a href="#" className="hover:text-terracotta transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Trieste HQ</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors">Koliziejus Shop</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 flex flex-col items-end">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-heritageBlack/20 mb-4">
              © 2024 CAFFÈ ATT • TRIESTE
            </p>
            <div className="w-12 h-px bg-heritageBlack/10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
