import {
  faLocation,
  faLocationDot,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext, useState } from "react";
import BannerImg from "../../../components/BannerImg";
import GoogleMapComp from "../../../components/GoogleMapComp";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Careers.module.css";
import tranCh from "../../../utils/Translations/ch.json";
import tranEn from "../../../utils/Translations/en.json";
import tranKh from "../../../utils/Translations/kh.json";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import arrayToObject from "../../../utils/arrayToObj";
const Careers = (props) => {
  const { page_api, map_api } = props;
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations = state.trans;
  const loop = [
    { id: 1, title: "Accounting" },
    { id: 2, title: "IT Support" },
    { id: 3, title: "Sales" },
  ];

  const [chosenID, setChosenID] = useState(loop[0].id);

  const onSelectJob = loop.filter((item) => item.id == chosenID);

  return (
    <Layout noFind noSlide>
      <BannerImg
        height={35}
        img={
          page_api.banner.image_url !== "null"
            ? page_api.banner.image_url
            : page_api.banner.ïmage_url
        }
      />
      <div>
        <div>
          <h3 className="mt-3">{page_api.announcements.title}</h3>
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse priatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </p>
        </div>
        <div>
          <div className={styles.job_title}>
            {loop.map((job, i) => (
              <div
                key={i}
                className={styles.tap_box}
                onClick={() => {
                  setChosenID(job.id);
                }}
              >
                {job.title}
              </div>
            ))}
          </div>
        </div>
        {/* <div>{onSelectJob[0].title}</div> */}
        <div className="d-flex flex-column gap-3">
          <span className="text-muted">
            {translations.date}: {page_api.announcements.date}
          </span>
          <span>
            {translations.position}: {onSelectJob[0].title}
            {/* {page_api.announcements.position} */}
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
                  {item.lists
                    ? item.lists.map((item, i) =>
                        item.list == null ? null : <li key={i}>{item.list}</li>
                      )
                    : null}
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
        {/* <div>{selectedJob.title}</div> */}
        {/* <div className="d-flex flex-column gap-3">
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
                  {item.lists
                    ? item.lists.map((item, i) =>
                        item.list == null ? null : <li key={i}>{item.list}</li>
                      )
                    : null}
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
        </div> */}
        <div>
          <h4 className="p-4">Map</h4>
          {page_api.map && <GoogleMapComp width="100%" url={page_api.map} />}
        </div>
      </div>
      {/* <div
        style={{ backgroundColor: "white" }}
        className="d-flex flex-column gap-3"
      >
        <BannerImg
          height={35}
          img={
            page_api.banner.image_url !== "null"
              ? page_api.banner.image_url
              : page_api.banner.ïmage_url
          }
        />
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
                  {item.lists
                    ? item.lists.map((item, i) =>
                        item.list == null ? null : <li key={i}>{item.list}</li>
                      )
                    : null}
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
          {page_api.map && <GoogleMapComp width="100%" url={page_api.map} />}
        </div>
      </div> */}
    </Layout>
  );
};

export default Careers;
export const getServerSideProps = async (context) => {
  try {
    const { lang } = context.query;

    let pageBody = {
      // id: "215",
      name: "careers_page",
      lang: lang ? `${lang}` : "en",
    };

    //begin fetch
    const pageRes = await postData(`page/contents`, pageBody);
    const mapRes = await postData(`page/contents`, {
      name: "contact_us",
      lang: lang ? `${lang}` : "en",
    });
    //end fetch

    //begin assign
    const getPage = await pageRes;
    const getMap = await mapRes;
    //end assign
    return {
      props: {
        page_api: getPage.data,
      },
    };
  } catch (error) {
    console.error("API request error:", error.message);

    return {
      props: {
        error: true,
      },
    };
  }
};
