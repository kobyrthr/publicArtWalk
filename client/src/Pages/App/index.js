import React, { useRef,useEffect, useState } from 'react';
/* eslint import/no-webpack-loader-syntax: off */
import Map, {Marker} from 'react-map-gl';

const MapApp =()=> {
  return(

    <div>

<Map
      initialViewState={{
        longitude: -77.034084,
        latitude: 38.909671,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA'}
    >
      <Marker longitude={-77.034084} latitude={38.909671} color="red" />
    </Map>


    </div>
  )

}

export default MapApp  