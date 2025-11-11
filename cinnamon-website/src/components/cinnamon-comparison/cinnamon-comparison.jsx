import React from "react";
import "./cinnamon-comparison.scss";
import { translations } from "../../dictionaries/translations";

const CinnamonComparison = ({ currentLang }) => {
  const T = translations[currentLang].comparison;

  return (
    <section className="comparisonSection" id="comparison">
      <h2 className="comparison-sectionTitle">{T.title}</h2>
      <div className="comparisonGrid">
        <div className="comparisonCard ceylon">
          <h3>{T.type1}</h3>
          {T.table.map((row, index) => (
            <p key={index} className="comparisonRow">
              <strong>{row.label}:</strong> <span>{row.ceylon}</span>
            </p>
          ))}
        </div>
        <div className="comparisonCard cassia">
          <h3>{T.type2}</h3>
          {T.table.map((row, index) => (
            <p key={index} className="comparisonRow">
              <strong>{row.label}:</strong> <span>{row.cassia}</span>
            </p>
          ))}
        </div>
      </div>
      <p className="comparisonNote">{T.note}</p>
    </section>
  );
};

export default CinnamonComparison;
