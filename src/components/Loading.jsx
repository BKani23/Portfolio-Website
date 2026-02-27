import { useEffect, useState } from "react";
import "../styles/Loading.css";
import Marquee from "react-fast-marquee";

const Loading = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Simulate progress like original setProgress
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      if (value <= 50) {
        value += Math.round(Math.random() * 5);
      } else {
        value += Math.round(Math.random());
      }

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoaded(true);
          setTimeout(() => {
            setIsLoaded(true);
          }, 1000);
        }, 600);
      }

      setPercent(value);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Handles exit animation
  useEffect(() => {
    if (isLoaded) {
      setClicked(true);

      setTimeout(() => {
        if (onFinish) onFinish();
      }, 900);
    }
  }, [isLoaded, onFinish]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title">
          BK
        </a>

        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee speed = {200}>
            <span>&nbsp; CUM LAUDE GRADUATE &nbsp;</span>
            <span>&nbsp; &#x2022; Full Stack Developer &nbsp;</span>
            <span>&nbsp; &#x2022; React Native Enthusiast &nbsp;</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>

          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>

            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;