import React from 'react';

const StandardOfExcellence: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black italic mb-6 tracking-tighter text-heritageBlack">
            The Standard of Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-black mb-4 text-terracotta border-l-2 border-terracotta pl-4">
                Global Sourcing
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-heritageBlack/70">
                The company crafts its premium blends using exclusively selected beans from world's most renowned coffee regions: 
                South America, Central America, Africa, and Southeast Asia.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-black mb-4 text-terracotta border-l-2 border-terracotta pl-4">
                The NY2 Quality Benchmark
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-heritageBlack/70">
                Every origin is strictly classified as NY2, the highest commercial grade available, ensuring a nearly flawless 
                bean selection. To guarantee a perfect, consistent extraction, the company utilizes only large-caliber beans 
                with a professional screen size of 17 to 18.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardOfExcellence;
