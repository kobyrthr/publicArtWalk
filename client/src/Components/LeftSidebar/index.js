import React, { useState } from 'react';

export default function LeftSidebar({pins}) {

  return (
    <div className='sidebar'>
        <div className='heading'>
          <h1>Our locations</h1>
        </div>
       
         {pins.map((pin)=>{
            return <li>

            lng = {pin.lng}
            lat = {pin.lat}

            </li>
         })}
        <div id='listings' className='listings'></div>
    </div>
  )
}
