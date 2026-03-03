
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-heritageBlack/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-black tracking-tighter uppercase">
              Caffè <span className="italic font-normal">ATT</span>
            </Link>
            <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-widest font-black opacity-40">
              <a href="#shop" className="hover:text-terracotta transition-all">{t('navCollections')}</a>
              <a href="#roastery" className="hover:text-terracotta transition-all">{t('navProcess')}</a>
              <a href="#stories" className="hover:text-terracotta transition-all">{t('navHistory')}</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {(['LT', 'EN', 'RU'] as Language[]).map(lang => (
                <button 
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[9px] font-black tracking-widest px-2 py-1 ${language === lang ? 'text-terracotta' : 'text-heritageBlack/30 hover:text-heritageBlack'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-0.5 bg-heritageBlack mb-1.5"></div>
              <div className="w-4 h-0.5 bg-heritageBlack ml-auto"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen border-b border-heritageBlack/10' : 'max-h-0'}`}>
        <div className="px-6 py-10 space-y-6 bg-paper text-center">
          <a href="#shop" className="block text-3xl font-serif font-black italic" onClick={() => setIsMenuOpen(false)}>{t('navCollections')}</a>
          <a href="#roastery" className="block text-3xl font-serif font-black italic" onClick={() => setIsMenuOpen(false)}>{t('navTheProcess')}</a>
          <a href="#stories" className="block text-3xl font-serif font-black italic" onClick={() => setIsMenuOpen(false)}>{t('navTriesteHeritage')}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
