import { useRef } from "react";
import ProjectsCard from "../ProjectsCard";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
import cardImg from "../../assets/images/landscape.jpeg";

const Projects = () => {
  const headerRef = useRef();

  addClassOnViewportEnter(headerRef, "headerAnimation");

  return (
    <div className="projectsContainer globalContentContainer">
      <h1 className="projectsHeader" ref={headerRef}>
        Some of my projects
      </h1>
      <div className="projectFlexContainer">
        <ProjectsCard
          imgUrl={cardImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
          deploymenyUrl="#"
        />
        <ProjectsCard
          imgUrl={cardImg}
          title="blabla"
          description="mvkdfnvjfkbhcdjs"
          githubUrl="#"
        />
        <ProjectsCard
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
