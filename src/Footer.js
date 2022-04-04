import React from 'react'
import emblem from './assets/emblem-white.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <img src={emblem} className='emblem' alt=""/>
            <p className='foot'>© 2020 Trinity Insight, LLC. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer