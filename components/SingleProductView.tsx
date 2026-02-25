
import React, { useEffect } from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';

interface SingleProductViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

const SingleProductView: React.FC<SingleProductViewProps> = ({ product, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const SensoryBar = ({ label, value, max = 5 }: { label: string, value: number, max?: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-widest font-black text-heritageBlack/40">{label}</span>
        <span className="text-[10px] font-black">{value}/{max}</span>
      </div>
      <div className="h-1 w-full bg-heritageBlack/5 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-terracotta transition-all duration-1000" 
          style={{ width: `${(value / max) * 100}%` }}
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
          <div className={`relative h-[50vh] lg:h-full bg-heritageBlack flex items-center justify-center p-12 overflow-hidden`}>
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover opacity-60 grayscale scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack via-transparent to-transparent"></div>
             <div className="absolute bottom-12 left-12">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-terracotta mb-2 block">TRIESTE • ITALY</span>
                <h3 className="text-3xl font-serif font-black italic text-white">Caffè ATT</h3>
             </div>
          </div>

          <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-paper">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-terracotta mb-6">{product.category}</span>
            <h2 className="text-6xl md:text-8xl font-serif font-black mb-10 leading-[0.8] tracking-tighter">{product.name}</h2>
            
            <p className="text-2xl font-serif italic text-heritageBlack/70 mb-16 leading-relaxed border-l-4 border-terracotta pl-10">
              "{product.description}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-10 text-heritageBlack/30">Origins & Ritual</h4>
                <div className="space-y-6 font-serif italic text-lg">
                  <div>
                    <span className="text-[9px] font-black uppercase text-terracotta block mb-1">Terroir</span>
                    <span>{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-terracotta block mb-1">Process</span>
                    <span>{product.process}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-10 text-heritageBlack/30">Profile</h4>
                <SensoryBar label={t('intensity')} value={product.profile.intensity} max={10} />
                <SensoryBar label="Body" value={product.profile.body} />
                <SensoryBar label="Acidity" value={product.profile.acidity} />
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-6 bg-heritageBlack text-white uppercase tracking-[0.3em] text-xs font-black hover:bg-terracotta transition-all shadow-2xl"
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
