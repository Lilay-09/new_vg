import React from "react";
import Image from "next/image";
import styles from "../../../styles/Agent.module.css";
import Layout from "../../../sections/Layout";
import { data } from "../../../utils/data";
import { useRouter } from "next/router";
import fs from "fs/promises";
import path from "path";
const Person = (props) => {
  const router = useRouter();
  const currntPerson = router.query.agentId;
  const { agent } = props;
  const dd = agent.consultants.filter(
    (item) => item.id === currntPerson || item.id === Number(currntPerson)
  );

  return (
    <Layout width={100}>
      {dd.map((item, i) => {
        return (
          <div className={`${styles.agent}`} key={i}>
            <div className={styles.agent_card}>
              <div className={styles.agent__img}>
                <Image
                  src={`${item.profile}`}
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
            {}
            {/* {item.accomplished.map((item, i) => {
              return (
                <div className={styles.agent__project} key={i}>
                  <div className={styles.agent__project_img}>
                    <div className={styles.project_status}>For Sale</div>
                    <Image
                      src={`/${item.url}`}
                      width={1000}
                      height={1000}
                      alt="l1"
                      priority
                    />
                  </div>
                  <div className={styles.agent_project__details}>
                    <h5>{item.title}</h5>
                    <p>Type: {item.type}</p>
                    <p>address: {item.address}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        );
      })}
      {/* {dd.map((item, i) => {
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
                <div className={styles.agent__project} key={i}>
                  <div className={styles.agent__project_img}>
                    <div className={styles.project_status}>For Sale</div>
                    <Image
                      src={`/${item.url}`}
                      width={1000}
                      height={1000}
                      alt="l1"
                      priority
                    />
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
      })} */}
    </Layout>
  );
};

export default Person;
export const getServerSideProps = async (context) => {
  const filePath = path.join(process.cwd(), "/public/consultants.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return {
    props: {
      agent: data,
    },
  };
  // const filterObj = data;
  // const fetctData = filterObj;
  // return {
  //   props: {
  //     fetctData,
  //   },
  // };
};
