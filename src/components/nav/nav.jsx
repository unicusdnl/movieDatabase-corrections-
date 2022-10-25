import React from 'react'
import './nav.css'
import logo from '../../images/logo.svg'
import {FaUser} from 'react-icons/fa'
import {FiSearch, FiMenu} from 'react-icons/fi'
import {BsFillBellFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
  
  <header>
    
  <div className='navigation'>
  <div className="nav_container">   
    <img src={logo} alt="logo" className='nav_logo' />                     
  </div>

    <nav className='navbar'>
      <ul className='nav_bar'>
        <Link to='/home'>Home</Link>
        <Link to='/tvlistings'>TV Listings</Link>
        <Link to='/downloads'>Downloads</Link>
        <Link to='/uploads'>Uploads</Link>
      </ul>

    </nav> 
    </div> 
   
      <div className="account_icons">
        <FiSearch/>
        <BsFillBellFill/>
        <FaUser/>
      </div>
      

      <button className='subscribe'>Subscribe Now</button>

  
  </header>


  
  )
}

export default Nav