import React, { useRef, useEffect, useState } from 'react';
// import Map from 'react-map-gl';
/* eslint import/no-webpack-loader-syntax: off */
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LeftSidebar from '../../Components/LeftSidebar'
import AddLocForm from '../../Components/AddLocForm'
mapboxgl.accessToken = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA';


// const MAPBOX_TOKEN = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2wyb3praW1hMmZ4MTNlc2JvOTZlNmhkZSJ9.TYAumOYpo4s7GkldMOGLYQ';


const MapPage =()=>{
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-77.034084);
    const [lat, setLat] = useState(38.909671);
    const [zoom, setZoom] = useState(13);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v10',
          center: [lng, lat],
          zoom: zoom
        });
      });
    
    return(
        <div>
          <><AddLocForm/></>
          <><LeftSidebar/></>
          <div ref={mapContainer} className="map" />

        </div>
    )
}

export default MapPage  