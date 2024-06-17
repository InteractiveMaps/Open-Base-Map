import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import F1Globe from '@components/F1Globe';
import  {f1Data_2025, f1Data_2025_references}  from 'src/data/f1_2025_data';
import References from '@components/References';
import F1InfoTable from '@components/InfoTables/F1InfoTable';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Formula1() {
  const [f1Year, setf1Year] = useState(2025)
  const [data,setData] = useState(f1Data_2025)
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen(){
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Head>
        <title>Map of Formula 1 Races in 2025</title>
        <meta name="description" content="This is a 3d map that showcases the locations of all the F1/Formula 1 races in 2025" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of F1 Races in {f1Year}</h1>
          <F1Globe year={2025} data={data}></F1Globe>
        </Container>
      </Section>
      <Section>
        <Container>
        <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", justifyContent:"space-between"}}>
              <h2>View all F1 Races in 2025</h2>
              {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?<F1InfoTable tableData={f1Data_2025}></F1InfoTable>:<></>}
          <h2>References and Credits</h2>
          <References referenceData={f1Data_2025_references} />
        </Container>
      </Section>
    </Layout>
  )
}
