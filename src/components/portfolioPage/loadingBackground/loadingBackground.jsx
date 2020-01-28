import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import './loadingBackground.scss'

function LoadingBackground() {

  let ldct = useRef(null)
  let bcct = useRef(null)


  // Loading Animations
  useEffect(() => {

    // Loading Animations
    const fl1 = ldct.firstChild
    const fl2 = ldct.children[1]
    const sl1 = ldct.children[2]
    const sl2 = ldct.children[3]
    const tl1 = ldct.children[4]
    const tl2 = ldct.children[5]
    const fourthl1 = ldct.children[6].firstChild
    const fourthl2 = ldct.children[7].firstChild
    const leftSlider = ldct.children[6]
    const rightSlider = ldct.children[7]

    gsap.to(fl1, { left: "60%", scaleX: 0, duration: 0.5, ease: "power2" })
    gsap.to(fl2, { right: "60%", scaleX: 0, duration: 0.5, ease: "power2" })

    gsap.to(sl1, { transformOrigin: "bottom", height: "15%", top: "35%", duration: 0.5, delay: 0.5, ease: "power2" })
    gsap.to(sl2, { transformOrigin: "top", height: "15%", bottom: "35%", duration: 0.5, delay: 0.5, ease: "power2" })

    gsap.to(sl1, { scaleY: 0, duration: 0.5, delay: 0.7, ease: "power2" })
    gsap.to(sl2, { scaleY: 0, duration: 0.5, delay: 0.7, ease: "power2" })

    gsap.to(tl1, { transformOrigin: "left", left: "40%", width: "10%", duration: 0.3, delay: 1.1, ease: "power2" })
    gsap.to(tl2, { transformOrigin: "right", right: "40%", width: "10%", duration: 0.3, delay: 1.1, ease: "power2" })
    gsap.to(tl1, { transformOrigin: "right", scaleX: 0, duration: 0.2, delay: 1.2, ease: "power2" })
    gsap.to(tl2, { transformOrigin: "left", scaleX: 0, duration: 0.2, delay: 1.2, ease: "power2" })

    gsap.from(fourthl1, { scaleY: 0, duration: 0.3, delay: 1.5, ease: "power2" })
    gsap.from(fourthl2, { scaleY: 0, duration: 0.3, delay: 1.5, ease: "power2" })

    gsap.to(leftSlider, { x: "-100%", duration: 1.5, delay: 1.6, ease: "power2" })
    gsap.to(rightSlider, { x: "100%", duration: 1.5, delay: 1.6, ease: "power2" })

    gsap.to(ldct, { display: "none", delay: 3 })




  })

  // Background Animations
  useEffect(() => {
    const bgd3 = bcct.firstChild.children[2]

    gsap.to(bgd3, {boxShadow: "45px 0px 25px -25px rgba(0, 0, 0, 0.9), -45px 0px 25px -25px rgba(0, 0, 0, 0.9)", duration: 4, delay: 2.2, ease: "power2"})
  })




  return (
    <div className='background-loading-container' ref={el => bcct = el}>

      {/* Background HTML */}
      <div className="background-container">
        <div className="background-divider-1 divider"></div>
        <div className="background-divider-2 divider"></div>
        <div className="background-divider-3 divider"></div>
        <div className="background-divider-4 divider"></div>
        <div className="background-divider-5 divider"></div>
      </div>


      {/* Loading-Animation-HTML */}
      <div className='loading-container' ref={el => ldct = el}>
        <div className="first-line1"></div>
        <div className="first-line2"></div>
        <div className="second-line1"></div>
        <div className="second-line2"></div>
        <div className="third-line1"></div>
        <div className="third-line2"></div>
        <div className="loading-left-slider">
          <div className="fourth-line1"></div>
        </div>
        <div className="loading-right-slider">
          <div className="fourth-line2"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingBackground