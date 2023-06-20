import React, { useContext, useState } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/OurServices.module.css";
import Image from "next/image";
import ScrollableContainer from "../../../components/ScrollableContainer";
import Title from "../../../components/Title";
import TiltleTile from "../../../components/TiltleTile";
import { DataContext } from "../../../store/GlobalState";
import tranEn from "../../../utils/Translations/en.json";
import tranKh from "../../../utils/Translations/kh.json";
import tranCh from "../../../utils/Translations/ch.json";
import { postData } from "../../../utils/fetchData";
import ImageComp from "../../../components/ImageComp";
import { useRouter } from "next/router";
const OurServices = (props) => {
  const { state, dispatch } = useContext(DataContext);
  let translations = state.trans;
  let lang = state.lang.d_lang;
  const { services_api, service_lists_api } = props;
  const [bannerImg, setBannerImg] = useState(
    services_api.banner.images[0].image_url
  );
  const router = useRouter();
  // const lang = state.lang.d_lang;
  // const asPath = state.lang.asPath;

  return (
    <Layout width={100}>
      <div className={`${styles._our_service_banner} _hidden_item`}>
        <div className={styles._our_service_banner_img}>
          <ImageComp imageUrl={bannerImg} defaultImg={"/images/b1.jpg"} />
          {/* <Image src={`/images/b1.jpg`} width={1000} height={1000} alt="tb1" /> */}
        </div>
        <div className={styles.banner_square}>
          {services_api.banner.images.slice(0, 2).map((item, i) => {
            return (
              <div
                className={styles.banner_img_frame}
                key={i}
                onClick={() => setBannerImg(item.image_url)}
              >
                <ImageComp
                  imageUrl={item.image_url}
                  defaultImg={`/images/b${i + 0}.jpg`}
                />
              </div>
            );
          })}
        </div>
        <div className={styles._our_service_banner_text}>
          <h4>
            {services_api.banner.title
              ? services_api.banner.title
              : "Many Properties and categories"}
          </h4>
        </div>
      </div>

      <div className={`${styles._categories_section} _hidden_item`}>
        <div style={{ width: "90%", margin: "0 auto 2rem auto" }}>
          <TiltleTile title={translations.category} noMore />
        </div>
        <div className={styles._categories_section_container}>
          <ScrollableContainer>
            {services_api.categories.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${styles._service_categories} our___item _hidden_item`}
                >
                  <div className={styles._service_categories_img}>
                    <ImageComp imageUrl={item.image_url} />
                    <div className={styles._service_categories_status_text}>
                      <span>{item.listing_type}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollableContainer>
        </div>
      </div>
      <div className={`${styles._services_section} reveal`}>
        <div style={{ width: "90%", margin: "0 auto 2rem auto" }}>
          <TiltleTile title={translations.our_services} noMore />
        </div>
        <div className={`${styles._services_card_container} `}>
          {service_lists_api.map((item, i) => {
            return (
              <div
                className={styles._service_card}
                key={i}
                onClick={() => router.push(`/${lang}/our-services/${item.id}`)}
              >
                <div className={styles._service_categories_status_text}>
                  <span>{item.status}</span>
                </div>
                <div className={styles._service_card_img}>
                  {item.image ? (
                    <ImageComp imageUrl={`${item.image.image_url}`} />
                  ) : null}
                </div>
                <div className={styles._service_card_details}>
                  <div>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <p>{translations.type}:</p>
                    <p>{item.project_type}</p>
                  </div>
                  <div>
                    <p>{translations.address}: </p>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default OurServices;
export const getServerSideProps = async (ctx) => {
  let { lang } = ctx.query;
  let pageBody = {
    name: "our_services",
    lang: `${lang}`,
  };

  // begin fetch
  const pageRes = await postData(`page/contents`, pageBody);
  const servicesRes = await postData(`project/list`);
  //end fetch

  //begin assign
  const getServices = await pageRes;
  const getServiceLists = await servicesRes;
  //end assign

  return {
    props: {
      services_api: getServices.data,
      service_lists_api: getServiceLists.data,
    },
  };
};
