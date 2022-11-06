import { useEffect, useRef } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import WaveSvg from "./components/WaveSvg";
// import logoSvg from "./assets/logoSvg/logo.svg";
const App = () => {
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const introRef = useRef();
  const contactRef = useRef();

  return (
    <div className="bodyContainer">
      <header>
        <NavBar
          intro={introRef}
          projects={projectsRef}
          aboutMe={aboutMeRef}
          contact={contactRef}
        />
        <WaveSvg />
      </header>
      <div className="contentScroll">
        <div className="contentContainer" ref={introRef}>
          <Intro />
        </div>
        <div className="contentContainer" ref={projectsRef}>
          <Projects />
        </div>
        <div className="contentContainer" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="contentContainer" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
