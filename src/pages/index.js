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
        <title>Interactive Maps: Dynamic Visualizations and Geographical Data</title>
        <meta name="description" content="Explore dynamic, fully interactive and unique maps on Interactive Maps." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://interactivemaps.vercel.app/"></meta>
        <meta property="og:title" content="Interactive Maps: Dynamic Visualizations and Geographical Data"></meta>
        <meta property="og:description" content="Explore dynamic, fully interactive and maps on Interactive Maps."/>
      </Head>
      <Section>
        <Container style={{border:"0px solid gray", borderRadius:"10px"}}>
            <h1>Latest Map</h1>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap", justifyContent:"space-between", padding:"10px 0 20px"}}>
                <div className={styles.heroImage}>
                    <img src='screenshots/ww1_screenshot.png'></img>
                </div>
                <div className={styles.heroContent} >
                    <h3>Map of Major WW1 Battles</h3>
                    <p>WW1 or the First World War was a global conflict fought between the Allies and the Central Powers. 
                    </p>
                    <p>
                     As one of the deadliest conflicts in human history, the war was fought over several battles stretching from 1914 to 1918.
                     We chronologically mapped some of the major battles of WW1 (inspired by History.com).
                    </p>
                    <a style={{display:"flex", alignItems:"center", gap:"1rem"}} href='/major-ww1-battles'><b>Check it out here</b> <GoArrowRight size={24} /></a>
                </div>
            </div>
            {/* <hr></hr> */}
        </Container>
      </Section>
      <Section>
        <Container>
            <h1>All Maps</h1>
            <div className={styles.gridContainer}>
                <a href='/antoni-gaudi-architecture' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of Antoni Gaudi's Architecture</h3>
                    <img src='screenshots/antoni_gaudi.png' style={{width:"100%"}}></img>
                    <p>Explore Catalan maestro Antoni Gaudi's highly individualized architecture laid out around Spain.</p>
                </div></a>
                <a href='/major-ww1-battles' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of Major WW1 Battles</h3>
                    <img src='screenshots/ww1_screenshot.png' style={{width:"100%"}}></img>
                    <p>Explore the major battles that took place during World War 1, as both the Allied and Axis powers battled for supremacy.</p>
                </div></a>
                <a href='/formula-1-2025' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of all Formula 1 Races in 2025</h3>
                    <img src='screenshots/f1_2025_screenshot.png' style={{width:"100%"}}></img>
                    <p>Explore the complete map of Formula 1 races for the 2025 season. Discover race locations, dates, and event information.</p>
                </div></a>
                <a href='/moon-landings' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of all Landings/Impacts on the Moon</h3>
                    <img src='screenshots/moon_screenshot.png' style={{width:"100%"}}></img>
                    <p>Discover a comprehensive map of every successful and failed mission that landed/impacted on the Moon.</p>
                </div></a>
                <a href='/formula-1' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of all Formula 1 Races in 2024</h3>
                    <img src='screenshots/f1_screenshot.png' style={{width:"100%"}}></img>
                    <p>Explore the complete map of Formula 1 races for the 2024 season. Discover race locations, dates, and event information.</p>
                </div></a>
                <a href='/highest-points' className={styles.gridItems}><div className={styles.card}>
                    <h3>Map of the Highest Points in each Country</h3>
                    <img src='screenshots/mountain_screenshot.png' sstyle={{width:"100%"}}></img>
                    <p>Explore the highest points in every country with our detailed map. Discover elevation data and learn about the world's most prominent peaks.</p>
                </div></a>
                <a href='/overseas-military-bases' className={styles.gridItem}><div className={styles.card}>
                    <h3>Map of Overseas Military Bases</h3>
                    <img src='screenshots/base_screenshot.png' style={{width:"100%"}}></img>
                    <p>Explore the overseas military bases of several countries, laid all across the world as they fight for superpower status. </p>
                </div></a>
            </div>
            {/* <div className={styles.scrollingWrapperFlexbox}>
              <a href='/antoni-gaudi-architecture' className={styles.cardTwo}>
                  <div className={styles.card}>
                      <h3>Map of Antoni Gaudi's Architecture</h3>
                      <img src='screenshots/antoni_gaudi.png' style={{width:"100%"}}></img>
                      <p>Explore Catalan maestro Antoni Gaudi's highly individualized architecture laid out around Spain.</p>
                  </div>
              </a>
                  <a href='/major-ww1-battles' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of Major WW1 Battles</h3>
                      <img src='screenshots/ww1_screenshot.png' style={{width:"100%"}}></img>
                      <p>Explore the major battles that took place during World War 1, as both the Allied and Axis powers battled for supremacy.</p>
                  </div></a>
                  <a href='/formula-1-2025' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of all Formula 1 Races in 2025</h3>
                      <img src='screenshots/f1_2025_screenshot.png' style={{width:"100%"}}></img>
                      <p>Explore the complete map of Formula 1 races for the 2025 season. Discover race locations, dates, and event information.</p>
                  </div></a>
                  <a href='/moon-landings' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of all Landings/Impacts on the Moon</h3>
                      <img src='screenshots/moon_screenshot.png' style={{width:"100%"}}></img>
                      <p>Discover a comprehensive map of every successful and failed mission that landed/impacted on the Moon.</p>
                  </div></a>
                  <a href='/formula-1' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of all Formula 1 Races in 2024</h3>
                      <img src='screenshots/f1_screenshot.png' style={{width:"100%"}}></img>
                      <p>Explore the complete map of Formula 1 races for the 2024 season. Discover race locations, dates, and event information.</p>
                  </div></a>
                  <a href='/highest-points' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of the Highest Points in each Country</h3>
                      <img src='screenshots/mountain_screenshot.png' sstyle={{width:"100%"}}></img>
                      <p>Explore the highest points in every country with our detailed map. Discover elevation data and learn about the world's most prominent peaks.</p>
                  </div></a>
                  <a href='/overseas-military-bases' className={styles.cardTwo}><div className={styles.card}>
                      <h3>Map of Overseas Military Bases</h3>
                      <img src='screenshots/base_screenshot.png' style={{width:"100%"}}></img>
                      <p>Explore the overseas military bases of several countries, laid all across the world as they fight for superpower status. </p>
                  </div></a>
            </div> */}
        </Container>
      </Section>
    </Layout>
  )
}
