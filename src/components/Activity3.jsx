import React, { useEffect, useState } from 'react'
import image from '../images/profile.jpg'
import ml from '../images/ML.png'
import web from '../images/web.png'
import aics1 from '../images/aics1.jpg'
import aics2 from '../images/aics2.jpg'
import ernact from '../images/ernact.jpg'
import ernact2 from '../images/ernact2.jpg'
import ernact3 from '../images/ernact3.jpg'
import nfv from '../images/nfv.png'

import {Link} from 'react-router-dom';


const Activity3 = () => {



  return (
    <div className='section'>

<div className='activity2'>
<h5>Navigating the Future of Network Security: Insights from the 2023 IEEE NFV-SDN Conference</h5>
    <img src={nfv} alt='ernact'/>
   <p>As a research student and an invited author, I participated in the 2023 IEEE Conference on Network Function Virtualization and Software-Defined Networks (NFV-SDN). 
    This groundbreaking conference, at the forefront of network technology, delved into the realms of virtualized network functions, emphasizing the significance of Cloud Native CNFs alongside traditional VNFs. </p>
   
   <p>My presentation at this esteemed event revolved around the revolutionary concept of the "Heterogeneous Graph Transformer" designed for Advanced Persistent Threat (APT) classification in wireless networks. APTs, notorious for their sophisticated cyberattacks, have posed continuous challenges to organizations by exploiting zero-day vulnerabilities and engaging in intricate, undetectable malware generation.</p>
    
    <p>
    In response to these challenges, we introduced a groundbreaking approach, modeling APTs as heterogeneous graphs. 
    By capturing diverse features and intricate interactions within network flows, this approach transcends the limitations of traditional deep neural networks, which often struggle to comprehend the inherent graph structure and contextual information vital for network traffic analysis.</p>
    
    <p>
    At the heart of our solution lies the Heterogeneous Graph Transformer (HGT) model. This innovative model goes beyond conventional techniques, providing a robust framework to distinguish between benign and malicious network connections with unparalleled accuracy.
     By harnessing the power of heterogeneous graphs, the HGT model opens new avenues for proactive and effective APT detection.
    </p>

    <p>
    As we navigate the ever-evolving landscape of cyber threats, the insights shared at the 2023 IEEE NFV-SDN Conference mark a significant milestone. Our approach, rooted in the transformative potential of heterogeneous graphs and advanced transformer models, signifies a paradigm shift in network security. 
    We envision a future where organizations can fortify their defenses against APTs, safeguarding their networks with precision and resilience.
    </p>

  



    </div>
   
  
   

    </div>
  )
}

export default Activity3