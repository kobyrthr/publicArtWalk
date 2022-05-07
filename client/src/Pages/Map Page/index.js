// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl';

import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2wyb3praW1hMmZ4MTNlc2JvOTZlNmhkZSJ9.TYAumOYpo4s7GkldMOGLYQ';


const MapPage =()=>{
    
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
                <div id='listings' class='listings'></div>
            </div>
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 14
                 }}
                style={{width: 800, height: 600}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
            </Map>

        </div>
    )
}

export default MapPage