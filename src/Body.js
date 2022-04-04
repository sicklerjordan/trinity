import React from 'react'
import './Body.css'
import { GoCheck } from 'react-icons/go'

function Body() {
  return (
    <div className='body-container'>
        <p className='consult'>In a <strong>FREE</strong> consultation discussion with our CEO,
          &nbsp;<u>Craig Smith</u> you will receive  a live website review, complete with our toolsets,
          to help you understand what digital growth opportunities exist in your business.<br/><br/>
          Within your strategy session you will receive:
        </p>
        <div className='list'>
            <div className='p-container'>
                <GoCheck className='check'/><p>An expert analysis of your eCommerce store or website</p>
            </div>
            <div className='p-container'>
                <GoCheck className='check'/><p>Diagnostic SEO Crawl Report</p>
            </div>
            <div className='p-container'>
                <GoCheck className='check'/><p>Site Speed & Performance Assessment</p>
            </div>
            <div className='p-container'>
                <GoCheck className='check'/><p>User Experience Review and Recommendations</p>
            </div>
            <div className='p-container'>
                <GoCheck className='check'/><p>Email & Marketing Automation Review</p>
            </div>
            <div className='p-container'>
                <GoCheck className='check'/><p>No Obligations & 100% FREE</p>
            </div>
        </div>
        <div class="request-form">
                <div className='form-header'>
                    <p className='free'>FREE</p>
                    <h2 className='website-strategy-ses'>Website Strategy Session</h2>
                </div>
            <form  method="get" name="myForm" className='form'>
                <label for="fname" className='label'>First Name</label>
                <input type="text" id="fname" name="fname" className='input'/>
                <label for="lname" className='label'>Last Name</label>
                <input type="text" id="lname" name="lname" className='input'/>
                <label for="lname" className='label'>Website</label>
                <input type="text" id="lname" name="lname" className='input'/>
                <label for="lname" className='label'>Email *</label>
                <input type="text" id="lname" name="lname" className='input'/>
                <label for="lname" className='label'>Phone Number</label>
                <input type="text" id="lname" name="lname" className='input'/>
                <input type="button" className='button-form' value="Request Session"></input>
            </form>
        </div>
        <hr />
    </div>
  )
}

export default Body