import React, { useState } from 'react';
import PlaceCard from '../PlaceCard';

export default function LeftSidebar() {



  return (
    <div class='sidebar'>
        <div class='heading'>
          <h1>Our locations</h1>
        </div>
       <PlaceCard></PlaceCard>
        <div id='listings' class='listings'></div>
    </div>
  )
}
