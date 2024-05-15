import Head from 'next/head';


import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import BaseMapLegend from '@components/Legends/BaseMapLegend';

import styles from '@styles/Home.module.scss';
import { bases } from '../data/data';
import { useEffect, useState } from 'react';
import InfoTable from '@components/InfoTable';


const DEFAULT_CENTER = [0,0]
// const center = [38.907132, -77.036546]


// const usIcon = new L.Icon({
//   iconUrl:usaMarker,
// })



export default function Home() {
  const [data, setData] = useState(bases)
  return (
    <Layout>
      <Head>
        <title>InteractiveMaps</title>
        <meta name="description" content="Open source Interactive Maps to showcase data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <h1 className={styles.title}>Map of Overseas Bases</h1>
          <BaseMapLegend/>
          <Map className={styles.homeMap} width="800" height="600" center={DEFAULT_CENTER} zoom={3} minZoom={3}>
            {({ TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup }) => (
              <>
                <TileLayer
                  noWrap
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <LayersControl position="topright">
                  {data.map((base)=>{
                  return(<LayersControl.Overlay checked name={
                    "<img src='/country/"+base.country+".png' />&nbsp;&nbsp;<span style={{marginLeft:'20px'}}>"+base.country+"</span><br>" 
                    } key={base.country}>    
                        <LayerGroup key={base.country}>
                          {base.baseLocations.map((location, index)=>{
                            return(
                              <Marker position={location.coordinates} key={`location-${index}`} >
                                <Popup key={`location-${index}`} >
                                  {location.baseName}
                                  <br></br>
                                  <div style={{display:"flex", gap: "10px", alignItems:"center", maxWidth: "fit-content"}}>
                                    <img style={{width:"1.5em"}} src={"/country/"+base.country+".png"} />
                                    {base.country}
                                  </div>
                                </Popup>
                              </Marker>
                            )
                          })}
                        </LayerGroup>
                  </LayersControl.Overlay>)
                  })}
                </LayersControl>
              </>
            )}
          </Map>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Overseas Bases</h2>
          {data.map((base) => {
            return(
              <InfoTable country={base.country} tableData={base.baseLocations} key={base.country}></InfoTable>
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}
