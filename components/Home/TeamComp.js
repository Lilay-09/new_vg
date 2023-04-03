import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { data } from "../../utils/data";

const TeamComp = ({ showItems }) => {
  const [showVisible, setShowVisible] = useState(showItems);
  const showMore = () => {
    setShowVisible(data.length);
  };
  const showLess = () => {
    setShowVisible(showItems);
  };

  return (
    <div className={styles.last_project}>
      <div className={styles.last_project_title}>
        <h4>Teams</h4>

        <div className="d-flex align-items-center">
          {/* {showVisible === showItems ? (
            <div onClick={showMore} className="d-flex align-items-center">
              <span>View All</span>
              <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
            </div>
          ) : (
            <div onClick={showLess}>
              <span>View Less</span>
              <FontAwesomeIcon icon={faAngleDown} width={16} height={16} />
            </div>
          )} */}
          <Link
            className={`d-flex align-items-center ${styles.link_category}`}
            passHref
            href="/agents"
          >
            <span>View All</span>
            <FontAwesomeIcon icon={faAngleRight} width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className={styles.team_card_container}>
        {data.slice(0, showVisible).map((item, i) => {
          return (
            <div className={styles.team_card} key={i}>
              <div className={styles.team_card_img}>
                <Image
                  src={`/${item.profile}`}
                  alt="l1"
                  width={3000}
                  height={3000}
                  priority
                />
              </div>
              <div className={styles.team_card_text}>
                <p>{item.name}</p>
                <Link href={`agents/${item.id}`}>View Profile</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamComp;
