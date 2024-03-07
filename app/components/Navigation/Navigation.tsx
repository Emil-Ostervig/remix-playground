import { Link } from '@remix-run/react';
import React from 'react';
import { useFrame } from '~/context/FrameContext/FrameContext';
import styles from './Navigation.module.css';
type NavigationProps = {};

export const Navigation = (props: NavigationProps) => {
  const { mainMenu = [] } = useFrame() ?? {};
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <Link to="/" className={styles.navigationLink}>
            Home
          </Link>
        </li>
        {mainMenu.map((item, index) => (
          <li key={index} className={styles.navigationItem}>
            <Link className={styles.navigationLink} to={item.node?.url ?? ''}>
              {item?.node?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
