import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import styles from "../../../../styles/Agent.module.css";
import Layout from "../../../../sections/Layout";
import { postData } from "../../../../utils/fetchData";
import ImageComp from "../../../../components/ImageComp";
import { useRouter } from "next/router";
import { DataContext } from "../../../../store/GlobalState";

const MemberProject = (props) => {
  const { agent_api, agentID, projectID } = props;
  const { state, dispatch } = useContext(DataContext);
  const currentRef = useRef();
  const router = useRouter();
  let lang = state.lang.d_lang;

  useEffect(() => {
    const item = agent_api.projects.find(
      (item) => item.project_id === projectID
    );
    if (item && currentRef.current) {
      currentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [agent_api.projects, projectID]);
  return (
    <Layout width={100}>
      <div className={`${styles.agent}`}>
        <div className={styles.agent_card}>
          <div className={styles.agent__img}>
            <ImageComp imageUrl={agent_api.image_url} />
          </div>
          <div className={styles.agent__details}>
            <h5>{agent_api.name}</h5>
            <div className={styles.agent_mail}>
              <Image src={`/images/mail.png`} width={20} height={20} alt="l1" />

              <span>Email: {agent_api.email}</span>
            </div>
            <div className={styles.agent_mail}>
              <Image
                src={`/images/phone-call.png`}
                width={20}
                height={20}
                alt="l1"
              />
              {agent_api.phone_number ? (
                <span>Phone: {agent_api.phone_number}</span>
              ) : null}
            </div>
            <span className={styles.about_agent}>About me</span>
          </div>
        </div>
        {agent_api.projects.map((item, i) => {
          return (
            <div
              className={
                item.project_id === projectID
                  ? styles["agent__project"] +
                    " " +
                    styles["agent__project_active"]
                  : styles["agent__project"]
              }
              key={i}
              ref={currentRef}
              onClick={() =>
                router.push(`/${lang}/project/details/${item.project_id}`)
              }
            >
              <div className={styles.agent__project_img}>
                <Image
                  src={`/${item.url}`}
                  width={1000}
                  height={1000}
                  alt="l1"
                  priority
                />
                <div className={styles.project_status}>{item.status}</div>
              </div>
              <div className={styles.agent_project__details}>
                <h5>{item.name}</h5>
                <p>Type: {item.project_type}</p>
                <p>address: {item.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MemberProject;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;

  let arr = id.split("&");

  //begin fetch
  const agentRes = postData(`member/details`, {
    id: arr[0],
  });
  //end fetch

  //begin assign
  const getAgent = await agentRes;
  //end assign
  return {
    props: {
      agent_api: getAgent.data,
      agentID: arr[0],
      projectID: arr[1],
    },
  };
};
