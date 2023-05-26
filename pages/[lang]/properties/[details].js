import React, { useState } from "react";
import Layout from "../../../sections/Layout";
import SplitContainer from "../../../components/SplitContainer";
import styles from "../../../styles/BlogDetails.module.css";
import Image from "next/image";
import { locationData } from "../../../utils/data";

const BlogDetails = () => {
  const img = [
    { img: "/images/tp1.jpg" },
    { img: "/images/tp2.jpg" },
    { img: "/images/tp3.jpg" },
    { img: "/images/tp4.jpg" },
  ];
  const [swapImg, setSwapImg] = useState(img[0].img);
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");
  return (
    <Layout width={100}>
      <SplitContainer
        left={
          <div className={styles.__card_container}>
            <div className={styles.__image__details}>
              <div className={styles._image_box}>
                <Image
                  src={swapImg}
                  width={1000}
                  height={1000}
                  alt="sth"
                  priority
                />
              </div>
              <div className={styles._switch__img}>
                {img.map((item, i) => {
                  return (
                    <div
                      className={
                        swapImg === item.img
                          ? styles["_switch__img_box"] + " " + styles["active"]
                          : styles["_switch__img_box"]
                      }
                      key={i}
                    >
                      <Image
                        src={item.img}
                        width={1000}
                        height={1000}
                        alt="sth"
                        priority
                        onClick={() => {
                          setSwapImg(item.img);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles._item_details_content}>
              <h3>TIME SQUARE 306</h3>
              <div className={styles._spec__details}>
                <div className={styles._spec_left}>
                  <div className={styles.__spec_lst}>
                    <h5>Property type:</h5>
                    <span>Condominium</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Listing type:</h5>
                    <span>For Sale</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Address:</h5>
                    <span>306, BKK 1, Chamkarmon, Phnom Penh</span>
                  </div>
                </div>
                <div className={styles._spec_right}>
                  <div className={styles.__spec_lst}>
                    <h5>Tenure:</h5>
                    <span>Freehold</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Completed Year:</h5>
                    <span>2025</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Units:</h5>
                    <span>350</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Floor Size:</h5>
                    <span>50sqm to 1600sqm</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Bedrooms:</h5>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.prp__description}>
              <h4>Property Description</h4>
              <h3>TIME SQUARE 306</h3>
              <p>
                Time Square 306, is the latest project from one of
                Cambodia&apos;s favorite developers, Megakim World Corp. Who
                have already completed 4 projects over the last few years, all
                of which are 100% sold. Time Square 306 is a perfectly designed,
                modern residence in the prime location of BKK1, Phnom Penh which
                truly is Cambodia’s number one address for homeowners, expat
                renters and Cambodian nationals alike. A very smart design
                allows for 350 units in total, spanning across 45 floors with a
                maximum of 10 units per floor. Making this property for its
                location appear quite exclusive, in terms of total units
                compared to other off plan options in the area.
              </p>
            </div>
          </div>
        }
        right={
          <div className={styles.right_main_container}>
            <div className={styles.selection_year}>
              <div className={styles.select_title}>
                <span>More properites</span>
              </div>
              <div className={styles.selection_container}>
                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
                <select
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="shop-house">Shop House</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
                <select
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  {locationData.map((item, i) => {
                    return (
                      <option value={item.location} key={i}>
                        {item.location}
                      </option>
                    );
                  })}
                </select>
                <button>Find</button>
              </div>
            </div>
          </div>
        }
      />
    </Layout>
  );
};

export default BlogDetails;
