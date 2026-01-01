import { useState, useEffect } from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   
    const [cartMovies, setcartMovies] = useState([]);
    const cartCount = cartMovies.length;
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

   async function logout(){
    localStorage.removeItem("role");
    navigate("/");
   }
    
  const fetchMovies = async () => {
     try {
        const response = await fetch("http://localhost:5000/cartmovies");
        const data = await response.json();
        console.log(data);
        setcartMovies(data);
     } catch (error) {
        console.error("Error fetching movies:", error); 
     }
  }
  
  useEffect(() => {
     fetchMovies();
  }, []);
  
  const [favouritesMovies, setfavouritesMovies] = useState([]);
  const favouritesCount = favouritesMovies.length;

  
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
    <div className="navbar">
    <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="netflix"/>
    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      
      <Link to="/contact">
      <li>Contact</li>
      </Link>

      <Link to="/about">
      <li>About</li>
      </Link>

      <Link to="/favourites">
      <li>Favourites</li>
      <span>{favouritesCount}</span>
      </Link>

      <Link to="/cart">
      <li>Cart</li>
      <span>{cartCount}</span>
      </Link>
      
      {role && role === "admin"? 
      <Link to="/addmovie">
         <li>Add Movie</li>
      </Link>: null}

    {role && <li onClick={logout}>Logout</li>}
      </ul>
    </div>
  )
}

export default Navbar;
