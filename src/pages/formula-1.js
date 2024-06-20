import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import F1Globe from '@components/F1Globe';
import  {f1Data_2024, f1Data_2024_references}  from 'src/data/f1_2024_data';
import References from '@components/References';
import F1InfoTable from '@components/InfoTables/F1InfoTable';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Formula1() {
  const [f1Year, setf1Year] = useState(2024)
  const [data,setData] = useState(f1Data_2024)
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen(){
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Head>
      <title>Formula 1 Races 2024 | Interactive Maps</title>
        <meta name="description" content="Explore the complete map of Formula 1 races for the 2024 season. Discover race locations, dates,  and event information." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/formula-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/formula-1"></meta>
        <meta property="og:title" content="Formula 1 Races 2024 | Interactive Maps"></meta>
        <meta property="og:description" content="Explore the complete map of Formula 1 races for the 2024 season. Discover race locations, dates,  and event information." />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of F1 Races in {f1Year}</h1>
            <F1Globe year={2024} data={data}></F1Globe>
        </Container>
      </Section>
      <Section>
        <Container>
        <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", justifyContent:"space-between"}}>
              <h2>View all F1 Races in 2024</h2>
              {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?<F1InfoTable tableData={f1Data_2024}></F1InfoTable>:<></>}
          <h2>References and Credits</h2>
          <References referenceData={f1Data_2024_references} />
        </Container>
      </Section>
    </Layout>
  )
}
