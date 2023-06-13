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
const Footer = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const [company_info, setCompanyInfo] = useState();
  const changeLng = state.lang.d_lang;
  const translations = state.trans;
  const locAspath = router.asPath;
  const [menuDropDown, setMenuDropDown] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      // const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpaXMiOm51bGwsImF1ZCI6bnVsbCwiaWF0IjoxNjg2NTgwODI1LCJuYmYiOjE2ODY1ODA4MjUsImV4cCI6MTY4NjU5MTYyNSwibGFuZyI6ImVuIiwiaWQiOiIxIiwidXNlcl9jbGFzcyI6ImFkbWluIiwib2ZmaWNpYWxfaWQiOm51bGwsIm9mZmljaWFsX2NvZGUiOiIwMDAxIiwibG9naW5fbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImJyYW5jaF9pZCI6IjEiLCJmdWxsX25hbWUiOiJTYW1zZXRoeSIsInN0YXR1cyI6ImFjdGl2ZSIsImlzX2xvY2tlZCI6IjAiLCJlbWFpbCI6bnVsbCwicGhvbmVfbnVtYmVyIjoiMDEyNTc4OTAiLCJvdHBfY29kZSI6bnVsbH0.4JXzLW2uvw6zznhmsXEdt1wYGA175PqsU5iswlNuMEM`;
      const response = await fetch(
        `
          https://admin.vanguardinvestconsult.com/backend/company-info`,
        {
          method: "POST",
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ chain: "home_page.banner" }),
        }
      );
      const json = await response.json();
      setCompanyInfo(json.data);
    };
    handleFetch();
  }, []);

  return (
    <div className={`${styles.__foot_container} reveal`}>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.title}>
            <Image
              src={company_info ? company_info.logo : "/images/logo2.png"}
              alt="logo"
              width={3000}
              height={3000}
              priority
            />
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
            {company_info
              ? company_info.social_media.map((item, i) => {
                  return (
                    <Link target="_blank" href={""} key={i}>
                      <Image
                        src="/images/send2.png"
                        width={20}
                        height={20}
                        alt="telegram"
                        priority
                      />
                    </Link>
                  );
                })
              : null}
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
              href="/contact-us#contact"
            >
              <FontAwesomeIcon icon={faLocationDot} width={18} />
              {company_info
                ? company_info.address
                : `4517 Washington Ave. Manchester, Kentucky 39495`}
            </Link>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faPhone} width={18} />
              {company_info ? company_info.phone_number : `+855 0965778133`}
            </div>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faMailBulk} width={18} />
              {company_info ? company_info.email : `email@example`}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_content}>
        <span>
          {company_info
            ? company_info.copy_right
            : "Copyright 2023 Vanguard. All rights reserved."}
        </span>
      </div>
    </div>
  );
};

export default Footer;
