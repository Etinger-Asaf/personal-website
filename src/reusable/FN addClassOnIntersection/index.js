import { useEffect } from "react";
import useElementOnScreen from "../../hooks/useElementOnScreen";

const addClassOnViewportEnter = (ref, classToAdd) => {
  const isHeaderVisable = useElementOnScreen(ref);
  console.log(isHeaderVisable.isIntersecting);
  useEffect(() => {
    if (!ref.current) return;

    if (isHeaderVisable.isIntersecting) ref.current.classList.add(classToAdd);
  });
};

export default addClassOnViewportEnter;
