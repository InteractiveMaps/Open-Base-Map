import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";

export default function Moon_Landings() {
  return (
    <Layout>
      <Head>
        <title>Interactive Maps</title>
        <meta name="description" content="Open source Interactive Maps to showcase data in a cool way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container style={{border:"0px solid gray", borderRadius:"10px"}}>
            <h1>Latest Map</h1>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap", justifyContent:"space-between", padding:"10px 0 20px"}}>
                <div className={styles.heroImage}>
                    <img src='screenshots/moon_screenshot.png'></img>
                </div>
                <div className={styles.heroContent} >
                    <h3>Map of all Landings/Impacts on the Moon</h3>
                    <p>Since human beings discovered space flight, the concept for getting to the moon has always been at the forefront
                        of exploration. From the late 1950s, the United States and the Soviet Union have competed to reach the moon. 
                    </p>
                    <p>
                    Now in this new millenia,
                        at least 9 countries have built equipment that has landed/impacted our nearest neighbour. 
                        This map showcases all the locations on the moon where landings and impacts have occured
                    </p>
                    <a style={{display:"flex", alignItems:"center", gap:"1rem"}} href='/moon-landings'><b>Check it out here</b> <GoArrowRight size={24} /></a>
                </div>
            </div>
            {/* <hr></hr> */}
        </Container>
      </Section>
      <Section>
        <Container>
            <h1>All Maps</h1>
            <div className={styles.gridContainer}>
                <a href='/moon-landings' className={styles.gridItem}><div className={styles.card}>
                    <h3>Map of all Landings/Impacts on the Moon</h3>
                    <img src='screenshots/moon_screenshot.png' style={{width:"100%"}}></img>
                    <p>Showcases all the impacts and landings on the moon, since 1960s</p>
                </div></a>
                <a href='/formula-1' className={styles.gridItem}><div className={styles.card}>
                    <h3>Map of all Formula 1 Races in 2024</h3>
                    <img src='screenshots/f1_screenshot.png' style={{width:"100%"}}></img>
                    <p>Showcases the entire race calendar for Formula1 in 2024, complete with animations as drivers travel from race to race</p>
                </div></a>
                <a href='/mountain' className={styles.gridItem}><div className={styles.card}>
                    <h3>Map of the Highest Points in each Country</h3>
                    <img src='screenshots/mountain_screenshot.png' sstyle={{width:"100%"}}></img>
                    <p>Showcases the highest points in all countries/regions across the world. </p>
                </div></a>
                <a href='/overseas-military-bases' className={styles.gridItem}><div className={styles.card}>
                    <h3>Map of Overseas Military Bases</h3>
                    <img src='screenshots/base_screenshot.png' style={{width:"100%"}}></img>
                    <p>Showcases the highest points in all countries/regions across the world. </p>
                </div></a>
            </div>
        </Container>
      </Section>
    </Layout>
  )
}
