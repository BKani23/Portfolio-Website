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
      <h2 className="initials-text left-section">BK.</h2>

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
        <button className="download-cv-button">Download CV</button>
      </div>
    </header>
  );
};

export default Header;