
export interface SensoryProfile {
  intensity: number; // 1-10
  body: number; // 1-10
  acidity: number; // 1-10
  crema: number; // 1-10
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  notes: string[];
  roast: string;
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
