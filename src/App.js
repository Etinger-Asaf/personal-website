import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/Navigation";
import WaveSvg from "./components/WaveSvg";
const App = () => {
  return (
    <div className="bodyContainer">
      <NavBar />
      <WaveSvg />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default App;
