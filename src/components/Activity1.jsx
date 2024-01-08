import React, { useEffect, useState } from 'react'
import image from '../images/profile.jpg'
import ml from '../images/ML.png'
import web from '../images/web.png'
import aics1 from '../images/aics1.jpg'
import aics2 from '../images/aics2.jpg'
import ernact from '../images/ernact.jpg'
import ernact2 from '../images/ernact2.jpg'
import nfv from '../images/nfv.png'

import {Link} from 'react-router-dom';


const Activity1 = () => {



  return (
    <div className='section'>

<div className='activity1'>
    <h5>31st Irish Conference on Artificial Intelligence and Cognitive Science</h5>
    <img src={aics2} alt='aics'/>
   <p>I had the privilege of presenting my cutting-edge research in the realm of AI for cybersecurity at the esteemed 31st Irish Conference on Artificial Intelligence and Cognitive Science (AICS). 
    The event, held at Atlantic Technological University in County Donegal, Ireland, served as a pivotal platform for bringing together leading researchers in the fields of Artificial Intelligence (AI) and Cognitive Science.</p>
   
   <p>The AICS Conference stands as Ireland's primary forum, uniting researchers in AI and Cognitive Science. This multidisciplinary conference spans crucial areas, including Data Analytics, 
    Natural Language Processing, Information Retrieval, and Machine Learning. These domains are currently at the forefront of computing research and industry advancements in Ireland.</p>
    
    <p>
    Given the escalating threats in the cybersecurity landscape, my presentation delved into the evolving challenges posed by Advanced Persistent Threats (APTs). 
    Recent cyberattacks have transitioned from causing mere financial losses or service disruptions to stealthily extracting confidential data. APTs, characterized by dynamic and sophisticated attack mechanisms, have emerged as a significant challenge.
    </p>
    
    <p>
    Given the escalating threats in the cybersecurity landscape, my presentation delved into the evolving challenges posed by APTs. 
    Recent cyberattacks have transitioned from causing mere financial losses or service disruptions to stealthily extracting confidential data. APTs, characterized by dynamic and sophisticated attack mechanisms, have emerged as a significant challenge.
    </p>

    <p>
    As a dedicated researcher focused on pioneering solutions for cyber attack detection, I presented a groundbreaking Deep Reinforcement Learning approach tailored for APT detection. 
    This innovative method addresses the inadequacies of static approaches, offering adaptability to the dynamic and evolving nature of sophisticated cyber threats.  
    </p>

    <p>
    The presentation garnered substantial interest from the diverse group of researchers and attendees present at the event. 
    Engaging discussions ensued, providing a platform for the exchange of ideas and insights into the evolving landscape of AI in healthcare, robotic, cybersecurity and other areas.
    </p>


    </div>
   
  
   

    </div>
  )
}

export default Activity1