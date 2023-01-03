import React, { useState } from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import {Link} from 'react-router-dom'
import signinPoster from '../../images/signinPoster.jpg'
import {useForm} from 'react-hook-form'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

function Signup () {
  const {
    handleSubmit, 
    register,
    formState: {errors},
  } = useForm();

  const  onSubmit = (data) => {
    console.log(data);
  };

  //  const [state, setState]= useState(false);

  //  const toggleBtn = () => {
  //  setState(prevState => !prevState);
  // };

    const [type, setType]= useState('password');
    const [icon, setIcon]=useState(AiFillEyeInvisible);

    const handleToggle =()=> {
      if(type==='password'){
      setIcon(AiFillEye);
      setType('text');
    }
    else{
      setIcon(AiFillEyeInvisible);
      setType('password');
    }
  }

  return (
    <section id= 'signup'>
        <div className="logo-signup">
          <img src={logo} alt="logo"/>
           <h3 id='header'>Create Account!</h3> 
        </div>
      
        <div className="signup-link" id='signin-link'>
          <Link to="/signin" className='signup-btn-link'>Sign In</Link>
        </div>

          <div className="column" id='log-image'>
              <img src={signinPoster} alt='signin-left-pane' className='left-side-image'  />
              <div className="content">
                <h1>Watch it all here first</h1>
                <p>Lorem ipsum..</p>
              </div>
          </div>

       <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-label" id='signup-textbox'>
          <label className="user-signup-label">
             Email Address
          </label>
          <input className="signup-input"
                 type='email'
                 name='email'
                 {...register("email",{
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })} />
                 <error>
                    {errors.email?.type === "required" && "*Email is required"}
                 </error>
          </div>

          <div className="signup-label" id='password-textbox'>
            <label className="user-signup-label">Password</label>
            <input className="signup-input"
                   type={type}
                   name='new_password'
                   {...register("newPassword", {
                   required: true,
                   minLength: 5,
                   maxLength: 20,
                   })}/>

                   <span id="pwdEye" onClick={handleToggle}><AiFillEye icon={icon} size={18}/></span>

              <error id='choose'>
                {errors.newPassword?.type === "required" && "*Choose a password"}
              </error>
              
            </div>    
        
          <div className="signup-label" id='confirm-password-textbox'>
            <label className="user-signup-label">Confirm Password</label>
            <input className="signup-input"
                   type='password'
                   name='confirm_password'
                   {...register("confirmPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                />
                <error id='confirm'>
                  {errors.confirmPassword?.type === "required" && "*Enter password between 5-20 characters"}
                </error>
          </div>
          <div> 
            <input Link to="/signin"  className="button" type="submit" />
           </div> 
       </form>
    </section>
  )
}

export default Signup
