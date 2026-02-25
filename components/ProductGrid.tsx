
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onSelectProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-4 sm:-mx-6 lg:-mx-8 border-t border-heritageBlack/10">
      {products.map((product, idx) => (
        <div key={product.id} className={`border-b border-heritageBlack/10 sm:border-r ${idx % 2 === 1 ? 'sm:border-r-0 lg:border-r' : ''} ${idx % 4 === 3 ? 'lg:border-r-0' : ''}`}>
          <ProductCard 
            product={product} 
            onAddToCart={() => onAddToCart(product)} 
            onSelect={() => onSelectProduct(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
