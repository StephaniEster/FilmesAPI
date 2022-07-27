import { Container } from "./styles";
import { MovieList } from "../../components/MoviesList/styles";
import { MovieLI } from "../../components/MovieLI/styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

 

const Home = () => {

 const [movies, setMovies] = useState([]);
 const image_url = "https://image.tmdb.org/t/p/w500"

 useEffect(() =>{

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results) )
 },[])



  return (
    <Container>
      <h1>Filmes</h1>
      <MovieList>
        {movies.map(movie =>{
            return(
                <MovieLI key={movie.id}>
                    <Link to={`/details/${movie.id}`}><img src={`${image_url}${movie.poster_path}`} alt={movie.title} /></Link>
                    
                    <span>{movie.title}</span>
                </MovieLI>
            )
        })}




      
      </MovieList>
    </Container>
  );
};

export default Home;

