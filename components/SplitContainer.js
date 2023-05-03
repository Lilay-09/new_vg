import React from "react";
import styles from "../styles/SplitContainer.modul.css";
const SplitContainer = ({ left, right }) => {
  return (
    <div className={styles.service__split_container}>
      <div className={styles.service_left_container}>{left}</div>
      <div className={styles.service_right_container}>{right}</div>
    </div>
  );
};

export default SplitContainer;
