
import React from 'react';

const EditorialSection: React.FC = () => {
  return (
    <section id="stories" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-video overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1497933321021-949f224971c7?auto=format&fit=crop&q=80&w=1200" 
               alt="Roastery Detail"
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute top-8 left-8 bg-paper p-4 border border-heritageBlack/10">
                <span className="text-xs uppercase tracking-widest font-bold">Volume 14. II</span>
             </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6 leading-tight">
            The tactile beauty of <br /> slow-roasting.
          </h2>
          <p className="text-lg text-heritageBlack/70 leading-relaxed mb-8">
            Our process is a deliberate rejection of industrial haste. Every batch is overseen by master roasters who listen for the distinct "first crack" and watch for the subtle shift in hue that signals perfection.
          </p>
          <div className="space-y-4">
             <div className="flex items-start space-x-4 border-l-2 border-terracotta pl-4 py-2">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Sustainable Sourcing</h4>
                  <p className="text-sm font-light text-heritageBlack/60">We partner directly with farmers in 12 countries to ensure equity and quality.</p>
                </div>
             </div>
             <div className="flex items-start space-x-4 border-l-2 border-sage pl-4 py-2">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Compostable Materials</h4>
                  <p className="text-sm font-light text-heritageBlack/60">Our packaging is designed to return to the earth without leaving a trace.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-1 grid-border border border-heritageBlack/10">
         {[
           { title: "The Origin of Arabica", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400" },
           { title: "Brewing the Perfect Chemex", img: "https://images.unsplash.com/photo-1544787210-2211d44b505b?auto=format&fit=crop&w=400" },
           { title: "Trieste's Coffee History", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400" }
         ].map((story, i) => (
           <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src={story.img} alt={story.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-heritageBlack/60 to-transparent flex items-end p-8">
                 <h3 className="text-white font-serif text-xl italic leading-tight">{story.title}</h3>
              </div>
           </div>
         ))}
      </div>
    </section>
  );
};

export default EditorialSection;
