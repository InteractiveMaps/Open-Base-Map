import React from 'react';
import {useState, useMemo, useCallback} from 'react';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {IconLayer} from '@deck.gl/layers';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {SphereGeometry} from '@luma.gl/engine';
import DeckGL from '@deck.gl/react';
import {moon_landings} from 'src/data/moon_landings';
import {COORDINATE_SYSTEM,_GlobeView as GlobeView,  LightingEffect,
    AmbientLight,
    _SunLight as SunLight} from '@deck.gl/core';
// import { Map } from 'react-map-gl';
// import mapStyle from '../../assets/mapStyle';

const INITIAL_VIEW_STATE = {
    longitude: 0,
    latitude: 20,
    zoom: 0.5
  };

  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 0.5
  });
  const sunLight = new SunLight({
    color: [255, 255, 255],
    intensity: 2.0,
    timestamp: 0
  });
  // create lighting effect with light sources
  const lightingEffect = new LightingEffect({ambientLight, sunLight});


export default function Root() {

  const mountainData = moon_landings

  const backgroundLayers = useMemo(
    () => [
     
      new TileLayer({
        id: 'TileLayer',
        zoomOffset:2,
        data: 'https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png',
        maxZoom: 19,
        minZoom: 0,
        renderSubLayers: props => {
            const {
              bbox: {west, south, east, north}
            } = props.tile;
    
            return new BitmapLayer(props, {
              data: null,
              image: props.data,
              _imageCoordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
              bounds: [west, south, east, north]
            });}
      }),
      new IconLayer({
        id:"IconLayer",
        data:mountainData,
        getColor: (d) => [255, 140, 0],
        getPosition: (d) => d.coordinates.reverse(),
        getSize: 32,
        getIcon: (d) => ({
          url: d.imageUrl,
          width:128,
          height:128,            
        }),
        iconMapping: {
          "marker": {
          "x": 0,
          "y": 0,
          "width": 50,
          "height": 84,
          "anchorY": 42,
          },
          "marker-warning": {
          "x": 128,
          "y": 0,
          "width": 128,
          "height": 128,
          "anchorY": 128,
          "mask": false
          }
          },
        pickable: true,
        billboard:true,
      })
    ],
    []
  );
  const getTooltip = useCallback(({object})=>{
    return object && {
        html:`
        <div>
            <b>${object.name}</b><br/>
            <i>${object.type}</i><br/>
            <span>${object.country}</span><br/>
            <span>${object.date}</span>
        </div>`,
        style:{
            backgroundColor: "white",
            // display:"flex",
            // flexDirection:"column",
            // gap:"5px",
            color: "black",
        }
    };
  },[])
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      layers={[backgroundLayers]}
      controller={true}
      getTooltip={getTooltip}
      views={new GlobeView()}
    >
    </DeckGL>
  );
}