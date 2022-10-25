import React, {useRef, useState, state} from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import { Link  } from 'react-router-dom'
import {HiLockClosed} from 'react-icons/hi'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'


const Signup = () => {
  const [values, setValues] = useState ({
    name:"",
    email:"",
    mobile:"",
    password:"",
  });

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

    const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const [state, setstate]= useState (false)

  const toggleBtn = () => {

    setstate(prevState =>! prevState);
  }

  return (
    <div className="container signup_container">
      <div className="signup_wrapper">

        <div className="logo_signup">
          <img src={logo} alt="signup_logo"/>          
        </div>
      </div>
      
      <HiLockClosed className="signup_lock"/>
      
      
      <h3 className="title"> Create Account!</h3>
      
      <button className="signin_btn">
        <Link to="/signin">Sign In</Link>
        </button>
    

        <form className="signup_form">          
           <label className="f_name">FirstName</label>
            <input className="firstname_input" 
                   type="text" 
                   name="name"
                   value={values.name}
                   onChange={handleChange}
           />
          
            <label className="l_name">LastName</label>
            <input className="last_input" 
                   type="text" 
                   name="name"
                   value={values.name}
                   onChange={handleChange}
           />
        
            <label className="email">Email Address</label>
            <input className="email_input"
                   type="email"
                   name="email"
                   value={values.email}
                   onChange={handleChange}
            />
            <div className="username">
            <label className="signup_label">Username</label>
            <input className="username_input" 
                   type="username" 
                   name="username"
                   value={values.username}
                   onChange={handleChange}
             />
            </div>
            <div className="password">
            <label className="signup_label">Password</label>
            <input className="password_input" 
                   type="password" 
                   name="password"
                   value={values.password}
                   onChange={handleChange}
             />
            </div>
            <div className="eye2">
            <button className='signup_eye' onClick={toggleBtn}>
              {state ? <AiOutlineEyeInvisible/> :
                     <AiOutlineEye/>
              }
            </button>
            </div>

            <div className="signup_updates">      
            <input type="checkbox" className='signup_update'/>
            <h3 className="updates">
              I want to recieve marketing, promotions and updates via email
            </h3>
             <div>
            <button className="submit_button" onClick={handleFormSubmit}>
               <Link to="/home">Sign Up</Link>
            </button>
            </div> 
            </div>     
           </form> 

           <h3 className='privacy_text_signup'>
             <Link to="/home" clasName='privacy_text'>Privacy</Link> 
              </h3>  

              <h3 className='help_text_signup'>
              <Link to="/home" clasName='help_text'>Help</Link>             
              </h3>                 

              <h3 className='language_signup'>
              English(United Kingdom)
              </h3>    
          
          </div>
       
  )
}

export default Signup
