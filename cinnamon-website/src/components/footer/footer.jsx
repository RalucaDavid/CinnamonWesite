import React from "react";
import "./footer.scss";
import { translations } from "../../dictionaries/translations";

const Footer = ({ currentLang }) => {
  const T = translations[currentLang].footer;
  const navLinks = T.links.nav;
  const legalLinks = T.links.legal;

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerColumn navLinks">
          <h4>{T.headings.quickNav}</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerColumn legalLinks">
          <h4>{T.headings.legalInfo}</h4>
          <ul>
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footerColumn contactInfo">
          <h4>{T.headings.contact}</h4>
          <p>{T.contact}</p>
        </div>
      </div>
      <div className="footerBottom">
        <p className="footerCopyright">{T.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
