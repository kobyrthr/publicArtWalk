import React, { useRef,useEffect, useState, useMemo } from 'react';
/* eslint import/no-webpack-loader-syntax: off */
import Map, {Marker, Popup} from 'react-map-gl';
import CITIES from '../../../src/data/cities.json'

const MapApp =()=> {
  const [showPopup, setShowPopup] = React.useState(true);
  const [popupInfo, setPopupInfo] = useState(null);
  return(

    <div>

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

    <>
      {CITIES.map((city,index)=>{
      return <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
        anchor="bottom"
        onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
      />
    })}
    </>

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
  )

}

export default MapApp  