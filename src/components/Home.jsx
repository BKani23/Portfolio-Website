import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import userImage from "../assets/user-image.jpg";

const Home = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate underline
    nameRef.current.classList.add("animate-underline");

    // Animate title slide-in slightly after underline
    setTimeout(() => {
      titleRef.current.classList.add("animate-slide");
    }, 500);
  }, []);

  return (
    <section className="home-section home">
      <div className="home-content">
        <h1 ref={nameRef} className="home-name">
          {"Bulelani Kani".split("").map((char, index) => (
            <span key={index} className="letter" style={{ "--i": index }}>
              {char}
            </span>
          ))}
          <span className="period">.</span>
        </h1>
        <h2 ref={titleRef} className="home-title">
          Fullstack Software Developer
        </h2>
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

      <img src={userImage} alt="Bulelani Kani" className="home-image" data-cursor="disable" />
    </section>
  );
};

export default Home;