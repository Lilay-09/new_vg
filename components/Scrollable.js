import React, { useCallback, useEffect, useRef, useState } from "react";

const Scrollable = ({ children }) => {
  let ref = useRef();
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

  const onMouseUp = useCallback(
    (e) => {
      setState({ ...state, isDown: false, clientX: 0, scrollLeft: 0 });
    },
    [state]
  );

  const onMouseDown = useCallback(
    (e) => {
      setState({
        ...state,
        isDown: true,
        clientX: e.pageX - ref.current.offsetLeft,
        scrollLeft: ref.current.scrollLeft,
      });
      e.preventDefault();
    },
    [state]
  );
  const onMouseMove = useCallback(
    (e) => {
      if (!state.isDown) {
        return;
      }

      const x = e.pageX - ref.current.offsetLeft;
      const walk = x - state.clientX;
      ref.current.scrollLeft = state.scrollLeft - walk;
      e.preventDefault();
    },
    [state]
  );
  const onMouseLeave = useCallback(
    (e) => {
      setState({ ...state, isDown: false, clientX: 0, scrollLeft: 0 });
    },
    [state]
  );
  useEffect(() => {
    if (ref && ref.current && ref.current) {
      return;
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseDown, onMouseUp, onMouseMove, onMouseLeave]);
  const scrollStyles = {
    display: "flex",
    overflowX: "scroll",
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
