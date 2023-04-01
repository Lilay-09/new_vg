import React from "react";
import BtnComp from "../components/BtnComp";
import GoogleMapComp from "../components/GoogleMapComp";

import SwiperComp from "../components/SwiperComp";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

const Layout = ({ title, children, noSlide, noFind, map }) => {
  const findDream = {
    display: "flex",
    flexFlow: "column",
    margin: "4.5rem auto",
    width: "85%",
    padding: "0.8rem",
    backgroundColor: "#ffffff",
  };
  const findDreamDropdown = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div className="body">
      <Header title={title ? `${title} ~ Vanguard` : "Vanguard"} />
      {map && <GoogleMapComp />}
      {!noSlide && (
        <div style={{ width: "85%", margin: "0 auto" }}>
          <SwiperComp />
        </div>
      )}
      {!noFind && (
        <div style={findDream}>
          <span className="fs-5 fw-bold">Find Your Dream Property</span>
          <div className="option_selection">
            <select>
              <option defaultValue="Location">Locations</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select>
              <option defaultValue="Location">Property Type</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select>
              <option defaultValue="Location">Select Status</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select>
              <option defaultValue="Location">Prices</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div style={{ alignSelf: "flex-end" }}>
            <BtnComp>Search</BtnComp>
          </div>
        </div>
      )}
      <main className={styles.layout_main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;