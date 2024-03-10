import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import HeaderAbout from "./HeaderAbout";
import Experience from "./Experience";
import Projetos from "./Projetos";
import Contato from "./Contato";

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  const handSelectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="mx-auto max-w-screen-lg font-popi">
      <Header onSectionChange={handSelectionChange} />
      <HeaderAbout />
      {activeSection === "about" && <About />}
      <Experience />
      <Projetos />
      <Contato />
    </div>
  );
}
