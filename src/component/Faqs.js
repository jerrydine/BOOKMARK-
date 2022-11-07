import React, { useState } from 'react'
import '../styles/Faqs.css'
import Accordion from './Accordion'

const Faqs = () => {
  const[state, setState]= useState(false)
  return (
    <div className='faqs'>
        <h1>Frequently Asked Questions</h1>
        <p>Here are some of our FAQS.if you have any other 
            questions you'd like answered please feel free to email us.
        </p>
        <div className="accordion-container">
          <Accordion/>
        <div>
          {state && <More/>}
        </div>
        <div className="faq-link">
          <button onClick={()=>setState(!state)} className='faq-btn'>{state? 'Less Info' : 'More Info'}</button>
          
        </div>

      </div>

    </div>
  )
}
function More(){
  return(
    <div className='accordion '>
    <div>
        <input type="radio"name='faqs-accordion' id='question5'className='accordion-input' />
        <label htmlFor="question5" className='accordion-label more-accordion'>Directions For Use</label>
        <div className="accordion-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente eum.
            </p>
        </div>
    </div>

    <div>
        <input type="radio"name='faqs-accordion' id='question6'className='accordion-input' />
        <label htmlFor="question7" className='accordion-label'>Reach Us</label>
        <div className="accordion-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maxime dolorum sint eius incidunt beatae, quibusdam unde veniam! Debitis dolorem fugit eum. Cum quas explicabo assumenda aperiam, incidunt facere eius.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum itaque accusantium enim corrupti? Molestiae autem non animi illum. Odio, cum!
            </p>
        </div>
    </div>

    <div>
        <input type="radio"name='faqs-accordion' id='question7'className='accordion-input' />
        <label htmlFor="question7" className='accordion-label'>Reviews</label>
        <div className="accordion-content">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in commodi atque vero, nostrum doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente eum.
            </p>
        </div>
    </div>

</div>
  )
}

export default Faqs