import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import logo from '../media/logo-bookmark.svg'
import '../styles/Navbar.css'
// import hamburger from '../media/icon-hamburger.svg'

const Navbar = () => {
    const[state, setState]= useState(false)
    let features = '#'
    let pricing = '#'
    let contact = '#'
    let login = '#'
     

  return (
    <div>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="desktop-menu">
                <li><a href={features}>Features</a></li>
                <li><a href={pricing}>Pricing</a></li>
                <li><a href={contact}>Contact</a></li>
                <li><a href={login} className="btn-log">LOGIN</a></li>
            </ul>
            <div className="mobile-nav">
                <div className="mobile-menu">
                    <a href="#" className="menu-bar" onClick ={()=>setState(!state)}>{state? <FaTimes size={25} /> : <FaBars size={25}/>} </a>
                    
                </div >
            </div>
            {state && <MobileMenu/>}
        </nav>
    </div>
  )
}

function MobileMenu(){
    return(
        <div className="menu-container">
            <ul className='menu-list'>
               <li><a href='#'>Features</a></li>
               <li><a href='#'>Pricing</a></li>
               <li><a href='#'>Contact</a></li>
               <li>                    
                <a href='#'className="btn-log">LOGIN</a>
               </li>
            </ul>
    </div>
    )
}

export default Navbar