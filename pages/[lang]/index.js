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
import LastProjects from "../../components/Home/LatestProjects";
import ImageSliderComp from "../../components/ImageSliderComp";
import PopularLocation from "../../components/Home/PopularLocation";
import ImageComp from "../../components/ImageComp";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fetchData";
import { getViews, incrementViews } from "../../utils/countView";
import LatestProjects from "../../components/Home/LatestProjects";
import LatestProperty from "../../components/Home/LatestProperty";

const Home = (props) => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;

  const {
    home_api,
    filter,
    latest_properties_api,
    latest_projects_api,
    priceRange,
    consultants_api,
  } = props;

  const banner = home_api.banner;
  const locations = home_api.locations;
  const popular_locations = home_api.popular_locations;
  const categories = home_api.categories;
  const types = home_api.types;
  const teams = home_api.consultants;
  const searchRef = useRef(null);
  const [getType, setType] = useState(filter.listing_types[0].listing_type);
  const [getTypeID, setTypeID] = useState(filter.listing_types[0].id);
  const [listingTypeDD, setListingTypeDD] = useState(false);
  const [getCategoryVal, setCategoryVal] = useState(
    filter.categories[0].category
  );
  const [getCategoryID, setCategoryID] = useState(filter.categories[0].id);
  const [categoryDD, setCategoryDD] = useState(false);
  const [getPrices, setPrices] = useState("From");
  // const [pricesID, setPricesID] = useState(priceRange[0].id);
  const [pricesDD, setPricesDD] = useState(false);
  const [city, setCity] = useState(filter.cities[0].city);
  const [cityID, setCityID] = useState(filter.cities[0].id);
  const [district, setDistrict] = useState();
  const [districtID, setDistrictID] = useState();
  const [filterLocationDRP, setFilterLocationDRP] = useState(false);
  const locationRef = useRef();
  const listingTypeRef = useRef();
  const categoryListsRef = useRef();
  const pricesRef = useRef();
  const [qSearch, setQsearch] = useState(filter.cities);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://admin.vanguardinvestconsult.com/backend/price-range/options`,
          {
            method: "POST",
            body: JSON.stringify({
              listing_type_id: getTypeID,
              lang: lang ? `${lang}` : "en",
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();
        setPriceData(jsonData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    handleFetch();
    return () => {};
  }, [getTypeID, lang]);

  useEffect(() => {
    const handleLocationDD = (e) => {
      if (!locationRef.current.contains(e.target)) {
        setFilterLocationDRP(false);
      }
      if (!listingTypeRef.current.contains(e.target)) {
        setListingTypeDD(false);
      }
      if (!categoryListsRef.current.contains(e.target)) {
        setCategoryDD(false);
      }
      if (!pricesRef.current.contains(e.target)) {
        setPricesDD(false);
      }
    };

    document.addEventListener("mousedown", handleLocationDD, true);
    return () => {
      document.removeEventListener("mousedown", handleLocationDD, true);
    };
  });

  const handleSearchOption = () => {
    router.push(
      `${lang}/search=&${getTypeID}&${getCategoryID}&${cityID}&${
        districtID ? districtID : null
      }&${getPrices === "From" ? null : getPrices}`
    );
    localStorage.setItem(
      "search",
      JSON.stringify({
        type: getType,
        categories: getCategoryVal,
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
        <h5>{translations.find_properties}</h5>
        <div className={styles.find_dream}>
          <div className={styles.selection_opt}>
            <div className={styles["select_location"]} ref={listingTypeRef}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  setListingTypeDD(!listingTypeDD);
                }}
              >
                {getType}
              </div>
              <div
                className={
                  listingTypeDD
                    ? styles["dropdown_listing"] + " " + styles["active"]
                    : styles["dropdown_listing"]
                }
              >
                {filter.listing_types.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        getTypeID === item.id
                          ? styles["dropdown_listing_item"] +
                            " " +
                            styles["active"]
                          : styles["dropdown_listing_item"]
                      }
                      onClick={() => {
                        setTypeID(item.id);
                        setType(item.listing_type);
                      }}
                    >
                      <div className={styles["select_item"]}>
                        {item.listing_type}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles["select_location"]} ref={categoryListsRef}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  setCategoryDD(!categoryDD);
                }}
              >
                {getCategoryVal}
              </div>
              <div
                className={
                  categoryDD
                    ? styles["dropdown_listing"] + " " + styles["active"]
                    : styles["dropdown_listing"]
                }
              >
                {filter.categories.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        getCategoryID === item.id
                          ? styles["dropdown_listing_item"] +
                            " " +
                            styles["active"]
                          : styles["dropdown_listing_item"]
                      }
                      onClick={() => {
                        setCategoryID(item.id);
                        setCategoryVal(item.category);
                      }}
                    >
                      <div className={styles["select_item"]}>
                        {item.category}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

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
            <div className={styles["select_location"]} ref={pricesRef}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  setPricesDD(!pricesDD);
                }}
              >
                {getPrices}
              </div>
              <div
                className={
                  pricesDD
                    ? styles["dropdown_listing"] + " " + styles["active"]
                    : styles["dropdown_listing"]
                }
              >
                {priceData.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        getCategoryID === item.id
                          ? styles["dropdown_listing_item"] +
                            " " +
                            styles["active"]
                          : styles["dropdown_listing_item"]
                      }
                      onClick={() => {
                        setPrices(item.price_range);
                      }}
                    >
                      <div className={styles["select_item"]}>
                        {item.price_range}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
        <LatestProjects data={latest_projects_api} />
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
              <button onClick={() => router.push(`${lang}/properties`)}>
                see more
              </button>
            </div>
          </div>
          <div className={styles._home_blog__container}>
            <LatestProperty data={latest_properties_api} />
          </div>
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
          <div className={styles.designers_and__architects}>
            {consultants_api.map((item, index) => {
              return (
                <Accomplished
                  key={index}
                  id={item.id}
                  url={item.image_url}
                  name={item.name}
                  profile={item.profile}
                  projects={item.projects}
                  position={item.position_title}
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

export const getServerSideProps = async (ctx) => {
  const { lang, id } = ctx.query;

  // begin fetch body request
  let bodyReq = {
    id: "209",
    lang: `${lang ? lang : "en"}`,
  };
  let latestBody = {
    tag_name: "is_latest",
    tag_value: "1",
  };
  let filterBody = {
    lang: `${lang ? lang : "en"}`,
  };

  // end fetch body request

  //begin fetch
  const res = await postData(`page/contents`, bodyReq);
  const latestPropertyRes = await postData(`property/list-by-tag`, latestBody);
  const filterRes = await postData("property/filters", filterBody);
  const latestProjectRes = await postData("project/list-by-tag", latestBody);
  const consultantsRes = await postData(`member/list`, {
    level_id: 2,
  });

  //end fetch

  // begin assign data to var
  const getFilter = await filterRes;
  const getData = await res;
  const getLatestProperty = await latestPropertyRes;
  const getLatestProject = await latestProjectRes;
  const getConsultants = await consultantsRes;
  // end assign data to var

  return {
    props: {
      filter: getFilter.data,
      home_api: getData.data,
      latest_properties_api: getLatestProperty.data,
      latest_projects_api: getLatestProject.data,
      consultants_api: getConsultants.data,
    },
  };
};
