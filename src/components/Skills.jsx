import { useEffect, useRef } from "react";
import "../styles/Skills.css";
import {SiReact,SiJavascript,SiHtml5,SiCss3,SiPython,SiNodedotjs,SiGit,SiGithub,SiDocker,
  SiPostgresql,SiMongodb,SiTypescript,SiRedux,SiAndroid,SiTailwindcss,SiBootstrap,SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { icon: SiPython, name: "Python", color: "#306998" },
  { icon: FaJava, name: "Java", color: "#007396" },
  { icon: SiAndroid, name: "Android", color: "#3DDC84" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiBootstrap, name: "Express", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  {
    icon: BiLogoVisualStudio,
    name: "Visual Studio",
    color: "rgb(38, 161, 218)",
  },
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    // stagger the animation delay for a wave effect

    skillRefs.current.forEach((el, i) => {
      if (el) el.style.animationDelay = `${i * 0.08}s`;
    });
  }, []);

  return (
    <section className="skills-section skills-and-tools">
      <h1 className="about-title">
        <span className="code-symbol">&lt;</span>

        <span className="code-text">Skills And Tools</span>
        <span className="code-symbol">/&gt;</span>
      </h1>{" "}
      <div className="skills-underline"></div>
      <div className="skills-wrapper">
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
             
                key={index}
                ref={(el) => (skillRefs.current[index] = el)}
                className="skill-icon-container"
              >
                <IconComponent
                  data-cursor="disable"
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <span className="skill-tooltip">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
