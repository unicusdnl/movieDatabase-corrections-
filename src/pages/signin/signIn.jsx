import React from 'react'
import './signin.css'
import { useRef, useState, state} from 'react';
import emailjs from 'emailjs-com';
import logo from '../../images/logo.svg'
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
       
    <div className="left-pane-signin">
       <div className="logo-signin">
       <img src={logo} alt="logo" />
       <h3 id='top_header'>Sign In</h3> 
    </div>
    </div>

    <div className="middle-pane-btn" id='middle-img' >
      <GoSignIn className='middle-pane-signin'/>
    </div>

    <div className="right-pane-signin">
        <Link to="/signup" className='sign-up-link'>New User?
        <em> Sign up now</em>
        </Link>
    </div>

    <form ref={form} onSubmit={sendEmail} className="form_signin">

        <div className="user-label" id='user-textbox'>
          <label className='signin-label'>Username / Email Address</label>
            <input className="user-input" 
                   type="text" 
                   name="name"                   
             />
               <MdEmail className='email_image'/>
          </div>

          <div className="user-label" id='password-textbox'>
            <label className='signin-label'>Password</label>
            <input className="user-input" 
                   type="password" 
                   name="username"
             />

                <RiLockPasswordFill className='password_image'/>
          </div>
          
            <button className='eye' onClick={toggleBtn}>
                {state ? <AiOutlineEyeInvisible/> :
                     <AiOutlineEye/>
                }
            </button>

            <h3 id= 'remember'> Remember me </h3>
            <input type="checkbox" id='bottom-links-checkbox'/>

            <div className="bottom-links">                   
              <Link to="/reset" className='forgotten'>Forgotten Password?</Link>
            </div>

            <div className="signin_btn" id='signin-submit-btn'>
              <Link to="/home" className='signin-btn-text'>Sign In</Link>
            </div>
          
        </form>

        <div className="line">
          <p id= 'copyright'>
            &copy; 2022. 
            <em>Movie Database Inc.</em>
          </p>
        </div>
    </section>
  )
}

export default Signin
