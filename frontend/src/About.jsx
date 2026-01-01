import React from "react";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <section className="about-hero">
          <h1>About Our Netflix</h1>
          <p>
            Welcome to <span>Netflix </span> — your ultimate entertainment hub. 
            This project is designed to bring the thrill of Netflix’s interface and 
            user experience right to your browser, built entirely using React.
          </p>
        </section>

        <section className="about-content">
          <div className="about-card">
            <h2>🎬 What We Offer</h2>
            <p>
              Our Netflix Clone provides a modern and responsive UI where you can
              explore trending movies, add them to favourites, and manage your cart.
              The app mimics a real streaming platform — all built for learning and fun!
            </p>
          </div>

          <div className="about-card">
            <h2>⚙️ Technologies Used</h2>
            <ul>
              <li>React JS – Component-based architecture</li>
              <li>React Router – Seamless page navigation</li>
              <li>JavaScript ES6 – Interactive features and state management</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>💡 Our Mission</h2>
            <p>
              The goal of this project is to help developers understand React concepts 
              like component reusability, props, state, and routing through a fun, 
              real-world example inspired by Netflix.
            </p>
          </div>
        </section>

        <footer className="about-footer">
          <p>© 2025 Netflix Clone | Crafted with ❤️ using React</p>
        </footer>
      </div>
    </>
  );
};

export default About;

