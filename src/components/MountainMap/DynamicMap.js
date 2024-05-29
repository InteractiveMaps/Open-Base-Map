import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MountainMap.module.scss';

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;
const DEFAULT_CENTER = [0,0]

const Map = ({ children, data_src, className, width, height, markerToggle, ...rest }) => {

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

  function getIcon(height){
    if(height < 1000){
      return new LeafIcon({iconUrl: 'markers/green.png'})
    }
    else if(1000 <= height && height < 4000){
      return new LeafIcon({iconUrl: 'markers/yellow.png'})
    }
    if(4000 <= height && height < 8000){
      return new LeafIcon({iconUrl: 'markers/orange.png'})
    }
    else{
      return new LeafIcon({iconUrl: 'markers/red.png'})
    }
  }

  return (
    <MapContainer className={mapClassName} {...rest} center={DEFAULT_CENTER} zoom={2.5} minZoom={2.5}>
      <TileLayer
        noWrap
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {data_src.map((location,index)=>{
        return(
            <Marker icon={getIcon(location.height)} position={[location.coordinates[0], location.coordinates[1]]} key={`location-${index}`}>
              <Popup>
                <div className={styles.popup}>
                  <span className={styles.baseName}>{location.name}</span>
                  <span>{location.country}</span>
                  <span>{location.height}m ({location.heightF}ft)</span>
                </div>
              </Popup>
            </Marker>
        )
      })}

    </MapContainer>
  )
}

export default Map;
