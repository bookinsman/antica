
import React, { useEffect } from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';

interface SingleProductViewProps {
  product: Product;
  onClose: () => void;
}

const SingleProductView: React.FC<SingleProductViewProps> = ({ product, onClose }) => {
  const { t } = useLanguage();

  // Map variant product IDs to base product IDs for translations
  const getBaseProductId = (id: string): string => {
    // 250g BEANS variants
    if (id === '250-4') return '4'; // Organic BIO/BIOLOGICO
    if (id === '250-3') return '3'; // Buonissimo
    if (id === '250-1') return '1'; // Nessun Dorma
    if (id === '250-2') return '2'; // Risvegli

    // ALUMINIUM MOKA variants
    if (id === 'al-moka-1') return '2'; // Risvegli
    if (id === 'al-moka-2') return '1'; // Nessun Dorma
    if (id === 'al-moka-3') return '4'; // Organic BIO/BIOLOGICO

    // MACINATO MOKA variants
    if (id === 'moka-4') return '4'; // Organic BIO/BIOLOGICO
    if (id === 'moka-1') return '1'; // Nessun Dorma
    if (id === 'moka-2') return '2'; // Risvegli

    return id; // Return original ID for base products
  };

  const baseId = getBaseProductId(product.id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

  const SensoryBar = ({ label, value, max }: { label: string, value: number, max: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium uppercase tracking-[0.1em] text-gray-600">{label}</span>
        <span className="text-xs font-medium text-gray-700">{value}/{max}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 relative overflow-hidden rounded-full">
        <div 
          className="absolute top-0 left-0 h-full bg-terracotta transition-all duration-1000 rounded-full" 
          style={{ width: `${clamp((value / max) * 100, 0, 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end">
      <div className="absolute inset-0 bg-heritageBlack/50 backdrop-blur-xl" onClick={onClose} />

      <div className="relative w-full h-full bg-paper overflow-y-auto custom-scrollbar animate-[slideInRight_0.6s_cubic-bezier(0.16, 1, 0.3, 1)]">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:absolute md:top-8 md:right-8 z-[110] text-white md:text-heritageBlack hover:text-terracotta transition-colors text-2xl bg-heritageBlack/80 md:bg-transparent rounded-full w-10 h-10 md:w-auto md:h-auto flex items-center justify-center md:block"
        >
          ✕
        </button>

        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-full">
          <div className={`relative h-[35vh] md:h-[40vh] lg:h-auto bg-heritageBlack flex items-center justify-center p-6 md:p-8 overflow-hidden`}>
             <img
               src={product.image}
               alt={product.name}
               className="w-full h-full object-contain opacity-90 scale-100 transition-transform hover:scale-105"
               decoding="async"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/30 via-transparent to-transparent"></div>
             <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-terracotta mb-1 sm:mb-2 block">{t('triesteItaly')}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-black italic text-white">Caffè ATT</h3>
             </div>
          </div>

          <div className="p-5 sm:p-6 md:p-8 lg:p-12 xl:p-14 flex flex-col bg-white pb-24 md:pb-8">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-terracotta mb-3 sm:mb-4">{product.category}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 leading-tight break-words">{product.name}</h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed border-l-4 border-terracotta pl-4 sm:pl-5 break-words">
              "{t(`product_${baseId}_description`)}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-3 sm:mb-4 text-gray-500">{t('coffeeDetails')}</h4>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <div>
                    <span className="text-xs font-bold uppercase text-terracotta block mb-2">{t('flavorNotes')}</span>
                    <div className="flex flex-wrap gap-2">
                      {product.notes.map(note => (
                        <span key={note} className="text-sm sm:text-base text-gray-700 break-words">
                          {t(`flavorNote_${note}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-terracotta block mb-2">{t('intensity')}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700 font-medium text-sm">{product.intensityNumber}/10</span>
                      <div className="flex space-x-0.5">
                         {[...Array(10)].map((_, i) => (
                           <div key={i} className={`w-2 h-4 ${i < product.intensityNumber ? 'bg-terracotta' : 'bg-gray-300'}`}></div>
                         ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-terracotta block mb-2">{t('beanType')}</span>
                    <span className="text-gray-700 font-medium border-l-2 border-terracotta pl-3 text-sm break-words block">
                      {t(`beanType_${baseId}`)}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-terracotta block mb-2">{t('terroir')}</span>
                    <span className="text-gray-700 text-sm break-words block">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-terracotta block mb-2">{t('process')}</span>
                    <span className="text-gray-700 text-sm break-words block">{product.process}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-3 sm:mb-4 text-gray-500">{t('profile')}</h4>
                <SensoryBar label={t('bitterness')} value={product.profile.bitterness} max={100} />
                <SensoryBar label={t('acidity')} value={product.profile.acidity} max={100} />
                <SensoryBar label={t('sweetness')} value={product.profile.sweetness} max={100} />
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-3 sm:py-4 bg-heritageBlack text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[10px] sm:text-xs font-medium hover:bg-terracotta transition-all"
            >
              {t('back')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SingleProductView;
