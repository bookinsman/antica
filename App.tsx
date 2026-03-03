
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import EditorialSection from './components/EditorialSection';
import SingleProductView from './components/SingleProductView';
import AnnouncementBar from './components/AnnouncementBar';
import Marquee from './components/Marquee';
import WoodRoastingSection from './components/WoodRoastingSection';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { Product } from './types';
import { PRODUCTS } from './constants';

const MainContent = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white bg-paper overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Marquee text={t('tickerText')} />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-heritageBlack/10">
          <Routes>
            <Route path="/" element={
              <>
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
                  <ProductGrid 
                    products={PRODUCTS} 
                    onAddToCart={() => {}} 
                    onSelectProduct={setSelectedProduct} 
                  />
                </section>
                <WoodRoastingSection />
                <EditorialSection />
              </>
            } />
          </Routes>
        </div>
      </main>

      <Footer />
      
      {selectedProduct && (
        <SingleProductView 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={() => {}}
        />
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
