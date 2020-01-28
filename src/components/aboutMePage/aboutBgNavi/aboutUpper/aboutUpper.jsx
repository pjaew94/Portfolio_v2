import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import './aboutUpper.scss'

function AboutUpper() {


  useEffect(()=> {
    gsap.from(".about-divider", {y:"-100%", stagger: 0.2, duration: 1.5, ease:"power2"})
    gsap.from(".letter", {autoAlpha: 0, y: 30, stagger: 0.2, duration: 1.5, delay: 1, ease: "power2"})
  })


  return (
    <div className="about-upper-container">

      <div className="upper-text">
        <div className="a letter">A</div>
        <div className="b letter">B</div>
        <div className="o letter">O</div>
        <div className="u letter">U</div>
        <div className="t letter">T</div>
      </div>

      <div className="upper-background-container">
        <div className="about-background-divider-1 about-divider"></div>
        <div className="about-background-divider-2 about-divider"></div>
        <div className="about-background-divider-3 about-divider"></div>
        <div className="about-background-divider-4 about-divider"></div>
        <div className="about-background-divider-5 about-divider"></div>
      </div>
    </div>
  )
}


export default AboutUpper