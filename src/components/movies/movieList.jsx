import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=41467446ef4c8f2ffa78fc5c6692fbd5';
const IMG_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const searchMovie = BASE_URL + '/search/movie' + API_KEY + '&language=en-US&page=1&include_adult=false'; 

const MovieList = () => {
    const [ movies, setMovies] = useState ([])

    useEffect(() => {
        //fectching action
        axios.get( BASE_URL + '/tv/popular?' + API_KEY + '&language=en-US&page=1').then(response=>{
            setMovies(response.data.results)
        }).catch(err=>{setMovies(err)})
    }, [])

    return <div className= "d-flex flex-row bd-highlight mb-3 gap-5 offset-md-1 overflow-auto">
       
        {movies.map ((movie, index) =>{
            return <MovieCard key= {index} {...movie} />
           
        })}
    </div>
  
}

export default MovieList;
