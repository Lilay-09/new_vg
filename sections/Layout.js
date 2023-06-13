import React, { useContext, useEffect } from "react";
import BtnComp from "../components/BtnComp";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import UsewindowSize from "../utils/windowSize";
import tranEn from "../utils/Translations/en.json";
import tranCh from "../utils/Translations/ch.json";
import tranKh from "../utils/Translations/kh.json";
import { DataContext } from "../store/GlobalState";

const Layout = ({ title, children, noSlide, noFind, map, width, path }) => {
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
  let translations;
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  if (lang === "en") {
    translations = tranEn;
  } else if (lang === "kh") {
    translations = tranKh;
  } else if (lang === "ch") {
    translations = tranCh;
  }
  useEffect(() => {
    dispatch({ type: "TRANSLATE_LANG", payload: translations });
    return () => {};
  }, [dispatch, translations]);

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
    // position: "relative",
  };

  return (
    <div className="body">
      <Header title={title ? `${title} ~ Vanguard` : "Vanguard"} path={path} />
      <main style={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
