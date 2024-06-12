import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import BaseMapLegend from '@components/Legends/BaseMapLegend';
import Switch from "react-switch";

import styles from '@styles/Home.module.scss';
import { bases, base_references } from '../data/data';
import { useState } from 'react';
import BaseInfoTable from '@components/InfoTables/BaseInfoTable';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import References from '@components/References';

export default function Home() {
  const [data, setData] = useState(bases)
  const [isMarker, setIsMarker] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  function handleChange(){
    setIsMarker(!isMarker)
  }
  function handleOpen(){
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Head>
        <title>Interactive Maps</title>
        <meta name="description" content="Open source Interactive Maps to showcase data in a cool way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Overseas Military Bases</h1>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <BaseMapLegend/>
            <div style={{display: "flex", flexDirection:"row", gap:"1em", alignItems:"center"}}>
              <span>Toggle Markers?</span>
              <Switch onChange={handleChange} checked={isMarker}/>
            </div>
          </div>
          <br></br>
          <Map width="800" height="600" markerToggle={isMarker} ></Map>
        </Container>
      </Section>
      <Section>
       
        <Container>
          <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", gap:"6rem"}}>
            <h2>View Overseas Bases</h2>
            {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?data.map((base) => {
            return(
              <BaseInfoTable country={base.country} tableData={base.baseLocations} key={base.country}></BaseInfoTable>
            )
          }):<></>}
          <br/>
          <div>
            <h2>Reference and Credits</h2>
            <References referenceData={base_references}/>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
