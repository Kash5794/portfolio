import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <main className='d-flex footer-container justify-content-center text-center'>
        
        <div id='scroll-contact'>
<h4>Let's connect...</h4>
<p>Email address: kazeemsaheed49@gmail.com</p>
<div className='d-flex justify-content-center gap-5'>
<a href='https://www.linkedin.com/in/i-am-kazeem-saheed/'><FaLinkedin size={25} /></a>
<a href='https://github.com/Kash5794'><FaGithub size={25} /></a>

</div>

        </div>
        
        
        </main>
  )
}

export default Footer