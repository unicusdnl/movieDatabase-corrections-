import axios from 'axios'

const apiKey= '41467446ef4c8f2ffa78fc5c6692fbd5';
const url= 'https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5';
const nowPlayingUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/movie/now_playing';
const topratedUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/movie/top_rated';
const movieUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/movie';
const genreUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/genre/movie/list';
const moviesUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/discover/movie';
const personUrl= '${https://api.themoviedb.org/3/movie/550?api_key=41467446ef4c8f2ffa78fc5c6692fbd5}/trending/person/week';

export const fetchMovies =async () => {
    try{
        const data = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl ='https://www.themoviedb.org/movie/436270-black-adam';

        const modifiedData = data['results'].map((m) =>({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['posterpath'],
            overview: m['overview'],
            rating: m['voting_average'],
        }))

        return modifiedData;
    }catch (error) {}
}

export const fetchGenre = () => {

}

export const fetchMovieByGenre = () => {
    
}

export const fetchPersons = () => {
    
}

export const fetchTopratedMovie = () => {
    
}

export const fetchMovieDetail = () => {
    
}

export const fetchMovieVideos = () => {
    
}

export const fetchCasts = () => {
    
}

export const fetchSimilarMovie = () => {
    
}