const getPosterURL = (posterpath) => {

    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`

}

const MovieCard = ({poster_path, name, first_air_date})  => {

    return <div class="card text-bg-dark w-100 h-100">
    <img src={getPosterURL(poster_path)} class="card-img w-100 h-100" alt={name} />
    <div class="card-img-overlay w-100 h-100" >
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{first_air_date}</p>

    </div>
  </div>
  
    
}

export default MovieCard;