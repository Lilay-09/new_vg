import Image from "next/image";
import React from "react";
import BannerImg from "../../components/BannerImg";
import Layout from "../../sections/Layout";
import styles from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <Layout width={100}>
      <div className={`${styles.__banner} _hidden_item`}>
        <div className={styles.__banner_content}>
          <h2>About Us</h2>
          <div className={styles.__banner_content_text}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button>Read More</button>
          </div>
        </div>
        <div className={styles.__banner_img}>
          <Image
            src="/images/aboutus.png"
            width={1000}
            height={1000}
            priority
            alt="team"
          />
        </div>
      </div>
      <div className="reveal"></div>
    </Layout>
  );
};

export default AboutUs;
