
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    sessionStorage.setItem('scrollTarget', id);
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-heritageBlack/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-black tracking-tighter uppercase">
              Caffè <span className="italic font-normal">ATT</span>
            </Link>
            <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-widest font-black opacity-40">
              <button type="button" onClick={() => goToSection('shop')} className="hover:text-terracotta transition-all text-[10px] uppercase tracking-widest font-black">{t('navCollections')}</button>
              <button type="button" onClick={() => goToSection('b2b')} className="hover:text-terracotta transition-all text-[10px] uppercase tracking-widest font-black">{t('navB2b')}</button>
              <Link to="/about" className="hover:text-terracotta transition-all text-[10px] uppercase tracking-widest font-black">{t('navAbout')}</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {(['EN'] as Language[]).map(lang => (
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
          <button type="button" className="block text-3xl font-serif font-black italic w-full" onClick={() => { setIsMenuOpen(false); goToSection('shop'); }}>{t('navCollections')}</button>
          <button type="button" className="block text-3xl font-serif font-black italic w-full" onClick={() => { setIsMenuOpen(false); goToSection('b2b'); }}>{t('navB2b')}</button>
          <Link to="/about" className="block text-3xl font-serif font-black italic" onClick={() => setIsMenuOpen(false)}>{t('navAbout')}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
