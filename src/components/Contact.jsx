import { useState } from "react";
import "../styles/Contact.css";
import { MdOutlineFolderOpen } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiAppsLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const activityIcons = [
  { icon: MdOutlineFolderOpen, label: "Explorer" },
  { icon: AiOutlineFile, label: "Files" },
  { icon: BiSearch, label: "Search" },
  { icon: RiAppsLine, label: "Extensions" },
  { icon: BsGit, label: "Source Control" },
];

const contactCodeHeader = `import { sendToServer } from './api.js';\n\n`;

const contactCodeBody = (formData) => `

const handleSubmit = async (e) => {
  e.preventDefault();
  const newMessage = {
    name: "${formData.name}",   // click here and type your Name
    email: "${formData.email}", // click here and type your Email
    message: "${formData.message}" // click here and type your Message
  };

  try {
    const response = await sendToServer(newMessage);
    console.log("Message sent successfully:", response);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};
`;

const apiString = `import axios from "axios";

export const sendToServer = async (data) => {
  try {
    const response = await axios.post("/api/contact", data, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};`;

const Contact = () => {
  
  const [mode, setMode] = useState("standard");
  const [activeTab, setActiveTab] = useState("contact.js");
  const [activeLine, setActiveLine] = useState(2);
  const [isSrcCollapsed, setIsSrcCollapsed] = useState(false);
  const [isRootCollapsed, setIsRootCollapsed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {

    if (e) e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.dismiss();
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xojkalao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.dismiss();
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.dismiss();
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong.");
    }
  };

  // Compute codeString with formData
  const codeString = contactCodeHeader + contactCodeBody(formData);

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
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
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
            <div className="dev-mode-container" data-cursor="disable">
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
                <div className="activity-bar" data-cursor="disable">
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

                <div className="explorer-panel" data-cursor="disable">
                  <p className="explorer-text">EXPLORER</p>

                  {/* Root Portfolio Folder */}
                  <div className="folder">
                    <div
                      className="folder-header"
                      onClick={() => setIsRootCollapsed(!isRootCollapsed)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IoIosArrowDown
                        style={{
                          transform: isRootCollapsed
                            ? "rotate(-90deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                      <span
                        className="portfolio-text"
                        style={{ marginLeft: 4 }}
                      >
                        PORTFOLIO
                      </span>
                    </div>

                    {/* Source folder contents */}
                    {!isRootCollapsed && (
                      <div className="subfolder" style={{ paddingLeft: 16 }}>
                        <div className="folder">
                          <div
                            className="folder-header"
                            onClick={() => setIsSrcCollapsed(!isSrcCollapsed)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                          >
                            <IoIosArrowDown
                              style={{
                                transform: isSrcCollapsed
                                  ? "rotate(-90deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            />
                            <span style={{ marginLeft: 4 }}>src</span>
                          </div>

                          {!isSrcCollapsed && (
                            <div
                              className="folder-files"
                              style={{ paddingLeft: 16 }}
                            >
                              <div
                                className={`file ${activeTab === "contact.js" ? "active-file" : ""}`}
                                onClick={() => setActiveTab("contact.js")}
                              >
                                <AiOutlineFile
                                  style={{
                                    marginRight: 6,
                                    color:
                                      activeTab === "contact.js"
                                        ? "orange"
                                        : "#d4d4d4",
                                  }}
                                />
                                contact.tsx
                              </div>
                              <div
                                className={`file ${activeTab === "api.js" ? "active-file" : ""}`}
                                onClick={() => setActiveTab("api.js")}
                              >
                                <AiOutlineFile
                                  style={{
                                    marginRight: 6,
                                    color:
                                      activeTab === "api.js"
                                        ? "orange"
                                        : "#d4d4d4",
                                  }}
                                />
                                api.js
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="code-editor-panel" data-cursor="disable">
                  <div className="tabs">
                    <div
                      className={`tab ${activeTab === "contact.js" ? "active" : ""}`}
                      onClick={() => setActiveTab("contact.js")}
                    >
                      contact.jsx
                    </div>
                    <div
                      className={`tab ${activeTab === "api.js" ? "active" : ""}`}
                      onClick={() => setActiveTab("api.js")}
                    >
                      api.js
                    </div>
                  </div>

                  <div className="code-with-lines">
                    <div className="line-numbers">
                      {(activeTab === "contact.js" ? codeString : apiString)
                        .split("\n")
                        .map((_, i) => (
                          <span key={i}>{i + 1}</span>
                        ))}
                    </div>

                    <pre className="code-content">
                      {(activeTab === "contact.js" ? codeString : apiString)
                        .split("\n")
                        .map((line, i) => (
                          <div
                            key={i}
                            className={
                              activeLine === i + 1
                                ? "code-line active-line"
                                : "code-line"
                            }
                            onClick={() => setActiveLine(i + 1)}
                          >
                            {/* {" "}
                            {activeLine === i + 1 && <span className="caret" />} */}
                            {line.split(/(\s+|[{}=:,])/g).map((part, j) => {
                              if (!part) return null;

                              const fields = ["name", "email", "message"];
                              const placeholderMap = {
                                name: "Your Name",
                                email: "user@example.com",
                                message: "Message content...",
                              };

                              if (
                                fields.some((f) => part === `"${formData[f]}"`)
                              ) {
                                const field = fields.find(
                                  (f) => part === `"${formData[f]}"`,
                                );
                                const value = formData[field];

                                return (
                                  <span
                                    key={field + j}
                                    style={{
                                      color: "#CE9178",
                                      opacity: value ? 1 : 0.4,
                                      cursor: "text",
                                      direction: "ltr",
                                      unicodeBidi: "plaintext",
                                      display: "inline-block", // important
                                      minWidth: "1ch", // important
                                    }}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onFocus={(e) => {
                                      const range = document.createRange();
                                      range.selectNodeContents(e.currentTarget);
                                      const sel = window.getSelection();
                                      sel.removeAllRanges();
                                      sel.addRange(range);
                                    }}
                                    onInput={(e) => {
                                      setFormData({
                                        ...formData,
                                        [field]:
                                          e.currentTarget.textContent.trim(),
                                      });
                                    }}
                                  >
                                    {value || placeholderMap[field]}
                                  </span>
                                );
                              }

                              // default syntax highlighting
                              if (
                                /^(const|let|var|export|return|async|await|import|from)$/.test(
                                  part,
                                )
                              )
                                return (
                                  <span key={j} style={{ color: "#569CD6" }}>
                                    {part}
                                  </span>
                                );
                              if (
                                /^(name|email|message|sendToServer|data)$/.test(
                                  part,
                                )
                              )
                                return (
                                  <span key={j} style={{ color: "#9CDCFE" }}>
                                    {part}
                                  </span>
                                );
                              if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(part))
                                return (
                                  <span key={j} style={{ color: "#4EC9B0" }}>
                                    {part}
                                  </span>
                                );

                              return part;
                            })}
                          </div>
                        ))}
                    </pre>
                  </div>

                  <button className="run-script" onClick={handleSubmit}>
                    <FaPlay color="#4bf417" />
                    Run Script
                  </button>

           
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;
