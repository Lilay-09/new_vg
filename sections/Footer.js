import {
  faLocationDot,
  faMailBulk,
  faPhone,
  faPlane,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  return (
    <div className={styles.footer}>
      <div className={styles.left_footer}>
        <div className={styles.logo}>
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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
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
          <a>
            <Image
              src="/images/yt.png"
              width={20}
              height={20}
              alt="telegram"
              priority
            />
          </a>
        </div>
        <div>
          <p>Copyright 2023 Real Estate. All rights reserved.</p>
        </div>
      </div>
      <div className={styles.mid_footer}>
        <h5>Company</h5>
        <div>
          <Link className="nav-link" href="/">
            Home
          </Link>
          <div
            onClick={() => {
              setMenuDropDown(true);
              {
                menuDropDown && setMenuDropDown(!menuDropDown);
              }
            }}
          >
            <span className="">Projects</span>
            {menuDropDown && (
              <ul className={styles.footer__link}>
                <Link href="/projects">All Projects</Link>
                <Link href="/villa">Villa</Link>
                <Link href="/condo">Condo</Link>
                <Link href="/apartment">Apartments</Link>
                <Link href="/shop-house">Shop House</Link>
                <Link href="/flat-house">Flat House</Link>
                <Link href="/borey">Borey</Link>
              </ul>
            )}
          </div>
          <Link className="nav-link" href="/agents">
            Agents
          </Link>
          <Link className="nav-link" href="/our-branches">
            Our Branches
          </Link>
          <Link className="nav-link" href="/properties">
            Properites
          </Link>

          <Link className="nav-link" href="/services">
            Services
          </Link>
          <Link className="nav-link" href="/blogs">
            Blogs
          </Link>
          <Link className="nav-link" href="/careers">
            Carrers
          </Link>
          <Link className="nav-link" href="/about-us">
            About Us
          </Link>
        </div>
      </div>
      <div className={styles.right_footer}>
        <h5>Address</h5>
        <div className={styles.right_footer_list}>
          <li>
            <FontAwesomeIcon icon={faLocationDot} width={18} height={18} />
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} width={18} height={18} />
            <span>+855 960000000</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMailBulk} width={18} height={18} />
            <span>yourname@gmail.com</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
