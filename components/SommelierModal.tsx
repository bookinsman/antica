
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useLanguage } from '../LanguageContext';

interface SommelierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CoffeeRecommendation {
  title: string;
  coffeeName: string;
  description: string;
}

const SommelierModal: React.FC<SommelierModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [recommendation, setRecommendation] = useState<CoffeeRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mood, setMood] = useState('productive');
  const [time, setTime] = useState('morning');

  const getAIRecommendation = async () => {
    setIsLoading(true);
    try {
      // Create a new GoogleGenAI instance right before making an API call
      // Use process.env.API_KEY directly as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a world-class coffee sommelier for Antica Heritage. 
        A customer is looking for a coffee recommendation. 
        Mood: ${mood}
        Time of day: ${time}
        Based on our current roasts:
        - Wildfire Roast: smoky maple, dark cherry, oak (Wood-fired, intense)
        - Ancient Gold: honeycomb, jasmine, apricot (Floral, light, side-origin Sidamo)
        - Black Velvet: dark chocolate, molasses, walnut (Dark, velvet, heavy body)
        - Terra Nova: pomegranate, blood orange, tea-like (Complex, wine-like acidity)
        
        Provide a 2-sentence sophisticated recommendation that sounds like a high-end lifestyle magazine snippet.
        Output in JSON format with fields "title", "coffeeName", and "description".`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'A catchy title for the recommendation',
              },
              coffeeName: {
                type: Type.STRING,
                description: 'The name of the recommended coffee from the provided list',
              },
              description: {
                type: Type.STRING,
                description: 'A sophisticated 2-sentence description',
              }
            },
            required: ["title", "coffeeName", "description"]
          }
        }
      });

      // Directly access .text property as it is a getter, not a method
      const text = response.text || "{}";
      const data = JSON.parse(text);
      setRecommendation(data);
    } catch (error) {
      console.error("AI Error:", error);
      // Adjusted fallback to use actual products from constants.ts
      setRecommendation({
        title: t('sommelierFallbackTitle'),
        coffeeName: t('sommelierFallbackCoffeeName'),
        description: t('sommelierFallbackDescription')
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-heritageBlack/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-paper w-full max-w-lg overflow-hidden border border-heritageBlack/10 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <div className="p-8 md:p-12">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-heritageBlack/40 hover:text-heritageBlack"
          >
            ✕
          </button>
          
          <h2 className="text-3xl font-serif italic mb-2">{t('sommelierTitle')}</h2>
          <p className="text-sm text-heritageBlack/60 mb-8 font-light leading-relaxed">
            {t('sommelierSubtitle')}
          </p>
          
          {!recommendation ? (
            <div className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold mb-4 block">{t('sommelierMoodLabel')}</label>
                <div className="flex flex-wrap gap-2">
                  {['productive', 'contemplative', 'social', 'restorative'].map(m => (
                    <button 
                      key={m}
                      onClick={() => setMood(m)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border ${mood === m ? 'bg-heritageBlack text-paper border-heritageBlack' : 'border-heritageBlack/10 hover:border-heritageBlack'} transition-all`}
                    >
                      {t(`sommelierMood_${m}`)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold mb-4 block">{t('sommelierTimeLabel')}</label>
                <div className="flex flex-wrap gap-2">
                  {['morning', 'midday', 'evening'].map(timeOption => (
                    <button 
                      key={timeOption}
                      onClick={() => setTime(timeOption)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border ${time === timeOption ? 'bg-heritageBlack text-paper border-heritageBlack' : 'border-heritageBlack/10 hover:border-heritageBlack'} transition-all`}
                    >
                      {t(`sommelierTime_${timeOption}`)}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={getAIRecommendation}
                disabled={isLoading}
                className="w-full bg-terracotta text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-heritageBlack transition-all disabled:opacity-50"
              >
                {isLoading ? t('sommelierLoading') : t('sommelierCta')}
              </button>
            </div>
          ) : (
            <div className="animate-[slideIn_0.5s_ease-out]">
              <div className="border-l-4 border-terracotta pl-6 mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta mb-2 block">
                  {recommendation.title}
                </span>
                <h3 className="text-4xl font-serif font-bold mb-4 leading-none">
                  {recommendation.coffeeName}
                </h3>
                <p className="text-lg font-serif italic text-heritageBlack/70 leading-relaxed">
                  "{recommendation.description}"
                </p>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setRecommendation(null)}
                  className="flex-1 py-4 border border-heritageBlack text-[10px] uppercase tracking-widest font-bold hover:bg-heritageBlack hover:text-white transition-all"
                >
                  {t('sommelierStartOver')}
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 py-4 bg-heritageBlack text-white text-[10px] uppercase tracking-widest font-bold hover:bg-terracotta transition-all"
                >
                  {t('sommelierShopNow')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SommelierModal;
