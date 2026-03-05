
import React, { useEffect } from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';
import { computeIntensity } from '../coffeeProfile';

interface SingleProductViewProps {
  product: Product;
  onClose: () => void;
}

const SingleProductView: React.FC<SingleProductViewProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  const intensity = computeIntensity(product.profile);

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
      
      <div className="relative w-full md:w-[85%] lg:w-[70%] h-full bg-paper overflow-y-auto custom-scrollbar animate-[slideInRight_0.6s_cubic-bezier(0.16, 1, 0.3, 1)]">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-[110] text-heritageBlack hover:text-terracotta transition-colors text-2xl p-4"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className={`relative h-[30vh] sm:h-[35vh] lg:h-full bg-heritageBlack flex items-center justify-center p-4 sm:p-8 overflow-hidden`}>
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-contain opacity-90 scale-100 transition-transform hover:scale-105"
               decoding="async"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/30 via-transparent to-transparent"></div>
             <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-terracotta mb-1 sm:mb-2 block">{t('triesteItaly')}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-black italic text-white">Caffè ATT</h3>
             </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:p-16 flex flex-col justify-center bg-white max-h-[100vh] overflow-y-auto">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-terracotta mb-2 sm:mb-4">{product.category}</span>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 leading-tight">{product.name}</h2>
            
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-8 leading-relaxed border-l-2 sm:border-l-3 border-terracotta pl-3 sm:pl-4">
              "{product.description}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-2 sm:mb-4 text-gray-500">{t('originsRitual')}</h4>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-[10px] sm:text-xs font-medium uppercase text-terracotta block mb-1">{t('terroir')}</span>
                    <span className="text-gray-700">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-medium uppercase text-terracotta block mb-1">{t('process')}</span>
                    <span className="text-gray-700">{product.process}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-2 sm:mb-4 text-gray-500">{t('profile')}</h4>
                <SensoryBar label={t('intensity')} value={intensity} max={10} />
                <SensoryBar label={t('body')} value={product.profile.body} max={10} />
                <SensoryBar label={t('acidity')} value={product.profile.acidity} max={10} />
                <SensoryBar label={t('crema')} value={product.profile.crema} max={10} />
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
