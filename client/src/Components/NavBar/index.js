import React from 'react'

function NavBar() {
  return (
    <div className='navbar columns twelve'>

        <a href="/"><h1> Public Art Walk</h1></a>
        <a href="/Map"><li>Map</li></a>
        <a href="/suggestions"><li>Suggestions</li></a>
    </div>
  )
}

export default NavBar