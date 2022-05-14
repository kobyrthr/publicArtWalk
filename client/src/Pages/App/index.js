import React, { useRef,useEffect, useState, useMemo } from 'react';
/* eslint import/no-webpack-loader-syntax: off */
import Map, {Marker, Popup} from 'react-map-gl';
import CITIES from '../../../src/data/cities.json'
import LeftSidebar from '../../Components/LeftSidebar';
import PlaceCard from '../../Components/PlaceCard';
import axios from "axios"

const MapApp =()=> {
  const [pins, setPins] = useState([])
  const [showPopup, setShowPopup] = useState(true);
  const [popupInfo, setPopupInfo] = useState(null);
  const slash = "http://localhost:4000/api"

  useEffect(()=>{
    const getPins = async () =>{
      try {
        const allPins = await axios.get(slash+'/pins');
        setPins(allPins.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPins();
  },[])

  return(
<div>
    <div className="map">
      <Map
        initialViewState={{
          longitude: -76.6122,
          latitude: 39.2904,
          zoom: 12
        }}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >



        {pins.map((city,index)=>{
        return <Marker
          key={`marker-${index}`}
          longitude={city.lng}
          latitude={city.lat}
          color="dodgerblue"
          anchor="bottom"
          onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(city);
            }}
        />
      })}
  

      {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                {popupInfo.city}, {popupInfo.state} |{' '}
                <a
                  target="_new"
                  href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                >
                  Wikipedia
                </a>
              </div>
              <img width="100%" src={popupInfo.image} />
            </Popup>
          )}


      

      </Map>
    </div>
    <LeftSidebar pins={pins} />
        
</div>
  )

}

export default MapApp  