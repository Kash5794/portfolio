import React, { useEffect, useState } from 'react'
import image from '../images/profile.jpg'
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../Context';
import {FiCornerUpRight} from 'react-icons/fi'
import {FiCornerRightDown} from 'react-icons/fi'
import {ImPointRight} from 'react-icons/im'


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
    <div className='button-container d-flex justify-content-end'>
    {hand && <ImPointRight size={30} color='white'/>}
    <Link  to='/project'>
      <button className='btnn'> 
      My Projects </button>
   </Link>
    
   
    </div>
    </div>
    
    </div>

  <div className='introduction font-size'>
  <div className='text-white d-flex'>
    <h5 className='p-2' style={{background:'#383913'}}>Introduction</h5>
    </div>

  <p className='mb-4 mw-100' >
  <FiCornerUpRight size={30} color='white'/>
  I am a passionate Software Engineer and AI Researcher with a solid background in full-stack web development, 
  utilizing technologies like React.js, Node.js, Python, SQL, and MongoDB. 
  My journey into the world of technology has been marked by a deep-seated curiosity and a relentless pursuit of innovative solutions.
  </p>
  <p className='mb-4 mw-100'>
  Concurrently as a final year research student, I am dedicating my efforts to pioneering a groundbreaking solution for the detection of Advanced Persistent Threat (APT) attacks in wireless networks. 
  In my quest to fortify network security, I harness the power of AI frameworks, such as Graph Neural Networks, Reinforcement Learning, 
  and Network Pruning. These cutting-edge technologies enable me to develop intelligent systems capable of identifying and mitigating cyber threats effectively.

  </p>

  <p className='mb-4 mw-100'>
  I am now actively seeking a role as a full-stack developer, where I can not only apply my hands-on experience in web development but also leverage my expertise in artificial intelligence to create dynamic and intelligent web applications. 
My journey as a Software Engineer and AI Researcher has prepared me to take on challenges, solve complex problems, and contribute to the development of innovative and secure web solutions.
  </p>

<div>
<div className='text-white d-flex'>
    <h5 className='p-2' style={{background:'#383913'}}>Achievement</h5>
    <FiCornerRightDown size={30} color='white'/>
    </div>

<ol>
<li>A presenter at the 2023 IEEE Network Virtualization Conference hosted in Germany.</li>
<li>A first-class graduate of computer engineering.</li>
<li>A former awardee of the NAWA postgraduate scholarship in Poland</li>
<li>An holder of the postgraduate research scholarship at the Atlantic Technological University, Ireland.</li>
</ol>

</div>


<div>
<div className='text-white d-flex'>
    <h5 className='p-2' style={{background:'#383913'}}>Research Areas</h5>
    <FiCornerRightDown size={30} color='white'/>
    </div>

<ol>
<li>Network traffic modeling using graph neural networks</li>
<li>Deep reinforcement learning</li>
<li>Network sparsification</li>
<li>Real-time threat detection</li>
</ol>

</div>


  </div>


    
    </div>
  )
}

export default Section