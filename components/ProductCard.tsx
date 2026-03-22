
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
      
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-terracotta mb-3">
          {product.category}
        </span>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black group-hover:text-terracotta transition-colors leading-tight mb-3 tracking-tight break-words">
          {product.name}
        </h3>
        
        <p className="text-[10px] leading-relaxed text-heritageBlack/60 mb-6 line-clamp-2">
          {t(`product_${baseId}_shortDescription`)}
        </p>

        <div className="mt-auto pt-6 border-t border-heritageBlack/5 space-y-3">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-black">
             <span className="text-heritageBlack/40">{t('intensity')}</span>
             <div className="flex items-center space-x-2">
                <span className="text-heritageBlack">{product.intensityNumber}/10</span>
                <div className="flex space-x-0.5">
                   {[...Array(10)].map((_, i) => (
                     <div key={i} className={`w-1.5 h-3 ${i < product.intensityNumber ? 'bg-terracotta' : 'bg-heritageBlack/10'}`}></div>
                   ))}
                </div>
             </div>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-heritageBlack/40">{t('beanType')}</span>
             <span className="text-[9px] font-medium tracking-[0.05em] text-heritageBlack border-l-2 border-terracotta pl-2">
               {t(`beanType_${baseId}`)}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
