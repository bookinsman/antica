
import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../LanguageContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
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

  return (
    <div className="group flex flex-col h-full bg-paper hover:bg-white transition-all duration-700 cursor-pointer overflow-hidden" onClick={onSelect}>
      <div className={`relative aspect-[4/5] overflow-hidden ${product.accentColor} p-4`}>
        {product.limited && (
          <div className="absolute top-6 right-6 z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
             <div className="text-[8px] font-black text-white uppercase text-center rotate-[-15deg] tracking-tighter">
               {t('woodFiredSmallLotLine1')}<br/>{t('woodFiredSmallLotLine2')}
             </div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-heritageBlack/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-6 py-3 shadow-2xl">
            {t('viewDetails')}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-terracotta mb-2">
          {product.category}
        </span>

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-black group-hover:text-terracotta transition-colors leading-tight mb-2 sm:mb-3 tracking-tight break-words">
          {product.name}
        </h3>

        <p className="text-[9px] sm:text-[10px] leading-relaxed text-heritageBlack/60 mb-4 sm:mb-6 line-clamp-3 break-words">
          {t(`product_${baseId}_shortDescription`)}
        </p>

        <div className="mt-auto pt-4 sm:pt-6 border-t border-heritageBlack/5 space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-wider font-black">
             <span className="text-heritageBlack/40">{t('intensity')}</span>
             <div className="flex items-center gap-2">
                <span className="text-heritageBlack text-xs sm:text-sm">{product.intensityNumber}/10</span>
                <div className="flex gap-0.5">
                   {[...Array(10)].map((_, i) => (
                     <div key={i} className={`w-1 sm:w-1.5 h-2.5 sm:h-3 ${i < product.intensityNumber ? 'bg-terracotta' : 'bg-heritageBlack/10'}`}></div>
                   ))}
                </div>
             </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
             <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-heritageBlack/40">{t('beanType')}</span>
             <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.05em] text-heritageBlack sm:border-l-2 border-terracotta sm:pl-2 break-words">
               {t(`beanType_${baseId}`)}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
