import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import axios from "axios";

const MovieList = () => {
    const [ movies, setMovies] = useState ([])

    useEffect(() => {
        //fectching action
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=41467446ef4c8f2ffa78fc5c6692fbd5&language=en-US&page=1').then(response=>{
            setMovies(response.data.results)
        }).catch(err=>{console.log(err)})

    }, [])

    return <div className= "d-flex flex-wrap align-content-start ">
        {movies.map ((movie, index)=>{
            return <MovieCard key= {index} {...movie} />
        })}
    </div>
}

export default MovieList;
