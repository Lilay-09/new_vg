import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import React, { use, useContext, useEffect, useRef, useState } from "react";

import Layout from "../sections/Layout";
import styles from "../styles/Home.module.css";
import { blog, data, locationData } from "../utils/data";
import Accomplished from "../components/Home/Accomplished";
import UsewindowSize from "../utils/windowSize";
import Scrollable from "../components/Scrollable";
import ScrollableContainer from "../components/ScrollableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
// import SliderBanner from "../components/SliderBanner";
import LastProjects from "../components/Home/LastProjects";
import ImageSliderComp from "../components/ImageSliderComp";
import PopularLocation from "../components/Home/PopularLocation";
import ImageComp from "../components/ImageComp";
import { DataContext } from "../store/GlobalState";
import tranEn from "../utils/Translations/en.json";
import tranCh from "../utils/Translations/ch.json";
import tranKh from "../utils/Translations/kh.json";
const Home = (props) => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");
  const { home } = props;
  const banner = home.banner;
  const last_projects = home.last_projects;
  const popular_locations = home.popular_locations;
  const lastest_properties = home.lastest_properties;
  const teams = home.consultants;
  const searchRef = useRef(null);

  const handleSearchOption = () => {
    router.push(`/search?=/${status}&${type}&${location}`);
  };
  const handleMoveToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [mainUrl, setMainUrl] = useState("");
  useEffect(() => {
    const url = window.location.origin;
    setMainUrl(url);
  }, []);

  let translations;
  if (lang === "en") {
    translations = tranEn;
  } else if (lang === "kh") {
    translations = tranKh;
  } else if (lang === "ch") {
    translations = tranCh;
  }

  // const handleAddString = () => {
  //   const newString = "/additional-path"; // Replace with the desired string

  //   const currentURL = router.asPath;
  //   const newURL = currentURL + newString;

  //   router.push(newURL, undefined, { shallow: true });
  // };
  // console.log(router.asPath);

  return (
    <Layout width={100} path={"/"}>
      <section className={`${styles._home_banner}`}>
        <div className={`myAnim ${styles.banner}`}>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              background: "grey",
            }}
          >
            <ImageSliderComp data_img={banner.images} />
          </div>
          <div className={styles.banner_content}>
            <div className={styles.content_title}>
              <h2>{banner.title}</h2>
            </div>
            <p>{banner.description}</p>
            <div className={styles.banner_btn}>
              <button onClick={() => handleMoveToSection(searchRef)}>
                {translations.Search}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.search_section} ref={searchRef}>
        <h5>{translations.Search}</h5>
        <div className={styles.find_dream}>
          <div className={styles.selection_opt}>
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
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="shop-house">Price</option>
              <option value="condo">100000</option>
              <option value="villa">200000</option>
            </select>
          </div>
          {/* <div>
          get status ={status} type = {type} location = {location}
        </div> */}
          <div className="btn btn-info" onClick={handleSearchOption}>
            {translations.Search}
          </div>
        </div>
      </div>

      <div className={styles.last__project_container}>
        <LastProjects data={last_projects} />
      </div>

      <div className={styles.interior_section}>
        <div className="reveal fade-bottom">
          <div className={styles.interior_title}>
            <div className={styles.interior_title_content}>
              <h2>{translations["Popular Location"]}</h2>
            </div>
          </div>
          <div>
            <PopularLocation data={popular_locations} />
          </div>
        </div>
      </div>

      <section className={styles._home__blog}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>{translations.latest_properties}</h2>
              <button>see more</button>
            </div>
          </div>
          <div className={styles._home_blog__container}>
            {lastest_properties.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {LastestProperties(
                    item.images[0].image_url,
                    item.address,
                    item.name,
                    item.price,
                    item.sqrtft,
                    item.status
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.accomplistment}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>{translations.pro_prop_consult}</h2>
              <button onClick={() => router.push("/our-team")}>
                See Our Team
              </button>
            </div>
          </div>
          <div className={styles.designers_and__architects}>
            {teams.map((item, index) => {
              return (
                <Accomplished
                  key={index}
                  id={item.id}
                  url={item.image_url}
                  name={item.name}
                  profile={item.profile}
                  projects={item.projects}
                  position={item.position}
                  profile_details={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  // const res = await fetch("/data.json");
  const filePath = path.join(process.cwd(), "/public/home_page.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return {
    props: {
      home: data,
    },
  };
};

const LastestProperties = (url, location, title, price, sqrft, status) => {
  let translations;
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  if (lang === "en") {
    translations = tranEn;
  } else if (lang === "kh") {
    translations = tranKh;
  } else if (lang === "ch") {
    translations = tranCh;
  }
  return (
    <div className={styles._home_blog__card}>
      <div className={styles._home_card_image}>
        <ImageComp imageUrl={url} />
        <div className={styles._home_card_location}>
          <span>{status}</span>
        </div>
        <Link className={styles._home_card_btn} href={"/properties/lastest/1"}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles._home_card_arrow_icon}
          />
        </Link>
      </div>
      <div className={styles._home_card_details}>
        <div className={styles._home_card__title}>
          <h6>{title}</h6>
          <p>${price}</p>
        </div>
        <div className="d-flex gap-1">
          <p>{translations.Address}:</p>
          <span>
            {location.length > 20
              ? location.substring(0, 20) + "....."
              : location}
          </span>
        </div>
        <div className={styles._home_card_sqrft}>sqrft:{sqrft}</div>
      </div>
    </div>
  );
};
