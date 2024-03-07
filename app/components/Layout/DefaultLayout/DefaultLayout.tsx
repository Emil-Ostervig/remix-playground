import React from 'react';
import { usePage } from '~/context/PageContext/PageContext';
import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
import { DynamicBlocks } from '../../modules/DynamicBlocks/DynamicBlocks';
import styles from './DefaultLayout.module.css';

type Props = {};
export const DefaultLayout = (props: Props) => {
  const page = usePage();
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <main>
        <DynamicBlocks elements={page?.modules ?? []} />
      </main>
      <Footer />
    </div>
  );
};
