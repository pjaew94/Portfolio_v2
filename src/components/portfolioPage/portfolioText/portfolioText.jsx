import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import './portfolioText.scss'


function PortfolioText() {

  useEffect(() => {

    gsap.from([".j", ".a", ".e", ".gram", ".s"], { y: 30, autoAlpha: 0, duration: 1.5, stagger: 0.2, delay: 2.2, ease: "power2" })

    gsap.to([".j", ".a", ".e", ".gram", ".s"], { y: -30, autoAlpha: 0, duration: 1.5, stagger: 0.2, delay: 4, ease: "power2" })

    gsap.from([".p", ".o", ".r", ".t", ".f", ".o2", ".l", ".i", ".o3"], { y: 30, autoAlpha: 0, duration: 2, stagger: 0.2, delay: 5.2, ease: "power2" })
  })



  return (
    <div className='portfolio-container'>
    <div className="jae-text-container">
      <div className="j letter">J</div>
      <div className="a letter">A</div>
      <div className="e letter">E</div>
      <div className="gram letter">'</div>
      <div className="s letter">S</div>
    </div>
      <div className='portfolio-text-container'>
        <div className="p letter">P</div>
        <div className="o letter">O</div>
        <div className="r letter">R</div>
        <div className="t letter">T</div>
        <div className="f letter">F</div>
        <div className="o2 letter">O</div>
        <div className="l letter">L</div>
        <div className="i letter">I</div>
        <div className="o3 letter">O</div>
      </div>
    </div>
  )
}

export default PortfolioText