
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-terracotta/10">
      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent opacity-20"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="text-3xl font-black tracking-tight text-gray-900 mb-2">
                Caffè <span className="text-terracotta">ATT</span>
              </h3>
              <div className="w-16 h-0.5 bg-terracotta mb-6"></div>
              <div className="mb-4 flex justify-start">
                <img src='https://i.postimg.cc/c43zRdJ6/t-(79).png' border='0' alt='t-(79)' className="h-24 object-contain" />
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 font-light">
              {t('footerTagline')}
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-400 tracking-widest font-medium">{t('since1892')}</span>
              <div className="w-8 h-0.5 bg-terracotta/30"></div>
            </div>
          </div>

          
          {/* Where to Buy - Koliziejus */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-8">
              {t('availableAt')}
            </h4>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-terracotta/5 to-terracotta/10 p-6 rounded-xl border border-terracotta/20">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full mr-3"></div>
                  <h5 className="font-bold text-gray-900 text-lg">Koliziejus</h5>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{t('koliziejusAddress')}</p>
                <a 
                  href="https://koliziejus.com/produkto-kategorija/kava/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-terracotta hover:text-heritageBlack transition-colors group"
                >
                  {t('visitStore')} 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                {t('koliziejusNote')}
              </p>
            </div>
          </div>

          {/* B2B Partnership */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-8">
              {t('b2bTitle')}
            </h4>
            <div className="space-y-6">
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {t('b2bDescription')}
              </p>
              <a 
                href="mailto:info@caffeatt.lt" 
                className="inline-flex items-center justify-center px-6 py-3 bg-heritageBlack text-white font-bold text-sm hover:bg-terracotta transition-all duration-300 group w-full sm:w-auto"
              >
                {t('partnerWithUs')} 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50/50">
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
      </div>
    </footer>
  );
};

export default Footer;
