import React from 'react';
import { useLanguage } from '../LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-8 md:py-20">
      <section className="border-b border-heritageBlack/10 pb-8 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] font-medium text-terracotta/90 block mb-4 sm:mb-6">
            {t('aboutKicker')}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif leading-tight text-heritageBlack mb-6 sm:mb-8">
            <span className="font-light">{t('aboutTitleLine1')}</span>
            <span className="font-black"> {t('aboutTitleLine2')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-serif italic text-heritageBlack/70 leading-relaxed max-w-4xl">
            {t('aboutIntro')}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 border-b border-heritageBlack/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black italic leading-tight mb-4 sm:mb-6">
              {t('philosophyTitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-heritageBlack/70 leading-relaxed">
              {t('philosophyBody')}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 sm:p-6 lg:p-8 border border-heritageBlack/10 bg-white">
                  <h3 className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-terracotta mb-2 sm:mb-3">
                    {t(`philosophyPillar${i}Title`)}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-light text-heritageBlack/70 leading-relaxed">
                    {t(`philosophyPillar${i}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-[9/16] overflow-hidden">
              <img
                src="https://i.postimg.cc/gJk1rpTM/antica_tostatura.jpg"
                alt={t('aboutImageAlt')}
                className="w-full h-full object-cover transition-all duration-1000"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/50 via-heritageBlack/10 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black italic leading-tight mb-4 sm:mb-6">
              {t('storyTitle')}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border-l-2 border-terracotta pl-3 sm:pl-5 py-1">
                  <h3 className="text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2">
                    {t(`storySection${i}Title`)}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-light text-heritageBlack/70 leading-relaxed">
                    {t(`storySection${i}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
