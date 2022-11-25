import React from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import { Link  } from 'react-router-dom'
import signinPoster from '../../images/signinPoster.jpg'

const Signup = () => {
  return (
    <section id= 'signup'>

        <div className="logo-signup">
          <img src={logo} alt="logo"/>
           <h3 id='header'>Create Account!</h3> 
        </div>
      
        <div className="signup-link" id='signin-link'>
          <Link to="/signin" className='signup-btn-link'>
            Sign In
          </Link>
        </div>

          <div className="column" id='log-image'>
              <img src={signinPoster} alt='signin-left-pane' className='left-side-image'  />
              <div className="content">
                <h1>Watch it all here first</h1>
                <p>Lorem ipsum..</p>
              </div>
          </div>

       <form className="signup-form">

        <div className="signup-label" id='signup-textbox'>
          <label className="user-signup-label">
            Username / Email Address
          </label>
          <input className="signup-input"
                 text='text'
                 name='username'
          />
          </div>

          <div className="signup-label" id='password-textbox'>
            <label className="user-signup-label">Password</label>
            <input className="signup-input"
                   type='password'
                   name='text'
              />

          <div className="signup-label" id='confirm-password-textbox'>
            <label className="user-signup-label">Confirm Password</label>
            <input className="signup-input"
                   type='password'
                   name='text'
              />
          </div>

          <div className="signup-btn" id='signup-submit-btn'>
              <Link to="/signin" className="signup-btn-text">Sign up</Link>
            </div>      
        </div>        
       </form>

       
    </section>
    
  )
}

export default Signup
