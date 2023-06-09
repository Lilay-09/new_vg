import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import ImageComp from "../ImageComp";
import styles from "../../styles/Home.module.css";
import { DataContext } from "../../store/GlobalState";

const LatestProperty = ({ data }) => {
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  let translations = state.trans;
  return (
    <React.Fragment>
      {data.slice(0, 6).map((item, i) => {
        return (
          <div className={styles._home_blog__card} key={i}>
            <div className={styles._home_card_image}>
              <ImageComp
                imageUrl={item.image === null ? "" : item.image_url.image_url}
              />
              <div className={styles._home_card_location}>
                <span>{item.listing_type}</span>
              </div>
              <Link
                className={styles._home_card_btn}
                href={`/${lang}/properties/lastest/${item.id}`}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={styles._home_card_arrow_icon}
                />
              </Link>
            </div>
            <div className={styles._home_card_details}>
              <div className={styles._home_card__title}>
                <h6>{item.name}</h6>
                <p>${item.price}</p>
              </div>
              <div className="d-flex gap-1">
                <p>{translations.address}:</p>
                <span>
                  {item.address.length > 20
                    ? item.address.substring(0, 20) + "..."
                    : item.address}
                </span>
              </div>
              <div className={styles.prop_spec}>
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src="/images/home_size.png"
                    width={100}
                    height={100}
                    alt="home_size"
                    priority
                  />
                  <div>{item.size}</div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src="/images/bed.png"
                    width={100}
                    height={100}
                    alt="home_size"
                    priority
                  />
                  <div>{item.bedrooms}</div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <Image
                    src="/images/bathtub.png"
                    width={100}
                    height={100}
                    alt="home_size"
                    priority
                  />
                  <div>{item.bathrooms}</div>
                </div>
              </div>
              <div className={styles._home_card_sqrft}>
                {item.sqrft ? `sqrft ${item.sqrft}` : null}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default LatestProperty;
