import React, { useEffect, useRef, useState } from "react";
import Layout from "../../sections/Layout";
import styles from "../../styles/Properties.module.css";
import Image from "next/image";
import InputComp from "../../components/InputComp";
import { Services, city_provinces } from "../../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import PaginationBtn from "../../components/PaginationBtn";
const OurProperty = () => {
  const forDD = [
    { type: "Shop House" },
    { type: "Twin Villa" },
    { type: "condo" },
  ];
  const priceLst = [
    {
      price: "120000",
    },
    {
      price: "200000",
    },
    {
      price: "300000",
    },
    {
      price: "350000",
    },
  ];
  const router = useRouter();
  let page = "properties";
  const { query, pathname } = router;
  let q = query.page;
  const [data_item, setData] = useState(Services);
  const [currentPage, setCurrentPage] = useState(Number(q) ? Number(q) : 1);
  const [itemsPerPgae, setItemPerPgae] = useState(6);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    router.replace(`/${page}/?page=${event.target.id}`);
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    router.replace(`/${page}/?page=${currentPage - 1}`);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    router.replace(`/${page}/?page=${currentPage + 1}`);
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
          className={`current_num ${currentPage === number && "active"}`}
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
  const [propsVal, setPropVal] = useState("Shop House");
  const prpRef = useRef();
  const locRef = useRef();
  const priceRef = useRef();
  const handleGetDragVal = (e) => {
    const getVal = e.target.innerHTML;
    setPropVal(getVal);
    setPrpDD(false);
  };
  const handlePrpTypeDD = () => {
    setPrpDD(!prpDD);
  };

  const [locationVal, setLocationVal] = useState("Phnom Penh");
  const [locationDD, setLocationDD] = useState(false);
  const handlelocationDD = () => {
    setLocationDD(!locationDD);
  };
  const handleGetLocaitonVal = (e) => {
    const getVal = e.target.innerHTML;
    setLocationVal(getVal);
  };

  const [priceVal, setPriceVal] = useState("10000");
  const [priceDD, setPriceDD] = useState(false);

  const handlePriceDD = () => {
    setPriceDD(!priceDD);
  };
  const handleGetPriceVal = (e) => {
    const getVal = e.target.innerHTML;
    setPriceVal(getVal);
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
        setLocationDD(false);
      }
    };

    document.addEventListener("mousedown", handleOpenDD, true);
    return () => {
      document.removeEventListener("mousedown", handleOpenDD, true);
    };
  }, []);

  return (
    <Layout width={100}>
      <div className={`${styles.banner}`}>
        <Image
          src={"/images/proper.png"}
          width={3000}
          height={200}
          alt="proper"
        />
        <div className={styles.banner_title}>
          <span>Properties</span>
        </div>
        <div className={styles.search_container}>
          <div className={styles.tab_pag}>
            <div className={styles.tap_pag_box}>Buy Properties</div>
            <div className={styles.tap_pag_box}>Rent Properties</div>
          </div>
          <div className={styles.search_filter}>
            <div className={styles.search_box}>
              <span>Keyword Search</span>
              <div>Seacrch Container</div>
            </div>
            <div className={styles.search_box}>
              <span>Property Type</span>
              <div className={styles.prpty__dropdown}>
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
                  {forDD.map((item, i) => {
                    return (
                      <li key={i} onClick={handleGetDragVal} ref={prpRef}>
                        {item.type == propsVal ? (
                          <div className={styles["dropdown_val_selected"]}>
                            {item.type}
                          </div>
                        ) : (
                          item.type
                        )}
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
                      ? styles["dropdown_clicked"] + " " + styles.active
                      : styles["dropdown_clicked"]
                  }
                >
                  {city_provinces.map((item, i) => {
                    return (
                      <li key={i} onClick={handleGetLocaitonVal} ref={locRef}>
                        {item.city == locationVal ? (
                          <div className={styles["dropdown_val_selected"]}>
                            {item.city}
                          </div>
                        ) : (
                          item.city
                        )}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.search_box}>
              <span>Price Limit</span>
              <div className={styles.prpty__dropdown}>
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
                  {priceLst.map((item, i) => {
                    return (
                      <li key={i} onClick={handleGetPriceVal} ref={priceRef}>
                        {item.price == priceVal ? (
                          <div className={styles["dropdown_val_selected"]}>
                            {item.price}
                          </div>
                        ) : (
                          item.price
                        )}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.search_box}>
              <span>Search</span>
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
              <div className={styles.properties__card_img}>
                <Image src={item.url} width={3000} height={200} alt="proper" />
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
                      />
                      <div>6M x 14M</div>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <Image
                        src="/images/bed.png"
                        width={100}
                        height={100}
                        alt="home_size"
                      />
                      <div>3</div>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <Image
                        src="/images/bathtub.png"
                        width={100}
                        height={100}
                        alt="home_size"
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
