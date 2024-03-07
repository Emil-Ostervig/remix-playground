import { Link } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react'
import styles from './CallToAction.module.css';
type Props = React.HtmlHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren<{
    title?: string;
    href?: string;
    size?: 'medium' | 'large';
    target?: string;
}>;

export const CallToAction = (props: Props) => {
    const { href, size = 'medium', children, className, ...rest } = props;
    const shade = 'light';
    return (
      <Link className={clsx(styles.reset, styles.button, styles.center, styles.primary, styles[shade], className)} to={href ?? '/'}  {...rest}>
        {children}
      </Link>
  )
}