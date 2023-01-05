import { useRef, useState } from "react";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
import githubSvg from "../../assets/icons/githubSvg.svg";
import playSvg from "../../assets/icons/playSvg.svg";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  githubUrl,
  deploymenyUrl,
  tech,
}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const projectsCardRef = useRef();
  addClassOnViewportEnter(projectsCardRef, "projectsCardAnimation");

  const changeCardPositionHnadler = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div
      onClick={changeCardPositionHnadler}
      className={`projectsCardContainer ${
        isCardOpen ? "cardIsOpen" : "cardIsClose"
      }`}
      ref={projectsCardRef}
    >
      <div className="cardTopContainer">
        <img src={imgUrl} className="cardImage" />
      </div>
      <div className="cardBottomContainer">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{tech}</p>

        <div className="btnContainer">
          <div className="btnCard">
            <a href={githubUrl}>
              <img src={githubSvg} alt="github logo"></img>
            </a>
          </div>
          {deploymenyUrl && (
            <div className="btnCard">
              <a href={deploymenyUrl}>
                <img src={playSvg} alt="github logo"></img>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
