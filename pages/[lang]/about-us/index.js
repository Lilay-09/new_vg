import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import BannerImg from "../../../components/BannerImg";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/AboutUs.module.css";
import { useRouter } from "next/router";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import ImageComp from "../../../components/ImageComp";

const AboutUs = ({ page_api }) => {
  const { state, dispatch } = useContext(DataContext);
  const aboutRef = useRef();
  const router = useRouter();
  const accRef = useRef();

  const handleMoveToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  let translations = state.trans;
  return (
    <Layout width={100}>
      <div className={`${styles.__banner} _hidden_item`}>
        <div className={styles.__banner_content}>
          <h2>{page_api.banner.title}</h2>
          <div className={styles.__banner_content_text}>
            <p>{page_api.banner.description}</p>
            <button onClick={() => handleMoveToSection(aboutRef)}>
              {translations.read_more}
            </button>
          </div>
        </div>
        <div className={styles.__banner_img}>
          {page_api.banner.image_url ? (
            <ImageComp imageUrl={`${page_api.banner.image_url}`} />
          ) : null}
        </div>
      </div>
      <div className={`${styles.about_us} _hidden_item`} ref={aboutRef}>
        <h4>{page_api.company_description.title}</h4>
        <p>{page_api.company_description.description}</p>
        <div className={styles._about_container}>
          <div className={styles._about_container_img}>
            {page_api.company_description.image_url ? (
              <ImageComp imageUrl={page_api.company_description.image_url} />
            ) : null}
          </div>
          <div className={styles._about_container_text}>
            {page_api.company_description.services.map((item, i) => {
              return (
                <div className={styles._about_list} key={i}>
                  <div className={styles._about_list_logo}>
                    <ImageComp imageUrl={item.image_url} />
                  </div>
                  <div className={styles._about_details}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`${styles.accomplished}`} ref={accRef}>
        {page_api.overall.map((item, i) => {
          return (
            <div className={styles.company__things} key={i}>
              <span>{item.count}</span>
              <h5>{item.title}</h5>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default AboutUs;
export const getServerSideProps = async (context) => {
  const { lang } = context.query;

  let pageBody = {
    id: "214",
    lang: lang ? `${lang}` : "en",
  };
  //begin fetch
  const pageRes = await postData(`page/contents`, pageBody);
  //end fetch

  //begin assign
  const getPage = await pageRes;
  //end assign
  return {
    props: {
      page_api: getPage.data,
    },
  };
};
