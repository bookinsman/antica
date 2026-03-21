
export interface SensoryProfile {
  bitterness: number; // 0-100%
  acidity: number; // 0-100%
  sweetness: number; // 0-100%
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  notes: string[];
  roast: string;
  beanType: string;
  intensityNumber: number;
  description: string;
  origin: string;
  process: string;
  rating: number;
  reviewCount: number;
  image: string;
  accentColor: string;
  limited?: boolean;
  profile: SensoryProfile;
}

// Added missing CartItem interface used in App.tsx
export interface CartItem extends Product {
  quantity: number;
}

export type Language = 'LT' | 'EN' | 'RU';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}
