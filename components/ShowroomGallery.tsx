import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const ShowroomGallery: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: 'https://i.postimg.cc/dVPbFzb4/1000005211_1.jpg',
      alt: 'showroomImage1'
    },
    {
      url: 'https://i.postimg.cc/P5sgHgGt/1000005212_1.jpg',
      alt: 'showroomImage2'
    },
    {
      url: 'https://i.postimg.cc/t4QKbLKw/1000005213_1.jpg',
      alt: 'showroomImage3'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-sage mb-3">
            {t('showroomKicker')}
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-black italic text-heritageBlack tracking-tight mb-4">
            {t('showroomTitle')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t('showroomDescription')}
          </p>
        </div>

        {/* Mobile Carousel - Shows only on mobile */}
        <div className="block md:hidden relative">
          <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
            {/* Portrait aspect ratio for mobile */}
            <div className="relative aspect-[3/4]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={t(image.alt)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows for Mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 group z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5 text-heritageBlack group-hover:text-terracotta transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 group z-10"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5 text-heritageBlack group-hover:text-terracotta transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Counter for Mobile */}
            <div className="absolute top-4 right-4 bg-heritageBlack/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
              {currentSlide + 1} / {images.length}
            </div>
          </div>

          {/* Dot Indicators for Mobile */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-terracotta'
                    : 'w-2 h-2 bg-gray-300 hover:bg-sage'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Shows 3 images side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Portrait aspect ratio for desktop */}
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={image.url}
                  alt={t(image.alt)}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowroomGallery;
