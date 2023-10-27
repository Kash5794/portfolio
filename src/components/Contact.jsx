import {AiFillCloseSquare} from 'react-icons/ai'
import {FcApproval} from 'react-icons/fc'

import {useGlobalContext} from '../Context'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const {handleContactClick,setMessageSent,messageSent}= useGlobalContext()
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const[requirement,setRequirement] = useState(false)
  
    const form = useRef();
    
   
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current)

      if((email!='') &&(text!='')){
      emailjs.sendForm('service_te4kgdl', 'template_1q2shgr', form.current, 'rR3sTeWiYlxnsROcl')
        .then((result) => {
            console.log(result.text);
            if(result.text=='OK'){
              setMessageSent(true)
            }
        }, (error) => {
            console.log(error.text);
        });
        setRequirement(false)
       }
    else{
      setRequirement(true)
    }

      
    };


  return (
    <div className='form-container'>
      {messageSent&&<div className='message-success'>
        
        Message sent <FcApproval size={20}/></div>}
      
    <form ref={form} onSubmit={sendEmail}>
    <div className='close' onClick={handleContactClick}><AiFillCloseSquare size={30} /></div>   
        
    <div ><label>Email:</label></div>
    <input type='email' placeholder='Enter your email' name='user_email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
    
    <div><label>Message:</label></div>
    <textarea rows="10" cols="30" name='message' value={text} onChange={(e)=>setText(e.target.value)}></textarea><br/>
    {requirement&&<p style={{fontSize:'12px',color:'red',position:'absolute'}}>Invalid or null entries!!!</p>}
    <div className='send'>
    <input type='submit'value='send'/>
    </div>
    
    </form>
    </div>
   
  )
}

export default Contact