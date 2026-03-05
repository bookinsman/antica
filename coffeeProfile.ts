
import { SensoryProfile } from './types';

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export const computeIntensity = (profile: SensoryProfile) => {
  const body = clamp(profile.body, 0, 10);
  const crema = clamp(profile.crema, 0, 10);
  const acidity = clamp(profile.acidity, 0, 10);

  const weighted = body * 0.35 + crema * 0.35 + (10 - acidity) * 0.3;
  return clamp(Math.round(weighted), 1, 10);
};

export const getPreviewText = (description: string) => {
  const trimmed = (description || '').trim();
  if (!trimmed) return '';

  const firstSentence = trimmed.split(/(?<=[.!?])\s/)[0];
  return firstSentence || trimmed;
};
