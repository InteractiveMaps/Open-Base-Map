import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Switch from "react-switch";
import { mountain_data } from 'src/data/mountaindata';
import HeightMapLegend from '@components/Legends/HeightMapLegend';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import MountainMap from '@components/MountainMap';
import Globe from '@components/Globe-deck';

export default function Mountain() {
  const [is3D, setIs3D] = useState(false)
  function handleChange(){
    setIs3D(!is3D)
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
          <h1 className={styles.title}>Map of Highest Points of Each Country</h1>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
          <HeightMapLegend/>
          <div style={{display: "flex", flexDirection:"row", gap:"1em", alignItems:"center"}}>
              <span>Toggle 3D? (Experimental)</span>
              <Switch onChange={handleChange} checked={is3D}/>
            </div>
          </div>
          <br></br>
          {is3D ? <div style={{height:"60vh", width:"100%", position:"relative"}}><Globe data_src={mountain_data}></Globe></div> : <MountainMap data_src={mountain_data} width="800" height="600"></MountainMap>}
        </Container>
      </Section>
    </Layout>
  )
}
