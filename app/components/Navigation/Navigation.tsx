import { Link, NavLink } from '@remix-run/react';
import clsx from 'clsx';
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
          <NavLink to="/" className={({ isActive, isPending }) => clsx(styles.navigationLink, {
            [styles.navigationLinkActive]: isActive,
            [styles.navigationLinkPending]: isPending,
          })}>
            Home
          </NavLink>
        </li>
        {mainMenu.map((item, index) => (
          <li key={index} className={styles.navigationItem}>
            <NavLink to={item.node?.url ?? ''} className={({ isActive, isPending }) => clsx(styles.navigationLink, {
            [styles.navigationLinkActive]: isActive,
            [styles.navigationLinkPending]: isPending,
          })}>
              {item?.node?.title}
            </NavLink>
            <ul className={styles.subnav}>
              {item?.nodes?.map((subItem, subIndex) => (
                <li key={subIndex} className={styles.subnavItem}>
                  <NavLink to={subItem?.node?.url ?? ''} className={({ isActive, isPending }) => clsx(styles.subnavLink, {
                    [styles.subnavLinkActive]: isActive,
                    [styles.subnavLinkPending]: isPending,
                  })}>
                    {subItem?.node?.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
