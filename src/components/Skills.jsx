import { useEffect, useRef } from "react";
import "../styles/Skills.css";
import {SiReact,SiJavascript,SiHtml5,SiCss3,SiPython,SiNodedotjs,SiGit,SiGithub,SiDocker,
SiPostgresql,SiMongodb,SiTypescript,SiRedux,SiAndroid,SiTailwindcss,SiBootstrap,SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiHtml5, color: "#E34F26" },
  { icon: SiCss3, color: "#1572B6" },
  { icon: SiPython, color: "#306998" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiGit, color: "#F05032" },
  { icon: SiGithub, color: "#625e5e" },
  { icon: SiDocker, color: "#2496ED" },
  { icon: SiPostgresql, color: "#336791" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiRedux, color: "#764ABC" },
  { icon: SiTailwindcss, color: "#38B2AC" },
  { icon: SiBootstrap, color: "#7952B3" },
  { icon: BiLogoVisualStudio, color: "#007ACC" },
  { icon: FaJava, color: "#007396" },
  { icon: SiAndroid, color: "#3DDC84" },
  { icon: SiSpringboot, color: "#6DB33F" },
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
    <section className="skills-section">

      <h1 className="about-title">

        <span className="code-symbol">&lt;</span>
        
        <span className="code-text">Skills And Tools</span>
        <span className="code-symbol">/&gt;</span>
      </h1>{" "}
      <div className="skills-underline"></div>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="skill-icon-container"
            >
              <IconComponent style={{ color: skill.color }} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
