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
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { DataContext } from "../store/GlobalState";
import tranCh from "../utils/Translations/ch.json";
import tranEn from "../utils/Translations/en.json";
import tranKh from "../utils/Translations/kh.json";
import { useRouter } from "next/router";
import { checkSocialMediaURL } from "../utils/checkSocialMediaUrl";
import ImageComp from "../components/ImageComp";
import { icon } from "@fortawesome/fontawesome-svg-core";
const Footer = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const [company_info, setCompanyInfo] = useState([]);
  const changeLng = state.lang.d_lang;
  const translations = state.trans;
  const locAspath = router.asPath;
  const [menuDropDown, setMenuDropDown] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch(
        `
          https://admin.vanguardinvestconsult.com/backend/page/contents`,
        {
          method: "POST",
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // mode: "no-cors",
          body: JSON.stringify({
            // name: "company_info",
            name: "company_info",
            lang: changeLng ? `${changeLng}` : "en",
          }),
        }
      );
      const json = await response.json();
      setCompanyInfo(json.data);
    };
    handleFetch();
  }, [changeLng]);

  return (
    <div className={`${styles.__foot_container} reveal`}>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <ImageComp imageUrl={company_info.logo} />
          </div>
          <div>
            <p>
              {company_info
                ? company_info.description
                : `The Website is diplayed our services and our properties. Contact
              us to get more information!`}
            </p>
          </div>
          <div className={styles.media_link}>
            {company_info.social &&
              company_info.social.map((item, i) => {
                return (
                  <Link
                    target="_blank"
                    href={checkSocialMediaURL(item.url)}
                    key={i}
                    style={{ width: "35px", height: "35px" }}
                  >
                    <ImageComp imageUrl={item.icon} width={35} height={35} />
                  </Link>
                );
              })}
            {/* {company_info.social.map((item, i) => {
              return (
                <Link
                  target="_blank"
                  href={checkSocialMediaURL(item.url)}
                  key={i}
                >
                  <Image
                    src={item.icon}
                    width={20}
                    height={20}
                    alt="telegram"
                    priority
                  />
                </Link>
              );
            })} */}
            {/* {console.log(company_info.social.length)} */}
          </div>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <h4>More About Us</h4>
          </div>
          <div className={styles.link_}>
            <Link
              className="nav-link"
              href={locAspath.length <= 1 ? "/" : `/${changeLng}`}
            >
              <FontAwesomeIcon icon={faHome} width={18} />
              {translations.home}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/our-team`}>
              <FontAwesomeIcon icon={faUserGroup} width={18} />
              {translations.our_team}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/our-services`}>
              <FontAwesomeIcon icon={faBookmark} width={18} />
              {translations.our_services}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/properties`}>
              <FontAwesomeIcon icon={faBuilding} width={18} />
              {translations.our_properties}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/about-us`}>
              <FontAwesomeIcon icon={faUsers} width={18} />
              {translations.about_us}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/careers`}>
              <FontAwesomeIcon icon={faChalkboard} width={18} />
              {translations.careers}
            </Link>
            <Link className="nav-link" href={`/${changeLng}/contact-us`}>
              <FontAwesomeIcon icon={faAddressCard} width={18} />
              {translations.contact_us}
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
              href={`${changeLng}/contact-us#contact`}
            >
              <FontAwesomeIcon icon={faLocationDot} width={18} />
              {company_info.address}
            </Link>
            <div className="d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faPhone} width={20} />
              <div className={styles.phone__number}>
                {company_info.phone
                  ? company_info.phone.map((item, i) => {
                      return <p key={i}>{item.number}</p>;
                    })
                  : null}
              </div>
            </div>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faMailBulk} width={18} />
              {company_info ? company_info.email : `email1@example`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_content}>
        <span>
          {company_info.copy_right
            ? company_info.copy_right
            : "Copyright 2023 Vanguard. All rights reserved."}
        </span>
      </div>
    </div>
  );
};

export default Footer;
