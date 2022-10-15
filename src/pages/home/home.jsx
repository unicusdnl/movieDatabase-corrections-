import React from 'react'
import './home.css'
import Nav from '../../components/nav'
import {BsPlayCircle} from 'react-icons/bs'

const Home = () => {
  return (
<section id='home'>
   
    <div className="container_home_container">
    <div className="home_container">
      <BsPlayCircle className="play"/>
      <Nav className="nav"/>  

      </div>
    </div>   
    </section> 
  )
}

export default Home