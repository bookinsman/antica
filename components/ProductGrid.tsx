
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onSelectProduct }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(2);

  React.useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setProductsPerPage(4);
      } else {
        setProductsPerPage(2);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / productsPerPage));

  React.useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const pageProducts = (pageIndex: number) =>
    products.slice(pageIndex * productsPerPage, (pageIndex + 1) * productsPerPage);

  return (
    <div className="relative">
      <div className="border-t border-heritageBlack/10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0">
              <div className="flex gap-4">
                {pageProducts(pageIndex).map((product) => (
                  <div
                    key={product.id}
                    className="flex-1 min-w-0 border-b border-heritageBlack/10"
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={() => onAddToCart(product)}
                      onSelect={() => onSelectProduct(product)}
                    />
                  </div>
                ))}
                {pageProducts(pageIndex).length < productsPerPage &&
                  Array.from({ length: productsPerPage - pageProducts(pageIndex).length }).map((__, fillerIdx) => (
                    <div key={`filler-${pageIndex}-${fillerIdx}`} className="flex-1 min-w-0" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <>
          <button
            onClick={prevPage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-heritageBlack p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous products"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-heritageBlack p-2 rounded-full shadow-lg transition-all z-10"
            aria-label="Next products"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentPage ? 'bg-heritageBlack w-6' : 'bg-heritageBlack/30'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
