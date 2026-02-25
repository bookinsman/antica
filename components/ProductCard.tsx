
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

  return (
    <div className="group flex flex-col h-full bg-paper hover:bg-white transition-all duration-700 cursor-pointer overflow-hidden" onClick={onSelect}>
      <div className={`relative aspect-[4/5] overflow-hidden ${product.accentColor} p-4`}>
        {product.limited && (
          <div className="absolute top-6 right-6 z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
             <div className="text-[8px] font-black text-white uppercase text-center rotate-[-15deg] tracking-tighter">
               Wood-Fired<br/>Small Lot
             </div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-heritageBlack/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-6 py-3 shadow-2xl">
            {t('viewDetails')}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-terracotta mb-4">
          {product.category}
        </span>
        
        <h3 className="text-3xl font-serif font-black group-hover:text-terracotta transition-colors leading-tight mb-4 tracking-tighter">
          {product.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {product.notes.map(note => (
            <span key={note} className="text-[9px] uppercase tracking-widest font-black border border-heritageBlack/10 px-2 py-1 rounded-full opacity-40">
              {note}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-6 border-t border-heritageBlack/5 space-y-3">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-black">
             <span className="text-heritageBlack/40">{t('intensity')}</span>
             <div className="flex space-x-0.5">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-3 ${i < product.profile.intensity ? 'bg-heritageBlack' : 'bg-heritageBlack/10'}`}></div>
                ))}
             </div>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-heritageBlack/30">{product.roast}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
