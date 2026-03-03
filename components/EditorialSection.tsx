
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const EditorialSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="stories" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-video overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/60 to-transparent flex items-end p-8">
                <h3 className="text-white font-serif text-xl italic leading-tight">{t('instagramGalleryTitle')}</h3>
             </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6 leading-tight">
            {t('editorialTitleLine1')} <br /> {t('editorialTitleLine2')}
          </h2>
          <p className="text-lg text-heritageBlack/70 leading-relaxed mb-8">
            {t('editorialBody')}
          </p>
          <div className="space-y-4">
             <div className="flex items-start space-x-4 border-l-2 border-terracotta pl-4 py-2">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{t('editorialPoint1Title')}</h4>
                  <p className="text-sm font-light text-heritageBlack/60">{t('editorialPoint1Body')}</p>
                </div>
             </div>
             <div className="flex items-start space-x-4 border-l-2 border-sage pl-4 py-2">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{t('editorialPoint2Title')}</h4>
                  <p className="text-sm font-light text-heritageBlack/60">{t('editorialPoint2Body')}</p>
                </div>
             </div>
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-heritageBlack text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-terracotta transition-all"
            >
              {t('editorialCta')}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-1 grid-border border border-heritageBlack/10">
         {[
           { titleKey: 'story1Title', img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400" },
           { titleKey: 'story2Title', img: "https://images.unsplash.com/photo-1544787210-2211d44b505b?auto=format&fit=crop&w=400" },
           { titleKey: 'story3Title', img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400" }
         ].map((story, i) => (
           <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer">
             <img src={story.img} alt={t(story.titleKey)} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700 opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/60 to-transparent flex items-end p-8">
                <h3 className="text-white font-serif text-xl italic leading-tight">{t(story.titleKey)}</h3>
             </div>
           </div>
         ))}
      </div>
    </section>
  );
};

export default EditorialSection;
