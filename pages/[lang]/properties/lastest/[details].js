import React, { useContext, useState } from "react";

import styles from "../../../../styles/BlogDetails.module.css";
import Image from "next/image";
import SplitContainer from "../../../../components/SplitContainer";
import Layout from "../../../../sections/Layout";
import ImageComp from "../../../../components/ImageComp";
import { DataContext } from "../../../../store/GlobalState";
import { postData } from "../../../../utils/fetchData";
const BlogDetails = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const { latest_proptery_details } = props;

  let images = latest_proptery_details.images;
  const [swapImg, setSwapImg] = useState(images[0].image_url);
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");
  let translations = state.trans;
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
                {latest_proptery_details.images.map((item, i) => {
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
                        onClick={() => setSwapImg(item.image_url)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles._item_details_content}>
              <h3>{latest_proptery_details.project_name}</h3>
              <div className={styles._spec__details}>
                <div className={styles._spec_left}>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.property_type}</h5>
                    <span>Condominium</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.listing_type}:</h5>
                    <span>For Sale</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.address}:</h5>
                    <span>{latest_proptery_details.address}</span>
                  </div>
                </div>
                <div className={styles._spec_right}>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.tenure}:</h5>
                    <span>{latest_proptery_details.tenure}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.completed_year}:</h5>
                    <span>{latest_proptery_details.finish_year}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Units:</h5>
                    <span>{latest_proptery_details.unit_number}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.floor_size}:</h5>
                    <span>{latest_proptery_details.size}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.bedroom}:</h5>
                    <span>{latest_proptery_details.bedrooms}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.bathroom}:</h5>
                    <span>{latest_proptery_details.bathrooms}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.price}:</h5>
                    <span>${latest_proptery_details.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.prp__description}>
              <h4>{translations.prp_description}</h4>
              <h3>{latest_proptery_details.project_name}</h3>
              <p>{latest_proptery_details.description}</p>
            </div>
          </div>
        }
        right={
          <div className={styles.right_main_container}>
            {/* <div className={styles.selection_year}>
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
          </div> */}
          </div>
        }
      />
    </Layout>
  );
};

export default BlogDetails;
export const getServerSideProps = async (ctx) => {
  const { lang, details } = ctx.params;

  const resBody = {
    id: `${details}`,
    lang: lang ? lang : "en",
  };

  const res = await postData(`property/details`, resBody);

  const getData = await res;
  return {
    props: {
      latest_proptery_details: getData.data,
    },
  };
};
