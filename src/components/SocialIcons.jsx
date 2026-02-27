import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "../styles/SocialIcons.css";

const SOCIAL_LINKS = {
  github: "https://github.com/BKani23",
  linkedin: "www.linkedin.com/in/bulelani-kani",
  instagram: "https://www.instagram.com/bulelanibeekay23/"
};

const SocialIcons = () => {
  return (
    <div className="social-icons-fixed">
      <a
        className="social-icon"
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="social-icon"
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      
      <a
        className="social-icon"
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
     
    </div>
  );
};

export default SocialIcons;