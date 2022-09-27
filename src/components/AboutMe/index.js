import gitIcon from "../../assets/icons/git.svg";
import htmlIcon from "../../assets/icons/html.svg";
import jsIcon from "../../assets/icons/js.svg";
import nodeIcon from "../../assets/icons/node.svg";
import reactIcon from "../../assets/icons/react.svg";
import sassIcon from "../../assets/icons/sass.svg";
const AboutMe = () => {
  // ======================================
  return (
    <div className="globalContentContainer aboutMeContainer">
      <h1>
        Hello! My name is Asaf and I enjoy creating things that live on the
        internet!
      </h1>
      <h2>Self taught and self explorer!</h2>
      <p className="pFirst">
        I first came across web development about a year ago and it was a match!
        <br></br>
        Loved it and have been learning since then.<br></br> I have always been
        a person who enjoys stylish and sleek designs. <br></br>Creativity and
        aesthetic are part of me, from being a tattoo artist to creating web
        designs.
      </p>
      <p className="pSecond">
        Here are a few technologies I have been working with.
      </p>
      <div className="iconTechContainer">
        <img className="techIcon" src={gitIcon}></img>
        <img className="techIcon" src={htmlIcon}></img>
        <img className="techIcon" src={jsIcon}></img>
        <img className="techIcon" src={reactIcon}></img>
        <img className="techIcon" src={nodeIcon}></img>
        <img className="techIcon" src={sassIcon}></img>
      </div>
    </div>
  );
};

export default AboutMe;
