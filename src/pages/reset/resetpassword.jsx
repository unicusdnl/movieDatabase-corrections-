import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import './resetpassword.css'

function Resetpassword (props) {
  const {
    handleSubmit, 
    register,
    formState: {errors},
  } = useForm();

  const  onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id='pwdForm'>
        <form className='resetPass' onSubmit={handleSubmit(onSubmit)}>
           
          <div className="user-label" id='user-textbox'>
          <label className='pwdLabel'>Password</label>
            <input className="pwd-input" 
                   type="password" 
                   name="password"  
                   {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                />
                <error>
                  {errors.password?.type === 
                    "Entered password is less than 5 characters"}
                </error>
          </div>

            <button className="pass-btn" id='pwd-btn'>
              <Link to="/reset" className='reset-btn-txt'>
                Send Code
              </Link>
            </button>
      </form>
    </section>

  )
}

export default Resetpassword