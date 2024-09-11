import Head from "next/head";
import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import BaseMapLegend from "@components/Legends/BaseMapLegend";
import Switch from "react-switch";

import styles from "@styles/Home.module.scss";
import { bases, base_references } from "../data/data";
import { useState } from "react";
import BaseInfoTable from "@components/InfoTables/BaseInfoTable";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import References from "@components/References";
import Article from "src/articles/MilitaryBases/Article";
import BarChart from "@components/BarChart";

export default function Overseas_Military_Bases() {
  const [data, setData] = useState(bases);
  const [isMarker, setIsMarker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function handleChange() {
    setIsMarker(!isMarker);
  }
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <Layout>
      <Head>
        <title>Overseas Military Bases | Interactive Maps</title>
        <meta
          name="description"
          content="Explore the overseas military bases of several countries, laid all across the world as they fight for superpower status."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://interactivemaps.vercel.app/overseas-military-bases"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://interactivemaps.vercel.app/overseas-military-bases"
        ></meta>
        <meta
          property="og:title"
          content="Overseas Military Bases | Interactive Maps"
        ></meta>
        <meta
          property="og:description"
          content="Explore the overseas military bases of several countries, laid all across the world as they fight for superpower status."
        />
      </Head>
      <Section>
        <Container>
          <h1 className="lead" style={{textAlign:"center"}}>Map of Overseas Military Bases</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <BaseMapLegend />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1em",
                alignItems: "center",
              }}
            >
              <span>Toggle Markers?</span>
              <Switch onChange={handleChange} checked={isMarker} />
            </div>
          </div>
          <br></br>
          <Map width="800" height="600" markerToggle={isMarker}></Map>
        </Container>
      </Section>
      <Section>
        <Container>
          <Article />
        </Container>
        <br/>
        <Container>
          <div
            onClick={handleOpen}
            style={{
              display: "flex",
              cursor: "pointer",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 className="lead">View Overseas Bases</h3>
            {isOpen ? <IoIosArrowUp size={34} /> : <IoIosArrowDown size={34} />}
          </div>
          {isOpen ? (
            data.map((base) => {
              return (
                <BaseInfoTable
                  country={base.country}
                  tableData={base.baseLocations}
                  key={base.country}
                ></BaseInfoTable>
              );
            })
          ) : (
            <></>
          )}
          <br />
          <div>
            <h3 className="lead">Reference and Credits</h3>
            <References referenceData={base_references} />
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
