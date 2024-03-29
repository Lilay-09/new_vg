import Image from "next/image";
import React from "react";
import { useState } from "react";

const ImageComp = ({ imageUrl, defaultImg, onClick, width, height }) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = (e) => {
    setImageError(true);
    e.target.onerror = null;
  };
  return (
    <>
      {!imageError ? (
        <Image
          src={
            imageUrl ? imageUrl : defaultImg ? defaultImg : `/images/white.jpg`
          }
          onError={handleImageError}
          alt="Image"
          width={width ? `${width}` : 3000}
          height={height ? `${height}` : 2000}
          priority
          onClick={onClick}
        />
      ) : (
        <Image
          src={defaultImg ? defaultImg : `/images/white.jpg`}
          onError={handleImageError}
          alt="Image"
          width={width ? `${width}` : 3000}
          height={height ? `${height}` : 2000}
          priority
          onClick={onClick}
        />
      )}
    </>
  );
};
export default ImageComp;
