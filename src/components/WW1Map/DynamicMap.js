import styles from './WW1Map.module.scss';
import {useState, useMemo, useCallback} from 'react';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer} from '@deck.gl/layers';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {IconLayer} from '@deck.gl/layers';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import {SphereGeometry} from '@luma.gl/engine';
import DeckGL from '@deck.gl/react';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {FlyToInterpolator} from '@deck.gl/core';
import {MapView} from '@deck.gl/core';
import {COORDINATE_SYSTEM,_GlobeView as GlobeView,  LightingEffect,
  AmbientLight,
  _SunLight as SunLight} from '@deck.gl/core';


// const INITIAL_VIEW_STATE = {
//   longitude: 3.95,
//   latitude: 50.45,
//   zoom: 4
// };

const WW1Map = ({ children, data_src, className,...rest }) => {
  const CITIES=data_src
  const [counter, setCounter] = useState(0)
  const [initialViewState, setInitialViewState] = useState(CITIES[0]);
  function incrementWar(){
    if(counter+1<CITIES.length){
      setCounter(counter + 1)
      setInitialViewState({
        ...CITIES[counter+1],
        transitionInterpolator: new FlyToInterpolator({speed: 2}),
        transitionDuration: 'auto'
        });
    }
  }


function decrementWar(){
  if(counter>0){
    setCounter(counter - 1)
    setInitialViewState({
      ...CITIES[counter-1],
      transitionInterpolator: new FlyToInterpolator({speed: 2}),
      transitionDuration: 'auto'
    })
  }else{}
}

  const backgroundLayers = useMemo(
    () => [
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
        data: data_src,
        getPosition: (d) => d.coordinates.reverse(),
        getSize: 32,
        getIcon: (d) => ({
            url: 'markers/green.png',
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
            <p>${object.location}</p>
            <p>${object.date}</p>
        </div>`,
        style:{
            backgroundColor: "white",
            color: "black",
        }
    };
},[])

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <div className={styles.infoColumn}>
          <button className={styles.buttonStyle} disabled={counter>0?false:true} onClick={decrementWar}><FaArrowLeft /> </button>
            <div style={{display:"flex", gap:"1rem", width:"50%", maxWidth:"80%", flexDirection:"column"}}>
              <span className={styles.name}>{CITIES[counter].name}</span>
              <div>
                <label className={styles.label}>Date</label>
                <span className={styles.officialName}>{CITIES[counter].date}</span>
              </div>
              <div>
                <label className={styles.label}>Location</label>
                <span className={styles.officialName}>{CITIES[counter].location}</span>
              </div>              
              <div>
                <label className={styles.label}>Fought Between</label>
                <span className={styles.officialName}>{CITIES[counter].between[0]}</span><br></br>
                <span>vs</span><br></br>
                <span>{CITIES[counter].between[1]}</span>
              </div>
              <div>
                <label className={styles.label}>Winner</label>
                <span className={styles.officialName}>{CITIES[counter].result?CITIES[counter].result:CITIES[counter].between[0]}</span>
              </div>
              <div>
                <label className={styles.label}>Casualties and Losses</label>
                <span className={styles.officialName}>{CITIES[counter].casualties}</span>
              </div>
              <div>
                <a href={CITIES[counter].reference}>Reference</a>
              </div>
            </div>
          <button className={styles.buttonStyle} disabled={counter+1<CITIES.length?false:true} onClick={incrementWar}><FaArrowRight /></button>
        </div>
      </div>
      <div className={styles.gridItem}>
        <DeckGL
        style={{height:"40vh", width:"100%", position:"relative"}}
        initialViewState={initialViewState}
        layers={[backgroundLayers]}
        controller={true}
        getTooltip={getTooltip}
        views={new MapView({repeat: false})}
        >
        </DeckGL>
      </div>
    </div>
  );
}


export default WW1Map;
