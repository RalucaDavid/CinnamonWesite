import React from "react";
import "./cognitive-impact.scss";
import { translations } from "../../dictionaries/translations";

const CognitiveImpact = ({ currentLang }) => {
  const T = translations[currentLang].cognitive;

  return (
    <section className="cognitiveSection" id="cognitive">
      <h2 className="cognitiveSectionTitle">{T.title}</h2>
      <p className="cognitiveSectionSubtitle">{T.subtitle}</p>

      <div className="impactCardsGrid">
        {T.effects.map((effect, index) => (
          <div key={index} className="impactCard">
            <span className="iconBrain" aria-hidden="true">
              🧠
            </span>
            <h3>{effect.name}</h3>
            <p>{effect.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CognitiveImpact;
