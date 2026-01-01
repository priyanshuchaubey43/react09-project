import React, { useEffect, useState}from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard';

const Favourites = () => {
  const [favouritesmovies, setfavouritesMovies] = useState([]);

const fetchMovie = async () => {
   try {
      const response = await fetch("http://localhost:5000/favouritemovies");
      const data = await response.json();
      console.log(data);
      setfavouritesMovies(data);
   } catch (error) {
      console.error("Error fetching movies:", error); 
   }
}

useEffect(() => {
   fetchMovie();
}, []);

  return (
<>
    <Navbar/>
    <div style={{display:"flex",flexWrap:'wrap', gap:"20px"}}>
    {favouritesmovies.map((movie,index)=>(
      <MovieCard
      key={index}
      img={movie.img}
      name={movie.name}
      genre={movie.genre}
      rating={movie.rating}
      />
    ))}
     </div>
    </>
  )
}

export default Favourites;
