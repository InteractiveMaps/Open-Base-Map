import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
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
        <title>Major WW1 Battles | Interactive Maps</title>
        <meta name="description" content="Explore the major battles that took place during World War 1, as both the Allied and Axis powers battled for supremacy." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/ww1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/ww1"></meta>
        <meta property="og:title" content="Major WW1 Battles | Interactive Maps"></meta>
        <meta property="og:description" content="Explore the major battles that took place during World War 1, as both the Allied and Axis powers battled for supremacy." />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Major WW1 Battles</h1>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
          </div>
          <br></br>
          <div><WW1Map data_src={ww1_battles}></WW1Map></div>
          
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>References and Credits</h2>
          <References referenceData={ww1_references}/>
        </Container>
      </Section>
      {/* <Section>
       
        <Container>
          <div onClick={handleOpen} style={{display:"flex", cursor:"pointer", flexDirection:"row", justifyContent:"space-between"}}>
            <h2>View Overseas Bases</h2>
            {isOpen? <IoIosArrowUp  size={34}  />:<IoIosArrowDown size={34} />}
          </div>
          {isOpen?data.map((base) => {
            return(
              <BaseInfoTable country={base.country} tableData={base.baseLocations} key={base.country}></BaseInfoTable>
            )
          }):<></>}
          <br/>
        </Container>
      </Section> */}
    </Layout>
  )
}
