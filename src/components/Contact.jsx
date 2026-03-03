import { useState } from "react";
import "../styles/Contact.css";
import { MdOutlineFolderOpen } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiAppsLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

const activityIcons = [
  { icon: MdOutlineFolderOpen, label: "Explorer" },
  { icon: AiOutlineFile, label: "Files" },
  { icon: BiSearch, label: "Search" },
  { icon: RiAppsLine, label: "Extensions" },
  { icon: BsGit, label: "Source Control" },
];

const Contact = () => {
  const [mode, setMode] = useState("standard");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="contact-section contact">
      <h1 className="contact-title">
        <span className="code-symbol">&lt;</span>
        <span className="code-text">Contact Me</span>
        <span className="code-symbol">/&gt;</span>
      </h1>

      <div className="contact-underline"></div>

      <div className="contact-card contact">
        <div className="contact-toggle">
          <button
            className={mode === "standard" ? "active" : ""}
            onClick={() => setMode("standard")}
          >
            Standard
          </button>

          <button
            className={mode === "developer" ? "active" : ""}
            onClick={() => setMode("developer")}
          >
            Developer Mode
          </button>
        </div>

     
        <div className="contact-content">
          {mode === "standard" ? (
            <div className="standard-placeholder">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <label>Name</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <label>Email</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    <label>Message</label>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="dev-mode-container">
          
              <div className="dev-top-bar">
                <div className="window-circles">
                  <span className="circle red"></span>
                  <span className="circle yellow"></span>
                  <span className="circle green"></span>
                </div>

                <div className="breadcrumb">
                  Portfolio &gt; src &gt; contact.tsx
                </div>

                <div className="top-right-container">
                  <span className="search-icon">
                    <IoIosSearch />
                  </span>
                  <span className="project-name">Portfolio</span>
                </div>
              </div>

       
              <div className="dev-main-row">
               
                <div className="activity-bar">
                  {activityIcons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="icon" title={item.label}>
                        <IconComponent size={24} />
                      </div>
                    );
                  })}
                </div>

                
                <div className="explorer-panel">
                  <div className="folder collapsed">
                    <IoIosArrowDown />
                    Portfolio
                    <div className="subfolder">
                      <IoIosArrowDown /> src{" "}
                      <div className="file">contact.tsx</div>
                    </div>
                  </div>
                </div>

               
                <div className="code-editor-panel">
                  <div className="tabs">
                    <div className="tab active">contact.tsx</div>
                  </div>
                  <pre className="code-content">
                    {`const sendMessage = {
                    name: "${formData.name || "User Name"}",
                    email: "${formData.email || "user@example.com"}",
                    message: "${formData.message || "Message content..."}"
                  };`}
                  </pre>
                  <button className="run-script">
                    <FaPlay color="orange"/>
                    Run Script
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
