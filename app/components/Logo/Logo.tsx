import { Link } from '@remix-run/react';
import React from 'react'
import styles from './Logo.module.css';

export const Logo = () => {
    return (
      <Link to="/">
            <img src="/logo.png" alt="Logo" width="100" height="50" loading="eager" className={styles.logo} />
      </Link>
  )
}

