import Image from "next/image";
import React from "react";
import BannerImg from "../../components/BannerImg";
import Layout from "../../sections/Layout";
import styles from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <Layout noFind noSlide>
      <BannerImg title="About Us" />
      <div className={styles.container}>
        <div className={styles.about_company}>
          <div className={styles.side_container}>
            <div>
              <span>About</span>
              <h4>Company name</h4>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.side_container}>
            <Image src="/images/act.png" width={300} height={300} alt="act1" />
          </div>
        </div>

        <div className={styles.about_company}>
          <div className={styles.side_container}>
            <Image
              src="/images/building2.png"
              width={300}
              height={300}
              alt="act1"
            />
          </div>
          <div className={styles.side_container}>
            <div>
              <span>Histroy</span>
              <h4>Company Have Been Since 19xx</h4>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
