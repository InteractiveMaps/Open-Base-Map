import React from 'react';
import {useState, useMemo, useCallback} from 'react';
// import {TileLayer} from '@deck.gl/geo-layers';
// import {BitmapLayer} from '@deck.gl/layers';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {IconLayer} from '@deck.gl/layers';
import {GeoJsonLayer} from '@deck.gl/layers';
import {SphereGeometry} from '@luma.gl/engine';
import DeckGL from '@deck.gl/react';
import {ArcLayer} from '@deck.gl/layers';
import { f1Data_2024 } from 'src/data/f1_2024_data';
import {COORDINATE_SYSTEM,_GlobeView as GlobeView,  LightingEffect,
    AmbientLight,
    _SunLight as SunLight} from '@deck.gl/core';
import {FlyToInterpolator} from '@deck.gl/core';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import styles from "./F1Globe.module.scss"

const CITIES = f1Data_2024
const EARTH_RADIUS_METERS = 6.3e6;

//   const ambientLight = new AmbientLight({
//     color: [255, 255, 255],
//     intensity: 0.5
//   });
//   const sunLight = new SunLight({
//     color: [255, 255, 255],
//     intensity: 2.0,
//     timestamp: 0
//   });

// const lightingEffect = new LightingEffect({ambientLight, sunLight});

 
export default function Root() {
  // const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0)
  const [initialViewState, setInitialViewState] = useState(CITIES[0]);
  const [arcLayers,setArcLayer] = useState([])
  
 
  function incrementRace(){
      if(counter+1<CITIES.length){
        setCounter(counter + 1)
        setArcLayer([...arcLayers,
          new ArcLayer({
            id: "ArcLayer"+counter+1,
            data:CITIES[counter],
            getSourceColor: [Math.sqrt(CITIES[counter].name.length), 240, 0], 
            getTargetColor: [Math.sqrt(CITIES[counter].circuit.length), 140, 0],
            getSourcePosition: [CITIES[counter].longitude, CITIES[counter].latitude],
            getTargetPosition: [CITIES[counter].to_longitude, CITIES[counter].to_latitutde],
            getWidth: 3,
            getHeight:0.01,
            pickable: true
          }),
        ])
        setInitialViewState({
          ...CITIES[counter+1],
          transitionInterpolator: new FlyToInterpolator({speed: 2}),
          transitionDuration: 'auto'
          });
      }
    }
  
  
  function decrementRace(){
    if(counter>0){
      setCounter(counter - 1)
      arcLayers.pop()
      setArcLayer(arcLayers)
      setInitialViewState({
        ...CITIES[counter-1],
        transitionInterpolator: new FlyToInterpolator({speed: 2}),
        transitionDuration: 'auto'
      })
    }else{setBackButtonState(true)}
  }
  
  
  function highlightIcon(value){
    if(value==CITIES[counter]){
      return 'markers/orange.png'
    }else{
      return 'markers/red.png'
    }
  }


  const backgroundLayers = useMemo(
    () => [
      // new ArcLayer({
      //   id: "ArcLayer",
      //   data:CITIES,
      //   getSourceColor: (d) => [Math.sqrt(d.name.length), 240, 0], 
      //   getTargetColor: (d) => [Math.sqrt(d.circuit.length), 140, 0],
      //   getSourcePosition: (d) => d.coordinates.reverse(),
      //   getTargetPosition: (d) => d.to_coordinates.reverse(),
      //   getWidth: 3,
      //   getHeight:0.01,
      //   pickable: true
      // }),
      new IconLayer({
        id:"IconLayer",
        data:CITIES,
        getColor: (d) => [100, 100, 0],
        getPosition: (d) => d.coordinates.reverse(),
        getSize: 32,
        getIcon: (d) => ({
            url: highlightIcon(d),
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
      }),
      new SimpleMeshLayer({
        id: 'earth-sphere',
        data: [0],
        mesh: new SphereGeometry({radius: EARTH_RADIUS_METERS, nlat: 18, nlong: 36}),
        coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
        getPosition: [0, 0, 0],
        getColor: [255, 255, 255]
      }),
      new GeoJsonLayer({
        id: 'earth-land',
        data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson',
        stroked: false,
        filled: true,
        opacity: 0.1,
        getFillColor: [30, 80, 120]
      })
    ],
    []
  );
  const getTooltip = useCallback(({object})=>{
    return object && {
        html:`
        <div>
            <b>${object.name}</b>
            <p>${object.circuit}</p>
        </div>`,
        style:{
            backgroundColor: "white",
            color: "black",
        }
    };
  },[])
  return (
    <div style={{ width:"100%"}}>
      <div style={{margin:"auto", display:"flex", justifyContent:"center", maxWidth:"100%"}}>
        <button className={styles.buttonStyle} disabled={counter>0?false:true} onClick={decrementRace}><FaArrowLeft /> </button>
          <div style={{display:"flex", gap:"10px", flexWrap:"wrap", flexDirection:"column", alignItems:"center"}}>
            <span className={styles.name}>{CITIES[counter].name}</span>
            <span className={styles.officialName}>{CITIES[counter].official_name}</span>
            <span className={styles.officialName}>{CITIES[counter].circuit}</span>
            <span className={styles.officialName}>{CITIES[counter].start_date} to {CITIES[counter].end_date}</span>
          </div>
        <button className={styles.buttonStyle} disabled={counter+1<CITIES.length?false:true} onClick={incrementRace}><FaArrowRight /></button>
      </div>
      <br></br>
      <div style={{height:"60vh", width:"100%", position:"relative"}}>
        <DeckGL
            initialViewState={initialViewState}
            layers={[backgroundLayers, arcLayers]}
            controller={true}
            getTooltip={getTooltip}
            views={new GlobeView()}
        >
        </DeckGL>
      </div>
    </div>
  );
}