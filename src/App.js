import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WaveSvg from "./components/WaveSvg";

const App = () => {
  return (
    <div className="bodyContainer">
      <header>
        <NavBar />
        <WaveSvg />
      </header>
      <div className="contentScroll">
        <div className="contentContainer">
          <AboutMe />
        </div>
        <div className="contentContainer">
          <Projects />
        </div>
        <div className="contentContainer">
          <Work />
        </div>
        <div className="contentContainer">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
