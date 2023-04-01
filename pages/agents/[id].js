import { faMailBulk, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";
import styles from "../../styles/Agents.module.css";

const Accomplishments = () => {
  return (
    <Layout title="Agents" noSlide map>
      <div className={styles.accomplished_container}>
        {data.slice(0, 1).map((item, i) => {
          return (
            <React.Fragment key={item.id}>
              <div className={styles.list}>
                <div className={styles.list_img}>
                  <Image
                    src={`/${item.profile}`}
                    alt={item.profile}
                    priority
                    width={500}
                    height={500}
                  />
                </div>
                <div className={styles.list_text}>
                  <h5>{item.name}</h5>
                  <div className={styles.list_phone}>
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      width={20}
                      height={20}
                    />
                    <span>{item.phone}</span>
                  </div>
                  <div className={styles.list_email}>
                    <FontAwesomeIcon icon={faMailBulk} width={20} height={20} />
                    <span>{item.email}</span>
                  </div>
                  <div className={styles.list_description}>
                    <span>Description</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              {item.accomplished.map((acc, i) => {
                return (
                  <div key={acc.id} className={styles.accomplished}>
                    <div className={styles.accomplished_img}>
                      <Image
                        src={`/${acc.url}`}
                        alt="acc"
                        width={300}
                        height={300}
                        priority
                      />
                    </div>
                    <div className={styles.accomplished_text}>
                      <h5>{acc.title}</h5>
                      <div>
                        <span>Type :</span>
                        <span>{acc.type}</span>
                      </div>
                      <div>
                        <span>Address :</span>
                        <span>{acc.address}</span>
                      </div>
                      <div>
                        <p>{acc.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </Layout>
  );
};

export default Accomplishments;
