import React, { useEffect, useState } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/LastProject.module.css";
import Title from "../../../components/Title";
import SliderBanner from "../../../components/SliderBanner";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ProjectDetails = () => {
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

  return (
    <Layout width={100}>
      <div className={styles.project__banner}>
        <div className={styles.banner_img_box}>
          <Image
            src={showBanner}
            width={1000}
            height={1000}
            alt="img"
            priority
          />
          <div className={styles.btn_next_prev}>
            <div onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} width={20} />
            </div>
            <div onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} width={20} />
            </div>
          </div>
        </div>

        <div className={`${styles._banner_dot}`}>
          {img.map((item, i) => {
            return (
              <div
                key={item.img}
                onClick={() => {
                  setShowBanner(item.img);
                  setCount(i);
                }}
                className={styles.banner_img_dot}
              >
                <Image
                  src={item.img}
                  width={1000}
                  height={1000}
                  alt="img"
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.project__spec_details}>
        <Title title={"ProjectName"} />
        <div className={styles.__spec_lst}>
          <span className={styles.prp_name}>Property type:</span>
          <span>Condominium</span>
        </div>
        <div className={styles.__spec_lst}>
          <span className={styles.prp_name}>Address:</span>
          <span>Phnom Penh</span>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>

        <div className={styles.project__more__details_content}>
          {img.map((item, i) =>
            i % 2 === 0 ? (
              <div className={styles._prp__view} key={i}>
                <div className={styles._prp__view_cnt}>
                  <Image
                    src={item.img}
                    width={1000}
                    height={1000}
                    alt="img"
                    className=""
                  />
                </div>
                <div className={` ${styles._prp__view_cnt}`}>
                  <h4>Home Fashion</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={
                  i % 2 !== 0
                    ? styles["_prp__view"] + " " + styles["reverse"]
                    : styles["_prp__view"]
                }
                key={i}
              >
                <div className={styles._prp__view_cnt}>
                  <h4>Home Fashion</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className={styles._prp__view_cnt}>
                  <Image
                    src={item.img}
                    width={1000}
                    height={1000}
                    alt="img"
                    className=""
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
