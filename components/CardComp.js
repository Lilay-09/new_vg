import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/Home.module.css";
const CardComp = ({ title, children, see_all, width }) => {
  const childStyles = {
    width: width ? `${width}%` : "85%",
    margin: "0  auto",
  };
  const titleStyles = {
    width: "85%",
    margin: "0 auto",
  };
  return (
    <React.Fragment>
      <div className={styles.last_project} style={titleStyles}>
        <div className={styles.last_project_title}>
          <h4>{title}</h4>
          <div>
            <span>{see_all}</span>
          </div>
        </div>
      </div>
      <div style={childStyles}>{children}</div>
    </React.Fragment>
  );
};

export default CardComp;
