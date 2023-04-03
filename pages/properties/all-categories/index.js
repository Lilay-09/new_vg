import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardComp from "../../../components/CardComp";
import Layout from "../../../sections/Layout";
import { data } from "../../../utils/data";
import styles from "../../../styles/Home.module.css";

const AllCategories = () => {
  return (
    <Layout>
      <CardComp title="Categories">
        <div className={styles.card_container}>
          {data.map((item, i) => {
            return (
              <Link
                className={styles.card_frame}
                key={i}
                href={`/properties/category/${item.name}`}
              >
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
              </Link>
            );
          })}
        </div>
      </CardComp>
    </Layout>
  );
};

export default AllCategories;
