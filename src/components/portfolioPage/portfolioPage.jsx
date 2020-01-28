import React from 'react'
import './portfolioPage.scss'

import PortfolioText from './portfolioText/portfolioText'
import LoadingBackground from './loadingBackground/loadingBackground'
import BottomText from './bottomText/bottomText'
import Slider from './slider/slider'
import Navi from '../navi/navi'



function PortfolioPage() {
  return (
   <div className='portfolio-page-container'>
    <Navi />
    <PortfolioText />
    <LoadingBackground />
    <Slider />
    <BottomText />
    
   </div>
  )
}

export default PortfolioPage