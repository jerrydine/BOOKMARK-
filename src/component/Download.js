import React from 'react'
import '../styles/Download.css'
import Card from './Card'
import chrome from '../media/logo-chrome.svg'
import firefox from '../media/logo-firefox.svg'
import opera from '../media/logo-opera.svg'

const Download = () => {
  let chromeStore = 'https://chrome.google.com/webstore/unsupported'
  let firefoxStore = 'https:/addons.mozilla.org/en-US/firefox/'
  let operaStore ='https://addons.opera.com/en/extensions/'
  return (
    <div>
        <div className="download-head">
            <h1>Download the extension</h1>
            <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize. </p>

            <div className="download-card">
              <Card
              img={chrome}
              browser='Add to Chrome'
              version= 'Minimum version 62'
              link ={chromeStore}
              />
              <Card 
              img={firefox}
              browser='Add to Firefox'
              version= 'Minimum version 55'
              link ={firefoxStore}
              />
              <Card
              img={opera}
              browser='Add to Opera'
              version= 'Minimum version 46'
              link ={operaStore}
              /> 
            </div>
        </div>
        
    </div>
  )
}

export default Download