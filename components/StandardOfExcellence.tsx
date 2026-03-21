import React from 'react';
import { useLanguage } from '../LanguageContext';

const StandardOfExcellence: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black italic mb-6 tracking-tighter text-heritageBlack">
            {t('standardTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-black mb-4 text-terracotta border-l-2 border-terracotta pl-4">
                {t('globalSourcingTitle')}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-heritageBlack/70">
                {t('globalSourcingBody')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-black mb-4 text-terracotta border-l-2 border-terracotta pl-4">
                {t('ny2QualityTitle')}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-heritageBlack/70">
                {t('ny2QualityBody')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardOfExcellence;
