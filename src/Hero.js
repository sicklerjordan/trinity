import React from 'react'
import './Hero.css'
import trinityWhite from './assets/trinity-white.png'


function Hero() {
  return (
    <div className="wrap">
        <div className="clip"></div>
        <div className='nav'>
            <img src={trinityWhite} class="logo" alt=""/> 
            <div className='call-container'>
                <p className='call'>Give us a call! <strong>866-535-8807</strong></p>
            </div>
        </div>
        <h2 className='header'>Gain new insight to grow digital revenues faster.</h2>
        <p className='last'>Sign up for your <strong>FREE</strong> Website Strategy Session ($795 value)</p>
        <div className="img"></div>
   
    </div>
  )
}

export default Hero