import "../styles/Projects.css";

import { useState } from "react";

const projects = [
  {
    title: "Mobile App 1",
    description: "A mobile app built with React Native",
    image: "/images/mobile1.png",
    tech: ["React Native", "Firebase"],
    platform: "mobile",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile App 2",
    description: "Another mobile app example",
    image: "/images/mobile2.png",
    tech: ["Flutter", "Dart"],
    platform: "mobile",
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile App 3",
    description: "Yet another mobile project",
    image: "/images/mobile3.png",
    tech: ["Kotlin", "Android Studio"],
    platform: "mobile",
    github: "#",
    demo: "#",
  },
  {
    title: "Web App 1",
    description: "Web application built with React",
    image: "/images/web1.png",
    tech: ["React", "Node.js", "CSS"],
    platform: "web",
    github: "#",
    demo: "#",
  },
  {
    title: "Web App 2",
    description: "E-commerce platform",
    image: "/images/web2.png",
    tech: ["Next.js", "Tailwind"],
    platform: "web",
    github: "#",
    demo: "#",
  },
  {
    title: "Web App 3",
    description: "Portfolio website",
    image: "/images/web3.png",
    tech: ["React", "Framer Motion"],
    platform: "web",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {

  const [filter, setFilter] = useState("web");

  const filteredProjects = projects
    .filter((proj) => proj.platform === filter)
    .slice(0, 3); 

  return (
    <section className="projects-section projects">
      <h1 className="project-title">
        <span className="code-symbol">&lt;</span>
        <span className="code-text">Projects</span>
        <span className="code-symbol">/&gt;</span>
      </h1>
      <div className="project-underline"></div>
      <p className="projects-quote">"Talk is cheap, show us the code" - LINUS TORVARDS</p>
      <div className="projects-filter">
        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
        <button
          className={filter === "mobile" ? "active" : ""}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </button>
      </div>
   
      <div className="projects-list">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.github} target="_blank">
                  GitHub
                </a>
                <a href={proj.demo} target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
