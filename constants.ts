
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wildfire Roast',
    category: 'WOOD-FIRED SELECTION',
    price: 32,
    notes: ['smoky maple', 'dark cherry', 'oak'],
    roast: 'MEDIUM-DARK WOOD FIRE',
    origin: 'Huehuetenango, Guatemala',
    process: 'Sun-dried on Raised Beds',
    description: 'Slow-roasted over authentic oak and hickory wood, this batch captures a primal smokiness balanced by the natural sweetness of high-altitude Guatemalan beans.',
    rating: 4.9,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    accentColor: 'bg-terracotta',
    limited: true,
    profile: { intensity: 8, body: 5, acidity: 2, crema: 4 }
  },
  {
    id: '2',
    name: 'Ancient Gold',
    category: 'ETHEREAL BLEND',
    price: 28,
    notes: ['honeycomb', 'jasmine', 'apricot'],
    roast: 'LIGHT ARTISAN ROAST',
    origin: 'Sidamo, Ethiopia',
    process: 'Washed, Traditional Fermentation',
    description: 'A tribute to the birthplace of coffee. This light roast brings forward delicate floral notes and a bright, honey-like finish.',
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    accentColor: 'bg-mustard',
    profile: { intensity: 4, body: 2, acidity: 5, crema: 2 }
  },
  {
    id: '3',
    name: 'Black Velvet',
    category: 'SIGNATURE ESPRESSO',
    price: 24,
    notes: ['dark chocolate', 'molasses', 'walnut'],
    roast: 'DARK VELVET ROAST',
    origin: 'Minas Gerais, Brazil',
    process: 'Natural Pulped',
    description: 'Our densest, most chocolatey offering. Designed specifically for the espresso enthusiast who seeks a heavy body and thick crema.',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    accentColor: 'bg-heritageBlack',
    profile: { intensity: 9, body: 5, acidity: 1, crema: 5 }
  },
  {
    id: '4',
    name: 'Terra Nova',
    category: 'SINGLE FARM ESTATE',
    price: 29,
    notes: ['pomegranate', 'blood orange', 'tea-like'],
    roast: 'MEDIUM LIGHT ROAST',
    origin: 'Jaén, Peru',
    process: 'Anaerobic Natural',
    description: 'Experimental processing yields a complex, wine-like acidity. Terra Nova is for the curious taster, offering shifting notes of citrus.',
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    accentColor: 'bg-sage',
    profile: { intensity: 5, body: 3, acidity: 4, crema: 3 }
  }
];
