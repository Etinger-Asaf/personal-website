import { useEffect, useRef } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
const Contact = () => {
  const inputRef = useRef(null);

  const isInputVisiable = useElementOnScreen(inputRef);

  useEffect(() => {
    console.log(isInputVisiable.isIntersecting);
    if (!isInputVisiable.isIntersecting || inputRef.current === null) return;

    inputRef.current.focus();
  }, [isInputVisiable]);

  return (
    <div className="contactContainer">
      <div>
        <span>Was it nice? Type your email and get my CV</span>
        <form>
          <input
            ref={inputRef}
            type="email"
            className="contactInput"
            placeholder="Was it nice? Type your email and get my CV"
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;
