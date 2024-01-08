import React from 'react'
import HGT from '../images/HGT.png'
import DRL from '../images/DRL.png'

import HGRL from '../images/HGRL.png'
import mealApp from '../images/meal app.png'

const Machine= () => {
  return (
    <div className='project-section'>

    <div className='project-container'>
    
    <div className='project-image'>
   
    <div className='description'>
    <h4>Recent Projects</h4>
    <h5><a href='https://doi.org/10.1109/NFV-SDN59219.2023.10329745'>Heterogeneous Graph Transformer for Advanced Persistent Threat Classification in Wireless Networks</a></h5>
    <img src={HGT} className='image-size'/>
    
    </div>
    </div>
   
    </div>

    <hr></hr>
    <div className='project-container'>
    
  
    <div className='project-image'>
   
    <div className='description'>
    <h5><a href=''>
    Deep Reinforcement Learning for Advanced Persistent Threat Detection in Wireless Networks</a></h5>
    <img src={DRL} className='image-size'/>
      
    </div>

    </div>
    </div>
    <hr></hr>
    <div className='project-container'>
  
    <div className='project-image'>
   
    <div className='description'>
    <h5><a href=''>
    Graph-Based Deep Reinforcement Learning for Advanced Persistent Threat Detection in Wireless Networks</a></h5>
    <img src={HGRL} className='image-size'/>
      
    </div>

    </div>
    </div>

<hr></hr>
   
    </div>
  )
}

export default Machine
