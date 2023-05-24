import {
  faAngleDown,
  faAngleRight,
  faBars,
  faCaretDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import ActiveLink from "../components/ActiveLink";
import BtnComp from "../components/BtnComp";
import styles from "../styles/Header/Header.module.css";
import { DataContext } from "../store/GlobalState";
import translateKh from "../utils/Translations/kh.json";
import translateCh from "../utils/Translations/ch.json";
import translateEn from "../utils/Translations/en.json";

const Header = ({ title }) => {
  const router = useRouter();
  let langs = [
    { img: "uk1.png", lang: "English", type: "en" },
    { img: "khmer.png", lang: "Khmer", type: "kh" },
    { img: "china.png", lang: "Chinese", type: "ch" },
  ];
  const { state, dispatch } = useContext(DataContext);
  const swLang = state.lang;
  const [currentLang, setCurrentLang] = useState(swLang.flag);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();
  const xREf = useRef();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    isOpenMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
  useEffect(() => {
    let handleOpenMenu = (e) => {
      if (
        !xREf.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOpenMenu, true);
    return () => {
      document.removeEventListener("mousedown", handleOpenMenu, true);
    };
  }, []);
  const [openProject, setOpenProject] = useState(false);
  const [menuDropDown, setMenuDropDown] = useState(false);
  const projectOnClickHandler = () => {
    setOpenProject(!openProject);
  };
  const href = "/projects";

  // language selection
  const [langDrop, setLangDrop] = useState(false);

  const handleLangDropDown = () => {
    setLangDrop(!langDrop);
  };
  const handleChangeLangs = (item, type) => {
    setCurrentLang(item);
    console.log(type);
    dispatch({ type: "LANG", payload: { d_lang: type, flag: item } });
    localStorage.setItem("__lang_", type);
    localStorage.setItem("__lang_flag_", item);
  };

  // translation from json
  let translations;
  if (swLang.d_lang === "kh") {
    translations = translateKh;
  } else if (swLang.d_lang === "en") {
    translations = translateEn;
  } else if (swLang.d_lang === "ch") {
    translations = translateCh;
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <nav
        className={
          router.asPath === "/"
            ? styles.navbar_container
            : styles.navbar_container_relative
        }
        id="#navbar"
      >
        <div className={styles.navbar}>
          <div className={styles.navbar_logo} onClick={() => router.push("/")}>
            <Image
              alt="logo"
              src="/images/logo2.png"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className={styles.navbar_link}>
            <ActiveLink href="/" id="home">
              {translations.Home}
            </ActiveLink>
            <ActiveLink href="/our-team">{translations["Our Team"]}</ActiveLink>
            <ActiveLink href="/our-services">
              {translations["Our Services"]}
            </ActiveLink>
            <ActiveLink href="/properties">
              {translations["Our Properties"]}
            </ActiveLink>
            <ActiveLink href="/about-us">{translations["About Us"]}</ActiveLink>
            <ActiveLink href="/careers">{translations.Careers}</ActiveLink>
            <ActiveLink href="/contact-us">
              {translations["Contact Us"]}
            </ActiveLink>
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div className={styles["lang"]}>
            <div
              className={styles["selected_lang"]}
              onClick={handleLangDropDown}
            >
              <Image
                width={100}
                height={100}
                alt="selected_lang"
                src={`/images/${swLang.flag}`}
              />
            </div>
            {langDrop && (
              <div
                className={styles["selection_lang"]}
                onClick={handleLangDropDown}
              >
                {langs.map((item, i) => {
                  return (
                    <div className={styles["lang_details"]} key={i}>
                      <div
                        className={styles["select_lang"]}
                        onClick={() => handleChangeLangs(item.img, item.type)}
                      >
                        <Image
                          width={100}
                          height={100}
                          alt="selected_lang"
                          src={`/images/${item.img}`}
                        />
                      </div>

                      <span>{item.lang}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={styles.get_intouch}>
            <FontAwesomeIcon
              icon={!isOpenMenu ? faBars : faXmark}
              width={20}
              height={20}
              className={`menuBar ${
                router.asPath === "/" ? "inactive" : "black"
              } ${isOpenMenu && "active"}`}
              onClick={menuHandler}
              ref={xREf}
            />
          </div>
        </div>
      </nav>
      <div className={`menu_drop_down ${isOpenMenu && "active"}`}>
        <div className={`menu_list ${isOpenMenu && "active"}`} ref={menuRef}>
          <div className="menu__list_frame">
            <ActiveLink href="/" black>
              {translations.Home}
            </ActiveLink>
            <ActiveLink href="/our-team" black>
              {translations["Our Team"]}
            </ActiveLink>
            <ActiveLink href="/our-services" black>
              {translations["Our Services"]}
            </ActiveLink>
            <ActiveLink href="/properties" black>
              {translations["Our Properties"]}
            </ActiveLink>
            <ActiveLink href="/about-us" black>
              {translations["About Us"]}
            </ActiveLink>
            <ActiveLink href="/careers" black>
              {translations.Careers}
            </ActiveLink>
            <ActiveLink href="/contact-us" black>
              {translations["Contact Us"]}
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
