import React, { useState } from "react";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import CinnamonComparison from "./components/cinnamon-comparison/cinnamon-comparison";
import CoffeeBenefits from "./components/coffee-benefits/coffee-benefits";
import CognitiveImpact from "./components/cognitive-impact/cognitive-impact";
import ResourcesSection from "./components/resources-section/resources-section";
import Footer from "./components/footer/footer";

import "./styles.scss";

function App() {
  const [currentLang, setCurrentLang] = useState("RO");

  const handleLangChange = (langCode) => {
    setCurrentLang(langCode);
  };

  return (
    <div className="App">
      <Header currentLang={currentLang} onLangChange={handleLangChange} />
      <div style={{ height: "70px" }}></div>
      <main>
        <HeroSection currentLang={currentLang} />
        <CinnamonComparison currentLang={currentLang} />
        <CoffeeBenefits currentLang={currentLang} />
        <CognitiveImpact currentLang={currentLang} />
        <ResourcesSection currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
