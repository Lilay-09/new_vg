import { useRouter } from "next/router";
import React, { useContext } from "react";

import Layout from "../../../sections/Layout";
import TiltleTile from "../../../components/TiltleTile";
import styles from "../../../styles/Categories.module.css";
import propStylse from "../../../styles/Properties.module.css";
import { DataContext } from "../../../store/GlobalState";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { postData } from "../../../utils/fetchData";
import ImageComp from "../../../components/ImageComp";

const FindeLocaiton = (props) => {
  const { categories_api } = props;
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  let translations = state.trans;
  let lang = state.lang.d_lang;
  return (
    <Layout width={100}>
      <div className={styles.location_container}>
        <TiltleTile
          title={`${translations.location}: (${categories_api[0].city})`}
          noMore
        />
        <div className={`${propStylse.properties_container} _hidden_item`}>
          {categories_api.map((item, i) => {
            return (
              <div
                className={`${propStylse.properties_card} our___item _hidden_item`}
                key={i}
              >
                <div
                  className={propStylse.properties__card_img}
                  onClick={() => {
                    router.push(`/${lang}/properties/${item.id}`);
                  }}
                >
                  <ImageComp imageUrl={item.image.image_url} />
                </div>
                <div className={propStylse.properties__card_details}>
                  <div className={propStylse.properties__card_details_title}>
                    <span>{item.name}</span>
                  </div>
                  <div className={propStylse.location}>
                    <FontAwesomeIcon icon={faLocationDot} width={12} />
                    <span>{item.location}</span>
                  </div>
                  <div className={propStylse.size_price}>
                    <div className={propStylse.prop_spec}>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/home_size.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>{item.size}</div>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/bed.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>{item.bedrooms}</div>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/bathtub.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>{item.bathrooms}</div>
                      </div>
                    </div>
                    <div className={styles.prop_price}>${item.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {Services.map((item, i) => {
            return (
              <div
                className={`${propStylse.properties_card} our___item _hidden_item`}
                key={i}
              >
                <div
                  className={propStylse.properties__card_img}
                  onClick={() => {
                    router.push(`/properties/sth`);
                  }}
                >
                  <Image
                    src={item.url}
                    width={3000}
                    height={200}
                    alt="proper"
                    priority
                  />
                </div>
                <div className={propStylse.properties__card_details}>
                  <div className={propStylse.properties__card_details_title}>
                    <span>{item.name}</span>
                  </div>
                  <div className={propStylse.location}>
                    <FontAwesomeIcon icon={faLocationDot} width={12} />
                    <span>{item.location}</span>
                  </div>
                  <div className={propStylse.size_price}>
                    <div className={propStylse.prop_spec}>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/home_size.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>6M x 14M</div>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/bed.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>3</div>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <Image
                          src="/images/bathtub.png"
                          width={100}
                          height={100}
                          alt="home_size"
                          priority
                        />
                        <div>4</div>
                      </div>
                    </div>
                    <div className={styles.prop_price}>${item.price}</div>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </Layout>
  );
};

export default FindeLocaiton;
export const getServerSideProps = async (context) => {
  const { lang, details } = context.params;

  //begin fetch
  const categoriesRes = await postData(`property/list`, {
    city_id: details,
  });
  //end fetch

  //begin assign
  const getCategories = await categoriesRes;
  //end assign

  return {
    props: {
      categories_api: getCategories.data,
    },
  };
};
