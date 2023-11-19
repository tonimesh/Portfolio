import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons'
import "./Floater.css"

function Floater({lightState}) {
  const [isLight,setIsLight]=lightState;
  return (
    <div className={"floater" + (isLight?" light":" dark")} 
        onClick={()=>setIsLight(!isLight)}>
       <FontAwesomeIcon icon={ isLight ? faMoon : faSun } />
    </div>
  )
}

export default Floater