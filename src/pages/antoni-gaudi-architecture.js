import Head from "next/head";
import Layout from "@components/Layout";
import Section from "@components/Section";
import References from '@components/References';
import Container from "@components/Container";
import AntonioGaudi from "@components/AntonioGaudi";
import { gaudi_architecture, gaudi_references } from "src/data/gaudi";

import styles from "@styles/Home.module.scss";

export default function AntonioGaudiArchitecture() {
  return (
    <Layout>
      <Head>
        <title>Map of Antoni Gaudi's Architecture | Interactive Maps</title>
        <meta
          name="description"
          content="Explore all of Catalan architect Antoni Gaudi's works located around Spain and marvel its sui generis style"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://interactivemaps.vercel.app/antoni-gaudi-architecture"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://interactivemaps.vercel.app/antoni-gaudi-architecture"
        ></meta>
        <meta
          property="og:title"
          content="Map of Antoni Gaudi's Architecture  | Interactive Maps"
        ></meta>
        <meta
          property="og:description"
          content="Explore all of Catalan architect Antoni Gaudi's works located around Spain and marvel its sui generis style"
        />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Antoni Gaudi's Architecture</h1>
          <br></br>
          <AntonioGaudi
            data_src={gaudi_architecture}
            width="600"
            height="400"
          ></AntonioGaudi>
        </Container>
      </Section>
      <Section>
        <Container>
          <h3>References and Credits</h3>
          <References referenceData={gaudi_references} />
        </Container>
      </Section>
    </Layout>
  );
}
