import Image from "next/image";
import React from "react";
import styles from "../../../../styles/Agent.module.css";
import Layout from "../../../../sections/Layout";
import { data } from "../../../../utils/data";

const PersonProject = (props) => {
  const { fetctData, numbID, childID } = props;
  return (
    <Layout width={100}>
      {fetctData.map((item, i) => {
        return (
          <div className={`${styles.agent}`} key={i}>
            <div className={styles.agent_card}>
              <div className={styles.agent__img}>
                <Image
                  src={`/${item.profile}`}
                  width={1000}
                  height={1000}
                  alt="l1"
                />
              </div>
              <div className={styles.agent__details}>
                <h5>{item.name}</h5>
                <div className={styles.agent_mail}>
                  <Image
                    src={`/images/mail.png`}
                    width={20}
                    height={20}
                    alt="l1"
                  />

                  <span>Email: {item.email}</span>
                </div>
                <div className={styles.agent_mail}>
                  <Image
                    src={`/images/phone-call.png`}
                    width={20}
                    height={20}
                    alt="l1"
                  />
                  <span>Phone: {item.phone}</span>
                </div>
                <span className={styles.about_agent}>About me</span>
              </div>
            </div>
            {item.accomplished.map((item, i) => {
              return (
                <div
                  className={
                    item.id === childID
                      ? styles["agent__project"] +
                        " " +
                        styles["agent__project_active"]
                      : styles["agent__project"]
                  }
                  key={i}
                >
                  <div className={styles.agent__project_img}>
                    <Image
                      src={`/${item.url}`}
                      width={1000}
                      height={1000}
                      alt="l1"
                      priority
                    />
                    <div className={styles.project_status}>For Sales</div>
                  </div>
                  <div className={styles.agent_project__details}>
                    <h5>{item.title}</h5>
                    <p>Type: {item.type}</p>
                    <p>address: {item.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </Layout>
  );
};

export default PersonProject;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  let numbID = Number(id.slice(0, 1));
  let childID = Number(id.substr(id.length - 1));

  const filterObj = data.filter((item) => item.id === numbID);
  const fetctData = filterObj;
  return {
    props: {
      fetctData,
      numbID,
      childID,
    },
  };
};
