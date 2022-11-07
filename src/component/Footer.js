import React from 'react'
import '../styles/Footer.css'
import footerlogo from '../media/logo-footer-bookmark.svg'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
    let fblink ='https://www.facebook.com'
    let twitterlink = 'https://www.twitter.com'
  return (
    <div className='footer'>
        <div className="footer-nav">
            <img src={footerlogo} alt="" className="footer-logo" />
            <ul>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="social-link">
            <a href={fblink} className="fb-link"><FaFacebookSquare className='icon' size ={30} /></a>
            <a href={twitterlink} className="twitter-link" ><FaTwitterSquare className='icon' size ={30} /></a>
        </div>
    </div>
  )
}

export default Footer