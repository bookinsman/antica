
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nessun Dorma',
    category: 'SIGNATURE BLEND',
    price: 24,
    notes: ['hazelnut', 'cocoa', 'floral', 'citrus'],
    roast: 'MEDIUM ROAST',
    origin: 'Trieste, Italy',
    process: 'Traditional wood-fired roasting',
    description: 'A sophisticated blend with a sweet, soft nut flavor that is enhanced by chocolate and floral notes, with a hint of citrus. These scents and flavors meld together, producing a perfect balance between sweet, bitter and acid, for a unique and all-embracing sensory experience.',
    rating: 4.8,
    reviewCount: 156,
    image: 'https://i.postimg.cc/3rV1H6sG/Nessun_Dorma.png',
    accentColor: 'bg-terracotta',
    limited: false,
    profile: { intensity: 8, body: 8, acidity: 6, crema: 9 }
  },
  {
    id: '2',
    name: 'Risvegli',
    category: 'INTENSE BLEND',
    price: 26,
    notes: ['cocoa', 'hazelnut', 'jasmine'],
    roast: 'MEDIUM-DARK ROAST',
    origin: 'Trieste, Italy',
    process: 'Traditional wood-fired roasting',
    description: 'A blend with a rich and embracing aroma, whose intense notes of cocoa and hazelnut blend gently with the delicate scent of jasmine, giving life to a coffee that arouses senses as a deep and sweet emotion.',
    rating: 4.9,
    reviewCount: 203,
    image: 'https://i.postimg.cc/FFWy9c3d/Risvegli.png',
    accentColor: 'bg-heritageBlack',
    limited: false,
    profile: { intensity: 9, body: 9, acidity: 5, crema: 9 }
  },
  {
    id: '3',
    name: 'Buonissimo',
    category: 'BOLD BLEND',
    price: 28,
    notes: ['cocoa', 'floral', 'vanilla'],
    roast: 'DARK ROAST',
    origin: 'Trieste, Italy',
    process: 'Traditional wood-fired roasting',
    description: 'A rich and enveloping blend whose powerful cocoa aroma melds in an embrace with delicate floral notes and vanilla sweetness, generating a coffee that is creamy, wonderfully delicious and persistent, which makes it the perfect choice for those who enjoy both cappuccino and macchiato as well as espresso.',
    rating: 5.0,
    reviewCount: 267,
    image: 'https://i.postimg.cc/v8khdjJL/Buonissimo.png',
    accentColor: 'bg-mustard',
    limited: false,
    profile: { intensity: 10, body: 10, acidity: 4, crema: 10 }
  },
  {
    id: '4',
    name: 'Organic BIO',
    category: 'ORGANIC',
    price: 30,
    notes: ['hazelnut', 'chocolate', 'structured acidity'],
    roast: 'MEDIUM ROAST',
    origin: 'Certified organic farms',
    process: 'Organic-certified sourcing',
    description: 'Our organic coffee is the result of a meticulous selection, which draws exclusively from sustainable farms, and is characterized by an organoleptic array that ranges from hazelnut to cocoa notes, reaching a structured acidity typical of the most prestigious coffees.',
    rating: 4.6,
    reviewCount: 124,
    image: 'https://i.postimg.cc/KcwfyV67/Organic_BIO.png',
    accentColor: 'bg-sage',
    limited: false,
    profile: { intensity: 7, body: 6, acidity: 7, crema: 6 }
  },
  {
    id: '5',
    name: 'Nabucco',
    category: '100% ARABICA',
    price: 32,
    notes: ['cocoa', 'vanilla'],
    roast: 'MEDIUM-DARK ROAST',
    origin: 'Selection of 100% Arabica',
    process: 'Traditional wood-fired roasting',
    description: 'A 100% Arabica blend, whose aroma is characterized by intense cocoa notes, effused from a base that finds in the sweetness of vanilla its most distinctive characteristic. The ideal for those looking for both an intense aroma and a sweet flavor.',
    rating: 4.7,
    reviewCount: 189,
    image: 'https://i.postimg.cc/qBSwdYPn/Nabucco.png',
    accentColor: 'bg-terracotta',
    limited: false,
    profile: { intensity: 10, body: 9, acidity: 3, crema: 9 }
  },
  {
    id: '6',
    name: 'Decaffeinate',
    category: 'DECAFFEINATED',
    price: 27,
    notes: ['chocolate', 'vanilla', 'floral'],
    roast: 'MEDIUM ROAST',
    origin: 'Trieste, Italy',
    process: 'Decaffeination process',
    description: 'A blend freed from caffeine but not from a wonderful, round and velvety flavor, which combines the intensity of cocoa with the sweetness of vanilla and the softness of floral notes, gifting your palate with an utter sensory experience that you wouldn’t expect from a Decaffeinated.',
    rating: 4.4,
    reviewCount: 98,
    image: 'https://i.postimg.cc/bYWgjM76/Decaffeinate.png',
    accentColor: 'bg-mustard',
    limited: false,
    profile: { intensity: 7, body: 7, acidity: 5, crema: 8 }
  },
  {
    id: '7',
    name: 'Figaro',
    category: 'CHARISMATIC BLEND',
    price: 29,
    notes: ['cocoa', 'spices'],
    roast: 'DARK ROAST',
    origin: 'Trieste, Italy',
    process: 'Traditional wood-fired roasting',
    description: 'A coffee that is characterized by a round and enveloping taste, where the body and intense cocoa notes melt in an embrace with the delicateness of citrus scent and the tenderness of flower fragrance, creating an harmonious union of aromas. A blend for those who love to alternate deep emotions with moments of sweet calm, thus balancing their inner self.',
    rating: 4.8,
    reviewCount: 145,
    image: 'https://i.postimg.cc/hPmr4snV/Figaro.png',
    accentColor: 'bg-heritageBlack',
    limited: false,
    profile: { intensity: 10, body: 10, acidity: 2, crema: 9 }
  },
  {
    id: '8',
    name: 'Rigoletto',
    category: 'HARMONIOUS BLEND',
    price: 25,
    notes: ['cocoa', 'citrus', 'floral'],
    roast: 'MEDIUM ROAST',
    origin: 'Trieste, Italy',
    process: 'Traditional wood-fired roasting',
    description: 'A coffee with a strong and bold personality, where the prodigious cocoa aroma, enlivened by spicy notes, awakens the sences with the power of a strong emotion. A compelling blend, with a rich and lingering taste, for those who love intensity in its purest form.',
    rating: 4.6,
    reviewCount: 167,
    image: 'https://i.postimg.cc/wTNVx2zc/Rigoletto.png',
    accentColor: 'bg-sage',
    limited: false,
    profile: { intensity: 8, body: 9, acidity: 6, crema: 9 }
  }
];

