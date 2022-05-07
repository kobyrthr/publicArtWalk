import React, { useRef, useEffect, useState } from 'react';
// import Map from 'react-map-gl';
/* eslint import/no-webpack-loader-syntax: off */
import './index.css';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA';

// const MAPBOX_TOKEN = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2wyb3praW1hMmZ4MTNlc2JvOTZlNmhkZSJ9.TYAumOYpo4s7GkldMOGLYQ';


const MapPage =()=>{
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
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
        <div class="location-form">
  <form action="/" method="POST">
    <label for="Name">Name</label>
    <input type="text" name='Name'></input>
    <label for="longitude">Longitude</label>
    <input type="text" name='longitude'></input>
    <label for="latitude">Latitude</label>
    <input type="text" name='latitude'></input>
    <button>Submit</button>
  </form> 
  </div>
    <div class='sidebar'>
        <div class='heading'>
          <h1>Our locations</h1>
        </div>
        <div id="inputForm">
            <form action="">
                <label for="Name"></label>
            </form>
        </div>
        <div id='listings' class='listings'></div>
    </div>
          <div ref={mapContainer} className="map" />

        </div>
    )
}

export default MapPage  