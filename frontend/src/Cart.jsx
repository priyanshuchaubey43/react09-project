import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'
import MovieCard from './MovieCard';

const Cart = () => {
    const [cartmovies, setcartMovies] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
  
  const fetchMovies = async () => {
     try {
        const response = await fetch("http://localhost:5000/cartmovies");
        const data = await response.json();
        console.log(data);
        setcartMovies(data);
        setCartCount(data.length);
     } catch (error) {
        console.error("Error fetching movies:", error); 
     }
  }
  
  useEffect(() => {
     fetchMovies();
  }, []);
  

  return (
    <>
    <Navbar cartCount={cartCount} setCartCount={setCartCount}/>
    <div style={{display:"flex", flexWrap:'wrap', gap:"20px"}}>
    {cartmovies.map((movie, index)=>(
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

export default Cart;
