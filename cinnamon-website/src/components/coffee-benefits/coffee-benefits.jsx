import React from "react";
import "./coffee-benefits.scss";
import { translations } from "../../dictionaries/translations";

const CoffeeBenefits = ({ currentLang }) => {
  const T = translations[currentLang].coffee;

  return (
    <section className="coffeeSection" id="coffee">
      <h2 className="coffeeSectionTitle">{T.title}</h2>
      <div className="coffeeSectionContent">
        <div className="quoteBox">
          <p className="quoteBoxText">"{T.quoteText}"</p>
          <p className="quoteBoxAuthor">- {T.quoteAuthor}</p>
        </div>
        <ul className="coffee-benefits-list">
          {T.benefits.map((benefit, index) => (
            <li key={index} className="benefitItem">
              <span className="iconCinnamon">☕</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoffeeBenefits;
