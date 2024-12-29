import Head from "next/head";
import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import styles from "@styles/Home.module.scss";
import { GoArrowRight } from "react-icons/go";
import { all_maps } from "src/data/all_maps";

export default function Moon_Landings() {
  return (
    <Layout>
      <Head>
        <title>
          Interactive Maps: Dynamic Visualizations and Geographical Data
        </title>
        <meta
          name="description"
          content="Explore dynamic, fully interactive and unique maps on Interactive Maps."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://interactivemaps.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://interactivemaps.vercel.app/"
        ></meta>
        <meta
          property="og:title"
          content="Interactive Maps: Dynamic Visualizations and Geographical Data"
        ></meta>
        <meta
          property="og:description"
          content="Explore dynamic, fully interactive and maps on Interactive Maps."
        />
      </Head>
      <Section>
        <Container style={{ border: "0px solid gray", borderRadius: "10px" }}>
          <h1>Latest Map</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "10px 0 20px",
            }}
          >
            <div className={styles.heroImage}>
              <img src="screenshots/antoni_gaudi.png"></img>
            </div>
            <div className={styles.heroContent}>
              <h3>Map of Antoni Gaudi's Architecture </h3>
              <p>
                Antonio Gaudi is highly regarded as one of the greatest of all
                time.
              </p>
              <p>
                Most of his work is based on Spain and more specifically within
                Barcelona. So we pinpointed all of the Gaudi structrures that
                Antoni was involved with.
              </p>
              <a
                className="u u-LR"
                style={{
                  display: "flex",
                  width: "fit-content",
                  alignItems: "center",
                  gap: "1rem",
                }}
                href="/antoni-gaudi-architecture"
              >
                <b>Check it out here</b> <GoArrowRight size={24} />
              </a>
            </div>
          </div>
          {/* <hr></hr> */}
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>All Maps</h2>
          <div className="grid grid-cols-5-xl grid-cols-4-lg grid-cols-3-md grid-cols-1 u-gap-4">
            {all_maps.map((map)=>{
                return(
                    <a href={map.link}>
                    <div className="card hover-grow h-100p u-flex u-flex-column">
                      <div className="card__container">
                        <div
                          className="card__image"
                          style={{
                            backgroundImage: `${map.image}`,
                          }}
                        ></div>
                      </div>
                      <div className="content" style={{padding:'10px 20px'}}>
                          <p className="title mt-2 mb-0">{map.title}</p>
                        <p>
                        {map.content}
                        </p>
                      </div>
                    </div>
                  </a>
                )
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
