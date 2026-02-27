import { useEffect, useState } from "react";
import "../styles/Loading.css";
import Marquee from "react-fast-marquee";

const Loading = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      if (value <= 50) value += Math.round(Math.random() * 5);
      else value += Math.round(Math.random());

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setLoaded(true); // Show Welcome text
        setTimeout(() => {
          setClicked(true); // Animate loader div forward
          setTimeout(() => {
            if (onFinish) onFinish(); // Hide loader
          }, 900);
        }, 600);
      }

      setPercent(value);
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  // Mouse hover glow
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div className={`loading-screen ${clicked ? "loading-clicked" : ""}`}>
      <div className="loading-header">
      
      </div>

      <div className="loading-marquee">
        <Marquee speed={160} pauseOnHover={true}>
          <span>&nbsp;• CUM LAUDE GRADUATE &nbsp;</span>
          <span>&nbsp;• Full Stack Developer &nbsp;</span>
          <span>&nbsp;• React Native Enthusiast &nbsp;</span>
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
                {!loaded ? (
                  <>
                    Loading <span>{percent}%</span>
                  </>
                ) : (
                  <>Welcome</>
                )}
              </div>
            </div>
            <div className="loading-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
