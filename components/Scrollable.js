import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
const Scrollable = ({ children, data }) => {
  useEffect(() => {
    const slider = document.querySelectorAll(".items");
    let isDown = false;
    let startX;
    let scrollLeft;
    for (var i = 0; i < slider.length; i++) {
      slider[i].addEventListener("mousedown", (e) => {
        isDown = true;
        e.currentTarget.classList.add("active");
        startX = e.pageX - e.currentTarget.offsetLeft;
        scrollLeft = e.currentTarget.scrollLeft;
      });
      slider[i].addEventListener("mouseleave", (e) => {
        isDown = false;
        e.currentTarget.classList.remove("active");
      });
      slider[i].addEventListener("mouseup", (e) => {
        isDown = false;
        e.currentTarget.classList.remove("active");
      });
      slider[i].addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 3;
        e.currentTarget.scrollLeft = scrollLeft - walk;
      });
    }
  });
  return <div className="items">{children}</div>;
};

export default Scrollable;
