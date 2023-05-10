import React from "react";
import TiltleTile from "../TiltleTile";
import styles from "../../styles/LastProject.module.css";
import Image from "next/image";
const LastProjects = () => {
  let items = [
    "/images/tp1.jpg",
    "/images/tp2.jpg",
    "/images/tb1.jpg",
    "/images/pool.jpg",
    "/images/house_pool.jpg",
    "/images/kitchen.png",
  ];
  return (
    <div>
      <TiltleTile title={"Last Project"} href={"/project/all"} />
      <div className={styles.card__container}>
        {items.map((item, index) => {
          return (
            <div className={styles.card__content} key={index}>
              <div className={styles.card__content_img}>
                <Image
                  src={item}
                  width={1000}
                  height={1000}
                  alt="building"
                  priority
                />
                <div className={styles.card_sts}>For Sales</div>
              </div>
              <div className={styles.card__content_text}>
                <h5>Project name</h5>
                <div>
                  <span className={styles.card_prop_name}>Type:</span>
                  <span>Condo</span>
                </div>
                <div>
                  <span className={styles.card_prop_name}> Address:</span>
                  <span>8502 Preston Rd. Inglewood, Maine...</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastProjects;
