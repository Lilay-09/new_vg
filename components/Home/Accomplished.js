import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Scrollable from "../Scrollable";
const Accomplished = (props) => {
  return (
    <div className={styles._designer_architect_container}>
      <div className={styles._designer__details_content_g1}>
        <div className={styles._img__circle_avatar}>
          <Link href={`designer&architect/${props.profile_details}`}>
            <Image
              src={`/${props.profile}`}
              width={300}
              height={300}
              alt={props.profile}
              priority
            />
          </Link>
        </div>
        <div className={styles._person_details}>
          <h5>{props.name}</h5>
          <span>Positon: Architect & Building Designers</span>
          <p>Phnom Penh (Cambodia)</p>
        </div>
      </div>

      <div className={styles._designer__details_content_g2}>
        <Scrollable>
          {props.accomplished.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className={styles._accomplished__project}>
                  <Image
                    src={`/${item.url}`}
                    width={300}
                    height={300}
                    alt={item.url}
                    priority
                  />
                </div>
              </React.Fragment>
            );
          })}
        </Scrollable>
      </div>
    </div>
  );
};

export default Accomplished;