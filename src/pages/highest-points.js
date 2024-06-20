import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Switch from "react-switch";
import { mountain_data, mountain_data_references } from 'src/data/mountaindata';
import HeightMapLegend from '@components/Legends/HeightMapLegend';
import MountainInfoTable from '@components/InfoTables/MountainInfoTable';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import MountainMap from '@components/MountainMap';
import Globe from '@components/Globe-deck';
import References from '@components/References';

export default function Mountain() {
  const [is3D, setIs3D] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  function handleChange(){
    setIs3D(!is3D)
  }
  function handleOpen(){
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Head>
        <title>Highest Points of Each Country | Interactive Maps</title>
        <meta name="description" content="Explore the highest points in every country with our detailed map. Discover elevation data and learn about the world's most prominent peaks." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/highest-points" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/highest-points"></meta>
        <meta property="og:title" content="Highest Points of Each Country | Interactive Maps"></meta>
        <meta property="og:description" content="Explore the highest points in every country with our detailed map. Discover elevation data and learn about the world's most prominent peaks." />
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
      <Section>
        <Container>
          <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", justifyContent:"space-between"}}>
            <h2>View Highest Points</h2>
            {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?<MountainInfoTable tableData={mountain_data}></MountainInfoTable>:<></>}
          
          <br></br>
          <h2>References and Credits</h2>
          <References referenceData={mountain_data_references} />
        </Container>
      </Section>
    </Layout>
  )
}
