import React from 'react'
import { Logo } from '../Logo/Logo';
import { Container } from '../modules/Container/Container';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';
type HeaderProps = {}

export const Header = (props: HeaderProps) => {
  return (
      <header className={styles.header}>
          <Container gutter spacing={false} className={styles.headerContainer}>
              <Logo />
              <Navigation />
          </Container>  
        </header>
  )
}