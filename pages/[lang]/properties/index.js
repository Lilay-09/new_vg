import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Properties.module.css";
import Image from "next/image";
import InputComp from "../../../components/InputComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCheck,
  faFilter,
  faFilterCircleXmark,
  faLocationDot,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import PaginationBtn from "../../../components/PaginationBtn";
import TiltleTile from "../../../components/TiltleTile";
import { DataContext } from "../../../store/GlobalState";
import ImageComp from "../../../components/ImageComp";
import { postData } from "../../../utils/fetchData";
const OurProperty = (props) => {
  const { filter, properties } = props;
  const forDD = [
    { type: "Shop House" },
    { type: "Twin Villa" },
    { type: "condo" },
  ];
  const router = useRouter();
  let page = "properties";
  const { query, pathname } = router;
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  let q = query.page;
  const [data_item, setData] = useState(properties);
  const [currentPage, setCurrentPage] = useState(Number(q) ? Number(q) : 1);
  const [itemsPerPgae, setItemPerPgae] = useState(6);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const locationRef = useRef();

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    router.replace(`/${lang}/${page}/?page=${event.target.id}`);
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    router.replace(`/${lang}/${page}/?page=${currentPage - 1}`);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    router.replace(`/${lang}/${page}/?page=${currentPage + 1}`);
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data_item.length / itemsPerPgae); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPgae;
  const indexOfFirstItem = indexOfLastItem - itemsPerPgae;
  const currentItems = data_item.slice(indexOfFirstItem, indexOfLastItem);

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  const rederPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`current_num ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  if (q > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  } else if (q <= minPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
  const [prpDD, setPrpDD] = useState(false);
  const [propsVal, setPropVal] = useState(filter.categories[0].category);
  const [propsTypeID, setPropsTypeID] = useState(filter.categories[0].id);
  const [selectedPricDD, setSelectedPriceDD] = useState(false);
  const prpRef = useRef();
  const locRef = useRef();
  const priceRef = useRef();
  const selectBudgetRef = useRef();
  const filterRef = useRef();
  const handlePropertyClick = (category, id) => {
    setPropVal(category);
    setPropsTypeID(id);
    // setPrpDD(false);
  };
  const handlePrpTypeDD = () => {
    setPrpDD(!prpDD);
  };

  const [locationVal, setLocationVal] = useState(filter.cities[0].city);
  const [locationID, setLocationID] = useState(filter.cities[0].id);
  const [getDistrictID, setDistrictID] = useState();
  // filter.cities[0].districts[0].id
  const [locationDD, setLocationDD] = useState(false);
  const handlelocationDD = () => {
    setLocationDD(!locationDD);
  };
  const handleGetLocaitonVal = (location, id) => {
    setLocationID(id);
    setLocationVal(location);
    // setLocationDD(true);
  };

  const [priceVal, setPriceVal] = useState("From");
  const [priceDD, setPriceDD] = useState(false);
  const [priceData, setPriceData] = useState([]);

  const handlePriceDD = () => {
    setPriceDD(!priceDD);
  };
  const handleGetPriceVal = (price) => {
    setPriceVal(price);
  };
  useEffect(() => {
    let handleOpenDD = (e) => {
      if (!prpRef.current.contains(e.target)) {
        setPrpDD(false);
      }
      if (!locRef.current.contains(e.target)) {
        setLocationDD(false);
      }
      if (!priceRef.current.contains(e.target)) {
        setPriceDD(false);
      }
      if (
        !selectBudgetRef.current.contains(e.target) &&
        !priceRef.current.contains(e.target)
      ) {
        setSelectedPriceDD(false);
      }
    };
    let filterNav = filterRef.current;

    document.addEventListener("mousedown", handleOpenDD, true);
    return () => {
      document.removeEventListener("mousedown", handleOpenDD, true);
    };
  }, []);
  useEffect(() => {
    dropDownFrilter
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  const [dropDownFrilter, setDropDownFilter] = useState(false);
  const handleDropFilterSearch = () => {
    setDropDownFilter(!dropDownFrilter);
  };

  const [getTypeID, setTypeID] = useState(filter.listing_types[0].id);

  const handleSearchButton = () => {
    router.push(
      `/${lang}/search=&${getTypeID}&${propsTypeID}&${locationID}&${
        getDistrictID ? getDistrictID : null
      }&${priceVal === "From" ? null : priceVal}`
    );
  };

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          "https://admin.vanguardinvestconsult.com/backend/price-range/options",
          {
            method: "POST",
            body: JSON.stringify({
              listing_type_id: `${getTypeID}`,
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

  let translations = state.trans;

  return (
    <Layout width={100}>
      <div className={`${styles.banner}`}>
        <Image
          src={"/images/proper.png"}
          width={3000}
          height={200}
          priority
          alt="proper"
        />
        <div className={styles.banner_title}>
          <span>{translations.our_properties}</span>
        </div>
        <div
          className={styles.filter_search}
          ref={filterRef}
          onClick={handleDropFilterSearch}
        >
          <div className={styles.filter_button}>
            <FontAwesomeIcon icon={faSlidersH} width={18} />
            {translations.filter}
          </div>
          <div className={styles._filter__search}>{locationVal}</div>
        </div>
        <div className={styles.search_container}>
          <div className={styles.tab_pag}>
            {filter.listing_types.map((item, i) => {
              return (
                <div
                  className={
                    getTypeID === item.id
                      ? styles["tap_pag_box"] +
                        " " +
                        styles["tap_pag_box_active"]
                      : styles["tap_pag_box"]
                  }
                  key={i}
                  onClick={() => setTypeID(item.id)}
                >
                  {item.listing_type}
                </div>
              );
            })}
          </div>
          <div className={styles.search_filter}>
            <div className={styles.search_box}>
              <span>{translations.property_type}</span>
              <div className={styles.prpty__dropdown} ref={prpRef}>
                <p onClick={handlePrpTypeDD}>
                  <FontAwesomeIcon icon={faCaretDown} width={18} />
                  {propsVal}
                </p>
                <div
                  className={
                    prpDD
                      ? styles["dropdown_clicked"] + " " + styles.active
                      : styles["dropdown_clicked"]
                  }
                >
                  {filter.categories.map((item, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() =>
                          handlePropertyClick(item.category, item.id)
                        }
                      >
                        <div
                          className={
                            propsTypeID === item.id
                              ? styles["dropdown_val_selected"]
                              : ""
                          }
                        >
                          {item.category}
                        </div>
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.search_box}>
              <span>Location</span>
              <div className={styles.prpty__dropdown}>
                <p onClick={handlelocationDD}>
                  <FontAwesomeIcon icon={faLocationDot} width={13} />
                  {locationVal}
                </p>
                <div
                  className={
                    locationDD
                      ? styles["dropdown_clicked_location"] +
                        " " +
                        styles.active
                      : styles["dropdown_clicked_location"]
                  }
                  ref={locRef}
                >
                  {filter.cities.map((item, i) => {
                    return (
                      <React.Fragment key={i}>
                        <li
                          key={i}
                          onClick={() =>
                            handleGetLocaitonVal(item.city, item.id)
                          }
                        >
                          <div
                            className={
                              locationID === item.id
                                ? styles["dropdown_val_selected"]
                                : ""
                            }
                          >
                            {item.city}
                          </div>
                        </li>
                        {item.districts.map((dis, i) => {
                          return (
                            <div
                              className={styles["select__district"]}
                              key={i}
                              onClick={() => setDistrictID(dis.id)}
                              style={{
                                color:
                                  getDistrictID === dis.id
                                    ? "#1e136d"
                                    : "black",
                              }}
                            >
                              {getDistrictID === dis.id && (
                                <div
                                  style={{
                                    width: "20px",
                                  }}
                                >
                                  <FontAwesomeIcon icon={faCheck} />
                                </div>
                              )}
                              {dis.district}
                            </div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.search_box}>
              <span>Price Limit</span>
              <div className={styles.prpty__dropdown} ref={priceRef}>
                <p onClick={handlePriceDD}>
                  <FontAwesomeIcon icon={faLocationDot} width={13} />
                  {priceVal}
                </p>
                <div
                  className={
                    priceDD
                      ? styles["dropdown_clicked"] + " " + styles.active
                      : styles["dropdown_clicked"]
                  }
                >
                  {priceData.map((item, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => handleGetPriceVal(item.price_range)}
                      >
                        <div
                          className={
                            item.price_range == priceVal
                              ? styles["dropdown_val_selected"]
                              : ""
                          }
                        >
                          {item.price_range}
                        </div>
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.search_box} onClick={handleSearchButton}>
              <span>{translations.search}</span>
            </div>
          </div>
        </div>
      </div>
      {/* for filter drop drop when responsive */}
      <div className={`filter__drp ${dropDownFrilter ? "active" : ""}`}>
        <div
          className="btn_close__search_bar"
          onClick={() => setDropDownFilter(false)}
        >
          X
        </div>
        <TiltleTile title={"Find Your Properties"} noMore />
        <div className="seach_box_container">
          <div className="status_choose">
            {filter.listing_types.map((item, i) => {
              return (
                <div
                  className={`btn_status ${
                    getTypeID === item.id ? "btn_status_active" : ""
                  }`}
                  key={i}
                  onClick={() => setTypeID(item.id)}
                >
                  {item.listing_type}
                </div>
              );
            })}
          </div>
          <div className="propt__type">
            <h5>Property Types:</h5>
            <div className="propt__type_items">
              {filter.categories.map((item, i) => {
                return (
                  <div
                    className={`propt__type_item_ ${
                      propsTypeID === item.id ? "active" : ""
                    }`}
                    onClick={() => handlePropertyClick(item.category, item.id)}
                    key={i}
                  >
                    <div className="propt__type_icon">
                      <Image
                        src={"/images/house.png"}
                        width={200}
                        height={200}
                        alt="house"
                      />
                    </div>
                    <span>{item.category}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="price__from__">
              <h5>From:</h5>
              <div
                className="show_selected_price"
                onClick={() => setSelectedPriceDD(!selectedPricDD)}
                ref={priceRef}
              >
                {priceVal === "From" ? null : priceVal}
                <div className="__select_from__icon">
                  <FontAwesomeIcon icon={faCaretDown} width={12} />
                </div>
              </div>
            </div>
            <div
              className={`selection_budget ${selectedPricDD ? "show" : ""}`}
              ref={selectBudgetRef}
            >
              {priceData.map((item, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => handleGetPriceVal(item.price_range)}
                  >
                    <div
                      className={
                        item.price_range == priceVal
                          ? styles["dropdown_val_selected"]
                          : ""
                      }
                    >
                      {item.price_range}
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
          <div>
            <h5>Location:</h5>
            <div className="location__drpD" ref={locRef}>
              <span className={`show__seleted`} onClick={handlelocationDD}>
                {locationVal}
              </span>
              <div className={`icon__drpD ${locationDD ? "show" : ""}`}>
                <FontAwesomeIcon icon={faCaretDown} width={12} />
              </div>
              <div
                className={`drop_down__loc_n_district ${
                  locationDD && "active"
                }`}
              >
                {filter.cities.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li
                        key={i}
                        onClick={() => handleGetLocaitonVal(item.city, item.id)}
                      >
                        <div
                          className={
                            locationID === item.id
                              ? styles["dropdown_val_selected"]
                              : ""
                          }
                        >
                          {item.city}
                        </div>
                      </li>
                      {item.districts.map((dis, i) => {
                        return (
                          <div
                            className={styles["select__district"]}
                            key={i}
                            onClick={() => setDistrictID(dis.id)}
                            style={{
                              color:
                                getDistrictID === dis.id ? "#1e136d" : "black",
                            }}
                          >
                            {getDistrictID === dis.id && (
                              <div
                                style={{
                                  width: "20px",
                                }}
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </div>
                            )}
                            {dis.district}
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="btn__search" onClick={handleSearchButton}>
              {translations.search}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.properties_container} _hidden_item`}>
        {currentItems.map((item, i) => {
          return (
            <div
              className={`${styles.properties_card} our___item _hidden_item`}
              key={i}
            >
              <div
                className={styles.properties__card_img}
                onClick={() => {
                  router.push(`/${lang}/properties/${item.id}`);
                }}
              >
                <ImageComp
                  imageUrl={item.image.image_url}
                  defaultImg={"/images/b2.jpg"}
                />
                {/* <Image
                  src={item.url}
                  width={3000}
                  height={200}
                  alt="proper"
                  priority
                /> */}
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
      </div>
      <div className={`${styles.pagination_container} reveal`}>
        <div className="pagination_key">
          {currentPage !== 1 && (
            <PaginationBtn title="Prev" onClick={handlePrevbtn} />
          )}

          {<div className={`pagination_number`}>{rederPageNumbers}</div>}

          {currentPage !== pages.length && (
            <PaginationBtn title="Next" onClick={handleNextbtn} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OurProperty;
export const getServerSideProps = async (context) => {
  const { lang } = context.query;
  let filterBody = {
    lang: `${lang ? lang : "en"}`,
  };

  let getPropertiesBody = {
    lang: `${lang ? lang : "en"}`,
  };
  const filter = await postData("property/filters", filterBody);
  const getFilter = await filter;
  const property_lists = await postData("property/list", getPropertiesBody);
  const getProperties = await property_lists;
  return {
    props: {
      filter: getFilter.data,
      properties: getProperties.data,
    },
  };
};
