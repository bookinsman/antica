import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-white border-t border-heritageBlack/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="md:pr-12 md:border-r border-heritageBlack/10">
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-terracotta mb-4">
                {t('preFooterShopTitle')}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-6 max-w-lg">
                {t('preFooterShopBody')}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-bold text-gray-900">Koliziejus</p>
                <p className="text-sm text-gray-600">{t('koliziejusAddress')}</p>
              </div>
              <div className="mt-6">
                <a
                  href="https://koliziejus.com/produkto-kategorija/kava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-black uppercase tracking-[0.25em] text-heritageBlack hover:text-terracotta transition-colors group"
                >
                  {t('visitStore')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic mt-8 max-w-lg">
                {t('koliziejusNote')}
              </p>
            </div>

            <div>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-terracotta mb-4">
                {t('preFooterBusinessTitle')}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-6 max-w-lg">
                {t('b2bDescription')}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed max-w-lg">
                <span className="text-gray-500 italic">{t('b2bInquiryLine')}</span>{' '}
                <a href="mailto:info@koliziejus.com" className="text-terracotta font-bold hover:underline">info@koliziejus.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-500 font-light">
              © 2026 Caffè ATT. {t('allRightsReserved')}
            </p>
            <div className="flex items-center space-x-8 text-xs text-gray-500">
              <a href="#" className="hover:text-terracotta transition-colors font-light">{t('privacy')}</a>
              <span className="w-1 h-1 bg-terracotta/30 rounded-full"></span>
              <a href="#" className="hover:text-terracotta transition-colors font-light">{t('terms')}</a>
            </div>
          </div>
        </div>

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-terracotta text-white rounded-full shadow-lg hover:bg-heritageBlack transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
