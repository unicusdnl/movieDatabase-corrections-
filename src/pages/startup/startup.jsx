import React from 'react'
import './startup.css'
import logo from '../../images/logo.svg'
import img from '../../images/img.svg'
import google from '../../images/google.png'
import apple from '../../images/apple.png'
import { Link } from 'react-router-dom'

const Startup = () => {
  
  return (
     <section id='startup'>
      <div className="startup_container">
       
        <div className="logo">
                <img src= {logo} alt="logo" />
                <h3>
                  Join the movie people today
              </h3>              
              </div>  
             
              <div className="left_image">
                <img src= {img} alt="logo" />                          
              </div>              
          
          <div className="container links_container">
          <div className="links_options">
            <article className="links_option2">
            <Link to="/signin" className='sign_text'>Sign in with Google</Link>
                               
          </article> 
          <img src= {google} alt="google_logo" className="google_logo" /> 
          <article className="links_option2">
            <Link to="/signin" className='sign_apple'>Sign in with Apple </Link> 
          </article> 

          <img src= {apple} alt="google_logo" className="google_logo"/>   
          <h3 className='join'>or</h3>

          <article className="links_option_createAccount btn-primary2">
            <Link to="/signup" className='createAccount'>Create Account</Link>            
          </article> 

          <p className="privacy">By signing up, you agree to the <span className="span1"><br/>Terms of Service </span>
            and <span className="span1"> Privacy Policy,</span><br/> including <span className="span1"> Cookie Use.</span></p>

            <Link to="/signin" className="text">Sign in</Link>            


            <div className="link2">
             Already have an account?
            </div>           
           
          </div>
          </div> 

         
            </div>
      
    </section>

  )
}

export default Startup