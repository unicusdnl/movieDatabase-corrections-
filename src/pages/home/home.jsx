import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../footer/footer'
import Card from '../../components/card/card'
import './home.css'
import Header from '../../components/headers/headers'

const Home = () => {
  return (
   <section id='home'>

    <Nav/>
    <Header/>  
    
    <Card/>
    <script src='movieList.js'></script>
    <Footer/>  

   </section>
  )
}

export default Home