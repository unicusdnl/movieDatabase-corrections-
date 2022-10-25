import React from 'react'
import './signin.css'
import { useRef, useState, state} from 'react';
import emailjs from 'emailjs-com';
import logo from '../../images/logo.svg'
import arrow from '../../images/arrow.png'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {GoSignIn} from 'react-icons/go'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Signin = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xv6h93s', 'template_5hyvwet', form.current, 'J1pfg6qx4w4pyOJVJ')

    e.target.reset()
  };

  const [state, setstate]= useState (false)

  const toggleBtn = () => {

    setstate(prevState =>! prevState);
  }


  return (
    <section id='signin'>    
        <div className="sign_container">               
          <div className="logo_signin">
            <img src= {logo} alt="logo" />                  
          </div>  
          </div>
             
        <h3 className="top_header">Sign In</h3>     
                 
        <form ref={form} onSubmit={sendEmail} className="form_signin">
        <div className="user_name2">
            <label className="label_username">Username/Email</label>
            <input className="user_input" 
                   type="text" 
                   name="name"
             />
          </div>

          <div className="signin_password">
            <label className="pass_label">Password</label>
            <input className="pass_input" 
                   type="text" 
                   name="name"
             />
          </div>
          
            <button className='eye' onClick={toggleBtn}>
              {state ? <AiOutlineEyeInvisible/> :
                     <AiOutlineEye/>
              }
            </button>

            <RiLockPasswordFill className='password_image'/>
            <MdEmail className='email_image'/>

            <button type='submit' className='signin_submit'>
              <Link to="/home">Sign In</Link>
            </button>

            <div className="links_text">
            <h3 className="remember_me">
              Remember me
            </h3>
            <input type="checkbox" className='checkbox'/>
            <Link to="/reset" className="forgotten_link">Forgotten Password?</Link>
            </div>

              <div className="new_user">
             <h2 className="new">New User?
             <span>
              <Link to="/signup" className='forgotten_sp_link'> Sign up now </Link>             
            </span>
            </h2> 
            </div>     
        </form>

            <h3 className='privacy_text'>
             <Link to="/home" clasName='help_text'>Privacy</Link> 
              </h3>  

              <h3 className='help_text'>
              <Link to="/home" clasName='help_text'>Help</Link>             
              </h3>                 

              <h3 className='language'>
              English(United Kingdom)
              </h3>    
              <img src= {arrow} alt="logo" className='arrow' />
              <GoSignIn className='signin_image'/>
      
    </section>
  )
}

export default Signin