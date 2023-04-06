import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/Properties.module.css";
const Scrollable = ({ children, data }) => {
  const ref = useRef();
  const innerRef = useRef();
  let pressed = false;
  let startX;
  let x;
  // useEffect(() => {
  //   const el = ref.current;
  //   if (el) {
  //     const onWheel = (e) => {
  //       if (e.deltaY == 0) return;
  //       e.preventDefault();
  //       el.scrollTo({
  //         left: el.scrollLeft + e.deltaY * 3,
  //         behavior: "smooth",
  //       });
  //       console.log(e.deltaY);
  //     };

  //     el.addEventListener("wheel", onWheel);
  //     return () => el.removeEventListener("wheel", onWheel);
  //   }
  // }, []);

  const mouseDown = (e) => {
    ref.current.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - innerRef.current.offsetLeft;
      ref.current.style.cursor = "grabbing";
    });
  };
  const mouseEnter = (e) => {
    ref.current.addEventListener("mouseenter", (e) => {
      ref.current.style.cursor = "grab";
    });
  };
  const mouseUp = (e) => {
    ref.current.addEventListener("mouseup", (e) => {
      ref.current.style.cursor = "grab";
      pressed = false;
    });
  };
  const checkBoundary = () => {
    let outer = ref.current.getBoundingClientRect();
    let inner = innerRef.current.getBoundingClientRect();
    if (parseInt(innerRef.current.style.left) > 0) {
      innerRef.current.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerRef.current.style.left = `-${inner.width - outer.width}px`;
    }
  };
  const mouseMove = (e) => {
    ref.current.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;
      innerRef.current.style.left = `${x - startX}px`;
      checkBoundary();
    });
  };
  const mouseLeave = (e) => {
    ref.current.addEventListener("mouseleave", (e) => {
      if (!pressed) return;
      e.preventDefault();
      pressed = false;
    });
  };
  return (
    <div
      ref={ref}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="scrollable"
    >
      <div
        ref={innerRef}
        style={{
          display: "flex",
          gap: "3rem",
          position: "relative",
          top: 0,
          left: 0,
          // overflowX: "hidden",
          pointerEvents: "none",
        }}
        // className="inner"
      >
        {children}
      </div>
    </div>
  );
};

export default Scrollable;
