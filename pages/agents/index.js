import {
  faMailBulk,
  faPhoneAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleMapComp from "../../components/GoogleMapComp";
import Layout from "../../sections/Layout";
import styles from "../../styles/Agents.module.css";
import { data } from "../../utils/data";

const Agents = () => {
  return (
    <Layout title="Agents" noSlide map>
      {data.map((item, index) => {
        return (
          <Link
            className={styles.list}
            key={index}
            passHref
            href={`/agents/${item.id}`}
          >
            <div className={styles.list_img}>
              <Image
                src={`/${item.profile}`}
                alt={item.profile}
                priority
                width={6000}
                height={6000}
              />
            </div>
            <div className={styles.list_text}>
              <h5>{item.name}</h5>
              <div className={styles.list_phone}>
                <FontAwesomeIcon icon={faPhoneVolume} width={20} height={20} />
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
          </Link>
        );
      })}
    </Layout>
  );
};

export default Agents;
