import React, {useState,useEffect} from 'react'
import {useGlobalContext} from '../Context'
import { FcMenu } from "react-icons/fc";
import {Link} from 'react-router-dom';
import CV from '../pdf/CV.pdf'
const Header = () => {
const {screenWidth,showMenuContainer,handleMenuContainer,headerColor}= useGlobalContext()




if (screenWidth <=446){
   
    console.log(headerColor)
    return <header style={{background:headerColor}}> 
    <div className='sub-header' style={{background:headerColor}}>

    <div className='menu-title'>
       <h5>Saheed Kazeem</h5>
   </div>
<FcMenu size={30} color='white' onClick={handleMenuContainer} style={{cursor:'pointer'}} />
    </div>
   {showMenuContainer && <div className='menu-container-block'>
   <div><Link style={{color:'white'}} to='/'> Home </Link> </div>
    <div><Link style={{color:'white'}} to={CV} download='KazeemSaheedCV' target="_blank" rel="noreferrer">Resume</Link></div>
    <div><a href='https://linkedin.com/in/i-am-kazeem-saheed' target='_blank'>Linkedln</a></div>
    <div><a href='https://github.com/Kash5794' target='_blank'>Github</a></div>
    <div>About</div>
    </div>}
   
   </header>
}
  return (
    <header>
   <div className='sub-header'>
   <div className='menu-title'>
        <h5>Saheed Kazeem</h5>
    </div>
  
    <div className='menu-container'>
    <div><Link style={{color:'white'}} to='/'> Home </Link> </div>
    <div><Link style={{color:'white'}} to={CV} download='KazeemSaheedCV' target="_blank" rel="noreferrer">Resume</Link></div>
    <div><a href='https://linkedin.com/in/i-am-kazeem-saheed' target='_blank'>Linkedln</a></div>
    <a href='https://github.com/Kash5794' target='_blank'>Github</a>
    <div>About</div>
    </div>
   </div>
    
    </header>
  )
}

export default Header