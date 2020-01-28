import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import './aboutLower.scss'

function AboutLower() {

  useEffect(() => {
    //background animations
    gsap.from(".lower-line-vert", { transformOrigin: "top", scaleY: 0, stagger: 0.2, duration: 3, delay: 1.4, ease: "power2" })
    gsap.from(".lower-line-5", { transformOrigin: "right", scaleX: 0, duration: 3, delay: 1.6, ease: "power2" })
    gsap.from(".lower-line-6", { transformOrigin: "left", scaleX: 0, duration: 3, delay: 3, ease: "power2" })

    //my journey animations
    gsap.from(".my-journey-line", {transformOrigin: "right", scaleX: 0, duration: 1.5, delay: 1.5, ease: "power2"})
    gsap.from(".my-journey-text", {x: 50, autoAlpha: 0, duration: 1.5, delay: 1.5, ease: "power2"})

    //hook animations
    gsap.from([".hook-line-1", ".hook-line-2"], {y:50, autoAlpha: 0, duration: 1.5, stagger: 0.2, delay: 1.5, ease:"power2"})

    //story animations
    gsap.from(".story-line", {y:20, autoAlpha:0, duration:1.5, delay:1.5, stagger:0.2, ease:"power2"})
  })


  return (
    <div className='about-lower-container'>
      <div className="about-context-container">
        <div className="my-journey-text-column">
          <div className="my-journey-line-container">
            <div className="my-journey-line"></div>
          </div>
          <div className="my-journey-text">MY JOURNEY</div>
          <div className="my-journey-text-spacer"></div>
        </div>

        <div className="hook-container">
          <div className="hook-container-2">
            <div className="hook-line-1">Dedicated web developer</div>
            <div className="hook-line-2">striving nothing short of execellence</div>
          </div>
        </div>



        <div className="story-container">
          <div className="story-text-container">
            <div className="story-line-1 story-line">I've finally found my passion.</div>
            <div className="story-line-2 story-line">During and after my years in my university, I've always doubted my motives. I was unsure of what I wanted to do and what I wanted to become.</div>
            <div className="story-line-2 story-line">During and after my years in my university, I've always doubted my motives. I was unsure of what I wanted to do and what I wanted to become.</div>
            <div className="story-line-3 story-line">I've worked as a pharmacy technician, math/science tutor, medical assistant, and a biomanufacturing associate in the past 5 years. </div>
            <div className="story-line-4 story-line">Despite my uncertainties, I worked hard with dilligence and enthusiasm. </div>
            <div className="story-line-5 story-line">One night, an epiphany struck me. "Will my life simply consist of working with no fulfillment," I thought. </div>
            <div className="story-line-6 story-line">I turned and turned on my bed until I got up at 3 AM and began searching on the web.</div>
            <div className="story-line-7 story-line">It wasn't too long until I stumbled on a web development tutorial video. I was hooked. I immediately purchased online courses and resources. </div>
            <div className="story-line-8 story-line ">I coded for hours and hours until sunlight beamed through the cracks of my blinds.</div>
            <div className="story-line-9 story-line">I haven't felt this type of enthusiasm since I got my glowing lightsaber during Christmas in elementary school</div>
            <div className="story-line-10 story-line">(unfortunately taken away 10 minutes into unboxing because I hit my younger brothers' face with it).</div>
            <div className="story-line-11 story-line">I've finally found something that fuels my passion. My ambition. </div>
            <div className="story-line-12 story-line">For a split second, I felt as though if I've wasted a chunk of my time in the past 5 years.</div>
            <div className="story-line-13 story-line">Then I was quickly reminded of the invaluable lessons those experiences have taught me. </div>
            <div className="story-line-14 story-line">My time at the pharmacy taught me the importance of customers' and employees' relationships.</div>
            <div className="story-line-15 story-line">Working as a tutor helped me realize the power of patience and understanding mindset.</div>
            <div className="story-line-16 story-line">Finally, the countless hours I spent as a medical assistant and a biomanufacturing associate</div>
            <div className="story-line-17 story-line">helped me understand the significance of quick adaptation, teamwork, and work place professionalism.</div>
            <div className="story-line-18 story-line">And with these tools at hand, I was ready to take on this new path.</div>
            <div className="story-line-19 story-line">I am an ardent and zealous web developer ready to take on any challenges that I may face.</div>
            <div className="story-line-20 story-line">I am a student of the game.</div>
            <div className="story-line-21 story-line">I've finally found my passion and nothing is going to stop me.</div>
          </div>
        </div>

      </div>

      <div className="lower-background-container">
        <div className="lower-line-1 lower-line-vert"></div>
        <div className="lower-line-2 lower-line-vert"></div>
        <div className="lower-line-3 lower-line-vert"></div>
        <div className="lower-line-4 lower-line-vert"></div>
        <div className="lower-line-5 lower-line lower-line-hori"></div>
        <div className="lower-line-6 lower-line lower-line-hori"></div>
      </div>

    </div>
  )
}

export default AboutLower