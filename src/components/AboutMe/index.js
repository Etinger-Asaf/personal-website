import { useRef } from "react";
import addClassOnViewportEnter from "./../../reusable/FN addClassOnIntersection";
const AboutMe = () => {
  const aboutMeRef = useRef();

  addClassOnViewportEnter(aboutMeRef, "aboutMeEnterAnimtaion");
  return (
    <div className="aboutMeContainer" ref={aboutMeRef}>
      <h1 className="aboutMeContent">About Me</h1>
      <p className="aboutMeContent">
        I first came across web development about a year ago and it was a match!
      </p>
      <p className="aboutMeContent">
        Loved it and have been learning since then.
      </p>
      <p className="aboutMeContent">
        I have always been a person who enjoys stylish and sleek designs.
      </p>
      <p className="aboutMeContent">
        Creativity and aesthetic are part of me, from being a tattoo artist to
        creating web designs.
      </p>
      <p>and I just enjoy creating things that live on the internet!</p>
    </div>
  );
};

export default AboutMe;
