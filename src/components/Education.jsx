import { useEffect, useRef } from "react";
import "../styles/Education.css";
import schoolLogo from "../assets/nmu-logo.jpg";

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.5 },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      description:
        "A comprehensive program covering software development, database management, networking, and IT project management. Key modules: Programming, Web Development, Data Structures, Cloud Computing.",
      years: "2023 - 2025",
      logo: schoolLogo,
    },
    // Add more education entries here if needed
  ];

  return (
    <section className="education-section education">
      <div className="education-header">
        <h1 className="about-title">
          <span className="code-symbol">&lt;</span>
          <span className="code-text">Education</span>
          <span className="code-symbol">/&gt;</span>
        </h1>{" "}
        <div className="education-underline"></div>
      </div>

      {educationData.map((edu, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="education-card bachelor"
        >
          <div className="card-left">
            <h2 className="degree">{edu.degree}</h2>
            <p className="description">{edu.description}</p>
          </div>

          <div className="card-right">
            <img src={edu.logo} alt="School Logo" className="school-logo" />
            <span className="years">{edu.years}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
