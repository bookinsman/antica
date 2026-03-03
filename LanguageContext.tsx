
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from './types';
import lt from './translations/lt.json';
import en from './translations/en.json';
import ru from './translations/ru.json';

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  LT: lt,
  EN: en,
  RU: ru
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    const current = dictionaries[language]?.[key];
    if (current) return current;
    const fallbackEn = dictionaries.EN?.[key];
    if (fallbackEn) return fallbackEn;
    return key;
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
