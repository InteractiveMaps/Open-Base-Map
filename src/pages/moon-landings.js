import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import Switch from "react-switch";
import { useState } from 'react';
import MoonGlobe from '@components/MoonGlobe';
import MoonMap from '@components/MoonMap';
import MoonMapLegend from '@components/Legends/MoonMapLegend';
import References from '@components/References';
import { moon_landings_references } from 'src/data/moon_landings';
import { moon_landings } from 'src/data/moon_landings';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import MoonInfoTable from '@components/InfoTables/MoonInfoTable';

export default function Moon_Landings() {
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
        <title>Explore Every Moon Landing Mission | Interactive Maps</title>
        <meta name="description" content="Discover a comprehensive map of every successful and failed mission that landed/impacted on the Moon." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/moon-landings" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/moon-landings"></meta>
        <meta property="og:title" content="Explore Every Moon Landing Mission | Interactive Maps"></meta>
        <meta property="og:description" content="Discover a comprehensive map of every successful and failed mission that landed/impacted on the Moon." />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Every Mission that Landed/Impacted the Moon</h1>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <MoonMapLegend/>
            <div style={{display: "flex", flexDirection:"row", gap:"1em", alignItems:"center"}}>
              <span>Toggle 3D? (Experimental)</span>
              <Switch onChange={handleChange} checked={is3D}/>
            </div>
          </div>
          <br/>
          {is3D ? <div style={{height:"60vh", width:"100%", position:"relative"}}>
            <MoonGlobe></MoonGlobe>
          </div>: <MoonMap width="800" height="500"></MoonMap>}
        </Container>
      </Section>
      <Section>
        <Container>
          <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", justifyContent:"space-between"}}>
              <h3>View all Moon Landings/Impacts</h3>
              {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?<MoonInfoTable tableData={moon_landings}></MoonInfoTable>:<></>}
          <h3>References and Credits</h3>
          <References referenceData={moon_landings_references}></References>
        </Container>
      </Section>
    </Layout>
  )
}
