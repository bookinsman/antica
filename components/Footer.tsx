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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
          {/* Clear Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-400 mb-3">
              {t('howToPurchaseHeader')}
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-heritageBlack">
              {t('howToPurchaseTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Online Shopping - For Individual Customers */}
            <div className="relative bg-gradient-to-br from-sage/5 to-terracotta/5 border-2 border-sage/20 rounded-lg p-8 md:p-10">
              {/* Badge for Individual Customers */}
              <div className="absolute -top-4 left-8">
                <span className="inline-block bg-sage text-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                  {t('forIndividuals')}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <div>
                    <p className="text-base md:text-lg font-black uppercase tracking-[0.15em] text-heritageBlack mb-2">
                      {t('preFooterShopTitle')}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                  {t('preFooterShopBody')}
                </p>

                <div className="bg-white/80 rounded-md p-4 mb-6 border border-sage/10">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-sage mb-2">
                    {t('officialStore')}
                  </p>
                  <p className="text-sm font-bold text-gray-900">Koliziejus</p>
                  <p className="text-sm text-gray-600">{t('koliziejusAddress')}</p>
                </div>

                <a
                  href="https://koliziejus.com/produkto-kategorija/kava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white bg-sage hover:bg-heritageBlack transition-all duration-300 rounded-md group shadow-sm"
                >
                  {t('shopOnlineNow')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <p className="text-xs text-gray-500 leading-relaxed italic mt-6">
                  {t('koliziejusNote')}
                </p>
              </div>
            </div>

            {/* Business Inquiries - For Wholesale/B2B */}
            <div className="relative bg-gradient-to-br from-mustard/5 to-terracotta/5 border-2 border-terracotta/30 rounded-lg p-8 md:p-10">
              {/* Badge for Business */}
              <div className="absolute -top-4 left-8">
                <span className="inline-block bg-terracotta text-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                  {t('forBusiness')}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-base md:text-lg font-black uppercase tracking-[0.15em] text-heritageBlack mb-2">
                      {t('preFooterBusinessTitle')}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                  {t('b2bDescription')}
                </p>

                <div className="bg-white/80 rounded-md p-4 mb-6 border border-terracotta/10">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-terracotta mb-3">
                    {t('b2bFor')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                      {t('b2bCafes')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                      {t('b2bRestaurants')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                      {t('b2bHotels')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                      {t('b2bWholesale')}
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 rounded-md p-4 mb-4 border border-terracotta/10">
                  <p className="text-xs text-gray-500 italic mb-2">{t('b2bInquiryLine')}</p>
                  <a href="mailto:info@koliziejus.com" className="text-base font-bold text-terracotta hover:text-heritageBlack transition-colors">
                    info@koliziejus.com
                  </a>
                </div>

                <a
                  href="mailto:info@koliziejus.com?subject=B2B Inquiry - ATT Caffè"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white bg-terracotta hover:bg-heritageBlack transition-all duration-300 rounded-md group shadow-sm"
                >
                  {t('contactForB2B')}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-heritageBlack text-white">
        {/* Contact Details Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{t('footerPhone')}</p>
                  <a href="tel:+37065554319" className="text-sm font-bold text-white hover:text-terracotta transition-colors">
                    +370 655 54319
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{t('footerEmail')}</p>
                  <a href="mailto:info@koliziejus.com" className="text-sm font-bold text-white hover:text-terracotta transition-colors">
                    info@koliziejus.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{t('footerWorkingHours')}</p>
                  <p className="text-sm font-bold text-white">{t('footerHours')}</p>
                  <p className="text-xs text-gray-400">{t('footerDays')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-heritageBlack/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400 font-light">
                © 2026 Caffè ATT. {t('allRightsReserved')}
              </p>
              <div className="flex items-center space-x-6 text-xs text-gray-400">
                <a href="#" className="hover:text-terracotta transition-colors font-light">{t('privacy')}</a>
                <span className="w-1 h-1 bg-terracotta/30 rounded-full"></span>
                <a href="#" className="hover:text-terracotta transition-colors font-light">{t('terms')}</a>
              </div>
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
