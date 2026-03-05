
import React from 'react';
import { useLanguage } from '../LanguageContext';

const BalticsB2BSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="b2b" className="py-24 bg-white border-t border-heritageBlack/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-gradient-to-r from-heritageBlack to-terracotta text-white text-xs uppercase tracking-[0.4em] font-bold px-6 py-3 rounded-lg shadow-lg mb-8">
              {t('balticsKicker')}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif italic leading-tight mb-8">
              {t('balticsTitle')}
            </h2>
            <div className="space-y-5">
              <p className="text-lg text-heritageBlack/70 font-light leading-relaxed">
                {t('balticsBody1')}
              </p>
              <p className="text-lg text-heritageBlack/70 font-light leading-relaxed">
                {t('balticsBody2')}
              </p>
            </div>

            <div className="mt-8 inline-block">
              <div className="bg-gradient-to-r from-terracotta/10 to-terracotta/5 border border-terracotta/30 rounded-lg px-6 py-3">
                <p className="text-sm font-bold text-terracotta uppercase tracking-wider">
                  {t('balticsDirectFromSupplier')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-heritageBlack/10 bg-paper/30 p-10 md:p-12">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-terracotta flex-shrink-0" />
                  <p className="text-sm md:text-base text-heritageBlack/70 font-light leading-relaxed">
                    {t('balticsBullet1')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-terracotta flex-shrink-0" />
                  <p className="text-sm md:text-base text-heritageBlack/70 font-light leading-relaxed">
                    {t('balticsBullet2')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-terracotta flex-shrink-0" />
                  <p className="text-sm md:text-base text-heritageBlack/70 font-light leading-relaxed">
                    {t('balticsBullet3')}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-heritageBlack/10">
                <p className="text-sm text-heritageBlack/60 font-light leading-relaxed mb-6">
                  {t('balticsClosing')}
                </p>
                <a
                  href="mailto:caffeatt@info.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-heritageBlack text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-terracotta transition-all w-full"
                >
                  {t('balticsCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalticsB2BSection;
