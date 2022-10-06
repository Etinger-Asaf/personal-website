import { useRef } from "react";
import ProjectsCard from "../ProjectsCard";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
import cardImg from "../../assets/images/landscape.jpeg";

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
          imgUrl={cardImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
          deploymenyUrl="#"
        />
        <ProjectsCard
          className="projectCard"
          imgUrl={cardImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
        />
        <ProjectsCard
          className="projectCard"
          imgUrl={cardImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
        />
      </div>
    </div>
  );
};

export default Projects;
