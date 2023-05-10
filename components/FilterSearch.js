import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { locationData } from "../utils/data";
import { useRouter } from "next/router";
const FilterSearch = () => {
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");
  const router = useRouter();
  const handleSearchOption = () => {
    router.push(`/search?=/${status}&${type}&${location}`);
  };

  return (
    <div className={styles.search_section}>
      <h5>Find Your Dream Property</h5>
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
          Submit
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