export const BEANS_250G: Product[] = [
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Organic BIO');
    if (!base) throw new Error('Missing base product: Organic BIO');
    return {
      ...base,
      id: '250-4',
      category: 'BEANS • 250g',
      image: 'https://i.postimg.cc/kg4cYDp7/BIOLOGICO.png',
      name: 'BIOLOGICO'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Buonissimo');
    if (!base) throw new Error('Missing base product: Buonissimo');
    return {
      ...base,
      id: '250-3',
      category: 'BEANS • 250g',
      image: 'https://i.postimg.cc/25LxmMYW/BUONISSIMO.png',
      name: 'BUONISSIMO'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Nessun Dorma');
    if (!base) throw new Error('Missing base product: Nessun Dorma');
    return {
      ...base,
      id: '250-1',
      category: 'BEANS • 250g',
      image: 'https://i.postimg.cc/V6yWNgsH/NESSUN_DORMA.png',
      name: 'NESSUN DORMA'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Risvegli');
    if (!base) throw new Error('Missing base product: Risvegli');
    return {
      ...base,
      id: '250-2',
      category: 'BEANS • 250g',
      image: 'https://i.postimg.cc/LXzBgPnq/RISVEGLI.png',
      name: 'RISVEGLI'
    };
  })()
];

export const CAPSULES: Product[] = [
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Nessun Dorma');
    if (!base) throw new Error('Missing base product: Nessun Dorma');
    return {
      ...base,
      id: 'cap-1',
      category: 'CAPSULES',
      image: 'https://i.postimg.cc/50Shf6q0/NESSUN_DORMA_CAPSULE.png',
      name: 'NESSUN DORMA'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Organic BIO');
    if (!base) throw new Error('Missing base product: Organic BIO');
    return {
      ...base,
      id: 'cap-2',
      category: 'CAPSULES',
      image: 'https://i.postimg.cc/Vv3BTFrz/BIOLOGICO_CAPSULE.png',
      name: 'BIOLOGICO'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Decaffeinate');
    if (!base) throw new Error('Missing base product: Decaffeinate');
    return {
      ...base,
      id: 'cap-3',
      category: 'CAPSULES',
      image: 'https://i.postimg.cc/DyXcGRHs/DECAFFEINATO_CAPSULE.png',
      name: 'DECAFFEINATO'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Risvegli');
    if (!base) throw new Error('Missing base product: Risvegli');
    return {
      ...base,
      id: 'cap-4',
      category: 'CAPSULES',
      image: 'https://i.postimg.cc/2SdFchCs/RISVEGLI_CAPSULE.png',
      name: 'RISVEGLI'
    };
  })()
];

export const MACINATO_MOKA_250G: Product[] = [
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Organic BIO');
    if (!base) throw new Error('Missing base product: Organic BIO');
    return {
      ...base,
      id: 'moka-4',
      category: 'MACINATO MOKA • 250g',
      image: 'https://i.postimg.cc/kg4cYDp7/BIOLOGICO.png',
      name: 'BIOLOGICO'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Nessun Dorma');
    if (!base) throw new Error('Missing base product: Nessun Dorma');
    return {
      ...base,
      id: 'moka-1',
      category: 'MACINATO MOKA • 250g',
      image: 'https://i.postimg.cc/V6yWNgsH/NESSUN_DORMA.png',
      name: 'NESSUN DORMA'
    };
  })(),
  (() => {
    const base = PRODUCTS.find((p) => p.name === 'Risvegli');
    if (!base) throw new Error('Missing base product: Risvegli');
    return {
      ...base,
      id: 'moka-2',
      category: 'MACINATO MOKA • 250g',
      image: 'https://i.postimg.cc/LXzBgPnq/RISVEGLI.png',
      name: 'RISVEGLI'
    };
  })()
];
