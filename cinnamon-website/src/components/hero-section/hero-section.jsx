import React from "react";
import "./hero-section.scss";
import { translations } from "../../dictionaries/translations";

const HeroSection = ({ currentLang }) => {
  const T = translations[currentLang].hero;

  return (
    <section className="hero">
      <div className="heroContent">
        <h1 className="heroTitle">{T.title}</h1>
        <p className="heroSubtitle">{T.subtitle}</p>
        <a href="#recipes" className="ctaButton">
          {T.cta}
        </a>
        <p className="heroTrilingualNote">{T.trilingualNote}</p>
      </div>
    </section>
  );
};

export default HeroSection;
