import { useEffect } from "react";

function useChangeDataSetWithTimer(setFunction, val, time) {
  useEffect(() => {
    console.log("this is from the function");
    setFunction(val);
    const timer = setTimeout(setFunction(null), time);
    return () => {
      clearTimeout(timer);
    };
  });
}

export default useChangeDataSetWithTimer;
