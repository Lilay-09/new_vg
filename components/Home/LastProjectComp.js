import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { data } from "../../utils/data";

const LastProjectComp = ({ showItems }) => {
  const [showVisible, setShowVisible] = useState(showItems);
  const showMore = () => {
    setShowVisible(data.length);
  };
  const showLess = () => {
    setShowVisible(showItems);
  };

  return (
    <div className={styles.last_project}>
      <div className={styles.last_project_title}>
        <h4>Last Projects</h4>
        <div className="d-flex align-items-center">
          {/* {showVisible === showItems ? (
            <div onClick={showMore} className="d-flex align-items-center">
              <span>View All</span>
              <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
            </div>
          ) : (
            <div onClick={showLess}>
              <span>View Less</span>
              <FontAwesomeIcon icon={faAngleDown} width={16} height={16} />
            </div>
          )} */}
          <Link
            className={`d-flex align-items-center ${styles.link_category}`}
            passHref
            href="/projects"
          >
            <span>View All</span>
            <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className={styles.card_container}>
        {data.slice(0, showVisible).map((item, i) => {
          return (
            <div className={styles.card_frame} key={i}>
              <Link className={styles.card_img} href="product-details">
                <Image
                  src={`/${item.url}`}
                  alt="l1"
                  width={3000}
                  height={3000}
                  priority
                />
              </Link>
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
  );
};

export default LastProjectComp;
