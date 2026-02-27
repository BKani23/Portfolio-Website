import { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const aboutRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;
    const cursor = cursorRef.current;

    const createSplash = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update custom cursor position
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      // Paint splash
      const splash = document.createElement("span");
      splash.className = "paint-splash";

      const size = Math.random() * 50 + 20;
      splash.style.width = `${size}px`;
      splash.style.height = `${size}px`;

      splash.style.left = `${x}px`;
      splash.style.top = `${y}px`;

      // Random vibrant color
      const colors = ["#ff0000", "#ff8c00", "#e0db40", "#7b00ff", "#69ff2e"];
      splash.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      section.appendChild(splash);

      setTimeout(() => splash.remove(), 800);
    };

    section.addEventListener("mousemove", createSplash);

    return () => {
      section.removeEventListener("mousemove", createSplash);
    };
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about-section about">
      <div ref={cursorRef} className="custom-cursor"></div>
      <h1>About Section</h1>
    </section>
  );
};

export default About;