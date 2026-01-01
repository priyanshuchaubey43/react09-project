import React from "react";
import "./MovieCard.css";


const MovieCard = ({id, img,name, genre, rating,cartCount,setCartCount,favouritesCount, setFavouritesCount}) => {
  

  const updateMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCart: true }),
      });
      if (response.ok) {
        setCartCount(cartCount + 1);
        alert("Movie added to cart successfully");
      } 
    } catch (error) {
      alert("Failed to add movie to cart");
    }
  }

const updateMovie= async () => {
  try {
    const response = await fetch(`http://localhost:5000/movies/${id}`, {
      method: "PUT",
      headers: {  
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavourite: true }),
    });
    if (response.ok) {
      setFavouritesCount(favouritesCount +1);
      alert("Movie added to favourites successfully");
      
    } 
  } catch (error) {
    alert("Failed to add movie to favourites");
  }
};


  return (
    <div className="movie-card">
      <img
        src={img}
        alt="Avengers Endgame"
      />
      <div className="movie-info">
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{genre}</p>
        <p>{rating}</p>
        <div className="movie-actions">
          <button onClick={()=>updateMovie()}>Add to Favourites</button>
          <button onClick={()=> updateMovies()}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
