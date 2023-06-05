import Image from "next/image";
import Link from "next/link";
// import path from "path";
// import fs from "fs/promises";
import React, { use, useContext, useEffect, useRef, useState } from "react";

import Layout from "../../sections/Layout";
import styles from "../../styles/Home.module.css";
import Accomplished from "../../components/Home/Accomplished";
import UsewindowSize from "../../utils/windowSize";
import Scrollable from "../../components/Scrollable";
import ScrollableContainer from "../../components/ScrollableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import LastProjects from "../../components/Home/LastProjects";
import ImageSliderComp from "../../components/ImageSliderComp";
import PopularLocation from "../../components/Home/PopularLocation";
import ImageComp from "../../components/ImageComp";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fetchData";
import { getViews, incrementViews } from "../../utils/countView";
import LatestProjects from "../../components/Home/LastProjects";

const Home = (props) => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  // const { views } = router.query;

  const { home_api, filter } = props;

  const banner = home_api.banner;
  const latest_projects = home_api.latest_projects;
  const locations = home_api.locations;
  const popular_locations = home_api.popular_locations;
  // const latest_properties = home_api.latest_properties;
  const categories = home_api.categories;
  const types = home_api.types;
  const prices = home_api.prices;
  const teams = home_api.consultants;
  const searchRef = useRef(null);
  const [getType, setType] = useState(filter.listing_types[0].id);
  const [getCategories, setCategories] = useState(filter.categories[0].id);
  const [getPrices, setPrices] = useState("From");
  const [city, setCity] = useState(filter.cities[0].city);
  const [cityID, setCityID] = useState(filter.cities[0].id);
  const [district, setDistrict] = useState();
  const [districtID, setDistrictID] = useState();
  const [filterLocationDRP, setFilterLocationDRP] = useState(false);
  const locationRef = useRef();
  const [qSearch, setQsearch] = useState(filter.cities);

  useEffect(() => {
    const handleLocationDD = (e) => {
      if (!locationRef.current.contains(e.target)) {
        setFilterLocationDRP(false);
      }
    };

    document.addEventListener("mousedown", handleLocationDD, true);
    return () => {
      document.removeEventListener("mousedown", handleLocationDD, true);
    };
  });

  const handleSearchOption = () => {
    router.push(
      `${lang}/search=&${getType}&${getCategories}&${cityID}&${
        districtID ? districtID : null
      }&${getPrices === "From" ? null : getPrices}`
    );
    localStorage.setItem(
      "search",
      JSON.stringify({
        type: getType,
        categories: getCategories,
        city: cityID,
        districtID: null,
      })
    );
  };
  const handleMoveToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetCity = (e, id) => {
    if (e.target.tagName === "SPAN") {
      const getVal = e.target.innerHTML;
      setCity(getVal);
      setCityID(id);
    }
  };

  const handleGetDistrict = (e, id) => {
    if (e.target.tagName === "SPAN") {
      const getVal = e.target.innerHTML;
      setDistrict(getVal);
    }
  };
  const handleGetDistrictID = (id) => {
    setDistrictID(id);
  };

  const handleSearchFilter = (e) => {
    const getSearch = e.target.value;
    const regax = new RegExp(getSearch, "i");
    setQsearch(filter.cities.filter((find) => regax.test(find.city)));
  };
  let translations = state.trans;
  return (
    <Layout width={100}>
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
                {translations.search}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.search_section} ref={searchRef}>
        <h5>{translations.search}</h5>
        <div className={styles.find_dream}>
          <div className={styles.selection_opt}>
            <select
              value={getType}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {filter.listing_types.map((item, i) => {
                return (
                  <option value={item.id} key={i}>
                    {item.listing_type}
                  </option>
                );
              })}
            </select>

            <select
              value={getCategories}
              onChange={(e) => {
                setCategories(e.target.value);
              }}
            >
              {filter.categories.map((item, i) => {
                return (
                  <option value={item.id} key={i}>
                    {item.category}
                  </option>
                );
              })}
            </select>

            <div className={styles.select_location} ref={locationRef}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  setFilterLocationDRP(!filterLocationDRP);
                }}
              >
                {city}
              </div>
              {filterLocationDRP && (
                <div className={styles.select_location_drpd}>
                  <div className={styles.select_location_drpd_input}>
                    <input onChange={handleSearchFilter} />
                  </div>
                  {qSearch.map((item, i) => {
                    return (
                      <React.Fragment key={item.id}>
                        <div className="d-flex">
                          {item.city == city && (
                            <div className="drpdown_location_check">
                              <FontAwesomeIcon icon={faCheck} width={16} />
                            </div>
                          )}
                          <span
                            onClick={(e) => {
                              handleGetCity(e, item.id);
                            }}
                            className="d-flex"
                          >
                            {item.city}
                          </span>
                        </div>
                        <div
                          className={styles.__select_location__district}
                          onClick={(e) => {
                            handleGetDistrict(e, item.city);
                          }}
                        >
                          {item.districts &&
                            item.districts.map((dis, i) => {
                              return (
                                <div key={i} className="d-flex gap-1">
                                  {districtID &&
                                    districtID.includes(dis.id) && (
                                      <div className="drpdown_location_check">
                                        <FontAwesomeIcon
                                          icon={faCheck}
                                          width={16}
                                        />
                                      </div>
                                    )}
                                  <span
                                    onClick={() => {
                                      handleGetDistrictID(dis.id);
                                    }}
                                  >
                                    {dis.district}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>

            <select
              value={getPrices}
              onChange={(e) => {
                setPrices(e.target.value);
              }}
            >
              <option defaultValue={getPrices}>{getPrices}</option>
              <option value={"15000 to 25000"}>15000 to 25000</option>
              <option value={"28000 to 32000"}>28000 to 32000</option>
              <option value={"50000 to 100000"}>50000 to 100000</option>
              <option value={"100000 to 280000"}>100000 to 280000</option>
              {/* {prices.map((item, i) => {
                return (
                  <option value={item.price} key={i}>
                    {item.price}
                  </option>
                );
              })} */}
            </select>
          </div>
          <div
            className={`btn ${styles["btn_search"]}`}
            onClick={handleSearchOption}
          >
            {translations.search}
          </div>
        </div>
      </div>

      <div className={styles.last__project_container}>
        <LatestProjects data={latest_projects} />
      </div>

      <PopularLocation
        data={popular_locations}
        translations={translations}
        types={filter.listing_types}
      />

      <section className={styles._home__blog}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>{translations.latest_properties}</h2>
              <button>see more</button>
            </div>
          </div>
          {/* <div className={styles._home_blog__container}>
            {latest_properties.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {LatestProperties(
                    item.images[0].image_url,
                    item.address,
                    item.name,
                    item.price,
                    item.sqrtft,
                    item.listing_type,
                    item.id
                  )}
                </React.Fragment>
              );
            })}
          </div> */}
        </div>
      </section>
      <section className={styles.accomplistment}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>{translations.pro_prop_consult}</h2>
              <button onClick={() => router.push(`/${lang}/our-team`)}>
                See Our Team
              </button>
            </div>
          </div>
          {/* <div className={styles.designers_and__architects}>
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
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const { lang } = ctx.query;
  const bodyReq = {
    id: "209",
    lang: `${lang ? lang : "en"}`,
  };
  const res = await postData(`page/contents`, bodyReq);

  const getData = await res;
  let filterBody = {
    lang: `${lang ? lang : "en"}`,
  };
  const filter = await postData("property/filters", filterBody);
  const getFilter = await filter;
  return {
    props: {
      filter: getFilter.data,
      home_api: getData.data,
    },
  };
};

const LatestProperties = (url, location, title, price, sqrft, status, id) => {
  const { state, dispatch } = useContext(DataContext);
  let translations = state.trans;
  let lang = state.lang.d_lang;
  return (
    <div className={styles._home_blog__card}>
      <div className={styles._home_card_image}>
        <ImageComp imageUrl={url} />
        <div className={styles._home_card_location}>
          <span>{status}</span>
        </div>
        <Link
          className={styles._home_card_btn}
          href={`/${lang}/properties/lastest/${id}`}
        >
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
          <p>{translations.address}:</p>
          <span>
            {location.length > 20
              ? location.substring(0, 20) + "..."
              : location}
          </span>
        </div>
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
        <div className={styles._home_card_sqrft}>sqrft:{sqrft}</div>
      </div>
    </div>
  );
};
