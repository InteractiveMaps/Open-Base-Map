import { useState } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { bases } from 'src/data/data';
import styles from './Map.module.scss';

const { MapContainer, TileLayer, LayerGroup, LayersControl, Marker, Popup } = ReactLeaflet;
const DEFAULT_CENTER = [0,0]

const Map = ({ children, className, width, height, markerToggle, ...rest }) => {
  const [data, setData] = useState(bases)
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

  var markerIcon = new Leaflet.Icon({
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl:null,
        iconSize: [20,30]
  })

  // useEffect(() => {
  //   (async function init() {
  //     delete Leaflet.Icon.Default.prototype._getIconUrl;
  //     Leaflet.Icon.Default.mergeOptions({
  //       iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
  //       iconUrl: 'leaflet/images/marker-icon.png',
  //       shadowUrl: 'leaflet/images/marker-shadow.png',
  //     });
  //   })();
  // }, []);

  return (
    <MapContainer className={mapClassName} {...rest} center={DEFAULT_CENTER} zoom={3} minZoom={3}>
      <TileLayer
        noWrap
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
        <LayersControl position="topright">
          {data.map((base)=>{
            return(
              <LayersControl.Overlay checked 
                name={"<img src='/country/"+base.country+".png' alt='flag of"+base.country+"' />&nbsp;&nbsp;<span style={{marginLeft:'20px'}}>"+base.country+"</span><br>" } 
                key={base.country}>    
                <LayerGroup key={base.country}>
                  {base.baseLocations.map((location, index)=>{
                    return(
                      <Marker position={location.coordinates} icon={markerToggle? markerIcon: new LeafIcon({iconUrl: 'country/'+base.country+'.png'})} key={`location-${index}`} >
                        <Popup key={`location-${index}`} >
                          <div className={styles.popup}>
                            <span className={styles.baseName}>{location.baseName}</span>
                            <span>{location.location}</span>
                            <div style={{display:"flex", gap: "10px", alignItems:"center", maxWidth: "fit-content"}}>
                              <img style={{width:"1.5em"}} src={"/country/"+base.country+".png"} alt={"flag of" + base.country} />
                              {base.country}
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    )
                  })}
                </LayerGroup>
            </LayersControl.Overlay>)
          })}
        </LayersControl>
    </MapContainer>
  )
}

export default Map;
