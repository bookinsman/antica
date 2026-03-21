
import React from 'react';
import { useLanguage } from '../LanguageContext';

const BalticsB2BSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="b2b" className="py-20 md:py-28 bg-gradient-to-br from-white via-paper/30 to-sage/5 border-t border-heritageBlack/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column - Main Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-gradient-to-r from-heritageBlack to-terracotta text-white text-xs uppercase tracking-[0.35em] font-black px-6 py-3 rounded-full shadow-lg mb-6">
                {t('balticsKicker')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-6 text-heritageBlack">
                {t('balticsTitle')}
              </h2>
              <p className="text-lg text-heritageBlack/70 font-light leading-relaxed">
                {t('balticsBody1')}
              </p>
            </div>

            {/* Business Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-terracotta/20 rounded-lg p-6 hover:border-terracotta/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <h3 className="font-black uppercase text-xs tracking-wider text-heritageBlack">
                    {t('b2bBenefitPricing')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light">
                  {t('b2bBenefitPricingDesc')}
                </p>
              </div>

              <div className="bg-white border-2 border-terracotta/20 rounded-lg p-6 hover:border-terracotta/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="font-black uppercase text-xs tracking-wider text-heritageBlack">
                    {t('b2bBenefitVolume')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light">
                  {t('b2bBenefitVolumeDesc')}
                </p>
              </div>

              <div className="bg-white border-2 border-terracotta/20 rounded-lg p-6 hover:border-terracotta/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="font-black uppercase text-xs tracking-wider text-heritageBlack">
                    {t('b2bBenefitQuality')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light">
                  {t('b2bBenefitQualityDesc')}
                </p>
              </div>
            </div>

            {/* Direct from Producer Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-lg px-6 py-4">
              <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm font-bold text-terracotta uppercase tracking-wider">
                {t('balticsDirectFromSupplier')}
              </p>
            </div>
          </div>

          {/* Right Column - Showroom & Contact */}
          <div className="space-y-6">
            {/* Showroom Card */}
            <div className="bg-white border-2 border-heritageBlack/10 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-sage/10 p-3 rounded-lg">
                  <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-sage mb-2">
                    {t('visitOurShowroom')}
                  </h3>
                  <p className="text-2xl font-serif italic text-heritageBlack">Koliziejus</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm font-light text-gray-600">{t('showroomAddress')}</p>
                    <p className="text-base font-medium text-heritageBlack">Domus Pro - Ukmergės g. 308</p>
                    <p className="text-sm text-gray-600">Vilnius, Lithuania, LT-12110</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-light text-gray-600 mb-1">{t('b2bContact')}</p>
                    <a href="mailto:info@koliziejus.com" className="text-base font-bold text-terracotta hover:text-heritageBlack transition-colors block">
                      info@koliziejus.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-light text-gray-600 mb-1">{t('b2bPhone')}</p>
                    <a href="tel:+37065554319" className="text-base font-bold text-terracotta hover:text-heritageBlack transition-colors block">
                      +370 655 54319
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-heritageBlack/10">
                <p className="text-xs uppercase tracking-wider font-black text-heritageBlack mb-3">
                  {t('b2bPerfectFor')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                    <span className="text-sm text-gray-700">{t('b2bCafes')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                    <span className="text-sm text-gray-700">{t('b2bRestaurants')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                    <span className="text-sm text-gray-700">{t('b2bHotels')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terracotta rounded-full"></span>
                    <span className="text-sm text-gray-700">{t('b2bOffices')}</span>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info@koliziejus.com?subject=B2B Inquiry - ATT Caffè"
                className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-terracotta to-terracotta/90 text-white text-xs font-black uppercase tracking-[0.2em] rounded-lg hover:from-heritageBlack hover:to-heritageBlack transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                {t('requestB2BQuote')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Additional Note */}
            <div className="bg-sage/5 border border-sage/20 rounded-lg p-6">
              <p className="text-sm text-heritageBlack/70 font-light leading-relaxed italic">
                {t('b2bClosingNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalticsB2BSection;
