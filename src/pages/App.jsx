import React from "react";
import Header from "./Header";
import About from "./About";
import HeaderAbout from "./HeaderAbout";
import Experience from "./Experience";
import Projetos from "./Projetos";

export default function App() {
  return (
    <div className="mx-auto max-w-screen-lg font-popi">
      <Header />
      <HeaderAbout />
      <About />
      <Experience />
      <Projetos />
    </div>
  );
}
