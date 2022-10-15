import React from 'react'
import './nav.css'
import { useState } from 'react'
import logo from '../images/logo.svg'
import {FaUser} from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav]= useState ('#');
  return (

  <div className="nav_container">
   
    <img src={logo} alt="logo" className='nav_logo' />                     

    <nav className='navbar'>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#' ? 'active': ''}>Home</a>
      <a href='#tvlistings' onClick={() => setActiveNav('#tvlistings')} className={activeNav === '#tvlistings' ? 'active': ''} >TV Listings</a>
      <a href='#downloads' onClick={() => setActiveNav('#downloads')} className={activeNav === '#downloads' ? 'active': ''}>Downloads</a>
      <a href='#uploads' onClick={() => setActiveNav('#account')} className={activeNav === '#uploads' ? 'active': ''}>Uploads</a>
      <a href='#account' onClick={() => setActiveNav('#account')} className={activeNav === '#account' ? 'active': ''}><FaUser/></a>
    </nav>
    
  </div>

  )
}

export default Nav