import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { data } from "../utils/data";
import styles from "../styles/Home.module.css";
import CardComp from "./CardComp";

const CardFrame = ({ data, title, href }) => {
  return (
    <CardComp
      title={`${title}`}
      // see_all={
      //   <Link className={`d-flex align-items-center`} passHref href={`${href}`}>
      //     <span>View All</span>
      //     <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
      //   </Link>
      // }
    >
      <div className={styles.card_container}>
        {data.map((item, i) => {
          return (
            <div className={styles.card_frame} key={i}>
              {href ? (
                <Link className={styles.card_img} href={href}>
                  <Image
                    src={`/${item.url}`}
                    alt="l1"
                    width={3000}
                    height={3000}
                    priority
                  />
                </Link>
              ) : (
                <div className={styles.card_img}>
                  <Image
                    src={`/${item.url}`}
                    alt="l1"
                    width={3000}
                    height={3000}
                    priority
                  />
                </div>
              )}
              <div className={styles.card_text}>
                <span className={styles.title}>Your Project Name</span>
                <div>
                  <span>Type :</span>
                  <span>Condo</span>
                </div>
                <div>
                  <span>Address :</span>
                  <span>8502 Preston Rd. Inglewood, Maine...</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CardComp>
  );
};

export default CardFrame;
