import { useState } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MoonMap.module.scss';
import {moon_landings_filtered} from 'src/data/moon_landings';

const { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } = ReactLeaflet;
const DEFAULT_CENTER = [0,0]

const Map = ({ children, className, width, height, ...rest }) => {
    const [data_src, setDataSrc] = useState(moon_landings_filtered)
    let mapClassName = styles.map;

    if ( className ) {
        mapClassName = `${mapClassName} ${className}`;
    }

    var LeafIcon = Leaflet.Icon.extend({
        options: {
            shadowUrl: 'leaflet/images/marker-shadow.png',
            iconSize:     [32, 32],
            shadowSize:   [32, 32],
        }
    });

  return (
    <MapContainer className={mapClassName} {...rest} center={DEFAULT_CENTER} zoom={2.5} minZoom={2}>
      <TileLayer
        noWrap={true}
        zIndex={0}
        url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png'
        attribution="&copy; <a href=&quot;https://www.openplanetary.org/&quot;>OpenPlanetary</a> contributors"
      />
      <LayersControl position="topright">
      {data_src.map((base)=>{
        return(
          <LayersControl.Overlay checked
            name={base.missionType}
            key={base.missionType}>
            <LayerGroup key={base.missionType}>
              {base.baseLocations.map((location, index)=>{
                return(
                  <Marker icon={new LeafIcon({iconUrl:location.imageUrl})} position={location.coordinates} key={`location-${index}`}>
                  <Popup>
                    <div className={styles.popup}>
                      <span className={styles.baseName}>{location.name}</span>
                      <span>{location.type}</span>
                      <span>{location.country}</span>
                    </div>
                  </Popup>
                </Marker>
                )
              })}
            </LayerGroup>
          </LayersControl.Overlay>
           
        )
      })}
      </LayersControl>

    </MapContainer>
  )
}

export default Map;
