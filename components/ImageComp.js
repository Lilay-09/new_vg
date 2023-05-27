import Image from "next/image";
import React from "react";
import { useState } from "react";

const ImageComp = ({ imageUrl, defaultImg, onClick }) => {
  const [imageError, setImageError] = useState(false);
  let img = "/images/banner2.png";
  const handleImageError = (e) => {
    setImageError(true);
    e.target.onerror = null;
    e.target.src = img;
  };
  return (
    <React.Fragment>
      {!imageError ? (
        <Image
          src={imageUrl ? imageUrl : "/images/white.jpg"}
          onError={handleImageError}
          alt="Image"
          width={3000}
          height={2000}
          priority
          onClick={onClick}
        />
      ) : (
        <Image
          src={defaultImg ? defaultImg : `/images/white.jpg`}
          onError={handleImageError}
          alt="Image"
          width={3000}
          height={2000}
          priority
          onClick={onClick}
        />
      )}
    </React.Fragment>
  );
};
export default ImageComp;
