import React, { useState } from 'react';

export default function LeftSidebar({pins}) {

  return (
    <div className='sidebar columns four'>
        <div className='heading'>
          <h1>Location List</h1>
        </div>
       
         {pins.map((pin)=>{
            return <li>

            <strong>Artist</strong>: {pin.Artist}<br></br>
            <strong>Address</strong>: {pin.Street}, PostalCode: {pin.PostalCode}<br></br>
            <strong>Year</strong>: {pin.Year}<br></br>

            </li>
         })}
        <div id='listings' className='listings'></div>
    </div>
  )
}
