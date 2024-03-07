import React, { ElementType } from 'react';
import clsx from 'clsx';
import style from './Text.module.css';
import type { TextProps } from '../types';
import { PolymorphicRef } from '../../../utils';

export const Text = React.forwardRef(
  <C extends ElementType = 'p'>({ className, as, variant, children, spacing = 'none', bold, ...rest }: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const Element = as || 'p';
    const top = ['top', 'both'].includes(spacing);
    const bottom = ['bottom', 'both'].includes(spacing);

    return (
      <Element
        ref={ref}
        className={clsx(className, style.text, style[bold ? 'bold' : 'regular'], {
          [style.spacingTop]: top,
          [style.spacingBottom]: bottom,
          [style[`${variant}`]]: variant,
        })}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Text.displayName = 'Text';
