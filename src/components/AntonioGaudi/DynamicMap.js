import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './AntonioGaudi.module.scss';

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;
const DEFAULT_CENTER = [40.416775,-3.703790]

const Map = ({ children, data_src, className, width, height, markerToggle, ...rest }) => {

let mapClassName = styles.map;

if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
}

  var LeafIcon = Leaflet.Icon.extend({
    options: {
        shadowUrl: 'leaflet/images/marker-shadow.png',
        iconSize:     [64, 64],
        shadowSize:   [32, 32],
    }
  });

  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ]

  return (
    <MapContainer className={mapClassName} {...rest} center={DEFAULT_CENTER} zoom={7} minZoom={6} maxZoom={8}>
      <TileLayer
        noWrap
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains='abcd'
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors I &copy; Interactive Maps"
      />
      {data_src.map((place,index)=>{
        return(
            <Marker icon={new LeafIcon({iconUrl: place.image})} position={place.coordinates} key={`location-${index}`}>
              <Popup>
                <div className={styles.popup}>
                  <img src={place.image}></img>
                  <span className={styles.baseName}>{place.name}</span>
                  <span>{place.duration}</span>
                  <span>{place.location}</span>
                  <p>{place.summary}</p>
                  <p>Number: {place.phone}</p>
                  <a href={place.link}>Find out more</a>
                </div>
              </Popup>
            </Marker>
        )
      })}

    </MapContainer>
  )
}

export default Map;