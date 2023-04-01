import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/Home.module.css";
const CardComp = ({ title, children, see_all }) => {
  return (
    <div className={styles.last_project}>
      <div className={styles.last_project_title}>
        <h4>{title}</h4>
        <div>
          <span>{see_all}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardComp;
