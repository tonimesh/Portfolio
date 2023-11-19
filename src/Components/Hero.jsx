import React from 'react'
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Hero.css"

function Hero({heading, linkedin, github, gitlab,id}) {
  
  return (
    <div className='heroheader'>
      <h1 id={id} className='text-center mt-3 mb-3'>{heading}</h1>
      <div className="item text-center">
        
        <svg style={
          {
            width: 0,
            height: 0,
            position: "absolute"
          }
        } aria-hidden="true" focusable="false">
          <linearGradient id="my-light-gradient" x2="1" y2="1">
          {/* #000000 -43.27%,#000000 -21.24%,#525252 12.19%,#4f4f4f 29.82%,#27260f 51.94%,#cfa033 90.29% */}

            <stop offset="-43.27%" stopColor="#000000" />
            <stop offset="-21.24%" stopColor="#000000" />
            <stop offset="12.19%" stopColor="#525252" />
            <stop offset="29.82%" stopColor="#4f4f4f" />
            <stop offset="51.94%" stopColor="#27260f" />
            <stop offset="90.29%" stopColor="#cfa033" />
          </linearGradient>
          <linearGradient id="my-dark-gradient" x2="1" y2="1">
          {/* linear-gradient(157.81deg,#faf7de -43.27%,#ecf5be -21.24%,#eef09d 12.19%,#e0eb7d 29.82%,#e6e25c 51.94%,#cfa033 90.29%); */}

            <stop offset="-43.27%" stopColor="#faf7de" />
            <stop offset="-21.24%" stopColor="#ecf5be" />
            <stop offset="12.19%" stopColor="#eef09d" />
            <stop offset="29.82%" stopColor="#e0eb7d" />
            <stop offset="51.94%" stopColor="#e6e25c" />
            <stop offset="90.29%" stopColor="#cfa033" />
          </linearGradient>
        </svg>
        <a href={linkedin} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href={github} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href={gitlab} target='_blank'><FontAwesomeIcon icon={faGitlab} /></a>

        
        
        
      </div>

    </div>
  )
}

export default Hero