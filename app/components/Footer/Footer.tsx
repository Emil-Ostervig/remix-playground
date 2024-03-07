import React from 'react'
import { Container } from '../modules/Container/Container'
import styles from './Footer.module.css';
import { Text } from '../Typography/Text';

export const Footer = () => {
    return (
      <footer className={styles.footer}>
            <Container gutter>
                <div className={styles.footerContent}>
                    <Text variant="display4">Make your own damn footer</Text>
                </div>
        </Container>
    </footer>
  )
}