
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-3xl font-black tracking-tight text-gray-900 mb-2">
                Caffè <span className="text-terracotta">ATT</span>
              </h3>
              <div className="w-16 h-0.5 bg-terracotta mb-6"></div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 font-light">
              {t('footerTagline')}
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-400 tracking-widest font-medium">{t('since1892')}</span>
              <div className="w-8 h-0.5 bg-terracotta/30"></div>
            </div>
          </div>

          {/* Newsletter - Our Collection */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-8">
              {t('newsletterTitle')}
            </h4>
            <div className="space-y-6">
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {t('newsletterDescription')}
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
                />
                <button className="w-full px-6 py-3 bg-terracotta text-white font-bold text-sm hover:bg-heritageBlack transition-all duration-300 group">
                  {t('subscribeButton')}
                  <svg className="w-4 h-4 ml-2 inline transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                {t('newsletterNote')}
              </p>
            </div>
          </div>

          {/* Where to Buy - Koliziejus */}
          <div className="lg:col-span-1">
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
                  href="https://koliziejus.lt" 
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
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta mb-8">
              {t('b2bTitle')}
            </h4>
            <div className="space-y-6">
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {t('b2bDescription')}
              </p>
              <a 
                href="mailto:info@caffeatt.lt" 
                className="inline-flex items-center px-6 py-3 bg-terracotta text-white font-bold text-sm hover:bg-heritageBlack transition-all duration-300 group"
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
              © 2024 Caffè ATT. {t('allRightsReserved')}
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
