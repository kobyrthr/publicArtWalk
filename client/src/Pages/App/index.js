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
  const MY_API = "http://localhost:4000/api"

  useEffect(()=>{
    const getPins = async () =>{
      try {
        const allPins = await axios.get(MY_API+'/pins');
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
          longitude: -77.034084,
          latitude: 38.909671,
          zoom: 2
        }}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA'}
      >


        {pins.map((city)=>{
        <Marker
          
          longitude={city.lng}
          latitude={city.lat}
          color="red"
          anchor="bottom"
          onClick={e => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
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


      <Marker 
        longitude={-77.034084} 
        latitude={38.909671} 
        color="red"
        />

      </Map>
    </div>
    <LeftSidebar>
        

    </LeftSidebar>
</div>
  )

}

export default MapApp  