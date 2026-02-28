import { useEffect, useRef } from "react";
import "../styles/About.css";

const sentences = [
  "Hi there — welcome.",
  "I’m truly glad you stopped by.",
  "This isn’t just a portfolio.",
  "It’s a reflection of how I think and build.",
  "Let me show you.",
];

const AboutSection = () => {
  
  const textRefs = useRef([]);

  useEffect(() => {

    const observer = new 
    IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.6 },
    );

    textRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section className="about-section about">
      <div className="about-header">
        <h1 className="about-title">
          <span className="code-symbol">&lt;</span>
          <span className="code-text">About</span>
          <span className="code-symbol">/&gt;</span>
        </h1>{" "}
        <div className="about-underline"></div>
      </div>
      {sentences.map((text, index) => (
        <h2
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="about-line"
          data-text={text}
        >
          {text}
        </h2>
      ))}
    </section>
  );
};

export default AboutSection;
