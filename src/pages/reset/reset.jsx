import React from 'react'
import './reset.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const Reset = () => {
  
const steps = [
  'Enter you email address',
  'Enter code',
  'Set new password',  
];
  return (
    <section id= 'reset'>
      <div className="reset_container">
     
          <img src={logo} alt="signup_logo" className='logo_reset'/>      

          <div className="box">
          <Box sx={{ width: '30rem' }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          </div>
  
          <div className ="email_address">
            <label className ="address_label">Email Address</label>
            <input className ="address_input" 
                   type ="email" 
                   name ="email"
             />
          </div>
       
        <button className ="reset_btn">
        <Link to ="/signin">
          Send Code
        </Link>
        </button>
             
      </div>

      <h3 className='reset_header'>Reset Account</h3>  
    </section>
  )
}

export default Reset
