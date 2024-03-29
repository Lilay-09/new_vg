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
import ImageComp from "../ImageComp";
const LatestProjects = ({ data }) => {
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations = state.trans;

  return (
    <div>
      {data.length > 0 && (
        <>
          <TiltleTile
            title={translations.latest_project}
            href={`/${lang}/our-services`}
          />
          <div className={styles.card__container}>
            {data.slice(0, 6).map((item, index) => {
              return (
                <div className={styles.card__content} key={index}>
                  <div className={styles.card__content_img}>
                    {item.image ? (
                      <ImageComp imageUrl={item.image.image_url} />
                    ) : null}
                    <div className={styles.card_sts}>{item.status}</div>
                    <Link
                      href={`/${lang}/project/details/${item.id}`}
                      className={styles.view__item}
                    >
                      <FontAwesomeIcon icon={faArrowRight} width={20} />
                    </Link>
                  </div>
                  <div className={styles.card__content_text}>
                    <h5>{item.name}</h5>
                    <div className="d-flex align-items-center gap-1">
                      <span className={styles.card_prop_name}>
                        {translations.type}:
                      </span>
                      <span>{item.project_type}</span>
                    </div>
                    <div className="d-flex gap-1">
                      <span className={styles.card_prop_name}>
                        {translations.address}:
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
        </>
      )}
    </div>
  );
};

export default LatestProjects;
