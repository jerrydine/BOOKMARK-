import React, { useState } from 'react'
import '../styles/Main.css'
import tab from '../media/illustration-features-tab-1.svg'

const Main = () => {
    const[state, setState]= useState(false)
    // let moreinfo = "#"

  return (
    <div className='main'>
        <div className="main-image">
            <img src={tab} alt="" />
        </div>

        <div className="main-text">
            <h1> 
                Bookmark in one click
            </h1>
            <p>Organize you bookmarks however you like. Our simple drag-and-drop interface gives you complete
                control over how you manage your favourite sites.{state && <More/>}
            </p>
            
            <div className='main-link'>
                <button onClick={()=>setState(!state)} className='main-btn'>{state ? 'Less Info' : 'More Info'} </button>
                
            </div>
            
        </div>
        
    </div>
  )
}
function More(){
    return(
        <div className='more'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea quam, vel voluptates aut alias.
            
            </p>
        </div>
    )
}

export default Main