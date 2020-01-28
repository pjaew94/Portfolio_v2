import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

import './aboutBgNavi.scss'

import BurgerClick from '../../burger/burgerClick'
import AboutUpper from './aboutUpper/aboutUpper'
import AboutLower from './aboutLower/aboutLower'


function AboutBgNavi() {

  // Logo Animation
  useEffect(() => {
    gsap.from(".logo-container", { y: -30, autoAlpha: 0, duration: 2, delay: 1, ease: "power2" })
  })

  // Burger Functional: Receives state from child component "burgerClick" and animates
  const burgerClickElement = useRef(null)
  const burgerStatus = []

  // Burger Click Handler
  function clickBurger() {
    burgerClickElement.current.changeStatus()


    if (burgerStatus[0] === true) {
      gsap.to('.line-2', { rotation: 225, duration: 1, ease: "power2" })
      gsap.to('.line-cross', { rotation: -45, duration: 1, ease: "power2" })
      gsap.to([".line-1", ".line-3"], { autoAlpha: 0, duration: 0 })
    } else {
      gsap.to('.line-2', { rotation: 0, duration: 1, ease: "power2" })
      gsap.to('.line-cross', { rotation: 0, duration: 1, ease: "power2" })
      gsap.to([".line-1", ".line-3"], { autoAlpha: 1, duration: 0 })
    }

    naviOpen()
  }

  //Burger Initial Animation
  useEffect(() => {
    gsap.from([".line-1", ".line-2", ".line-3"], { y: -20, autoAlpha: 0, duration: 2, delay: 1, stagger: 0.2, ease: "power2" })

    gsap.to(".line-cross", { autoAlpha: 0, duration: 0 })
    gsap.to(".line-cross", { autoAlpha: 1, duration: 0, delay: 7 })
  })

  //Burger Functional Animations
  function hoverBurger() {
    gsap.to('.line-1', { transformOrigin: "left", scaleX: 0, duration: 1, ease: "power2" })
    gsap.to('.line-3', { transformOrigin: "right", scaleX: 0, duration: 1, ease: "power2" })
  }

  function unhoverBurger() {
    gsap.to('.line-1', { scaleX: 1, duration: 1, ease: "power2" })
    gsap.to('.line-3', { scaleX: 1, duration: 1, ease: "power2" })
  }

  // NaviMenu Effects
  function naviOpen() {
    if (burgerStatus[0] === true) {
      gsap.to(".navi-menu-container", { autoAlpha: 1, duration: 1, ease: "power2" })
      gsap.to(".text", { y: 0, opacity: 1, duration: 2, delay: 0.2, stagger: 0.15, ease: "power2" })
    } else {
      gsap.to(".navi-menu-container", { autoAlpha: 0, duration: 0.4, ease: "power2" })
      gsap.to(".text", { y: -30, duration: 0.2, opacity: 0, ease: "power2" })
    }
  }

  function hoverAbout() {
    gsap.to(".about-line", { transformOrigin: "right", width: "70%", duration: 0.3, ease: "power2" })
    gsap.to(".about-me", { x: "5%", duration: 1, ease: "power2" })
  }
  function unhoverAbout() {
    gsap.to(".about-line", { width: 0, duration: 1, ease: "power2" })
    gsap.to(".about-me", { x: 0, duration: 1, ease: "power2" })
  }

  function hoverPortfolio() {
    gsap.to(".portfolio-line", { transformOrigin: "right", width: "70%", duration: 0.3, ease: "power2" })
    gsap.to(".portfolio", { x: "5%", duration: 1, ease: "power2" })
  }
  function unhoverPortfolio() {
    gsap.to(".portfolio-line", { width: 0, duration: 1, ease: "power2" })
    gsap.to(".portfolio", { x: 0, duration: 1, ease: "power2" })
  }

  function hoverContact() {
    gsap.to(".contact-line", { transformOrigin: "right", width: "70%", duration: 0.3, ease: "power2" })
    gsap.to(".contact", { x: "5%", duration: 1, ease: "power2" })
  }
  function unhoverContact() {
    gsap.to(".contact-line", { width: 0, duration: 1, ease: "power2" })
    gsap.to(".contact", { x: 0, duration: 1, ease: "power2" })
  }

  function hoverGithub() {
    gsap.to(".github-line", { transformOrigin: "right", width: "70%", duration: 0.3, ease: "power2" })
    gsap.to(".github", { x: "5%", duration: 1, ease: "power2" })
  }
  function unhoverGithub() {
    gsap.to(".github-line", { width: 0, duration: 1, ease: "power2" })
    gsap.to(".github", { x: 0, duration: 1, ease: "power2" })
  }

  //bottom-text-animations

  useEffect(()=> {
    gsap.from(".portfolio-text-bottom", {y: -50, autoAlpha: 0, delay: 1.5, duration: 2, stagger:0.5, ease:"power2"})
  })

  function portfolioHover() {
    gsap.to(".portfolio-text-bottom", {transformOrigin: "right", color: "rgb(152,152,152)", duration: 0.5, ease: "power2"})
  }
  function portfolioUnhover() {
    gsap.to(".portfolio-text-bottom", {transformOrigin: "left", color: "black", duration: 0.5, ease: "power2"})
  }

  return (
    <div className='about-bg-navi-container'>
      <div className='navi-container'>
        <div className="navi-container-2">
          <div className="logo-container">
            JWP
          <div className="logo-line"></div>
          </div>
          <div className="navi-divider"></div>

          {/* Hamburger HTML */}
          <div className="hamburger-container">
            <div className="burger-container"
              onMouseEnter={hoverBurger}
              onMouseLeave={unhoverBurger}
              onClick={clickBurger}
            >
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3-container">
                <div className="line-3-spacer"></div>
                <div className="line-3"></div>
              </div>
              <div className="line-cross-container">
                <div className="line-cross"></div>
              </div>

              <BurgerClick
                ref={burgerClickElement}
                burgerStatus={burgerStatus}
              />
            </div>
          </div>
        </div>

        {/* NaviMenu HTML */}
        <div className='navi-menu-container'>
          <div className="left-spacer"></div>
          <div className="menu-container">
            <div className="menu-container-2">

              <div className="wrapper">
                <div className="navi-menu-line-container">
                  <div className="navi-menu-line about-line"></div>
                </div>
                <div className="link-wrapper">
                  <Link
                    onMouseEnter={hoverAbout}
                    onMouseLeave={unhoverAbout}
                    onClick={clickBurger}
                    to='/about'
                    className='the-link'
                    exact style={{ textDecoration: 'none' }}
                  />
                  <div className="text about-me">ABOUT ME</div>
                </div>
              </div>
              <div className="wrapper">
                <div className="navi-menu-line-container">
                  <div className="navi-menu-line portfolio-line"></div>
                </div>
                <div className="link-wrapper">
                  <Link
                    onMouseEnter={hoverPortfolio}
                    onMouseLeave={unhoverPortfolio}
                    onClick={clickBurger}
                    to='/portfolio'
                    className='the-link'
                    exact style={{ textDecoration: 'none' }}
                  />
                  <div className="text portfolio">PORTFOLIO</div>
                </div>
              </div>
              <div className="wrapper">
                <div className="navi-menu-line-container">
                  <div className="navi-menu-line contact-line"></div>
                </div>
                <div className="link-wrapper">
                  <Link
                    onMouseEnter={hoverContact}
                    onMouseLeave={unhoverContact}
                    onClick={clickBurger}
                    to='/'
                    className='the-link'
                    exact style={{ textDecoration: 'none' }}
                  />
                  <div className="text contact">CONTACT</div>
                </div>
              </div>
              <div className="wrapper">
                <div className="navi-menu-line-container">
                  <div className="navi-menu-line github-line"></div>
                </div>
                <div className="link-wrapper">
                  <Link
                    onMouseEnter={hoverGithub}
                    onMouseLeave={unhoverGithub}
                    onClick={clickBurger}
                    to='/'
                    className='the-link'
                    exact style={{ textDecoration: 'none' }}
                  />
                  <div className="text github">GITHUB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUpper />
      <AboutLower />

      <div className='bottom-text-container'>
        <div className="bottom-text-container-2">
          <div className="bottom-text-spacer"></div>
          <div className="bottom-text-text">
            <Link
              onMouseEnter={portfolioHover}
              onMouseLeave={portfolioUnhover}
              onClick={clickBurger}
              to='/portfolio'
              className='portfolio-text-bottom'
              exact style={{ textDecoration: 'none' }}
            >
              PORTFOLIO
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}


export default AboutBgNavi
