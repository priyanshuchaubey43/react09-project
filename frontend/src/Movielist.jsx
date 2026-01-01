import {useEffect, useState } from 'react';
import MovieCard from './MovieCard'
import "./MovieCard.css";

const Movielist = ({cartCount,setCartCount ,favouritesCount, setFavouritesCount}) => {
  const [movies, setMovies] = useState([]);

const fetchMovies = async () => {
   try {
      const response = await fetch("http://localhost:5000/movies");
      const data = await response.json();
      console.log(data);
      setMovies(data);
   } catch (error) {
      console.error("Error fetching movies:", error); 
   }
}

useEffect(() => {
   fetchMovies();
}, []);




  return (
    <div style={{display:"flex", flexWrap:'wrap',gap:"20px"}}>
     {movies.map((movie)=>(
      <MovieCard
      id={movie._id}
      img={movie.img}
      name={movie.name}
      genre={movie.genre}
      rating={movie.rating}
      cartCount={cartCount}
      setCartCount={setCartCount}
      favouritesCount={favouritesCount}
      setFavouritesCount={setFavouritesCount}
      />
     ))}
    </div>
  )
}

export default Movielist
