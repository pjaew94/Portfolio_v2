import React, {useEffect} from 'react'
import { gsap } from 'gsap'

import './bottomText.scss'

function BottomText() {

  useEffect(()=> {
    gsap.from([".text-top", ".text-bottom"], {y: -10, autoAlpha: 0, delay: 5.2, duration: 2, stagger:0.5, ease:"power2"})
  })


  return (
    <div className='bottom-text-container'>
      <div className="bottom-text-container-2">
        <div className="bottom-text-spacer"></div>
        <div className="bottom-text-text">
          <div className="text-top">WEB</div>
          <div className="text-bottom">DEVELOPER</div>
        </div>
      </div>
    </div>
  )
}

export default BottomText
