import type { Sizes } from './types';

export type SizeName = 'Small' | 'Medium' | 'Large';

export const capitalizeSize = (word: Sizes): SizeName => (word.charAt(0).toUpperCase() + word.slice(1)) as SizeName;
