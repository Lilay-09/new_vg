import Image from "next/image";
import { useEffect, useState } from "react";

const SliderBanner = ({ slides }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  });

  return (
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">
        &#8656;
      </button>
      <button className="carousel-button next" data-carousel-button="next">
        &#8658;
      </button>
      <ul data-slides>
        <li className="slide" data-active>
          <Image
            src="/images/b1.jpg"
            alt="Nature Image #1"
            width={1000}
            height={1000}
          />
        </li>
        <li className="slide">
          <Image
            src="/images/b2.jpg"
            alt="Nature Image #1"
            width={1000}
            height={1000}
          />
        </li>
        <li className="slide">
          <Image
            src="/images/b3.jpg"
            alt="Nature Image #1"
            width={1000}
            height={1000}
          />
        </li>
      </ul>
    </div>
  );
};

export default SliderBanner;
