import React from 'react'
import eCommerce_desktop from '../images/eCommerce_desktop.jpg'
import eCommerce_mobile from '../images/eCommerce_mobile.jpg'
import chatApp1 from '../images/chat app dashboard.png'
import mealApp from '../images/meal app.png'

const Web= () => {
  return (
    <div className='project-section'>
      
   
    <div className='project-container'>
  
    <div className='project-image'>
    
    <div className='description'>
    <h4>Recent Projects</h4>
    <h5><a href='https://main--tangerine-daifuku-6d1d18.netlify.app/'>An E-Commerce Web Application</a></h5>
    <img src={eCommerce_desktop} className='image-size'/>
      <h6>Features' description</h6>  
      <ul>
    <li>A signup and login page connected to firebase</li>
    <li>A dashboard containing all items and each section</li>
    <li>A search bar for looking-up items</li>
    <li>A bookmark button for adding items to cart</li>
    <li>A counter for tracking cart items</li>
    <li>An item preview modal page</li>
    <li>A dummy checkout page</li>
      </ul>
    <a href='https://fakestoreapi.com/'>API Docs</a>
    </div>
    </div>
   
    </div>

    <hr></hr>
    <div className='project-container'>
    
  
    <div className='project-image'>
   
    <div className='description'>
    <h5><a href='https://catchya-fdd29e2cbbba.herokuapp.com/'>
    CatchYa:A Chat Application</a></h5>
    <img src={chatApp1} className='image-size'/>
      <h6>Features' description</h6>
      
      <ul>
    <li>A signup and login page connected to ATLAS through an express server</li>
    <li>An OTP verification page for confirming mobile numbers</li>
    <li>Sensitive information are encrypted before storing in database</li>
    <li>JWT tokens are generated for tracking sessions expiry period</li>
    <li>A dashboard containing a list of friends and chat sections</li>
    <li>A profile picture feature</li>
    <li>A list of REST API endpoints created for adding friends,posting messages, uploading pictures,etc</li>
      
      
      </ul>
    <a href=''>For privacy, APIs are not publicly available</a>
    </div>

    </div>
    </div>
    <hr></hr>
    <div className='project-container'>
  
    <div className='project-image'>
   
    <div className='description'>
    <h5><a href=''>
    A Meal Selection Web App</a></h5>
    <img src={mealApp} className='image-size'/>
      <h6>Features' description</h6>
      
      <ul>
    <li>Select, add and delete meals from favorite</li>
    <li>Get a random meal or search for a specific one</li>
    <li>Get the information of each selected meal</li>
      
      </ul>
    <a href='https://www.themealdb.com/'>API Docs</a>
    </div>

    </div>
    </div>


    </div>
  )
}

export default Web
