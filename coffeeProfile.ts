
import { SensoryProfile } from './types';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export const computeIntensity = (profile: SensoryProfile) => {
  const bitterness = clamp(profile.bitterness, 0, 100);
  const acidity = clamp(profile.acidity, 0, 100);
  const sweetness = clamp(profile.sweetness, 0, 100);

  // Calculate intensity based on bitterness and inverse of sweetness
  const weighted = bitterness * 0.6 + (100 - sweetness) * 0.3 + acidity * 0.1;
  return clamp(Math.round(weighted / 10), 1, 10);
};

export const getPreviewText = (description: string) => {
  const trimmed = (description || '').trim();
  if (!trimmed) return '';

  const firstSentence = trimmed.split(/(?<=[.!?])\s/)[0];
  return firstSentence || trimmed;
};
