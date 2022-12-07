import React, { useState, useEffect } from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import { Link  } from 'react-router-dom'
import signinPoster from '../../images/signinPoster.jpg'

function Signup () {

  const initialValues = {
    username:"",
    password:"",
    confirm_password:"",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState (initialValues);
  const [isSubmit, setIsSubmit] =useState (false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!values.username){
      errors.username = "Username is required"
    }
    if(!values.password){
      errors.password = "Choose a Password!"
    }
    if(!values.confirm_password){
      errors.confirm_password = "Enter your password!"
    }
    return errors;
  };
  
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

       <form className="signup-form" onSubmit={handleSubmit}>
        
        <div className="signup-label" id='signup-textbox'>
          <label className="user-signup-label">
            Username / Email Address
          </label>
          <input className="signup-input"
                 text='text'
                 name='username'
                 value={formValues.username}
                 onChange={handleChange}
          />
          <p className='error'>{formErrors.username}</p>
          </div>

          <div className="signup-label" id='password-textbox'>
            <label className="user-signup-label">Password</label>
            <input className="signup-input"
                   type='password'
                   name='password'
                   value={formValues.password}
                   onChange={handleChange}
              />
            </div>    
              <p className='error'>{formErrors.password}</p>

          <div className="signup-label" id='confirm-password-textbox'>
            <label className="user-signup-label">Confirm Password</label>
            <input className="signup-input"
                   type='password'
                   name='confirm_password'
                   value={formValues.confirm_password}
                   onChange={handleChange}
              />
          </div>
          <p>{formErrors.confirm_password}</p>

          <button className="signup-btn" id='signup-submit-btn' >
              <Link to="/signin" className="signup-btn-text">Sign up</Link>
            </button>      
             
       </form>

       
    </section>
    
  )
}

export default Signup
