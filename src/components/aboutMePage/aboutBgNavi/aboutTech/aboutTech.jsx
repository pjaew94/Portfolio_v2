import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import './aboutTech.scss'

import html from '../../logos/html5.png'
import css from '../../logos/css3.png'
import scss from '../../logos/scss.png'
import javaScript from '../../logos/js.png'
import react from '../../logos/react.png'
import mongo from '../../logos/mongodb.png'
import mongoose from '../../logos/mongoose.png'
import node from '../../logos/node.png'

function AboutTech() {

  const [lines, inViewLines] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewLines){
    gsap.from(".tech-line-vert", {transformOrigin: "top", height: 0, stagger: 0.5, duration: 2, ease: "power2"})
    gsap.from(".tech-line-vert-2", {transformOrigin: "top", height: 0, stagger: 0.5, duration: 2, ease: "power2"})
    gsap.from(".tech-line-hori", {transformOrigin: "left", width: 0, stagger: 0.5, duration: 2, ease: "power2"})
    }
  }, [inViewLines])

  const [techText, inViewTechText] = useInView({
    threshold: 1,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewTechText){
    gsap.to(".tech-line", {transformOrigin:"right", width: 100, duration: 1.5, ease: "power2"})
    gsap.to(".tech-text", {x: 0, autoAlpha:1, duration: 1.5, ease: "power2"})
    }
  }, [inViewTechText])

  const [hookText, inViewHookText] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewHookText){
      gsap.to(".tech-hook", {y:0, autoAlpha: 1, duration: 1.5, stagger: 0.2, ease:"power2"})
    }
  }, [inViewHookText])

  const [logos1, inViewLogos1] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewLogos1){
      gsap.to(".logos-1", {y:0, autoAlpha: 1, duration: 1.5, stagger: 0.2, ease:"power2"})
    }
  }, [inViewLogos1])

  const [logos2, inViewLogos2] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewLogos2){
      gsap.to(".logos-2", {y:0, autoAlpha: 1, duration: 1.5, stagger: 0.2, ease:"power2"})
    }
  }, [inViewLogos2])

  return (
    <div className='about-tech-container' ref={lines}>
      <div className="about-tech-context-container">
        <div className="tech-text-column">
          <div className="tech-line-container" ref={techText}>
            <div className="tech-line"></div>
          </div>
          <div className="tech-text">TECHNOLOGIES</div>
          <div className="tech-text-spacer"></div>
        </div>

        <div className="tech-hook-container">
          <div className="tech-hook-container-2" ref={hookText}>
            <div className="tech-hook">What I use to build</div>
            <div className="tech-hook">quality and beautiful websites</div>
          </div>
        </div>
      </div>

      <div className="logo-upper-container" ref={logos1}>
        <div className="logo-upper-line-1 tech-line-hori"></div>
        <div className="logo-upper-line-2 tech-line-hori"></div>

        <div className="logo-upper-spacer-1"></div>
        <div className="logo-upper-left">
          <div className="logo-vert-line-1 tech-line-vert-2"></div>
          <div className="logo-upper-left-left">
            <img className='logos-1' src={html} alt=''></img>
          </div>
          <div className="logo-upper-left-right">
            <img className='logos-1' src={css} alt=''></img>
          </div>
        </div>
        <div className="logo-upper-right">
          <div className="logo-vert-line-2 tech-line-vert-2"></div>
          <div className="logo-upper-right-left">
            <img className='logos-1' src={scss} alt=''></img>
          </div>
          <div className="logo-upper-right-right">
            <img className='logos-1' src={javaScript} alt=''></img>
          </div>
        </div>
        <div className="logo-upper-spacer-2">
          <div className="logo-vert-line-3 tech-line-vert-2"></div>
        </div>
        <div className="logo-upper-spacer-3"></div>
      </div>

      <div className="logo-lower-container" ref={logos2}>
        <div className="logo-lower-line-1  tech-line-hori"></div>
        <div className="logo-lower-spacer-1"></div>
        <div className="logo-lower-left">
          <div className="logo-lower-left-left">
            <img className='logos-2' src={react} alt=''></img>
          </div>
          <div className="logo-lower-left-right">
            <img className="mongo logos-2" src={mongo} alt=''></img>
          </div>
        </div>
        <div className="logo-lower-right">
          <div className="logo-lower-right-left">
            <img className="mongoose logos-2" src={mongoose} alt=''></img>
          </div>
          <div className="logo-lower-right-right">
            <img className="node logos-2" src={node} alt=''></img>
          </div>
        </div>
        <div className="logo-lower-spacer-2"></div>
      </div>

      <div className="tech-background-container">
        <div className="tech-line-1 tech-line-vert"></div>
        <div className="tech-line-2 tech-line-vert"></div>
        <div className="tech-line-3 tech-line-vert"></div>
        <div className="tech-line-4 tech-line-vert"></div>
      </div>
    </div>
  )
}

export default AboutTech