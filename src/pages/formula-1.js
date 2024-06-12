import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import F1Globe from '@components/F1Globe';
import  {f1Data_2024, f1Data_2024_refernces}  from 'src/data/f1_2024_data';
import  f1Data_2025  from 'src/data/f1_2024_data';
import References from '@components/References';

export default function Formula1() {
  const [f1Year, setf1Year] = useState(2024)
  const [data,setData] = useState(f1Data_2024)
  // function handleChange(){
  //   setf1Year(2025)
  //   setData(f1Data_2025)
  // }
  return (
    <Layout>
      <Head>
        <title>Map of Formula 1 Races in 2024</title>
        <meta name="description" content="This is a 3d map that showcases the locations of all the F1/Formula 1 races in 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of F1 Races in {f1Year}</h1>
          {/* <button onClick={handleChange}>See 2025</button> */}
            {/* {f1Year > 2024? <F1Globe year={2025}></F1Globe>:<F1Globe year={2024}></F1Globe>} */}
            
            <F1Globe year={2024} data={data}></F1Globe>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>References and Credits</h2>
          <References referenceData={f1Data_2024_refernces} />
        </Container>
      </Section>
    </Layout>
  )
}
