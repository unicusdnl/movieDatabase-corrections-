import React from 'react'
import './nav.css'

import logo from '../../images/logo.svg'
import {HiUserCircle, HiOutlineSearch} from 'react-icons/hi'
import {BsFillBellFill} from 'react-icons/bs'


const Nav = () => {
  return (
   <section id='nav'>

    <div className="nav-left-signup">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>

      <nav className='nav' id='nav-menu'>
        <li className='nav-list'>Home</li>
        <li className='nav-list'>Movies & Series
        <ul className='nav-item-drop'>
          <li>Action</li>
          <li>Romance</li>
          <li>Sci-Fi</li>
          <li>Series</li>
        </ul>
        </li>         
        <li className='nav-list'>More
        <ul className='nav-item-drop'>
            <li>Uploads</li>
            <li>Downloads</li>
            <lil>Settings</lil>
        </ul>
        </li>      
      </nav>

      <div className="avatar" >     
        <HiOutlineSearch id='avatar-shape'/>
        <BsFillBellFill id='avatar-shape'/>
        <HiUserCircle id='avatar-shape'/>
        </div>
      </div> 

   </section>
  )
}

export default Nav