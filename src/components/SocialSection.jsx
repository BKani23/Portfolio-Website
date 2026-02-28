import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import "../styles/SocialSection.css";

const SOCIAL_LINKS = {
  github: "https://github.com/BKani23",
  linkedin: "https.linkedin.com/in/bulelani-kani",
  instagram: "https://www.instagram.com/bulelanibeekay23/"
};

const SocialSection = () => {
  return (
    <div className="icons-section" data-cursor="disable"  >
      {/* Social icons */}
      <div className="social-icons" data-cursor="disable">
        <a href={SOCIAL_LINKS.github} data-cursor="disable" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="disable">
          <FaLinkedinIn />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" data-cursor="disable">
          <FaInstagram />
        </a>
      </div>

    </div>
  );
};

export default SocialSection;