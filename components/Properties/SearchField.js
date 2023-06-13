import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../../styles/Blogs.module.css";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
const SearchField = ({ filter }) => {
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  let translations = state.trans;
  const [listingDD, setListingDD] = useState(false);
  const [listingVal, setListingVal] = useState(
    filter.listing_types[0].listing_type
  );
  const [listingID, setListingID] = useState(filter.listing_types[0].id);

  const [categoryDD, setCategoryDD] = useState(false);
  const [categoryID, setCategoryID] = useState(filter.categories[0].id);
  const [categoryVal, setCategoryVal] = useState(filter.categories[0].category);

  const [cityID, setCityID] = useState(filter.cities[0].id);
  const [cityVal, setCityVal] = useState(filter.cities[0].city);
  const [cityDD, setCityDD] = useState(false);

  const [districtID, setDistrictID] = useState(null);
  const [districtVal, setDistrictVal] = useState(null);

  const [priceDD, setPriceDD] = useState(false);
  const [priceVal, setPriceVal] = useState("From");
  const [priceData, setPriceData] = useState([]);

  const listingRef = useRef();
  const categoryRef = useRef();
  const cityRef = useRef();
  const priceRef = useRef();

  const handleListingType = (val, id) => {
    setListingVal(val);
    setListingID(id);
  };

  const handleCategory = (val, id) => {
    setCategoryVal(val);
    setCategoryID(id);
  };

  const handleCity = (val, id) => {
    setCityVal(val);
    setCityID(id);
  };

  const handleDistrict = (val, id) => {
    setDistrictVal(val);
    setDistrictID(id);
  };

  const handlePrice = (val) => {
    setPriceVal(val);
  };

  useEffect(() => {
    const handleCancleDropDown = (e) => {
      if (!listingRef.current.contains(e.target)) {
        setListingDD(false);
      }
      if (!categoryRef.current.contains(e.target)) {
        setCategoryDD(false);
      }
      if (!cityRef.current.contains(e.target)) {
        setCityDD(false);
      }
      if (!priceRef.current.contains(e.target)) {
        setPriceDD(false);
      }
    };
    document.addEventListener("click", handleCancleDropDown, true);
    return () => {
      document.removeEventListener("click", handleCancleDropDown, true);
    };
  }, []);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://admin.vanguardinvestconsult.com/backend/price-range/options`,
          {
            method: "POST",
            body: JSON.stringify({
              listing_type_id: listingID,
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
  }, [listingID, lang]);
  const router = useRouter();

  const handleSearchButton = () => {
    router.push(
      `/${lang}/search=&${listingID}&${categoryID}&${cityID}&${
        districtID ? districtID : null
      }&${priceVal === "From" ? null : priceVal}`
    );
    localStorage.setItem(
      "search",
      JSON.stringify({
        type: listingID,
        categories: categoryID,
        city: cityID,
        districtID: districtID ? districtID : null,
      })
    );
  };

  return (
    <div className="details_search__">
      <div className="dropdwon_search" ref={listingRef}>
        <div
          className="select_holder"
          onClick={() => {
            setListingDD(!listingDD);
          }}
        >
          {listingVal}
        </div>
        <div className={`_dropdown_items ${listingDD ? "active" : null}`}>
          {filter.listing_types.map((item, i) => {
            return (
              <li
                key={i}
                className={`item ${listingID === item.id ? "active" : null}`}
                onClick={() => {
                  handleListingType(item.listing_type, item.id);
                }}
              >
                {item.listing_type}
              </li>
            );
          })}
        </div>
      </div>
      <div className="dropdwon_search" ref={categoryRef}>
        <div
          className="select_holder"
          onClick={() => {
            setCategoryDD(!categoryDD);
          }}
        >
          {categoryVal}
        </div>
        <div className={`_dropdown_items ${categoryDD ? "active" : null}`}>
          {filter.categories.map((item, i) => {
            return (
              <li
                key={i}
                className={`item ${categoryID === item.id ? "active" : null}`}
                onClick={() => {
                  handleCategory(item.category, item.id);
                }}
              >
                {item.category}
              </li>
            );
          })}
        </div>
      </div>
      <div className="dropdwon_search" ref={cityRef}>
        <div
          className="select_holder"
          onClick={() => {
            setCityDD(!cityDD);
          }}
        >
          {cityVal}
        </div>
        <div className={`_dropdown_items ${cityDD ? "active" : null}`}>
          {filter.cities.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <li
                  key={i}
                  className={`item ${cityID === item.id ? "active" : null}`}
                  onClick={() => {
                    handleCity(item.city, item.id);
                  }}
                >
                  {item.city}
                </li>
                <div className="dd__district">
                  {item.districts.map((item, i) => {
                    return <li key={i}>{item.district}</li>;
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="dropdwon_search" ref={priceRef}>
        <div
          className="select_holder"
          onClick={() => {
            setPriceDD(!priceDD);
          }}
        >
          {priceVal}
        </div>
        <div className={`_dropdown_items ${priceDD ? "active" : null}`}>
          {priceData.map((item, i) => {
            return (
              <li
                key={i}
                className={`item ${
                  priceVal === item.price_range ? "active" : null
                }`}
                onClick={() => {
                  handlePrice(item.price_range);
                }}
              >
                {item.price_range}
              </li>
            );
          })}
        </div>
      </div>
      <div className={`button_find`} onClick={handleSearchButton}>
        <button>{translations.search}</button>
      </div>
    </div>
  );
};

export default SearchField;
