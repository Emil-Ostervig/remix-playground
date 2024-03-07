import React from 'react'
import { Logo } from '../Logo/Logo';
import { Container } from '../modules/Container/Container';
import { Navigation } from '../Navigation/Navigation';
import { NavigationIndicator } from '../NavigationIndicator';
import styles from './Header.module.css';

export const Header = () => {
  return (
      <header className={styles.header}>
          <Container gutter spacing={false} className={styles.headerContainer}>
              <Logo />
              <Navigation />
          </Container>
          <NavigationIndicator />
        </header>
  )
}