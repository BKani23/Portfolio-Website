import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDriveFileMove, MdOutlineMarkunread } from "react-icons/md";

import "../styles/Header.css";

const Header = () => {
  
  const [active, setActive] = useState(null);

  const menuItems = [
    { icon: <IoHomeOutline />, label: "Home", key: "home" },
    { icon: <MdOutlineDriveFileMove />, label: "Projects", key: "projects" },
    { icon: <MdOutlineMarkunread />, label: "Messages", key: "messages" },
  ];

  return (
    
    <header className="header-container">
      <h2 className="initials-text left-section">BK<span className="period">.</span></h2>

      <div className="nav-bar">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-icon ${active === item.key ? "active" : ""}`}
            onClick={() => setActive(item.key)}
            data-label={item.label}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="right-section">
        <a
          href="/Kani-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv-button"
        >
          View CV
        </a>
      </div>
    </header>
  );
};

export default Header;
