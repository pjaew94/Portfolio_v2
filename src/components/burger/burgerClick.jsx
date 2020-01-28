import React, { useState, forwardRef, useImperativeHandle } from 'react'

import './burgerClick.scss'

const BurgerClick = forwardRef((props, burgerClickElement) => {

  const [burgerStatus, setBurgerStatus] = useState(false)

  //Changes status based on parent component (Burger) button
  function changeStatus() {
    if (burgerStatus === false) {
      setBurgerStatus(true)
      props.burgerStatus[0] = true
    } else {
      setBurgerStatus(false)
      props.burgerStatus[0] = false
    }
  }

  useImperativeHandle(burgerClickElement, () => {
    return {
      changeStatus: changeStatus
    }
  })



  return (
    <div className='burger-click-container'>
    </div>
  )
})

export default BurgerClick