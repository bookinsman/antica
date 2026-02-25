
import React from 'react';
import { useLanguage } from '../LanguageContext';

const AnnouncementBar: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-heritageBlack text-paper h-10 flex items-center overflow-hidden border-b border-heritageBlack/10">
      <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] flex space-x-12 px-12">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t('tickerText')}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t('tickerText')}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t('tickerText')}</span>
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

export default AnnouncementBar;
