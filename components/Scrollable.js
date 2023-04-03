import React, { useCallback, useEffect, useRef, useState } from "react";

const Scrollable = ({ children }) => {
  let ref = useRef();
  //   let isDown = false;
  //   let clientX;
  //   let scrollLeft;
  const [state, setState] = useState({
    isDown: false,
    clientX: 0,
    scrollLeft: 0,
  });
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 9.5,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);

  const onMouseUp = useCallback((e) => {
    setState({
      isDown: false,
    });
  }, []);

  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setState({
        ...state,
        isDown: true,
        clientX: e.pageX - ref.current.offsetLeft,
        scrollLeft: ref.current.scrollLeft,
      });
    },
    [state]
  );
  const onMouseMove = useCallback(
    (e) => {
      if (!state.isDown) {
        return;
      }
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = x - state.clientX;
      ref.current.scrollLeft = state.scrollLeft - walk;
    },
    [state]
  );
  const onMouseLeave = (e) => {
    setState({ ...state, isDown: false });
  };
  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseDown, onMouseUp, onMouseMove]);
  const scrollStyles = {
    display: "flex",
    overflowX: "scroll",
    gap: "2rem",
  };
  return (
    <div
      style={scrollStyles}
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="scrollable"
    >
      {children}
    </div>
  );
};

export default Scrollable;
