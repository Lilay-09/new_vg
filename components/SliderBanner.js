import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SliderBanner = ({ slides }) => {
  const [timerId, setTimerId] = useState(null);
  const nextBtnRef = useRef();

  const autoClick = () => {
    if (nextBtnRef.current) {
      nextBtnRef.current.click();
      setTimeout(autoClick, 5000); // Adjust the delay (in milliseconds) as per your requirement
    }
  };

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

    setTimeout(autoClick, 3000);

    return () => clearTimeout(autoClick);
  });

  return (
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">
        &#8656;
      </button>
      <button
        className="carousel-button next"
        data-carousel-button="next"
        // ref={nextBtnRef}
      >
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
