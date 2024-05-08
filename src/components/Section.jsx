import React, { useEffect, useState } from 'react'
import profile from '../images/AICS1.png'
import profile2 from '../images/profile3.jpg'
import ml from '../images/ML.png'
import web from '../images/web.png'
import aics1 from '../images/aics1.jpg'
import aics2 from '../images/aics2.jpg'
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
import { AiFillCaretRight } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";

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
  const {handleContactClick,bodyColor,setBodyColor}= useGlobalContext()

const [togglerColor, setTogglerColor] = useState('black')


const setToggleMode= ()=>{

  if (bodyColor){
    setBodyColor(false)
    setTogglerColor('black')
  }

  else{
    setBodyColor(true)
    setTogglerColor('white')
  }
}




  return (
    <div className='section-parent' style={{backgroundColor:bodyColor?'#191919':'white'}}>

<div className='section'>

<div className='image-container'>
    
<img src={profile} alt='profile'/>
<div >
<h2 style={{color:bodyColor?'white':''}}>Software Engineer</h2>
<h5 style={{color:bodyColor?'white':'blue'}}>Researches, Builds, & Deploys Machine Learning Solutions</h5>
<h6 style={{color:bodyColor?'white':'darkblue'}}>Also adept at developing responsive websites</h6>
</div>

</div>
<div className='d-flex justify-content-center gap-5' >
<button type="button" className="btn btn-primary " ><a href='#scroll-project'>My Projects</a></button>
<button type="button" className="btn btn-secondary"><a href='#scroll-contact'>Contact Me</a></button>
</div>
<hr></hr>
<h4 style={{marginTop:'100px',color:bodyColor?'white':''}}>Tech-Stack</h4>
<div className='tech-stack'>

<AiFillCaretRight size={100} />

<ul>
<li>Frontend: ReactJS, HTML,CSS, Bootstrap</li>
<li>Backend: NodeJS, Python</li>
<li>Machine Learning: Tensorflow, Pytorch, Keras</li>
<li>Database: MySQL,MongoDB,Postgresql</li>
<li>Cloud Technology: AWS, Azure</li>

</ul>
</div>

<hr></hr>

<h4 style={{color:bodyColor?'white':''}}>Tech Meetup & Conferences</h4>
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



<hr></hr>

<div className='introduction' id="scroll-project">

<h4 className='p-2' style={{color:bodyColor?'white':''}}>Projects</h4>


<div className='technology-stack-container'>
<Link to='/machine'>
 
<div className='technology-stack-image-container'>
  <img src={ml} alt='machine learning'/>
<div className='ML-title'><h5>Machine Learning</h5></div>
</div>
</Link>

<Link  to='/web'>
<div className='technology-stack-image-container'>
  <img src={web} alt='web development'/>
<div className='web-title'><h5>Web</h5></div>
</div>
</Link>
</div>



</div>


<div className='dark-mode' onClick={setToggleMode}>
<MdDarkMode size={30} color={togglerColor}/>

</div>



</div>









    </div>
   
  )
}

export default Section