import React, { useContext, useState } from "react";

import styles from "../../../../styles/BlogDetails.module.css";
import Image from "next/image";
import { locationData } from "../../../../utils/data";
import SplitContainer from "../../../../components/SplitContainer";
import Layout from "../../../../sections/Layout";
import path from "path";
import fs from "fs/promises";
import ImageComp from "../../../../components/ImageComp";
import { DataContext } from "../../../../store/GlobalState";
const BlogDetails = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const { lastest_properties } = props;
  let images = lastest_properties.images;
  const [swapImg, setSwapImg] = useState(images[0].image_url);
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");
  let translations = state.trans;
  console.log(lastest_properties);
  return (
    <Layout width={100}>
      <SplitContainer
        left={
          <div className={styles.__card_container}>
            <div className={styles.__image__details}>
              <div className={styles._image_box}>
                <ImageComp imageUrl={swapImg} />
              </div>
              <div className={styles._switch__img}>
                {images.map((item, i) => {
                  return (
                    <div
                      className={
                        swapImg === item.image_url
                          ? styles["_switch__img_box"] + " " + styles["active"]
                          : styles["_switch__img_box"]
                      }
                      key={i}
                    >
                      <ImageComp
                        imageUrl={item.image_url}
                        onClick={() => {
                          setSwapImg(item.image_url);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles._item_details_content}>
              <h3>{lastest_properties.name}</h3>
              <div className={styles._spec__details}>
                <div className={styles._spec_left}>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.property_type}:</h5>
                    <span>{lastest_properties.property_type}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.listing_type}:</h5>
                    <span>{lastest_properties.listing_type}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.address}:</h5>
                    <span>306, BKK 1, Chamkarmon, Phnom Penh</span>
                  </div>
                </div>
                <div className={styles._spec_right}>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.tenure}:</h5>
                    <span>Freehold</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.completed_year}:</h5>
                    <span>2025</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.units}:</h5>
                    <span>350</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.floor_size}:</h5>
                    <span>50sqm to 1600sqm</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.bedroom}:</h5>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.prp__description}>
              <h4>{translations.prp_description}:</h4>
              <h3>{lastest_properties.name}</h3>
              <p>{lastest_properties.description}</p>
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
                <button>{translations.search}</button>
              </div>
            </div>
          </div>
        }
      />
    </Layout>
  );
};

export default BlogDetails;
export const getServerSideProps = async (ctx) => {
  const { lang, details } = ctx.params;
  const filePath = path.join(process.cwd(), "/public/home_page.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const dd = Object.assign(
    {},
    ...data.lastest_properties.filter(
      (item) => item.id === details || item.id === Number(details)
    )
  );
  return {
    props: {
      lastest_properties: dd,
    },
  };
};
