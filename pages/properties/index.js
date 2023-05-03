import React, { useState } from "react";
import Layout from "../../sections/Layout";
import styles from "../../styles/Properties.module.css";
import Image from "next/image";
import InputComp from "../../components/InputComp";
import { Services } from "../../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import PaginationBtn from "../../components/PaginationBtn";
const OurProperty = () => {
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
              <input type="search" placeholder="Search Keyword" />
            </div>
            <div className={styles.search_box}>
              <span>Property Type</span>
            </div>
            <div className={styles.search_box}>
              <span>Location</span>
            </div>
            <div className={styles.search_box}>
              <span>Price Limit</span>
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
