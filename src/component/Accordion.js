import React from 'react'
import '../styles/Accordion.css'

const Accordion = () => {
  return (
    <div className='accordion'>
        <div>
            <input type="radio"name='faqs-accordion' id='question1'className='accordion-input' />
            <label htmlFor="question1" className='accordion-label'>What is Bookmark?</label>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente eum.
                </p>
            </div>
        </div>

        <div>
            <input type="radio"name='faqs-accordion' id='question2'className='accordion-input' />
            <label htmlFor="question2" className='accordion-label'>How can i request a new browser?</label>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maxime dolorum sint eius incidunt beatae, quibusdam unde veniam! Debitis dolorem fugit eum. Cum quas explicabo assumenda aperiam, incidunt facere eius.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum itaque accusantium enim corrupti? Molestiae autem non animi illum. Odio, cum!
                </p>
            </div>
        </div>

        <div>
            <input type="radio"name='faqs-accordion' id='question3'className='accordion-input' />
            <label htmlFor="question3" className='accordion-label'>is there a mobile app?</label>
            <div className="accordion-content">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in commodi atque vero, nostrum doloribus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente eum.
                </p>
            </div>
        </div>

        <div>
            <input type="radio"name='faqs-accordion' id='question4'className='accordion-input' />
            <label htmlFor="question4" className='accordion-label'>What about other Chromium browsers?</label>
            <div className="accordion-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate dolores. Possimus ratione nam officia dolore consectetur iste sapiente eum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum!
                </p>
            </div>
        </div>

    </div>
  )
}

export default Accordion