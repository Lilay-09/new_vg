import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Scrollable from "../Scrollable";
import { DataContext } from "../../store/GlobalState";
import tranEn from "../../utils/Translations/en.json";
import tranKh from "../../utils/Translations/kh.json";
import tranCh from "../../utils/Translations/ch.json";
const Accomplished = (props) => {
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
    <div className={styles._designer_architect_container}>
      <div className={styles._designer__details_content_g1}>
        <Link
          href={`agent/${props.profile_details}`}
          className={styles._img__circle_avatar}
        >
          <Image
            src={`${props.profile}`}
            width={300}
            height={300}
            alt={props.profile}
            priority
          />
        </Link>

        <div className={styles._person_details}>
          <h5>{props.name}</h5>
          <span>
            {translations.Position}: {props.position}
          </span>
          <p>Phnom Penh (Cambodia)</p>
        </div>
      </div>

      <div className={styles._designer__details_content_g2}>
        <Scrollable>
          {props.projects.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  className={styles._accomplished__project}
                  href={`/agent/member-project/${props.id}&${item.id}`}
                >
                  <Image
                    src={`${item.image_url}`}
                    width={300}
                    height={300}
                    alt={item.url}
                    priority
                  />
                  <div className={styles.member__pro_status}>Sale</div>
                </Link>
              </React.Fragment>
            );
          })}
        </Scrollable>
      </div>
    </div>
  );
};

export default Accomplished;
