import React from 'react'
import '../styles/Content.css'
import hero from '../media/illustration-hero (1).svg'

const Content = () => {
    let chromeStore = 'https://chrome.google.com/webstore/unsupported'
    let firefoxStore = 'https:/addons.mozilla.org/en-US/firefox/'
  return (
    <div className='content'>
        <div className="text-content">
            <h1>
                A Simple Bookmark Manager
            </h1>
            <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly.Try it for free.</p>

            <div className='links'>
                <a href={chromeStore} className='chrome-btn'>Get it on Chrome</a>
                <a href={firefoxStore} className='firefox-btn'>Get it on Firefox</a>
            </div>

        </div>
        <div className="image-content">
            <img src={hero} alt="" />
        </div>

    </div>
  )
}

export default Content