import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import ChloroplethMap from '@components/ChloroplethMap';
import WW1Map from '@components/WW1Map';
import BaseMapLegend from '@components/Legends/BaseMapLegend';
import Switch from "react-switch";

import styles from '@styles/Home.module.scss';
import { ww1_battles, ww1_references } from 'src/data/ww1';
import { useState } from 'react';
import BaseInfoTable from '@components/InfoTables/BaseInfoTable';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import References from '@components/References';

export default function Overseas_Military_Bases() {
//   const [data, setData] = useState(bases)
  const [isMarker, setIsMarker] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
//   function handleChange(){
//     setIsMarker(!isMarker)
//   }
//   function handleOpen(){
//     setIsOpen(!isOpen)
//   }
  return (
    <Layout>
      <Head>
        <title>World Population Density | Interactive Maps</title>
        <meta name="description" content="Explore the population density of countries across the world!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/population-density" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/population-density"></meta>
        <meta property="og:title" content="World Population Density | Interactive Maps"></meta>
        <meta property="og:description" content="Explore the population density of countries across the world!" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Population Density</h1>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
          </div>
          <br></br>
          <div><ChloroplethMap /></div>
          
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <h2>References and Credits</h2>
          <References referenceData={ww1_references}/>
        </Container>
      </Section> */}
    </Layout>
  )
}
