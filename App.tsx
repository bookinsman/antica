
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
                <section id="shop" className="py-12 md:py-32 border-b border-heritageBlack/10">
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                    <div className="max-w-xl">
                      <h2 className="text-6xl md:text-8xl font-serif font-black italic mb-8 tracking-tighter">{t('seasonalRoasts')}</h2>
                      <p className="text-xl md:text-3xl font-serif italic text-heritageBlack/40 leading-tight">
                        Caffè ATT – autentiški mišiniai iš Triesto, gimstantys meistrų rankose virš buko ugnies.
                      </p>
                    </div>
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
