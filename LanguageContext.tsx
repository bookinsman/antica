
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from './types';

const translations: Translations = {
  heroTitle: {
    LT: 'Tikra kava. Tikra ugnis.',
    EN: 'Real Coffee. Real Fire.',
    RU: 'Настоящий кофе. Настоящий огонь.'
  },
  heroSubtitle: {
    LT: 'Tradicinis Triesto skrudinimas virš buko malkų. Autentiškas Caffè ATT ritualas.',
    EN: 'Traditional Trieste roasting over beech wood. The authentic Caffè ATT ritual.',
    RU: 'Традиционная обжарка из Триеста на буковых дровах. Аутентичный ритуал Caffè ATT.'
  },
  seasonalRoasts: {
    LT: 'Sezoninės kolekcijos',
    EN: 'Seasonal Collections',
    RU: 'Сезонные коллекции'
  },
  ourStory: {
    LT: 'Mūsų istorija',
    EN: 'Our Story',
    RU: 'Наша история'
  },
  tickerText: {
    LT: 'TRADICINIS BUKO MEDIENOS SKRUDINIMAS — CAFFÈ ATT — TRIESTAS — TRADICIJA NUO 1892',
    EN: 'TRADITIONAL BEECH WOOD ROASTING — CAFFÈ ATT — TRIESTE — TRADITION SINCE 1892',
    RU: 'ТРАДИЦИОННАЯ ОБЖАРКА НА БУКОВЫХ ДРОВАХ — CAFFÈ ATT — ТРИЕСТ — С 1892 ГОДА'
  },
  footerFindUs: {
    LT: 'Mus rasite Lietuvoje „Koliziejus“ itališko skonio namuose.',
    EN: 'Find us in Lithuania at the "Koliziejus" Italian taste house.',
    RU: 'Найдите нас в Литве в доме итальянского вкуса «Koliziejus».'
  },
  footerB2B: {
    LT: 'Kavinėms, barams ir restoranams siūlome individualius kainų pasiūlymus.',
    EN: 'We offer individual pricing for cafes, bars, and restaurants.',
    RU: 'Мы предлагаем индивидуальные цены для кафе, баров и ресторанов.'
  },
  footerContact: {
    LT: 'Susisiekite su mumis',
    EN: 'Contact Us',
    RU: 'Связаться с нами'
  },
  viewDetails: {
    LT: 'Peržiūrėti profilį',
    EN: 'View Profile',
    RU: 'Посмотреть профиль'
  },
  intensity: {
    LT: 'Intensyvumas',
    EN: 'Intensity',
    RU: 'Интенсивность'
  },
  back: {
    LT: 'Grįžti atgal',
    EN: 'Go Back',
    RU: 'Вернуться назад'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('LT');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
