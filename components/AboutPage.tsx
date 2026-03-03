import React from 'react';
import { useLanguage } from '../LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20">
      <section className="border-b border-heritageBlack/10 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-terracotta/90 block mb-6">
            {t('aboutKicker')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-heritageBlack mb-8">
            <span className="font-light">{t('aboutTitleLine1')}</span>
            <span className="font-black"> {t('aboutTitleLine2')}</span>
          </h1>
          <p className="text-lg md:text-xl font-serif italic text-heritageBlack/70 leading-relaxed max-w-4xl">
            {t('aboutIntro')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-heritageBlack/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif font-black italic leading-tight mb-6">
              {t('philosophyTitle')}
            </h2>
            <p className="text-base md:text-lg text-heritageBlack/70 leading-relaxed">
              {t('philosophyBody')}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-8 border border-heritageBlack/10 bg-white">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-terracotta mb-3">
                    {t(`philosophyPillar${i}Title`)}
                  </h3>
                  <p className="text-sm md:text-base font-light text-heritageBlack/70 leading-relaxed">
                    {t(`philosophyPillar${i}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=1400"
                alt={t('aboutImageAlt')}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/50 via-heritageBlack/10 to-transparent" />
              <div className="absolute bottom-8 left-8 bg-paper p-4 border border-heritageBlack/10">
                <span className="text-xs uppercase tracking-widest font-bold">{t('aboutImageBadge')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif font-black italic leading-tight mb-6">
              {t('storyTitle')}
            </h2>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-l-2 border-terracotta pl-5 py-1">
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-2">
                    {t(`storySection${i}Title`)}
                  </h3>
                  <p className="text-sm md:text-base font-light text-heritageBlack/70 leading-relaxed">
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
