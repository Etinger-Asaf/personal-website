import { useEffect, useRef, useState } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import addClassOnViewportEnter from "../../reusable/FN addClassOnIntersection";
const Contact = () => {
  const inputRef = useRef(null);
  const [requestStatus, setRequestStatus] = useState(null);

  const isInputVisiable = useElementOnScreen(inputRef);

  addClassOnViewportEnter(inputRef, "inputAnimation");

  async function submitHandler(e) {
    try {
      e.preventDefault();
      setRequestStatus("pending");
      if (inputRef.current === undefined) return;
      let fetchURL = "/cv";
      // let fetchURL;
      // process.env.NODE_ENV === "production"
      //   ? (fetchURL = "https://personal-website-green-gamma.vercel.app/cv")
      //   : (fetchURL = "/cv");

      const reqOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ emailAddress: inputRef.current.value }),
      };
      const res = await fetch(fetchURL, reqOptions);
      const data = await res.json();
      console.log(data);
      setRequestStatus("success");
    } catch (err) {
      setRequestStatus("error");
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
        <p className="inputTitle">Like what you see?</p>
        <form onSubmit={submitHandler}>
          <input
            ref={inputRef}
            type="email"
            className="contactInput"
            placeholder="Type your email and get my CV"
          ></input>
          <button data-status={requestStatus} className="submitBtn">
            SUBMIT
          </button>
        </form>
        <p className="spanToExpenedInput">Type your email and get my CV</p>
      </div>
    </div>
  );
};
export default Contact;
