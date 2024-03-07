import clsx from 'clsx';
import React from 'react';
import { PolymorphicRef } from '../../../utils';
import { Text } from '../index';
import { HeadingLevel, HeadlineProps, TextVariant } from '../types';
import style from './Headline.module.css';

const levelToDisplayMap: {
  [key in HeadingLevel]: Extract<TextVariant, 'display1' | 'display2' | 'display3' | 'display4' | 'display5' | 'display6'>;
} = {
  h1: 'display1',
  h2: 'display2',
  h3: 'display3',
  h4: 'display4',
  h5: 'display5',
  h6: 'display6',
};

export const Headline = React.forwardRef(
  <C extends HeadingLevel>({ className, as = 'h2', variant, children, lineBreak, ...rest }: HeadlineProps<HeadingLevel>, ref?: PolymorphicRef<C>) => {
    const textVariant: TextVariant = variant || levelToDisplayMap[as];

    return (
      <Text ref={ref} as={as} className={clsx(lineBreak ? style.includeBreaks : '', className)} {...rest} variant={textVariant}>
        {children}
      </Text>
    );
  }
);

Headline.displayName = 'Headline';
