import React from 'react'
import './startup.css'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import poster from '../../images/poster.jpg'

const Startup = () => {
  return (
    <section id='startup'>

      <div className="startup_container">
        <div className="header_container">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Join the movie people today</h3>
          </div>

          <div className="left_image">
            <img src={poster} alt="logo" />
          </div>

          <div className="links">
            <Link to="/signin" className='google'>Sign In with Google</Link>
            <Link to="/signin" className='apple'>Sign In with Apple</Link>
            <Link to="/signup" className="createAccount">Create Account</Link>
            <h3 className='join'>or</h3>
            <p className='privacy'>By signing up, you agree to the <span className="span1">Terms of Service </span>
              and <span className="span1">Privacy Policy,</span> including <span className="span1">Cookie Use.</span></p>
            <Link to="/signin" className='signin'>Sign In</Link>
          </div>

          <div className="link2">
            <Link to="/signin">Already have an account?</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Startup
