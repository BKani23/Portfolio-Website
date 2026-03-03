import { useState } from "react";
import "../styles/Contact.css";

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

        {/* Content Area */}
        <div className="contact-content">
          {mode === "standard" ? (
            <div className="standard-placeholder">
              Standard Form Coming Next
            </div>
          ) : (
            <div className="dev-placeholder">
              Developer Mode IDE Coming Next
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
