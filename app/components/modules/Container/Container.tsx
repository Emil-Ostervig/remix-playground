import React from 'react';
import { clsx } from 'clsx';
import styles from './Container.module.css';
type Props = React.PropsWithChildren<{
  fullWidth?: boolean;
  gutter?: boolean;
  spacing?: boolean;
}> &
  React.HTMLAttributes<HTMLElement>;

export const Container = ({ fullWidth = false, gutter = true, spacing = true, className = '', children }: Props) => {
  return (
    <section
      className={clsx(styles.container, className, {
        [styles.fullWidth]: fullWidth,
        [styles.gutter]: gutter,
        [styles.spacing]: spacing,
      })}>
      {children}
    </section>
  );
};
