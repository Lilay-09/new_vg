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
import React, { useEffect, useMemo, useRef, useState } from "react";
import ActiveChild from "../components/ActiveChild";
import ActiveLink from "../components/ActiveLink";
import BtnComp from "../components/BtnComp";
import styles from "../styles/Header/Header.module.css";

const Header = ({ title }) => {
  const router = useRouter();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();
  const xREf = useRef();
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

  const projectOnClickHandler = () => {
    setOpenProject(!openProject);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <meta name="description" content="Generated by create next app" /> */}

      <nav className={styles.navbar_container}>
        <div className={styles.navbar}>
          <div className={styles.navbar_logo}>
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
              Home
            </ActiveLink>
            <div className="project_link">
              <ActiveLink href={`/projects`}>
                <span>Projects</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  width={15}
                  style={{ marginLeft: "0.3rem" }}
                />
              </ActiveLink>
              <div className="project_lists">
                <div className="list_frame">
                  <ActiveChild href="/projects">All Project</ActiveChild>
                  <ActiveChild href="/villa">Villa</ActiveChild>
                  <ActiveChild href="/condo">Condo</ActiveChild>
                  <ActiveChild href="/apartments">Apartments</ActiveChild>
                  <ActiveChild href="/shop-house">Shop House</ActiveChild>
                  <ActiveChild href="/flat-house">Flat House</ActiveChild>
                  <ActiveChild href="/Borey">Borey</ActiveChild>
                </div>
              </div>
            </div>

            <ActiveLink href="/agents">Agents</ActiveLink>
            <ActiveLink href="/our-branches">Our Branches</ActiveLink>
            <ActiveLink href="/properties">Properties</ActiveLink>
            <ActiveLink href="/services">Services</ActiveLink>
            <ActiveLink href="/blogs">Blogs</ActiveLink>
            <ActiveLink href="/careers">Careers</ActiveLink>
            <ActiveLink href="/about-us">About Us</ActiveLink>
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div className={styles.get_intouch}>
            <div>
              <FontAwesomeIcon icon={faSearch} width={20} height={20} />
            </div>
            <div className={styles.lang}>
              <Image
                src="/images/uk.png"
                width={20}
                height={20}
                alt="uk_lang"
                priority
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                color="black"
                width={20}
                height={20}
              />
            </div>
            <BtnComp
              isRed
              href="/get-in-touch"
              className={styles.get_in_touch_btn}
            >
              Get in touch
            </BtnComp>

            <FontAwesomeIcon
              icon={!isOpenMenu ? faBars : faXmark}
              width={20}
              height={20}
              className={`menuBar ${isOpenMenu && "active"}`}
              onClick={menuHandler}
              ref={xREf}
            />
          </div>
        </div>
      </nav>
      <div className={`menu_drop_down ${isOpenMenu && "active"}`}>
        <div className={`menu_list ${isOpenMenu && "active"}`} ref={menuRef}>
          <ActiveChild href="/">Home</ActiveChild>
          <ActiveChild href="/">Home</ActiveChild>
          <ActiveChild href="/">Home</ActiveChild>
          <ActiveChild href="/">Home</ActiveChild>
          <ActiveChild href="/">Home</ActiveChild>
        </div>
      </div>
    </div>
  );
};

export default Header;