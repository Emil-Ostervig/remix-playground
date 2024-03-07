import type { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

export const textVariants = [
  'display1',
  'display2',
  'display3',
  'display4',
  'display5',
  'display6',
  'bodySmall',
  'bodyMedium',
  'bodyLarge',
  'labelSmall',
  'labelMedium',
  'labelLarge',
  'linkSmall',
  'linkMedium',
  'linkLarge',
] as const;

export const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type TextVariant = (typeof textVariants)[number];
export type HeadingLevel = (typeof headingLevels)[number];

export type ComponentSpacing = 'top' | 'bottom' | 'both' | 'none';

export type BaseTextProps = {
  variant?: TextVariant;
  spacing?: ComponentSpacing;
  bold?: boolean;
};

type TextExtend<T extends ElementType> = BaseTextProps & {
  as?: T;
};

export type TextProps<T extends ElementType> = PropsWithChildren<TextExtend<T>> & ComponentPropsWithoutRef<T>;

export type HeadlineExtend<T extends HeadingLevel> = BaseTextProps & {
  as?: T;
  lineBreak?: boolean;
};

export type HeadlineProps<T extends HeadingLevel> = PropsWithChildren<HeadlineExtend<T>> & ComponentPropsWithoutRef<T>;
