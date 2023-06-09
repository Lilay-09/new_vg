import {
  faArrowLeft,
  faArrowRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ImageComp from "./ImageComp";
const ImageSliderComp = ({ data_img }) => {
  const [count, setCount] = useState(0);
  const [showBanner, setShowBanner] = useState(data_img[0].image_url);

  const handleNext = () => {
    setCount(count + 1);
    if (count === data_img.length - 1) {
      setCount(0);
      setShowBanner(data_img[0].image_url);
    } else {
      setCount(count + 1);
      setShowBanner(data_img[count + 1].image_url);
    }
  };

  const handlePrev = () => {
    if (count === 0) {
      setCount(data_img.length - 1);
      setShowBanner(data_img[data_img.length - 1].image_url);
    } else {
      setCount(count - 1);
      setShowBanner(data_img[count - 1].image_url);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="image_slider_container">
      <ImageComp imageUrl={showBanner} />
      <div className="btn_next_prev">
        <div onClick={handlePrev} className="prev">
          <FontAwesomeIcon icon={faCaretLeft} width={20} />
        </div>
        <div onClick={handleNext} className="next">
          <FontAwesomeIcon icon={faCaretRight} width={20} />
        </div>
      </div>
      <div className={`_banner_dot`}>
        {data_img.map((item, i) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                setShowBanner(item.image_url);
                setCount(i);
              }}
              className={`banner_img_dot ${
                showBanner === item.image_url && "active_slide"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSliderComp;
