import React from 'react'
import './nav.css'
import menuItems from '../menuItems/menuItems'
import logo from '../../images/logo.svg'
import { Link  } from 'react-router-dom'
import {HiUserCircle, HiOutlineSearch} from 'react-icons/hi'
import {BsFillBellFill} from 'react-icons/bs'


const Nav = () => {
  return (
   <section id='nav'>

    <div className="nav-left-signup">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>

      <menuItems/>

      </div>
  

   </section>
  )
}

export default Nav