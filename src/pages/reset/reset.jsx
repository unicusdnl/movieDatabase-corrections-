import React from 'react'
import './reset.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <section id= 'reset'>
      <div className="reset_container">
     
          <img src={logo} alt="signup_logo" className='logo_signup'/>          
     
        <h3 className="header"> Account recovery</h3>
        <h3 className="header2"> Choose how you want to sign in: </h3>

        <button className="reset_btn">
        <Link to="/signin">Enter Password</Link>
        </button>
       
        <button className="reset_btn">
        <Link to="/signin">Get Verification Code</Link>
        </button>      
      </div>
    </section>
  )
}

export default Reset
