import React from "react";
import "../styles/Home.css";
import userImage from "../assets/user-image.jpg";

const Home = () => {
  return (
    <section className="home-section home">
      <div className="home-content">
        <h1 className="home-name">Bulelani Kani<span className="period">.</span></h1>
        <h2 className="home-title">Fullstack Software Developer</h2>
      </div>

      <div
        className="scroll-down"
        onClick={() => {
          document
            .querySelector(".about")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span></span>
      </div>

      <img src={userImage} alt="Bulelani Kani" className="home-image" />
    </section>
  );
};

export default Home;
