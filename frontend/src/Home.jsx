import { useState } from "react";
import "./Home.css";
import Movielist from "./Movielist";
import Navbar from "./Navbar";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favouritesCount, setFavouritesCount] = useState(0);

  return (
    <>
      <Navbar/>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Unlimited Movies, TV Shows, and More</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <button className="hero-btn">Explore Now</button>
        </div>
      </div>

      {/* Movie List Section */}
      <div className="movie-section">
        <h2 className="section-title">Popular on Netflix</h2>
        <Movielist
          cartCount={cartCount}
          setCartCount={setCartCount}
          favouritesCount={favouritesCount}
          setFavouritesCount={setFavouritesCount}
        />
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>Why Choose Netflix Clone?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>🎞️ Huge Collection</h3>
            <p>Explore a wide variety of movies across genres like Action, Comedy, Romance, Sci-Fi, and more.</p>
          </div>
          <div className="info-card">
            <h3>💖 Personal Favourites</h3>
            <p>Add your favourite movies and build your own personalized watchlist with just one click.</p>
          </div>
          <div className="info-card">
            <h3>🛒 Easy Cart</h3>
            <p>Want to revisit later? Add movies to your cart for quick access and offline reminders.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Netflix Clone | Built for Learning and Fun 🎬</p>
      </footer>
    </>
  );
};

export default Home;
