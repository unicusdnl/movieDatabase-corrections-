import React from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import { Link  } from 'react-router-dom'

const Signup = () => {
  return (
    <section id= 'signup'>

      <div className="left-pane-signup">
         <div className="logo-signup">
            <img src={logo} alt="logo" />
           <h3 id='header'>Create Account!</h3> 
         </div>
         </div>
          
      <div className="right-pane-signup">
        <Link to="/signin" className='signup-btn-link'>
          Sign In
          </Link>
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

          <div className="signup-label" id='confirm-password'>
            <label className="user-signup-label">Confirm Password</label>
            <input className="signup-input"
                   type='password'
                   name='text'
              />
          </div>

          <div className="signup-btn" id='signup-submit-btn'>
              <Link to="/signin" className="signup-btn-text">Signup</Link>
            </div>      
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

export default Signup
