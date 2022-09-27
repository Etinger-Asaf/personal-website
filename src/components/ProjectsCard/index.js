const ProjectCard = ({
  imgUrl,
  title,
  description,
  githubUrl,
  deploymenyUrl,
}) => {
  return (
    <div className="projectsCardContainer">
      <div className="cardTopContainer">
        <img src={imgUrl} className="cardImage" />
      </div>
      <div className="cardBottomContainer">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="btnContainer">
          <a href={githubUrl}>github</a>
          {deploymenyUrl && <a href="#">deployment</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
