const getPosterURL = (posterpath) => {

    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`

}

const MovieCard = ({poster_path, name, first_air_date})  => {

    return <div className="d-inline-flex flex-wrap align-content-around">
        <img src={getPosterURL(poster_path)}
        alt= {name} 
        className="width-[150px] height-[225px] shadow-sm rounded-md "  />
        <div className="d-flex flex-column px-3 w-[150px]">
            <h1 className="font-bold">
                {name}
                </h1>
                <p className="font-normal text-slate-500">
                    {first_air_date}
                    </p>
        </div>
    </div>
}

export default MovieCard;