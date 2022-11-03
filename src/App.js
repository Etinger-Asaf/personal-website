import { useEffect, useRef } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WaveSvg from "./components/WaveSvg";
// import logoSvg from "./assets/logoSvg/logo.svg";
const App = () => {
  const aboutMeRef = useRef();
  const projectsRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  return (
    <div className="bodyContainer">
      <header>
        <NavBar
          aboutMe={aboutMeRef}
          projects={projectsRef}
          work={workRef}
          contact={contactRef}
        />
        <WaveSvg />
      </header>
      <div className="contentScroll">
        <div className="contentContainer" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="contentContainer" ref={projectsRef}>
          <Projects />
        </div>
        <div className="contentContainer" ref={workRef}>
          <Work />
        </div>
        <div className="contentContainer" ref={contactRef}>
          <Contact />
        </div>
      </div>
      {/* <img src={logoSvg} /> */}
    </div>
  );
};

export default App;
