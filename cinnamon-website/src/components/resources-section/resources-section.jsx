import React from "react";
import "./resources-section.scss";
import { translations } from "../../dictionaries/translations";

const ResourcesSection = ({ currentLang }) => {
  const T = translations[currentLang].resources;

  return (
    <section className="resourcesSection" id="resurse">
      <div className="resourcesSectionContainer">
        <h2 className="resourcesSectionTitle">{T.title}</h2>
        <p className="resourcesSectionCtaText">{T.cta}</p>
        <div className="resourcesGrid">
          {T.items.map((item, index) => (
            <a
              key={index}
              href={`/assets/downloads/${item.file}`}
              target="_blank"
              className="resourceItem ctaButton"
            >
              <span className="iconDownload">⬇️</span> {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
