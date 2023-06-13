import React, { useContext, useState } from "react";
import Layout from "../../../sections/Layout";
import SplitContainer from "../../../components/SplitContainer";
import styles from "../../../styles/BlogDetails.module.css";
import Image from "next/image";
import { postData } from "../../../utils/fetchData";
import ImageComp from "../../../components/ImageComp";
import { DataContext } from "../../../store/GlobalState";
import SearchField from "../../../components/Properties/SearchField";

const BlogDetails = (props) => {
  const { property_api, filter } = props;
  const [swapImg, setSwapImg] = useState(property_api.images[0].image_url);
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");

  const { state, dispatch } = useContext(DataContext);
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
                {property_api.images.map((item, i) => {
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
              <h3>{property_api.project_name}</h3>
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
                    <span>{property_api.address}</span>
                  </div>
                </div>
                <div className={styles._spec_right}>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.tenure}:</h5>
                    <span>{property_api.tenure}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.completed_year}:</h5>
                    <span>{property_api.finish_year}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>Units:</h5>
                    <span>{property_api.unit_number}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.floor_size}:</h5>
                    <span>{property_api.size}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.bedroom}:</h5>
                    <span>{property_api.bedrooms}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.bathroom}:</h5>
                    <span>{property_api.bathrooms}</span>
                  </div>
                  <div className={styles.__spec_lst}>
                    <h5>{translations.price}:</h5>
                    <span>${property_api.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.prp__description}>
              <h4>{translations.prp_description}</h4>
              <h3>{property_api.project_name}</h3>
              <p>{property_api.description}</p>
            </div>
          </div>
        }
        right={
          <div className={styles.right_main_container}>
            <div className={styles.selection_year}>
              <div className={styles.select_title}>
                <span>More properites</span>
              </div>
              <SearchField filter={filter} />
            </div>
          </div>
        }
      />
    </Layout>
  );
};

export default BlogDetails;

export const getServerSideProps = async (context) => {
  const { lang, details } = context.query;
  let properyBody = {
    id: `${details}`,
    lang: `${lang ? lang : "en"}`,
  };
  let filterBody = {
    lang: `${lang ? lang : "en"}`,
  };

  const filter = await postData("property/filters", filterBody);
  const getFilter = await filter;
  const res = await postData(`property/details`, properyBody);

  const getProperty = await res;
  return {
    props: {
      filter: getFilter.data,
      property_api: getProperty.data,
    },
  };
};
