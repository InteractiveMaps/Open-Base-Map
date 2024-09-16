import React, { useState, useEffect } from 'react';
import { DeckGL } from 'deck.gl';
import { TileLayer } from '@deck.gl/geo-layers';
import { GeoJsonLayer } from '@deck.gl/layers';
import styles from './ChloroplethMap.module.scss';

const COLOR_SCALE = [
  [255, 255, 204],
  [255, 237, 160],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [240, 59, 32],
  [189, 0, 38]
];

const COLOR_LABELS = [
  '0-50', '51-100', '101-200', '201-500', '501-1000', '1001+'
];

const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 20,
  zoom: 1,
  pitch: 0,
  bearing: 0
};

export default function ChoroplethMap() {
  const [geojsonData, setGeojsonData] = useState(null);
  const [populationData, setPopulationData] = useState({});

  useEffect(() => {
    // Fetch GeoJSON data (Country Boundaries)
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then((response) => response.json())
      .then((data) => setGeojsonData(data));

    // Fetch population density data from GitHub
    fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json')
      .then((response) => response.json())
      .then((data) => {
        const densityByCountry = {};
        data.forEach(country => {
          densityByCountry[country.country] = country.density; // Match by country name
        });
        setPopulationData(densityByCountry);
      });
  }, []);

  const getColor = (feature) => {
    const countryCode = feature.properties.ADMIN; // Match with your population data key
    const density = populationData[countryCode];
    if (!density) return [255, 255, 255]; // Default color if no data

    const scale = Math.min(Math.floor(density / 50), COLOR_SCALE.length - 1);
    return COLOR_SCALE[scale];
  };

  const layers = [
    new TileLayer({
      id: 'base-map',
      data: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256
    }),
    new GeoJsonLayer({
      id: 'geojson-layer',
      data: geojsonData,
      filled: true,
      getFillColor: (d) => getColor(d),
      getLineColor: [200, 200, 200],
      pickable: true,
      onHover: (info) => {
        const { object } = info;
        if (object) {
          console.log(`Country: ${object.properties.ADMIN}, Density: ${populationData[object.properties.ADMIN]}`);
        }
      }
    })
  ];

  return (
    <div style={{height:"60vh", width:"100%", position:"relative"}}>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      {/* Legend Component */}
      <div className={styles.legend}>
        <h4>Population Density (per km²)</h4>
        {COLOR_SCALE.map((color, index) => (
          <div key={index} className={styles.legendItem}>
            <span
              className={styles.legendColor}
              style={{
                backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
              }}
            />
            <span>{COLOR_LABELS[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
