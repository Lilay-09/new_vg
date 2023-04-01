import Image from "next/image";
import React from "react";
import styles from "../styles/Branches.module.css";

const BannerImg = ({ title, img, height, alt }) => {
  return (
    <div className={styles.banner_container} style={{ height: `${height}vw` }}>
      <Image
        src={`/images/${img ? img : "building1.png"}`}
        width={400}
        height={400}
        alt={alt ? `${alt}` : "building"}
        priority
      />
      <h3
        style={{
          position: "absolute",
          bottom: "0",
          padding: "1rem",
          color: "white",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default BannerImg;
