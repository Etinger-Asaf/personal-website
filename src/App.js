import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WaveSvg from "./components/WaveSvg";
import logoSvg from "./assets/logoSvg/logo.svg";
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
      {/* <img src={logoSvg} /> */}
    </div>
  );
};

export default App;
