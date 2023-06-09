import {
  faLocation,
  faLocationDot,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext } from "react";
import BannerImg from "../../../components/BannerImg";
import GoogleMapComp from "../../../components/GoogleMapComp";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Careers.module.css";
import tranCh from "../../../utils/Translations/ch.json";
import tranEn from "../../../utils/Translations/en.json";
import tranKh from "../../../utils/Translations/kh.json";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
const Careers = (props) => {
  const { page_api } = props;
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations = state.trans;
  return (
    <Layout noFind noSlide>
      <div
        style={{ backgroundColor: "white" }}
        className="d-flex flex-column gap-3"
      >
        <BannerImg height={35} img={page_api.banner.image_url} />
        <div className="p-4 d-flex flex-column gap-3">
          <h4>{page_api.announcements.title}</h4>
          <span className="text-muted">
            {translations.date}: {page_api.announcements.date}
          </span>
          <span>
            {translations.position}: {page_api.announcements.position}
          </span>
          <span>
            {translations.term}: {page_api.announcements.term}
          </span>
          <span>
            {translations.quilfication}: {page_api.announcements.qualification}
          </span>
          <span>
            {translations.language}: {page_api.announcements.language}
          </span>
          <span>
            {translations.sex}: {page_api.announcements.sex}
          </span>
          <span>
            {translations.year_exp}: {page_api.announcements.year_exp}
          </span>
          <span>
            {translations.salary}: {page_api.announcements.salary}
          </span>
          {page_api.requirement_description.map((item, i) => {
            return (
              <div className={styles.job_lst} key={i}>
                <span>{item.title}</span>
                <ul>
                  {item.lists.map((item, i) => {
                    return <li key={i}>{item.list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <div className={styles.job_lst}>
            <span className={styles.cv}>{page_api.submit.title}</span>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/map-pin.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>{page_api.submit.location}</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/phone-call.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>{page_api.submit.phone_number}</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/mail.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>{page_api.submit.email}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="p-4">Map</h4>
          <GoogleMapComp
            width="100%"
            url={
              "https://www.google.com/maps/place/%E1%9E%9F%E1%9E%B6%E1%9E%9B%E1%9E%B6%E2%80%8B%E1%9E%9A%E1%9F%80%E1%9E%93%E2%80%8B+%E1%9E%9C%E1%9F%89%E1%9F%81%E1%9E%9F%E1%9F%92%E1%9E%91%E1%9E%A1%E1%9E%B6%E1%9E%89%E1%9E%93%E1%9F%8D+%E1%9E%9F%E1%9E%B6%E1%9E%81%E1%9E%B6%E1%9E%91%E1%9E%BD%E1%9E%9B%E1%9E%9F%E1%9F%92%E1%9E%9C%E1%9E%B6%E1%9E%99%E1%9E%96%E1%9F%92%E1%9E%9A%E1%9F%83/@11.5540955,104.8969145,15z/data=!3m1!4b1!4m6!3m5!1s0x3109511af71a344f:0xdf13899748a5b27b!8m2!3d11.5540747!4d104.9072142!16s%2Fg%2F1hd_7hcwf?entry=ttu"
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
export const getServerSideProps = async (context) => {
  const { lang } = context.query;

  let pageBody = {
    id: "215",
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
