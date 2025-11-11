import React from "react";
import "./header.scss";
import { translations } from "../../dictionaries/translations";
import logoSrc from "../../assets/logo-cinnamon-edu.png";

const Header = ({ currentLang, onLangChange }) => {
  const T = translations[currentLang].header;
  const allLangs = Object.keys(translations);

  return (
    <header className="header">
      <a href="/" className="headerLogo">
        <img src={logoSrc} alt="CinnamonEdu Logo" />
        {T.logoText}
      </a>
      <nav className="headerNav">
        <ul className="navMenu">
          {T.links.map((name) => (
            <li key={name} className="navItem">
              <a href={`#${name.toLowerCase()}`} className="navLink">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="headerLangSelector">
          {allLangs.map((code, index) => (
            <React.Fragment key={code}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLangChange(code);
                }}
                className={code === currentLang ? "active" : ""}
              >
                {code}
              </a>
              {index < allLangs.length - 1 && " | "}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
