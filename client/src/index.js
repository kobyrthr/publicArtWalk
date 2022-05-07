import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import MapPage from './Pages/MapPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapPage />
  </React.StrictMode>
);
