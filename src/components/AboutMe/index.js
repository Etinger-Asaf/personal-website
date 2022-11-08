import { useRef } from "react";
import addClassOnViewportEnter from "./../../reusable/FN addClassOnIntersection";
import github from "./../../assets/icons/githubSvg.svg";
import linkedin from "../../assets/icons/linkedin.svg";
const AboutMe = () => {
  const aboutMeRef = useRef();

  addClassOnViewportEnter(aboutMeRef, "aboutMeEnterAnimtaion");
  return (
    <div className="aboutMeContainer" ref={aboutMeRef}>
      <h1 className="aboutMeContent">About Me</h1>
      <p className="aboutMeContent">
        About a year ago, I discovered web development and was instantly hooked!
      </p>
      <p className="aboutMeContent">
        I loved it and have been learning ever since.
      </p>
      <p className="aboutMeContent">
        I have always been a person who enjoys stylish and sleek designs.
      </p>
      <p className="aboutMeContent">
        From tattooing to creating websites, creativity and aesthetics are part
        of who I am.
      </p>
      <p>It's just fun to create things that live online for me!</p>
      <div className="socialBtnContainer">
        <div className="aboutMeSocialBtn">
          <a href="https://www.linkedin.com/in/asaf-etinger-09b72a233/">
            <img src={linkedin} alt="linkedin"></img>
          </a>
        </div>
        <div className="aboutMeSocialBtn">
          <a href="https://github.com/Etinger-Asaf">
            <img src={github} alt="github"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
