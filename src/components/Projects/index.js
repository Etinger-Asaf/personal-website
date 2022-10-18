import { useRef } from "react";
import ProjectsCard from "../ProjectsCard";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
import landscapeImg from "../../assets/images/landscape.jpeg";
import drawGame from "../../assets/images/drawGame.png";
import weatherApp from "../../assets/images/weatherApp.jpeg";

const splitedStr = (str) => {
  const tempSlice = str.split(" ");
  const headerToRender = tempSlice.map((el) => el.split(""));
  return headerToRender;
};

const str = splitedStr("Projects");

const mapStr = str.map((el) =>
  el.map((char, i) => {
    return (
      <span key={`${char} ${i}`} className="projectHeaderChar">
        {char}
      </span>
    );
  })
);

const Projects = () => {
  const headerRef = useRef();
  addClassOnViewportEnter(headerRef, "headerAnimation");

  return (
    <div className="projectsContainer globalContentContainer">
      <div className="projectsHeader" ref={headerRef}>
        {mapStr[0]}
      </div>
      <div className="projectFlexContainer">
        <ProjectsCard
          className="projectCard"
          imgUrl={drawGame}
          title="Darw and Guess"
          description="Two players, one draw a word and the second player guess it."
          tech="Made with React Redux Socket.io mongoose and mongoDB."
          githubUrl="https://github.com/Etinger-Asaf/Draw-And-Guess-2022"
          deploymenyUrl="https://draw-riddle.herokuapp.com/"
        />
        <ProjectsCard
          className="projectCard"
          imgUrl={weatherApp}
          title="Weather App"
          description="Let you check the weather for the next 5 day by location"
          tech="Made with React and Redux and accuWeather api"
          githubUrl="https://github.com/Etinger-Asaf/Weather-App"
        />
        <ProjectsCard
          className="projectCard"
          imgUrl={landscapeImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
        />
      </div>
    </div>
  );
};

export default Projects;
