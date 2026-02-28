import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDriveFileMove, MdOutlineMarkunread ,MdOutlineSchool } from "react-icons/md";
import { SlUser } from "react-icons/sl";


import "../styles/Header.css";

const Header = () => {
  
  const [active, setActive] = useState(null);

  const menuItems = [
    { icon: <IoHomeOutline />, label: "Home", key: "home" },
    { icon: <SlUser />, label: "About", key: "about" },
    { icon: <MdOutlineSchool  />, label: "Education", key: "education" },
    { icon: <MdOutlineDriveFileMove />, label: "Projects", key: "projects" },
    { icon: <MdOutlineMarkunread />, label: "Messages", key: "messages" },
  ];

  return (
    
    <header className="header-container">
      <h2 className="initials-text left-section" data-cursor="disable">BK<span className="period">.</span></h2>

      <div className="nav-bar">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`menu-icon ${active === item.key ? "active" : ""}`}
            onClick={() => {

              setActive(item.key);

              document
              .querySelector(`.${item.key}`)
              .scrollIntoView({ behavior: "smooth" })

          }

            }
            data-label={item.label}
            data-cursor="disable"
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
          data-cursor="disable"
        >
          View CV
        </a>
      </div>
    </header>
  );
};

export default Header;
