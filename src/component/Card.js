import React from 'react'
import '../styles/Card.css'
import dot from '../media/bg-dots.svg'
// import chrome from '../media/logo-chrome.svg'

const Card = (props) => {
    // let chromeStore = 'https://chrome.google.com/webstore/unsupported'
  return (
    <div className='card'>
        <img src={props.img}/>
        <div className='card-text'>
            <h3>{props.browser}</h3>
            <p>{props.version}</p>
        </div>
        
        <img src={dot} className='dot' alt="" />
        <a href={props.link} target='_blank' >Add & Install Extension</a>

    </div>
  )
}

export default Card