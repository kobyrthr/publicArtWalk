/* eslint import/no-webpack-loader-syntax: off */
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LeftSidebar from '../../Components/LeftSidebar'
import AddLocForm from '../../Components/AddLocForm'
import MapBox from '../../Components/MapBox'
mapboxgl.accessToken = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2oweTVwaDRqMDFhajJ3cGVnODllOG92cCJ9.Zz99tb4K4fFB3Bgs54C8rA';


const MapPage =()=>{
    
   
    
    return(
        <div>
          <>
          <AddLocForm/>
          <LeftSidebar/>
          <MapBox/>
          </>
        </div>
    )
}

export default MapPage  