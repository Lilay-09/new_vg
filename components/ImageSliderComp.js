import {
  faArrowLeft,
  faArrowRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const ImageSliderComp = () => {
  const nextBtnRef = useRef();
  const autoClick = () => {
    if (nextBtnRef.current) {
      nextBtnRef.current.click();
      setTimeout(autoClick, 5000); // Adjust the delay (in milliseconds) as per your requirement
    }
  };
  const img = [
    { img: "/images/tp1.jpg" },
    { img: "/images/tp2.jpg" },
    { img: "/images/tp3.jpg" },
    { img: "/images/tp4.jpg" },
  ];
  const [count, setCount] = useState(0);
  const [showBanner, setShowBanner] = useState(img[0].img);

  const handleNext = () => {
    if (count === img.length - 1) {
      setCount(1);
      setShowBanner(img[0].img);
    } else {
      setCount(count + 1);
      setShowBanner(img[count + 1].img);
    }
  };

  const handlePrev = () => {
    if (count === 0) {
      setCount(img.length - 1);
      setShowBanner(img[img.length - 1].img);
    } else {
      setCount(count - 1);
      setShowBanner(img[count - 1].img);
    }
  };

  useEffect(() => {
    setTimeout(autoClick, 3000);

    return () => clearTimeout(autoClick);
  });
  return (
    <div className="image_slider_container">
      <Image src={showBanner} width={1000} height={1000} alt="img" priority />
      <div className="btn_next_prev">
        <div onClick={handlePrev} className="prev">
          <FontAwesomeIcon icon={faCaretLeft} width={20} />
        </div>
        <div onClick={handleNext} className="next">
          <FontAwesomeIcon icon={faCaretRight} width={20} />
        </div>
      </div>
      <div className={`_banner_dot`}>
        {img.map((item, i) => {
          return (
            <div
              key={item.img}
              onClick={() => {
                setShowBanner(item.img);
                setCount(i);
              }}
              className={`banner_img_dot ${
                showBanner === item.img && "active_slide"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSliderComp;
