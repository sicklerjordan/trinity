import React from 'react'
import './Cards.css'
import vidChat from './assets/vid-chat.png'
import roadMap from './assets/roadmap.png'
import growth from './assets/growth.png'


function Cards() {
  return (
    <div>
        <div>
             <h2 className='carousel-header'>We make working together easy.</h2>
        </div>
        <div class="card-container">
            <div className='rectangle'>
                <div className='image-container'>
                    <img src={vidChat} className='card-image' alt=""/>
                </div>
                <div className='card-body'>
                    <h4>1. 30-MINUTE VIDEO CONVERSATION</h4>
                    <p>Get started with a free consultation to help us understand where
                         our team can best help you build and grow your online business.</p>
                </div>
            </div>
            <div className='rectangle'>
                <div className='image-container'>
                    <img src={roadMap} className='card-image' alt=""/>
                </div>
                <div className='card-body'>
                    <h4>2. DIAGNOSTIC ROADMAP</h4>
                    <p>Within a week we’ll diagnose your biggest opportunities and build
                         a custom roadmap to optimize your ecommerce experience.</p>
                </div>
            </div>
            <div className='rectangle'>
                <div className='image-container'>
                    <img src={growth} className='card-image' alt=""/>
                </div>
                <div className='card-body'>
                    <h4>3. GROWTH SERVICES</h4>
                    <p>Our team will start immediately taking action to make improvements and deliver a brand experience that drives lifetime value.</p>
                </div>
            </div>
        </div>
        <div className='trusted'>
            <h5>TRUSTED BY:</h5>
        </div>
    </div>
  )
}

export default Cards