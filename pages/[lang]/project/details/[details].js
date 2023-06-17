import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../../sections/Layout";
import styles from "../../../../styles/LastProject.module.css";
import Title from "../../../../components/Title";
import SliderBanner from "../../../../components/SliderBanner";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../../store/GlobalState";
import { postData } from "../../../../utils/fetchData";
import ImageComp from "../../../../components/ImageComp";
const ProjectDetails = (props) => {
  const { latest_project_details } = props;

  const images = latest_project_details.images;
  const [count, setCount] = useState(0);
  const [showBanner, setShowBanner] = useState(images[0].image_url);

  const { state, dispatch } = useContext(DataContext);
  let translations = state.trans;

  const handleNext = () => {
    if (count === images.length - 1) {
      setCount(0);
      setShowBanner(images[0].image_url);
    } else {
      setCount(count + 1);
      setShowBanner(images[count + 1].image_url);
    }
  };

  const handlePrev = () => {
    if (count === 0) {
      setCount(images.length - 1);
      setShowBanner(images[images.length - 1].image_url);
    } else {
      setCount(count - 1);
      setShowBanner(images[count - 1].image_url);
    }
  };

  return (
    <Layout width={100}>
      <div className={styles.project__banner}>
        <div className={styles.banner_img_box}>
          <ImageComp imageUrl={showBanner} />
          <div className={styles.btn_next_prev}>
            <div onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} width={20} />
            </div>
            <div onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} width={20} />
            </div>
          </div>
        </div>

        <div className={`${styles._banner_dot}`}>
          {images.map((item, i) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setShowBanner(item.image_url);
                  setCount(i);
                }}
                className={styles.banner_img_dot}
              >
                <ImageComp imageUrl={item.image_url} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.project__spec_details}>
        <Title title={latest_project_details.name} />
        <div className={styles.__spec_lst}>
          <span className={styles.prp_name}>{translations.property_type}:</span>
          <span>{latest_project_details.project_type}</span>
        </div>
        <div className={styles.__spec_lst}>
          <span className={styles.prp_name}>{translations.address}:</span>
          <span>{latest_project_details.address}</span>
        </div>
        <p>{latest_project_details.description}</p>

        <div className={styles.project__more__details_content}>
          {images.map((item, i) =>
            i % 2 === 0 ? (
              <div className={styles._prp__view} key={i}>
                <div className={styles._prp__view_cnt}>
                  <ImageComp imageUrl={item.image_url} />
                </div>
                <div className={` ${styles._prp__view_cnt}`}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ) : (
              <div
                className={
                  i % 2 !== 0
                    ? styles["_prp__view"] + " " + styles["reverse"]
                    : styles["_prp__view"]
                }
                key={i}
              >
                <div className={styles._prp__view_cnt}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className={styles._prp__view_cnt}>
                  <ImageComp imageUrl={item.image_url} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
export const getServerSideProps = async (ctx) => {
  const { lang, details } = ctx.params;
  let proDetailsBody = {
    id: `${details}`,
    lang: lang ? `${lang}` : "en",
  };
  const project_detailsRes = await postData(`project/details`, proDetailsBody);
  const getProjectDetails = await project_detailsRes;
  return {
    props: {
      latest_project_details: getProjectDetails.data,
    },
  };
};
