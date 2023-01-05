import React from 'react'
import './movieCard.css'

const getPosterURL = (posterpath) => {

    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`

}

const MovieCard = ({poster_path, name, vote_average})  => {
  return (
    <section id='movieCard'>
      <div className="container">
        <img src={getPosterURL(poster_path)} alt={name} />
       <p className="ratings">{vote_average}</p> 
    </div>
    </section>

  )
}

export default MovieCard