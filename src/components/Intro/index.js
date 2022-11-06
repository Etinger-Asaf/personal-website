import gitIcon from "../../assets/icons/git.svg";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.svg";
import nodeIcon from "../../assets/icons/node.svg";
import reactIcon from "../../assets/icons/react.svg";
import sassIcon from "../../assets/icons/sass.svg";
const Intro = () => {
  return (
    <div className="globalContentContainer introContainer">
      <h1>Asaf Etinger.</h1>

      <h2>Web Developer.</h2>
      <h2>Self taught and self explorer!</h2>
      <div className="largeIconsTechContainer">
        <div className="largeIconsDiv">
          <img className="larghTechIcon" src={reactIcon}></img>
          <h3>React.JS</h3>
        </div>
        <div className="largeIconsDiv">
          <img className="larghTechIcon" src={nodeIcon}></img>
          <h3>Node.JS</h3>
        </div>
      </div>

      <div className="iconTechContainer">
        <img className="techIcon reactAndNodeSmallIcons" src={reactIcon}></img>
        <img className="techIcon reactAndNodeSmallIcons" src={nodeIcon}></img>
        <img className="techIcon" src={gitIcon}></img>
        <img className="techIcon" src={htmlIcon}></img>
        <img className="techIcon" src={jsIcon}></img>
        <img className="techIcon" src={sassIcon}></img>
      </div>
    </div>
  );
};

export default Intro;
