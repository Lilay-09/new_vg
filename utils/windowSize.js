import React, { useEffect, useState } from "react";

const UsewindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    cWidth: undefined,
    cHeight: undefined,
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        width: window.screen.width,
        height: window.screen.height,
        cWidth: window.innerWidth,
        cHeight: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return windowSize;
};

export default UsewindowSize;
