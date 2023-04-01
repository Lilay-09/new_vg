import Image from "next/image";
import React from "react";
import CardComp from "../../components/CardComp";
import CardFrame from "../../components/CardFrame";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";
import styles from "../../styles/Home.module.css";

const AllProperties = () => {
  return (
    <Layout>
      <CardComp title="Properties">
        <div className={styles.card_container}>
          {data.map((item, i) => {
            return (
              <div className={styles.card_frame} key={i}>
                <div className={styles.card_img}>
                  <Image
                    src={`/${item.url}`}
                    alt="l1"
                    width={300}
                    height={300}
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
      </CardComp>
    </Layout>
  );
};

export default AllProperties;
