import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import BannerImg from "../../../components/BannerImg";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/AboutUs.module.css";
import { useRouter } from "next/router";

const AboutUs = () => {
  const aboutRef = useRef();
  const router = useRouter();
  const accRef = useRef();
  const [mainUrl, setMainUrl] = useState("");
  const handleMoveToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const url = window.location.origin;
    setMainUrl(url);
  }, []);

  return (
    <Layout width={100}>
      <div className={`${styles.__banner} _hidden_item`}>
        <div className={styles.__banner_content}>
          <h2>About Us</h2>
          <div className={styles.__banner_content_text}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button onClick={() => handleMoveToSection(aboutRef)}>
              Read More
            </button>
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
      <div className={`${styles.about_us} _hidden_item`} ref={aboutRef}>
        <h4>Vanguard A Real Estate Company</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Turpis habitasse sit ipsum
          dictum elit. Blandit aenean cras lectus nibh scelerisque. Iaculis
          habitasse ut interdum quisque risus etiam. Ultrices et risus gravida
          sagittis. Nisl at aliquam ac arcu. Consequat et viverra quis eu. Vitae
          pellentesque est morbi in at. Etiam vivamus lacus mauris vitae
          eleifend habitant. Egestas vulputate dolor non fames ac justo eget
          sed. Ultrices velit felis ornare non amet libero massa. Sed vel
          dignissim non adipiscing volutpat sagittis. Eu vel vel donec nulla a.
          Dui et sapien sit consequat vitae faucibus. Justo mi senectus leo
          risus.
        </p>
        <div className={styles._about_container}>
          <div className={styles._about_container_img}>
            <Image
              src="/images/kitchen.png"
              width={1000}
              height={1000}
              priority
              alt="team"
            />
          </div>
          <div className={styles._about_container_text}>
            <div className={styles._about_list}>
              <div className={styles._about_list_logo}>
                <Image
                  src="/images/quality.png"
                  width={200}
                  height={10}
                  priority
                  alt="team"
                />
              </div>
              <div className={styles._about_details}>
                <h4>Quality Properties</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
            <div className={styles._about_list}>
              <div className={styles._about_list_logo}>
                <Image
                  src="/images/rating.png"
                  width={200}
                  height={10}
                  priority
                  alt="team"
                />
              </div>
              <div className={styles._about_details}>
                <h4>Top Rated Agents</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
            <div className={styles._about_list}>
              <div className={styles._about_list_logo}>
                <Image
                  src="/images/safe.png"
                  width={200}
                  height={10}
                  priority
                  alt="team"
                />
              </div>
              <div className={styles._about_details}>
                <h4>EASY AND SAFE</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.accomplished}`} ref={accRef}>
        <div className={styles.company__things}>
          <span>2000</span>
          <h5>Sell Properties</h5>
        </div>
        <div className={styles.company__things}>
          <span>1040</span>
          <h5>Rent Properties</h5>
        </div>
        <div className={styles.company__things}>
          <span>1080</span>
          <h5>Agents</h5>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
