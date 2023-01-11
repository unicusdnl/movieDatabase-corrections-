import React from 'react'
import './movieCard.css'

const MovieCard = ({movie}) => {
    const image_path = "https://image.tmdb.org/t/p/w500"
  return (
    <div className='movieCard'>
        {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} alt=''/>:null}
        <h5>{movie.title}</h5>
    </div>
  )
}

export default MovieCard