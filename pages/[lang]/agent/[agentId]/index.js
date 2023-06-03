import React, { useContext } from "react";
import Image from "next/image";
import styles from "../../../../styles/Agent.module.css";
import Layout from "../../../../sections/Layout";
import { data } from "../../../../utils/data";
import { useRouter } from "next/router";
import fs from "fs/promises";
import path from "path";
import ImageComp from "../../../../components/ImageComp";
import { DataContext } from "../../../../store/GlobalState";
import { type } from "os";
const Person = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  let translations = state.trans;
  const { lang, agent } = props;

  return (
    <Layout width={100}>
      <div className={`${styles.agent}`}>
        <div className={styles.agent_card}>
          <div className={styles.agent__img}>
            <ImageComp imageUrl={agent.profile} />
          </div>
          <div className={styles.agent__details}>
            <h5>{agent.name}</h5>
            <div className={styles.agent_mail}>
              <Image src={`/images/mail.png`} width={20} height={20} alt="l1" />

              <span>
                {translations.email}: {agent.email}
              </span>
            </div>
            <div className={styles.agent_mail}>
              <Image
                src={`/images/phone-call.png`}
                width={20}
                height={20}
                alt="l1"
              />
              <span>
                {translations.phone}: {agent.phone_number}
              </span>
            </div>
            <span className={styles.about_agent}>About me</span>
          </div>
        </div>
        {agent.projects.map((item, i) => {
          return (
            <div className={styles.agent__project} key={i}>
              <div className={styles.agent__project_img}>
                <div className={styles.project_status}>For Sale</div>
                <Image
                  src={`${item.image_url}`}
                  width={1000}
                  height={1000}
                  alt="l1"
                  priority
                />
              </div>
              <div className={styles.agent_project__details}>
                <h5>{item.title}</h5>
                <p>
                  {translations.type}: {item.type}
                </p>
                <p>
                  {translations.address}: {item.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Person;
export const getServerSideProps = async (context) => {
  const { lang, details, agentId } = context.params;
  const filePath = path.join(process.cwd(), "/public/consultants.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  const dd = data.consultants.filter(
    (item) => item.id === agentId || item.id === Number(agentId)
  );
  const locData = Object.assign({}, ...dd);
  return {
    props: {
      agent: locData,
      lang,
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
