import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardComp from "../CardComp";
import styles from "../../styles/Properties.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { data } from "../../utils/data";
import Link from "next/link";
const Categories = () => {
  return (
    <CardComp
      title="Categories"
      see_all={
        <Link
          className={`d-flex align-items-center ${styles.link_category}`}
          passHref
          href="/properties/all-categories"
        >
          <span>View All</span>
          <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
        </Link>
      }
    >
      <div className={styles.cate}>
        {data.map((item, i) => {
          return (
            <div className={styles.cate_card} key={i}>
              <div className={styles.cate_card_img}>
                <Image
                  src="/images/l1.png"
                  width={3000}
                  height={3000}
                  alt="l1"
                  priority
                />
              </div>
              <div className={styles.cate_card_text}>
                <h5>Name</h5>
                <div>
                  <span>Type : </span>
                  <span>Condo</span>
                </div>
                <div>
                  <span>Address :</span>
                  <span>{item.country}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CardComp>
  );
};

export default Categories;
