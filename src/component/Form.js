import React, { useState } from 'react'
import '../styles/Form.css'

const Form = () => {
  
  return (
    <div className='form-container'>
        <div>
            <div className='footer-text'>
               <p>35,000+ ALREADY JOINED</p>
               <h1>Stay up-to-date with what<br />we're doing</h1> 
            </div>
            
            <div className="form-box">
                <div className="form-input">
                    <form action="" >
                       <input type="email"id='email'placeholder='example@email.com'/><br />
                       <small>whoops, make sure it's an email</small> 
                    </form>
                    
                </div>

                <button>Contact Us</button>
                
            </div>
        </div>
       
       
    </div>
  )
}

export default Form