import ProjectsCard from "../ProjectsCard";

const Projects = () => {
  return (
    <div className="projectsContainer globalContentContainer">
      <h1 className="projectsHeader">Some of my projects</h1>
      <div className="projectFlexContainer">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Projects;
