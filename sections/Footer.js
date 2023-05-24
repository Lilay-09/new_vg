import {
  faAddressCard,
  faBookmark,
  faBuilding,
  faChalkboard,
  faHome,
  faLocationDot,
  faMailBulk,
  faPhone,
  faPlane,
  faTeletype,
  faUserGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext, useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

import translateKh from "../utils/Translations/kh.json";
import translateCh from "../utils/Translations/ch.json";
import translateEn from "../utils/Translations/en.json";
import { DataContext } from "../store/GlobalState";
const Footer = () => {
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  const [menuDropDown, setMenuDropDown] = useState(false);
  let translations;
  if (lang === "kh") {
    translations = translateKh;
  } else if (lang === "en") {
    translations = translateEn;
  } else if (lang === "ch") {
    translations = translateCh;
  }
  return (
    <div className={`${styles.__foot_container} reveal`}>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={3000}
              height={3000}
              priority
            />
          </div>
          <div>
            <p>
              The Website is diplayed our services and our properties. Contact
              us to get more information!
            </p>
          </div>
          <div className={styles.media_link}>
            <a>
              <Image
                src={"/images/send2.png"}
                width={20}
                height={20}
                alt="telegram"
                priority
              />
            </a>
            <a>
              <Image
                src="/images/facebook.png"
                width={20}
                height={20}
                alt="telegram"
                priority
              />
            </a>
            <a>
              <Image
                src="/images/twit.png"
                width={20}
                height={20}
                alt="telegram"
                priority
              />
            </a>
            <Link href={""}>
              <Image
                src="/images/yt.png"
                width={20}
                height={20}
                alt="telegram"
                priority
              />
            </Link>
          </div>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <h4>More About Us</h4>
          </div>
          <div className={styles.link_}>
            <Link className="nav-link" href="/">
              <FontAwesomeIcon icon={faHome} width={18} />
              {translations.Home}
            </Link>
            <Link className="nav-link" href="/our-team">
              <FontAwesomeIcon icon={faUserGroup} width={18} />
              {translations["Our Team"]}
            </Link>
            <Link className="nav-link" href="/our-services">
              <FontAwesomeIcon icon={faBookmark} width={18} />
              {translations["Our Services"]}
            </Link>
            <Link className="nav-link" href="/properties">
              <FontAwesomeIcon icon={faBuilding} width={18} />
              {translations["Our Properties"]}
            </Link>
            <Link className="nav-link" href="/about-us">
              <FontAwesomeIcon icon={faUsers} width={18} />
              {translations["About Us"]}
            </Link>
            <Link className="nav-link" href="/careers">
              <FontAwesomeIcon icon={faChalkboard} width={18} />
              {translations["Careers"]}
            </Link>
            <Link className="nav-link" href="/contact-us">
              <FontAwesomeIcon icon={faAddressCard} width={18} />
              {translations["Contact Us"]}
            </Link>
          </div>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <h4>Address</h4>
          </div>
          <div className={styles._contact_address}>
            <Link
              className="d-flex align-items-center gap-1 nav-link"
              href="/contact-us#contact"
            >
              <FontAwesomeIcon icon={faLocationDot} width={18} />
              4517 Washington Ave. Manchester, Kentucky 39495
            </Link>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faPhone} width={18} />
              +855 0965778133
            </div>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faMailBulk} width={18} />
              +855 0965778133
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_content}>
        <span>Copyright 2023 Real Estate. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
