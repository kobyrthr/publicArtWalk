import React from 'react'

function NavBar() {
  return (
    <div className='navbar columns twelve'>

        <h2>The Public Art Walk</h2>
        <a href="/"><li>Map</li></a>
        <a href="/suggestions"><li>Suggestions</li></a>
    </div>
  )
}

export default NavBar