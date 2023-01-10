import React from 'react'
import './movieCard.css'

const getPosterURL = (posterpath) => {

    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`

}

const MovieCard = ({poster_path, name, vote_average})  => {
  return <div className="container">
       <img src={getPosterURL(poster_path)} alt={name}/>
       <h3 className= 'text-md-left gap-5 '>{name}</h3>
       <p className="ratings">{vote_average}</p> 
    </div>


  
}

export default MovieCard