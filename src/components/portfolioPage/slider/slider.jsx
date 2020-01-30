import React, { useEffect }from 'react'

import gsap from 'gsap'
import './slider.scss'

import project1Video from '../videos/Project 1.mp4'

function Slider() {

  const projects = [
    {
      video: { project1Video },
      title: "Ridnyl House Showcase",
      date: "Dec 2019",
      description: "The project focuses on giving life to Sergey Makhno's one of many beautiful and asthetic projects. In order to compliment the simplistic design of the house, I've incorported black and white colors coupled with a minimalistic layout. Technologies to create this project are HTML5, SCSS, JavaScript, and React.js. "
    }
  ]

  useEffect(()=> {
    gsap.from(".project-container", {x:"-200%", duration: 2.5, delay: 7.5, ease: "power2"})
  })

  function hoverProject1() {
    gsap.to(".project-bottom-left-container", {autoAlpha: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power2"})
    gsap.to(".project-description-container", {autoAlpha: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power2"})
    gsap.to(".project-line", {transformOrigin: "top", height: "110%", duration: 1, ease: "power2"})
  }

  function unhoverProject1() {
    gsap.to(".project-bottom-left-container", {autoAlpha: 0, x: 30, duration: 1, ease: "power2"})
    gsap.to(".project-description-container", {autoAlpha: 0, x: -30, duration: 1, ease: "power2"})
    gsap.to(".project-line", {transformOrigin: "top", height: 0, duration: 0.5, ease: "power2"})
  }

  return (
    <div className='slider-container'>
      <div className="project-container">
        <a 
        className='link-video-wrapper' 
        href={'https://ridnyi-house-project.netlify.com'} 
        target='_blank'
        onMouseEnter={hoverProject1}
        onMouseLeave={unhoverProject1}
        >
          <video className='video' autoPlay loop muted>
            <source src={project1Video} type='video/mp4' />
          </video>
        </a>
        <div className="project-bottom-container">
          <div className="project-bottom-left-container">
            <div className="project-title-container">
              {projects[0].title}
            </div>
            <div className="project-date-container">
              <div className="project-date-line"></div>
              <div className="project-date">
                {projects[0].date}
              </div>
            </div>
          </div>
          <div className="project-bottom-right-container">
            <div className="project-line"></div>
            <div className="project-description-container">{projects[0].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider