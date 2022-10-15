import React, {useState} from 'react'
import './signup.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'

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

  return (
    <div className="container signup_container">
      <div className="signup_wrapper">

        <div className="logo_signup">
          <img src={logo} alt="signup_logo"/>          
        </div>
      </div>

      <div>
      <h3 className="title"> Create Account!</h3>
      <button className="signin_btn">
        <Link to="/signin">Sign In</Link>
        </button>
      </div>

        <form className="signup_form">
          
          <div className="f_name">
            <label className="signup_label">First Name</label>
            <input className="firstname_input" 
                   type="text" 
                   name="name"
                   value={values.name}
                   onChange={handleChange}
           />
          </div>

          <div className="l_name">
            <label className="signup_label">Last Name</label>
            <input className="last_input" 
                   type="text" 
                   name="name"
                   value={values.name}
                   onChange={handleChange}
           />
          </div>
          <div className="email">
            <label className="signup_label">Email</label>
            <input className="email_input"
                   type="email"
                   name="email"
                   value={values.email}
                   onChange={handleChange}
            />
            </div>
            <div className="mobile_number">
            <label className="signup_label">Mobile Number</label>
            <input className="mobile_input" 
                   type="text" 
                   name="number"
                   value={values.number}
                   onChange={handleChange}
            />
            </div>
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
            <div className="retry_password">
            <label className="signup_label">Retry Password</label>
            <input className="retry_input" 
                   type="password" 
                   name="password"
                   value={values.password}
                   onChange={handleChange}
                   />
              </div>
             
             <div>
            <button className="submit_button" onClick={handleFormSubmit}>
               <Link to="/home">Sign Up</Link>
            </button>
            </div>     
           </form> 
          
          </div>
       
  )
}

export default Signup
