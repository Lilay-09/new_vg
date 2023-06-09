import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Scrollable from "../Scrollable";
import { DataContext } from "../../store/GlobalState";
import ImageComp from "../ImageComp";
const Accomplished = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations = state.trans;

  return (
    <div className={styles._designer_architect_container}>
      <div className={styles._designer__details_content_g1}>
        <Link
          href={`/${lang}/agent/${props.profile_details}`}
          className={styles._img__circle_avatar}
        >
          {props.profile ? <ImageComp imageUrl={props.profile} /> : null}
        </Link>

        <div className={styles._person_details}>
          <h5>{props.name}</h5>
          <span>
            {translations.position}: {props.position}
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
                  href={`/${lang}/agent/member-project/${props.id}&${item.project_id}`}
                >
                  {item.image ? (
                    <ImageComp imageUrl={item.image.image_url} />
                  ) : null}
                  <div className={styles.member__pro_status}>{item.status}</div>
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
