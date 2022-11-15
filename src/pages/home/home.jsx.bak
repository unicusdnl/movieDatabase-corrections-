import React, {useState, useEffect} from 'react'
import './home.css'
import Nav from '../../components/nav/nav'
import RBCarousel from 'react-bootstrap-carousel'
import { fetchMovies } from '../../components/Service'


const Home = () => {
  const [ nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies ());
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice (0,5).map((item,index) => {
      return(
        <div key = {index}>
            <div className="carousal-center">
                <img style={{height:600}} src={item.backPoster} alt={item.tile}/>
            </div>
        </div>
      )
  });
   
  return (
    <>
      <section id='home'>        
        <div className="container">
          <div className="row">
            <div className="col">
              <RBCarousel
                autoplay ={true}
                slideshowSpeed={5000}
                pauseonVisibility={true}
                version={4}
                indicators={false}
              >
                {movies} 
              </RBCarousel>
            </div>
          </div>
        </div>
  
      </section> 
    </>
  )
}

export default Home