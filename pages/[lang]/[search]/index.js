import React, { useContext, useEffect, useRef, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/Properties.module.css";
import Image from "next/image";
import TiltleTile from "../../../components/TiltleTile";
import Layout from "../../../sections/Layout";
import { useRouter } from "next/router";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import axios from "axios";
import ImageComp from "../../../components/ImageComp";

const SearchInfo = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const { data } = props;

  let translations = state.trans;
  const forDD = [
    { type: "Shop House" },
    { type: "Twin Villa" },
    { type: "condo" },
  ];

  const router = useRouter();
  const { lang } = router.query;

  // let asPath = router.asPath;
  // let d = asPath.substring(asPath.indexOf("?") + 3, asPath.length);

  // var regex = /[^&]+/g;
  // var matches = d.matchAll(regex);
  // var values = [];

  // for (const match of matches) {
  //   let value = match[0];
  //   let decode = decodeURIComponent(value);
  //   values.push(decode);
  // }

  if (data.length <= 0) {
    return (
      <Layout>
        <h4
          style={{
            width: "100%",
            height: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          There is no data
        </h4>
      </Layout>
    );
  }
  return (
    <Layout width={100}>
      <div style={{ width: "90%", margin: "2rem auto" }}>
        <TiltleTile
          title={`${translations.location} - ${
            data && data.length > 0 ? data[0].location : "Could not find"
          } `}
          noMore
        />
      </div>
      <div className={`${styles.properties_container} _hidden_item`}>
        {data.map((item, i) => {
          return (
            <div className={`${styles.properties_card} `} key={i}>
              <div
                className={`our___item _hidden_item ${styles.properties__card_img}`}
                onClick={() => {
                  router.push(`/${lang}/properties/${item.id}`);
                }}
              >
                <ImageComp imageUrl={item.image.image_url} />
              </div>
              <div className={styles.properties__card_details}>
                <div className={styles.properties__card_details_title}>
                  <span>{item.name}</span>
                </div>
                <div className={styles.location}>
                  <FontAwesomeIcon icon={faLocationDot} width={12} />
                  <span>{item.location}</span>
                </div>
                <div className={styles.size_price}>
                  <div className={styles.prop_spec}>
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
        })}
      </div>
      {/* <div className={`${styles.pagination_container} reveal`}>
          <div className="pagination_key">
            {currentPage !== 1 && (
              <PaginationBtn title="Prev" onClick={handlePrevbtn} />
            )}
  
            {<div className={`pagination_number`}>{rederPageNumbers}</div>}
  
            {currentPage !== pages.length && (
              <PaginationBtn title="Next" onClick={handleNextbtn} />
            )}
          </div>
        </div> */}
    </Layout>
  );
};

export default SearchInfo;
export async function getServerSideProps(context) {
  const { lang, search } = context.params;
  const values = search
    .split("&")
    .filter((item) => item !== "" && !item.startsWith("search="));
  const bodyReq = {
    listing_type_id: `${values[0]}`,
    category_id: `${values[1]}`,
    city_id: `${values[2]}`,
    district_id: ``,
    price_range: values[4],
    lang: lang ? `${lang}` : "en",
  };
  const res = await postData(`property/list`, bodyReq);
  const getData = await res;
  return {
    props: {
      data: getData.data,
    },
  };
}
