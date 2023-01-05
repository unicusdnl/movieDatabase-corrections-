import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../footer/footer'
import Header from '../../components/headers/headers'
import MovieList from '../../components/movies/movieList'
import MovieHeader from '../../components/movies/movieHeader'
import './home.css'

const Home = () => {
  return (
   <section id='home'>

    <Nav/>  
    <MovieHeader/>
    <Header/>
    <MovieList/>
    
    <Footer/>  

   </section>
  )
}

export default Home