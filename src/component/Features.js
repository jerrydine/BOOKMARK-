import React from 'react'
import '../styles/Features.css'

const Features = () => {
  return (
    <div className='features'>
        <h1>Features</h1>
        <p>Our aim is to make it quick and easy for you to access your favorite websites.
            Your bookmarks sync between your devices so you access them on the go.
        </p>
        <div className="listing">
            <ul>
                <li className='simple'>Simple Bookmarking</li>
                <li className='speedy'>Speedy Searching</li>
                <li>Easy Sharing</li>
            </ul>
        </div>

    </div>
  )
}

export default Features