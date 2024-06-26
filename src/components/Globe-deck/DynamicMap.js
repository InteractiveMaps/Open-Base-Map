import React from 'react';
import {useState, useMemo, useCallback} from 'react';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {IconLayer} from '@deck.gl/layers';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {SphereGeometry} from '@luma.gl/engine';
import DeckGL from '@deck.gl/react';
import { mountain_data } from 'src/data/mountaindata.js';
import {COORDINATE_SYSTEM,_GlobeView as GlobeView,  LightingEffect,
    AmbientLight,
    _SunLight as SunLight} from '@deck.gl/core';
// import { Map } from 'react-map-gl';
// import mapStyle from '../../assets/mapStyle';

const INITIAL_VIEW_STATE = {
    longitude: 0,
    latitude: 20,
    zoom: 1
  };
  const EARTH_RADIUS_METERS = 6.3e6;

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
  const mountainData = mountain_data
  function makeIcon(height){
    if(height < 1000){
      return 'markers/green.png'
    }
    else if(1000 <= height && height < 4000){
      return 'markers/yellow.png'
    }
    if(4000 <= height && height < 8000){
      return 'markers/orange.png'
    }
    else{
      return 'markers/red.png'
    }
  }
  const backgroundLayers = useMemo(
    () => [
      new HexagonLayer({
        id:"HexagonLayer",
        data:mountainData,
        elevationRange: [
            0,
            9000
          ],
        upperPercentile: 100,
        extruded: true,
        getColorWeight: (d) => d.height,
        getElevationWeight: (d) => d.height,
        getPosition: (d) => d.coordinates.reverse(),
        elevationScale: 4,
        radius: 200,
        pickable: true
      }),
      new TileLayer({
        id: 'TileLayer',
        data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom: 19,
        minZoom: 0,
        tileSize: 256,
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
        getColor: (d) => [100, 140, 0],
        getPosition: (d) => d.coordinates.reverse(),
        getSize: 32,
        getIcon: (d) => ({
            url: makeIcon(d.height),
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
      }),
    ],
    []
  );
  const getTooltip = useCallback(({object})=>{
    return object && {
        html:`
        <div>
            <b>${object.name}</b>
            <p>${object.country}</p>
            <p>${object.height}m/${object.heightF}ft</p>
        </div>`,
        style:{
            backgroundColor: "white",
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

