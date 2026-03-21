
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Product } from './types';
import { ALUMINIUM_MOKA_250G, BEANS_250G, MACINATO_MOKA_250G, PRODUCTS } from './constants';

// Lazy load components that aren't immediately visible
const SingleProductView = lazy(() => import('./components/SingleProductView'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const BalticsB2BSection = lazy(() => import('./components/BalticsB2BSection'));
const StandardOfExcellence = lazy(() => import('./components/StandardOfExcellence'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-terracotta/20 border-t-terracotta rounded-full animate-spin"></div>
      <p className="text-xs font-black uppercase tracking-wider text-gray-400">Loading...</p>
    </div>
  </div>
);

const MainContent = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showMacinatoMoka, setShowMacinatoMoka] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (!target) return;
    if (location.pathname !== '/') return;

    sessionStorage.removeItem('scrollTarget');
    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white bg-paper overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Marquee text={t('tickerText')} />
              
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-heritageBlack/10">
                <section id="shop" className="py-16 md:py-28 border-b border-heritageBlack/10">
                  <div className="mb-16 md:mb-20 text-center">
                    <h2 className="text-6xl md:text-8xl font-serif font-black italic mb-6 tracking-tighter">
                      {t('seasonalRoasts')}
                    </h2>
                    <p className="text-xl md:text-3xl font-serif italic text-heritageBlack/50 leading-tight max-w-4xl mx-auto">
                      <span className="relative inline-block px-2">
                        <span className="absolute inset-0 bg-terracotta/10 -skew-y-1 rounded-sm" />
                        <span className="relative">{t('seasonalDescription')}</span>
                      </span>
                    </p>
                  </div>

                  <div className="space-y-20 md:space-y-24">
                    <div>
                      <div className="mb-10 md:mb-12 pb-6 border-b border-heritageBlack/10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black italic tracking-tight text-heritageBlack">
                          1kg <span className="text-terracotta">Roasted Beans</span>
                        </h3>
                      </div>
                      <ProductGrid
                        products={PRODUCTS}
                        onAddToCart={() => {}}
                        onSelectProduct={(product) => setSelectedProduct(product)}
                      />
                    </div>

                    <div>
                      <div className="mb-10 md:mb-12 pb-6 border-b border-heritageBlack/10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black italic tracking-tight text-heritageBlack">
                            250g <span className="text-terracotta">Coffee</span>
                          </h3>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setShowMacinatoMoka(false)}
                              className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 transform ${
                                !showMacinatoMoka 
                                  ? 'bg-terracotta text-white scale-105' 
                                  : 'bg-heritageBlack/10 text-heritageBlack hover:bg-heritageBlack/20 hover:scale-105'
                              }`}
                            >
                              Beans
                            </button>
                            <button
                              onClick={() => setShowMacinatoMoka(true)}
                              className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 transform ${
                                showMacinatoMoka 
                                  ? 'bg-terracotta text-white scale-105' 
                                  : 'bg-heritageBlack/10 text-heritageBlack hover:bg-heritageBlack/20 hover:scale-105'
                              }`}
                            >
                              Macinato Moka
                            </button>
                          </div>
                        </div>
                      </div>
                      <ProductGrid
                        products={showMacinatoMoka ? MACINATO_MOKA_250G : BEANS_250G}
                        onAddToCart={() => {}}
                        onSelectProduct={(product) => setSelectedProduct(product)}
                      />
                    </div>

                    <div className="mt-14 md:mt-16">
                      <div className="mb-10 md:mb-12 pb-6 border-b border-heritageBlack/10">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black italic tracking-tight text-heritageBlack">
                          250g <span className="text-terracotta">Aluminium Moka</span>
                        </h3>
                      </div>
                      <ProductGrid
                        products={ALUMINIUM_MOKA_250G}
                        onAddToCart={() => {}}
                        onSelectProduct={(product) => setSelectedProduct(product)}
                      />
                    </div>

                                      </div>
                </section>

                <Suspense fallback={<LoadingFallback />}>
                  <StandardOfExcellence />
                </Suspense>
              </div>
            </>
          } />
          <Route path="/about" element={
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          } />
        </Routes>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <BalticsB2BSection />
      </Suspense>
      <Footer />

      {selectedProduct && (
        <Suspense fallback={<LoadingFallback />}>
          <SingleProductView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={() => {}}
          />
        </Suspense>
      )}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <MainContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
