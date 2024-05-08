import React, {useState,useEffect} from 'react'
import {useGlobalContext} from '../Context'
import { FcMenu } from "react-icons/fc";
import {Link} from 'react-router-dom';
import CV from '../pdf/CV.pdf'
const Header = () => {
const {screenWidth,showMenuContainer,handleMenuContainer,headerColor,bodyColor,setBodyColor}= useGlobalContext()




if (screenWidth <=446){
   
    console.log(headerColor)
    return <header style={{height:headerColor?'220px':'60px',backgroundColor:bodyColor?'#191919':'white'}}> 
    <div className='sub-header' >

    <div className='menu-title' style={{color:bodyColor?'white':'blue'}}>
       <h5>Saheed Kazeem</h5>
   </div>
<FcMenu size={30} color='white' onClick={handleMenuContainer} style={{cursor:'pointer'}} />
    </div>
   {showMenuContainer && <div className='menu-container-block'>
   <div><Link style={{color:bodyColor?'white':'#06415B'}}  to='/'> Home </Link> </div><hr></hr>
    <div><Link style={{color:bodyColor?'white':'#06415B'}}  to={CV} download='KazeemSaheedCV' target="_blank" rel="noreferrer">Resume</Link></div><hr></hr>
    <div><a style={{color:bodyColor?'white':'#06415B'}} href='https://linkedin.com/in/i-am-kazeem-saheed' target='_blank'>Linkedln</a></div><hr></hr>
    <div><a style={{color:bodyColor?'white':'#06415B'}} href='https://github.com/Kash5794' target='_blank'>Github</a></div><hr></hr>
    <div style={{color:bodyColor?'white':'#06415B'}}>About</div>
    </div>}
   
   </header>
}
/**#06415B */
  return (
    <header style={{backgroundColor:bodyColor?'#191919':'white'}}>
   <div className='sub-header' >
   <div className='menu-title' style={{color:bodyColor?'white':'blue'}}>
        <h5>Saheed Kazeem</h5>
    </div>
  
    <div className='menu-container' >
    <div><Link style={{color:bodyColor?'white':'#06415B'}}  to='/'> Home </Link> </div>
    <div><Link style={{color:bodyColor?'white':'#06415B'}}  to={CV} download='KazeemSaheedCV' target="_blank" rel="noreferrer">Resume</Link></div>
    <div><a style={{color:bodyColor?'white':'#06415B'}} href='https://linkedin.com/in/i-am-kazeem-saheed' target='_blank'>Linkedln</a></div>
    <div><a style={{color:bodyColor?'white':'#06415B'}} href='https://github.com/Kash5794' target='_blank'>Github</a></div>
    <div style={{color:bodyColor?'white':'#06415B'}}>About</div>
    </div>
   </div>
    
    </header>
  )
}

export default Header