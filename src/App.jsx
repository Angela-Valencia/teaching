import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaWeixin } from "react-icons/fa";
import "./styles/App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/translations")
      .then((res) => res.json())
      .then((data) => setTranslations(data));
  }, []);

  const getText = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">{getText("Studio Musik Angela")}</div>
          <div className="language-buttons">
            <button
              onClick={() => setLanguage("en")}
              style={{ background: language === "en" ? "#4a5568" : "#3182ce" }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              style={{ background: language === "id" ? "#4a5568" : "#e53e3e" }}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("zh")}
              style={{ background: language === "zh" ? "#4a5568" : "#d69e2e" }}
            >
              中文
            </button>
          </div>
        </div>
      </nav>

      <header className="header">
        <div>
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_lw3r32WNnJNBKGQgjl7CA4fKXTrhYi_AOKclm84Cvx2rI=s160-c-k-c0x00ffffff-no-rj"
            alt="Angela Valencia"
            className="profile-image"
          />
          <h1>{getText("Angela Valencia")}</h1>
          <div className="certifications">
            <span>ABRSM 7 Violin</span> | <span>ABRSM 8 Piano</span> |{" "}
            <span>ABRSM 5 Theory</span>
          </div>
        </div>
      </header>

      <section className="courses-section">
        <h2>{getText("Kursus")}</h2>
        <div className="course-grid">
          {/* Violin Courses */}
          <div className="course-card">
            <h3>{getText("Kursus Biola")}</h3>
            <p>{getText("Pemula")}</p>
            <p>{getText("priceBeginnerViolin")}</p>
          </div>
          {/* Add more course cards */}
        </div>
      </section>

      <section className="contact-section">
        <h2>{getText("Hubungi Saya")}</h2>
        <div className="social-links">
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="WeChat">
            <FaWeixin />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
