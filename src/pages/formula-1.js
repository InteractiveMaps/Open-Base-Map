import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import F1Globe from '@components/F1Globe';

export default function Formula1() {
  return (
    <Layout>
      <Head>
        <title>Map of Formula 1 Races in 2024</title>
        <meta name="description" content="This is a 3d map that showcases the locations of all the F1/Formula 1 races in 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of F1 Races</h1>
            <F1Globe></F1Globe>
        </Container>
      </Section>
    </Layout>
  )
}
