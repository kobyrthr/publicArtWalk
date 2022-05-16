import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import './normalize.css';
import './skeleton.css';
import MapApp from './Pages/App';
import SubmitPage from './Pages/Submit page';
// import {BroswerRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BroswerRouter> */}
    <SubmitPage />
    {/* </BroswerRouter> */}
  </React.StrictMode>
);
