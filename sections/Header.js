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
import tranEn from "../utils/Translations/en.json";
import tranCh from "../utils/Translations/ch.json";
import tranKh from "../utils/Translations/kh.json";
import Link from "next/link";

const Header = ({ title, path }) => {
  let langs = [
    { img: "uk1.png", lang: "English", type: "en" },
    { img: "khmer.png", lang: "Khmer", type: "kh" },
    { img: "china.png", lang: "Chinese", type: "ch" },
  ];

  const router = useRouter();
  // let { lang } = router.query;
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const { state, dispatch } = useContext(DataContext);
  const swLang = state.lang;
  const [currentLang, setCurrentLang] = useState(swLang.flag);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();
  const xREf = useRef();
  const langRef = useRef();

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

  // set language

  const [langDrop, setLangDrop] = useState(false);
  const handleLangDropDown = () => {
    setLangDrop(!langDrop);
  };
  const handleChangeLangs = (item, type) => {
    dispatch({ type: "LANG", payload: { d_lang: type } });
    localStorage.setItem("__lang_", type);
    setLangDrop(false);
  };
  let changeLng = swLang.d_lang;
  let translations = state.trans;
  let home = state.view.home;
  let c = home;
  const locAspath = router.asPath;
  const currPath = router.asPath.substring(router.basePath.length);
  const handleClick = () => {
    let start = home ? home : 0;
    if (locAspath == `/${changeLng}`) {
      localStorage.setItem("views", JSON.stringify({ home: start + 1 }));
      dispatch({ type: "VIEW", payload: { home: start + 1 } });
    }
    if (currPath === `/${changeLng}/our-team`) {
      localStorage.setItem("views", JSON.stringify({ home: start + 1 }));
      dispatch({ type: "VIEW", payload: { home: start + 1 } });
    }
  };

  useEffect(() => {
    const handleCloselangRef = (e) => {
      if (!langRef.current.contains(e.target)) {
        setLangDrop(false);
      }
    };
    document.addEventListener("mousedown", handleCloselangRef, true);
    return () => {
      document.removeEventListener("mousedown", handleCloselangRef, true);
    };
  });
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <nav
        className={
          router.asPath === `/${changeLng}` ||
          router.asPath === `/` ||
          router.asPath === `/${changeLng}?item=1` ||
          router.asPath === `/${changeLng}?item=2`
            ? styles.navbar_container
            : styles.navbar_container_relative
        }
        id="#navbar"
      >
        <div className={styles.navbar}>
          <div
            className={styles.navbar_logo}
            onClick={() => router.push(`/${changeLng}`)}
          >
            <Image
              alt="logo"
              src="/images/logo2.png"
              width={200}
              height={200}
              priority
            />
          </div>

          <div className={styles.navbar_link}>
            {/* {home}
            {currPath} */}
            {/* <button onClick={handleClick}>Click</button> */}
            <ActiveLink href={locAspath.length <= 1 ? "/" : `/${changeLng}`}>
              {translations.home}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/our-team`}>
              {translations["our_team"]}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/our-services`}>
              {translations["our_services"]}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/properties`}>
              {translations["our_properties"]}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/about-us`}>
              {translations["about_us"]}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/careers`}>
              {translations.careers}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/contact-us`}>
              {translations["contact_us"]}
            </ActiveLink>
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div className={styles["lang"]} ref={langRef}>
            <div
              className={styles["selected_lang"]}
              onClick={handleLangDropDown}
            >
              <Image
                width={100}
                height={100}
                alt="selected_lang"
                src={`/images/${
                  changeLng === "ch"
                    ? "china.png"
                    : changeLng === "kh"
                    ? "khmer.png"
                    : "uk1.png"
                }`}
                priority
              />
            </div>
            {langDrop && (
              <div className={styles["selection_lang"]}>
                {langs.map((item, i) => {
                  return (
                    <Link
                      className={styles["lang_details"]}
                      key={i}
                      onClick={() => handleChangeLangs(item.img, item.type)}
                      // href={`/${item.type === "en" ? "" : item.type}`}
                      href={
                        router.asPath.length > 3
                          ? currentUrl.replace(
                              `/${changeLng}/`,
                              `/${item.type}/`
                            )
                          : `/${item.type === "en" ? "" : item.type}`
                      }
                    >
                      <div className={styles["select_lang"]}>
                        <Image
                          width={100}
                          height={100}
                          alt="selected_lang"
                          src={`/images/${item.img}`}
                          priority
                        />
                      </div>

                      <span>{item.lang}</span>
                    </Link>
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
              className={`menuBar ${isOpenMenu && "active"} ${
                locAspath === `/${changeLng}` || locAspath === "/"
                  ? "inactive"
                  : "black"
              }`}
              // className={`menuBar ${
              //   locAspath.length <= 1
              //     ? "/"
              //     : `/${changeLng}`
              //     ? "inactive"
              //     : "black"
              // } ${isOpenMenu && "active"}`}
              onClick={menuHandler}
              ref={xREf}
            />
          </div>
        </div>
      </nav>
      <div className={`menu_drop_down ${isOpenMenu && "active"}`}>
        <div className={`menu_list ${isOpenMenu && "active"}`} ref={menuRef}>
          <div className="menu__list_frame">
            <ActiveLink
              href={locAspath.length <= 1 ? "/" : `/${changeLng}`}
              black
            >
              {translations.home}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/our-team`} black>
              {translations.our_team}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/our-services`} black>
              {translations.our_services}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/properties`} black>
              {translations.our_properties}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/about-us`} black>
              {translations.about_us}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/careers`} black>
              {translations.careers}
            </ActiveLink>
            <ActiveLink href={`/${changeLng}/contact-us`} black>
              {translations.contact_us}
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
