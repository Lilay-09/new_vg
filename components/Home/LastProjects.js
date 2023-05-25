import React, { useContext } from "react";
import TiltleTile from "../TiltleTile";
import styles from "../../styles/LastProject.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../store/GlobalState";
import tranEn from "../../utils/Translations/en.json";
import tranCh from "../../utils/Translations/ch.json";
import tranKh from "../../utils/Translations/kh.json";
const LastProjects = ({ data }) => {
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations;
  if (lang === "en") {
    translations = tranEn;
  } else if (lang === "kh") {
    translations = tranKh;
  } else if (lang === "ch") {
    translations = tranCh;
  }

  return (
    <div>
      <TiltleTile title={translations.latest_project} href={"/project/all"} />
      <div className={styles.card__container}>
        {data.map((item, index) => {
          return (
            <div className={styles.card__content} key={index}>
              <div className={styles.card__content_img}>
                <Image
                  src={item.images[0].image_url}
                  width={1000}
                  height={1000}
                  alt="building"
                  priority
                />
                <div className={styles.card_sts}>{item.status}</div>
                <Link href={`/project/details/1`} className={styles.view__item}>
                  <FontAwesomeIcon icon={faArrowRight} width={20} />
                </Link>
              </div>
              <div className={styles.card__content_text}>
                <h5>Project name</h5>
                <div className="d-flex align-items-center gap-1">
                  <span className={styles.card_prop_name}>
                    {translations.Type}:
                  </span>
                  <span>{item.type}</span>
                </div>
                <div className="d-flex gap-1">
                  <span className={styles.card_prop_name}>
                    {translations.Address}:
                  </span>
                  <span>
                    {item.address.length > 25
                      ? item.address.substring(0, 20) + "..."
                      : item.address}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastProjects;
