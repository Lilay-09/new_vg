import React, { useEffect } from "react";
import BtnComp from "../components/BtnComp";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import UsewindowSize from "../utils/windowSize";

const Layout = ({ title, children, noSlide, noFind, map, width }) => {
  const size = UsewindowSize();
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      var elementVisible = 10;
      var windowHeight = innerHeight;
      for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    const isTablet = () => {
      var reveals = document.querySelectorAll(".reveal");
      var elementVisible = 10;
      var windowHeight = innerHeight;
      var reveals = document.querySelectorAll(".reveal");
      var elementTop = reveals[0].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        if (size.width <= 768 || size.cWidth <= 768) {
          reveals[0].classList.add("active");
        }
      }
    };

    const hiddenEle = document.querySelectorAll("._hidden_item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("_show_item");
          entry.target.classList.add("our___item");
        } else {
          entry.target.classList.remove("_show_item");
          entry.target.classList.remove("our___item");
        }
      });
    });
    window.addEventListener(
      "scroll",
      hiddenEle.forEach((ele) => observer.observe(ele))
    );
    isTablet();
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener(
        "scroll",
        hiddenEle.forEach((ele) => observer.observe(ele))
      );
    };
  }, [size]);

  const findDream = {
    display: "flex",
    flexFlow: "column",
    margin: "4.5rem auto",
    width: "85%",
    padding: "1.2rem",
    zIndex: "1000",
    backgroundColor: "#ffffff",
  };
  const findDreamDropdown = {
    display: "flex",
    justifyContent: "space-between",
  };
  const main = {
    width: width ? `${width}%` : "85%",
    margin: "0 auto",
    display: "flex",
    flexFlow: "column",
    minWidth: "320px",
  };
  return (
    <div className="body">
      <Header title={title ? `${title} ~ Vanguard` : "Vanguard"} />

      <main style={main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

// {map && <GoogleMapComp />}
//       {!noSlide && (
//         <div style={{ width: "85%", margin: "0 auto" }}>
//           <SwiperComp />
//         </div>
//       )}
// {!noFind && (
//   <div className="find_dream">
//     <span className="fs-5 fw-bold p-1">Find Your Dream Property</span>
//     <div className="select_option">
//       <select className="form-select">
//         <option defaultValue>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//       <select className="form-select">
//         <option defaultValue>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//       <select className="form-select">
//         <option defaultValue>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//       <select className="form-select">
//         <option defaultValue>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//     </div>
//     <div style={{ alignSelf: "flex-end", margin: "1.2vw 0" }}>
//       <BtnComp>Search</BtnComp>
//     </div>
//   </div>
// )}
