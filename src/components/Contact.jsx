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

  const [activeLine, setActiveLine] = useState(2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const codeString = `const newMessage = {
    name: "${formData.name || "Your Name"}",
    email: "${formData.email || "user@example.com"}",
    message: "${formData.message || "Message content..."}"
  };`;

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
                      <div
                        key={index}
                        className={`icon ${index === 0 ? "active" : ""}`}
                        title={item.label}
                      >
                        <IconComponent size={24} />
                      </div>
                    );
                  })}
                </div>

                <div className="explorer-panel">
                  <div className="folder collapsed">
                    <p className="explorer-text">EXPLORER</p>
                    <IoIosArrowDown color=" lab(65.0361 -1.42065 -56.9802)" />
                    <span className="portfolio-text">PORTFOLIO</span>
                    <div className="subfolder">
                      <IoIosArrowDown /> src{" "}
                      <div className="file">contact.tsx</div>
                    </div>
                  </div>
                </div>

                <div className="code-editor-panel">
                  <div className="tabs">
                    <div className="tab active">contact.jsx</div>
                  </div>

                  <div className="code-with-lines">
                    <div className="line-numbers">
                      {codeString.split("\n").map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>

                    <pre className="code-content">
                      {codeString.split("\n").map((line, i) => (
                        <div
                          div
                          key={i}
                          className={
                            activeLine === i + 1
                              ? "code-line active-line"
                              : "code-line"
                          }
                          onClick={() => setActiveLine(i + 1)}
                        >
                          {activeLine === i + 1 && <span className="caret" />}
                          {line
                            .split(/(\s+|".*?"|'.*?'|`.*?`|[{}=:,])/g)
                            .map((part, j) => {
                              if (!part) return null;

                              if (/^["'`].*["'`]$/.test(part)) {
                                return (
                                  <span key={j} style={{ color: "#CE9178" }}>
                                    {part}
                                  </span>
                                );
                              }

                              if (/^(const|let|var)$/.test(part)) {
                                return (
                                  <span key={j} style={{ color: "#569CD6" }}>
                                    {part}
                                  </span>
                                );
                              }

                              
                              if (/^(name|email|message)$/.test(part)) {
                                return (
                                  <span key={j} style={{ color: "#9CDCFE" }}>
                                    {part}
                                  </span>
                                );
                              }

                             //Variable names
                              if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(part)) {
                                return (
                                  <span key={j} style={{ color: "#4EC9B0" }}>
                                    {part}
                                  </span>
                                );
                              }

                              return part;
                            })}
                        </div>
                      ))}
                    </pre>
                  </div>

                  <button className="run-script">
                    <FaPlay color="#4bf417" />
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
