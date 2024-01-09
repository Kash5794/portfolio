import React, { useEffect, useState } from 'react'
import image from '../images/profile.jpg'
import ml from '../images/ML.png'
import web from '../images/web.png'
import aics1 from '../images/aics1.jpg'
import ernact from '../images/ernact.jpg'
import ernact2 from '../images/ernact2.jpg'
import nfv from '../images/nfv.png'

import {Link} from 'react-router-dom';
import { useGlobalContext } from '../Context';
import {FiCornerUpRight} from 'react-icons/fi'
import {FiCornerRightDown} from 'react-icons/fi'
import {ImPointRight} from 'react-icons/im'
import { BarChart } from '@mui/x-charts/BarChart';
import { BarPlot } from '@mui/x-charts/BarChart';


import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const Section = () => {
  const {handleContactClick}= useGlobalContext()

const [hand, setHand] = useState(false)

useEffect(()=>{

setInterval(()=>{
  if(hand){
    setHand(false)
  }
  else{
    setHand(true)
  }
  },1000)
},[])

  return (
    <div className='section'>

    <div className='image-container'>
        
    <img src={image} alt='profile'/>
    <div >
    <h4  style={{fontSize:'20px'}}>Software Engineer/AI Researcher</h4>
    
    </div>
    
    </div>

  <div className='introduction'>
  
    <h5 className='p-2'>Projects</h5>
   

  <div className='technology-stack-container'>
  <Link to='/machine'>
     
    <div className='technology-stack-image-container'><img src={ml} alt='machine learning'/>
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    
      <h5>Machine Learning</h5>
      </div>
    </div>
    </Link>
    <Link  to='/web'>
    <div className='technology-stack-image-container'><img src={web} alt='web development'/>
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <h5>Web Development</h5>
    </div>
    </div>
    </Link>
  </div>

  <h5 className='p-2'>Skills</h5>
  <h6>Programming</h6>
    <div className='chart-container shadow p-3 mb-5 bg-body rounded'>
 
       <div className='chart'>

        {/* @ts-ignore */}
        <ResponsiveChartContainer 

        sx={{margin:'0px',padding:'0px'}}
          series={[
            {
              type: 'bar',
              data: [40,38,98,92,55,95,65],
              color: 'darkblue'
            },
            
          ]}
          xAxis={[
            {
              data: ['C', 'C++', 'HTML', 'JS', 'Java','Python','SQL'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}

          yAxis={[
            { id: 'yAxis',scaleType: 'linear' },
            
          ]}
      
        >
          <BarPlot />
        
          <MarkPlot />
          <ChartsXAxis label="Languages" position="bottom" axisId="x-axis-id" />
          <ChartsYAxis label="Proficiency Level" position="left" axisId="yAxis" />
        </ResponsiveChartContainer >
      </div>
 


<div className='chart'>
        {/* @ts-ignore */}
        <ResponsiveChartContainer 
         sx={{margin:'0px',padding:'0px'}}
          series={[
            {
              type: 'bar',
              data: [96, 84, 72,60,84, 72,72],
              color: 'red'

            },
            
          ]}
          xAxis={[
            {
              data: ['C', 'C++', 'HTML', 'JS', 'Java','Python','SQL'],
              scaleType: 'band',
              id: 'x-axis-id',
            },
          ]}

          yAxis={[
            { id: 'yAxis',scaleType: 'linear' },
            
          ]}
          
        >
          <BarPlot />
        
          <MarkPlot />
          <ChartsXAxis label="Languages" position="bottom" axisId="x-axis-id" />
          <ChartsYAxis label="Months" position="left" axisId="yAxis" />
        </ResponsiveChartContainer >
      </div>


      </div>

    <h5>Machine Learning Research Areas</h5>  

    <ol>
<li>Deep learning for malware detection</li>
<li>Deep reinforcement learning</li>
<li>Malware behavior modeling using graph neural networks</li>
<li>Model compressions including network pruning and graph sparsifications</li>
</ol>
  </div>


  <h5 className='p-2 bg-danger text-light'>Recent Activities</h5>
    
   
   
  <div className='activities'>

<div>
  <Link to='/activity/1'>
<img src={aics1}/>
<h6>31st Irish Conference on Artificial Intelligence and Cognitive Science</h6>
</Link>
</div>

<div>
<Link to='/activity/2'>
<img src={ernact2}/>
<h6>Unlocking the Power of AI for Public Service Protection in Cyber Space</h6>
</Link>
</div>

<div>
  <Link to='/activity/3' >
<img src={nfv}/>
<h6>Navigating the Future of Network Security: Insights from the 2023 IEEE NFV-SDN Conference</h6>
</Link>
</div>

</div>

   

    </div>
  )
}

export default Section