import Image from "next/image";
import React, { useState } from "react";
import { data } from "../../utils/data";
import CardComp from "../CardComp";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const PropertiesComp = ({ showItems }) => {
  const [showVisible, setShowVisible] = useState(showItems);
  const showMore = () => {
    setShowVisible(data.length);
  };
  const showLess = () => {
    setShowVisible(showItems);
  };
  return (
    <CardComp
      title="Properties"
      see_all={
        <Link
          className={`d-flex align-items-center ${styles.link_category}`}
          passHref
          href="/all-properties"
        >
          <span>View All</span>
          <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
        </Link>
      }
    >
      <div>
        <div className={styles.card_container}>
          {data.slice(0, showVisible).map((item, i) => {
            return (
              <div className={styles.card_frame} key={i}>
                <div className={styles.card_img}>
                  <Image
                    src={`/${item.url}`}
                    alt="l1"
                    width={3000}
                    height={3000}
                    priority
                  />
                </div>
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
      </div>
    </CardComp>
  );
};

export default PropertiesComp;
