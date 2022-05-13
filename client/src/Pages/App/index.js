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
        zoom: 14
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA'}
    >
      <Marker longitude={-77.034084} latitude={38.909671} color="red" />
    </Map>


    </div>
  )

}

export default MapApp  