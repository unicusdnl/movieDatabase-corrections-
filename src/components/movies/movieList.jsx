import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import './movieList.css'
import tmdb from "../api/tmdb";
import {GoPlay} from "react-icons/go"

const MovieList = () => {
    const api_key ='41467446ef4c8f2ffa78fc5c6692fbd5'
    const image_path = "https://image.tmdb.org/t/p/original"
    const [ movies, setMovies] = useState ([])
    const [ selectedMovies, setSelectedMovies] = useState ([])


    useEffect(() => {
    const fetchMovies = async() => {
        const {data} = await tmdb.get("/discover/movie?")
        setMovies(data.results)
        setSelectedMovies(data.results[6])
    }

    fetchMovies()

}, [])


    // return <div className= "d-flex flex-row bd-highlight mb-3 gap-5 offset-md-1 overflow-auto">
    //     {movies.map ((movie, index) =>{
    //         return <MovieCard key= {index} {...movie} />
    //     })}
    // </div>

    const renderMovies = () => (
        movies.map(movie => (
            <MovieCard
            key={movie.id}
            movie={movie}
            />
        ))
    )
    
    return (
        <div className="api">
            <div className="search">
                
            </div>
            <div className="hero" style= {{backgroundImage:`url('${image_path}${selectedMovies.backdrop_path}')`}}>
                <div className="heroContent">
                <h1>{selectedMovies.title}</h1>
                <p>{selectedMovies.overview}</p>
                <div className="buttons">
                <button className={"moviePlay"}>Play Trailer</button>
                <GoPlay id="play"/>
                </div>
            </div>
            </div>
        
          <div className="container">
            {renderMovies()}
        </div>
        </div>
        
    )
    
  
}

export default MovieList;
