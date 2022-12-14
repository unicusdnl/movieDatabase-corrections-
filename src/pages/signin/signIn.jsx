import React, {useState} from 'react';
import './signin.css';
import logo from '../../images/logo.svg';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {GoSignIn} from 'react-icons/go';
import {RiLockPasswordFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import { Link } from 'react-router-dom';
import asset from '../../images/asset.jpg';
import {useForm} from "react-hook-form"

function Signin () {
  const {
    handleSubmit, 
    register,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [state, setstate]= useState (false)

  const toggleBtn = () => {
    
    setstate(prevState =>! prevState);
  };

  return (
    <section id='signin'>

    <div className="logo-signin">
      <img src={logo} alt="logo" /> 
        <GoSignIn className='signin-image'/>
         <h1 id='signin-header'>Sign In</h1>   
    </div>

       <div className="right-signin-pane" id='right-side'>
         <Link to="/signup" className='sign-up-link'>
              New User? 
            <em>
              Sign up now
            </em>
         </Link>
          </div>

          <div className="signin-left-column" id='login-images'>
              <img src={asset} alt='signin-left-pane' className='left-column-img' />
              <div className="signin-content">
                <h1>Come in and see all the new movies...</h1>
                <p>Lorem ipsum..</p>
              </div>

      <form className="form_signin" onSubmit={handleSubmit(onSubmit)}>

        <div className="user-label" id='user-textbox'>
          <label className='signin-label'>Email Address</label>
            <input className="user-input" 
                   type="text" 
                   name="email"  
                   {...register("email",{
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}                
             />
               <MdEmail className='email_image'/>
               <error id='error'>
                    {errors.email?.type === "required" && "*Enter email address"}
                </error>
          </div>

          <div className="user-label" id='password-textbox'>
            <label className='password-label'>
              Password
            </label>
            <input className="user-input" 
                   type="password" 
                   name="newPassword"
                   {...register("newPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
             />
              <RiLockPasswordFill className='password_image'/>
              <error id='new'>
                {errors.newPassword?.type === "required" && "*Enter your password"}
              </error>
          </div>
          
            <button className='eye' onClick={toggleBtn}>
                {state ? <AiFillEyeInvisible/> :
                     <AiFillEye/>
                }
            </button>

            <div className="bottom">
            <h3 id= 'remember'>
              Remember me 
            </h3>
            <input type="checkbox" id='bottom-links-checkbox'/>

            <div className="bottom-links">                   
              <Link to="/reset" className='forgotten'>
                Forgotten Password?
              </Link>
            </div>
            </div>

            <div> 
            <input 
            Link to="/home"
            className="button-signin" 
            type="submit" 
            />
            </div> 
          
        </form> 
    </div>
    </section>
  )
}

export default Signin;
