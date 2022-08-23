import React from 'react'
import './signup.css'
/*import {emailjs} from 'emailjs-com'*/
import {useRef} from 'react'


const Signup = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      

      e.target.reset()
    };

  return (
    
  <div className="signup">
    <h3>Create your account</h3>

    <div className="signup_container">
    <div className="container signup_shape">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Fullname' required/>
            <input type="text" name='email' placeholder='Email' required />
            <input type="text" name='username' placeholder='Username' required/>
            <input type="text" name='password' placeholder='Password' required/>
            <button type='submit' className='btn btn-primary'>Create Account</button>
        </form>
    </div>
    </div>

    
  </div>
  )
}

export default Signup