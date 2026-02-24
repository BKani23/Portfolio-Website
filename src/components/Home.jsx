import React from "react";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <section className="home-section">
      <div className="overlay">
        <div className="home-content">
          <h1 className="home-name">Bulelani Kani.</h1>
          <h2 className="home-title">Fullstack Software Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;