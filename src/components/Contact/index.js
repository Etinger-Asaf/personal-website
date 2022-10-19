import { useEffect, useRef } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
const Contact = () => {
  const inputRef = useRef(null);

  const isInputVisiable = useElementOnScreen(inputRef);

  addClassOnViewportEnter(inputRef, "inputAnimation");

  async function submitHandler(e) {
    try {
      e.preventDefault();
      if (inputRef.current === undefined) return;

      console.log("this is it", inputRef.current.value);

      let fetchURL = "/cv";

      const reqOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ emailAddress: inputRef.current.value }),
      };

      await fetch(fetchURL, reqOptions).then((res) => res.json());
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!isInputVisiable.isIntersecting || inputRef.current === null) return;

    inputRef.current.focus();
  }, [isInputVisiable]);

  return (
    <div className="contactContainer">
      <div>
        <span>Like what you see? Type your email and get my CV</span>
        <form onSubmit={submitHandler}>
          <input
            ref={inputRef}
            type="email"
            className="contactInput"
            placeholder="Like what you see? Type your email and get my CV"
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;
