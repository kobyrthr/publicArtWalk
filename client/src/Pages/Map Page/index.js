// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl';
// mapboxgl.accessToken = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2wyb3praW1hMmZ4MTNlc2JvOTZlNmhkZSJ9.TYAumOYpo4s7GkldMOGLYQ';

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
            <div id="map" class="map"></div> 

        </div>
    )
}

export default MapPage