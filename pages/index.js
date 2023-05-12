import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";

import Layout from "../sections/Layout";
import styles from "../styles/Home.module.css";
import { blog, data, locationData } from "../utils/data";
import Accomplished from "../components/Home/Accomplished";
import UsewindowSize from "../utils/windowSize";
import Scrollable from "../components/Scrollable";
import ScrollableContainer from "../components/ScrollableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import SliderBanner from "../components/SliderBanner";
import LastProjects from "../components/Home/LastProjects";

const interior_Design = () => {
  return (
    <div className={styles.interior_design_sample_container}>
      <div className={`${styles.interior__design_card}`}>
        <Image
          src={`/images/b2.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
      <div className={`${styles.interior__design_card} `}>
        <Image
          src={`/images/b4.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
      <div className={`${styles.interior__design_card} `}>
        <Image
          src={`/images/tp2.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
      <div className={`${styles.interior__design_card} `}>
        <Image
          src={`/images/bed.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
      <div className={`${styles.interior__design_card} `}>
        <Image
          src={`/images/b5.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
      <div className={`${styles.interior__design_card} `}>
        <Image
          src={`/images/pool.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
      </div>
    </div>
  );
};
const Home = () => {
  const router = useRouter();
  const [status, setStatus] = useState("buy");
  const [type, setType] = useState("shop-house");
  const [location, setLocation] = useState("phnom-penh");

  const searchRef = useRef();
  const handleSearchOption = () => {
    router.push(`/search?=/${status}&${type}&${location}`);
  };

  return (
    <Layout width={100}>
      <section className={`${styles._home_banner}`}>
        <div className={`myAnim ${styles.banner}`}>
          <SliderBanner auto={true} />
          <div className={styles.banner_content}>
            <span>This is The Banner the company</span>
            <div className={styles.content_title}>
              <h2>This Website Show The Content of Real Estate</h2>
            </div>
            <p>
              Real estate is a form of real property, meaning that it is
              something you own that is attached to a piece of land. It can be
              used for residential, commercial or industrial purposes, and
              typically includes any resources on the land such as water or
              minerals.
            </p>
            <div className={styles.banner_btn}>
              <button
                onClick={(e) => {
                  searchRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.search_section} ref={searchRef}>
        <h5>Find Your Dream Property</h5>
        <div className={styles.find_dream}>
          <div className={styles.selection_opt}>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="shop-house">Shop House</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              {locationData.map((item, i) => {
                return (
                  <option value={item.location} key={i}>
                    {item.location}
                  </option>
                );
              })}
            </select>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="shop-house">Price</option>
              <option value="condo">100000</option>
              <option value="villa">200000</option>
            </select>
          </div>
          {/* <div>
          get status ={status} type = {type} location = {location}
        </div> */}
          <div className="btn btn-info" onClick={handleSearchOption}>
            Submit
          </div>
        </div>
      </div>

      <div className={styles.last__project_container}>
        <LastProjects />
      </div>

      <div className={styles.interior_section}>
        <div className="reveal fade-bottom">
          <div className={styles.interior_title}>
            <div className={styles.interior_title_content}>
              <h2>Real Estate Sample</h2>
              <button>More</button>
            </div>
            <div>
              <p>These are some of design samples.</p>
            </div>
          </div>
          <div>{interior_Design()}</div>
        </div>
      </div>

      <section className={styles.accomplistment}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>Team Producers</h2>
              <button onClick={() => router.push("/our-team")}>
                See Our Team
              </button>
            </div>
            <div>
              <p>Fint Interior designers and Architects for your project!</p>
            </div>
          </div>
          <div className={styles.designers_and__architects}>
            {data.slice(0, 4).map((item, index) => {
              return (
                <Accomplished
                  key={index}
                  url={item.url}
                  name={item.name}
                  profile={item.profile}
                  accomplished={item.accomplished}
                  profile_details={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles._home__blog}>
        <div className="reveal fade-bottom">
          <div className={`${styles.interior_title}`}>
            <div className={styles.interior_title_content}>
              <h2>Blog</h2>
              <button>More Blog</button>
            </div>
            <div>
              <p>Fint Interior designers and Architects for your project!</p>
            </div>
          </div>
          <div className={styles._home_blog__container}>
            {blog.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {renderBlogCard(
                    item.url,
                    item.location,
                    item.title,
                    item.price,
                    item.sqrft
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="reveal fade-bottom">
          <div className={styles}></div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

const renderBlogCard = (url, location, title, price, sqrft) => {
  return (
    <div className={styles._home_blog__card}>
      <div className={styles._home_card_image}>
        <Image src={url} width={1000} height={1000} alt="b1" priority />
        <div className={styles._home_card_location}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles._home_location_dot}
          />
          <span>{location}</span>
        </div>
        <Link className={styles._home_card_btn} href={"/blog/sth"}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles._home_card_arrow_icon}
          />
        </Link>
      </div>
      <div className={styles._home_card_details}>
        <div className={styles._home_card__title}>
          <h6>{title}</h6>
          <p>${price}</p>
        </div>
        <div className={styles._home_card_sqrft}>sqrft:{sqrft}</div>
      </div>
    </div>
  );
};

{
  /* <div className={`myAnim ${styles.banner}`}>
  <div className={styles.banner_img}>
    <div className={styles.banner_slide}>
      <SliderBanner />
    </div>
    <Image
              src={`/images/home_banner.jpg`}
              alt=""
              width={1000}
              height={1000}
              priority
            />
    <div className={styles.banner_content}>
      <span>This is The Banner the company</span>
      <div className={styles.content_title}>
        <h2>This Website Show The Content of Real Estate</h2>
      </div>
      <p>
        Real estate is a form of real property, meaning that it is something you
        own that is attached to a piece of land. It can be used for residential,
        commercial or industrial purposes, and typically includes any resources
        on the land such as water or minerals.
      </p>
      <div className={styles.banner_btn}>
        <button
          onClick={(e) => {
            searchRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Search
        </button>
      </div>
    </div>
  </div>
</div>; */
}
