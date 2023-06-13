import React, { useContext } from "react";
import Image from "next/image";
import styles from "../../../../styles/Agent.module.css";
import Layout from "../../../../sections/Layout";
import { useRouter } from "next/router";
import ImageComp from "../../../../components/ImageComp";
import { DataContext } from "../../../../store/GlobalState";
import { type } from "os";
import { postData } from "../../../../utils/fetchData";
const Person = (props) => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  let translations = state.trans;
  const { agent_api } = props;
  let lang = state.lang.d_lang;

  return (
    <Layout width={100}>
      <div className={`${styles.agent}`}>
        <div className={styles.agent_card}>
          <div className={styles.agent__img}>
            <ImageComp imageUrl={agent_api.profile} />
          </div>
          <div className={styles.agent__details}>
            <h5>{agent_api.name}</h5>
            <div className={styles.agent_mail}>
              <Image src={`/images/mail.png`} width={20} height={20} alt="l1" />

              <span>
                {translations.email}: {agent_api.email}
              </span>
            </div>
            {agent_api.phone_number ? (
              <div className={styles.agent_mail}>
                <Image
                  src={`/images/phone-call.png`}
                  width={20}
                  height={20}
                  alt="l1"
                />
                <span>
                  {translations.phone}: {agent_api.phone_number}
                </span>
              </div>
            ) : null}
            <span className={styles.about_agent}>About me</span>
          </div>
        </div>
        {agent_api.projects.map((item, i) => {
          return (
            <div
              className={styles.agent__project}
              key={i}
              onClick={() =>
                router.push(`/${lang}/project/details/${item.project_id}`)
              }
            >
              <div className={styles.agent__project_img}>
                <div className={styles.project_status}>{item.status}</div>
                <Image
                  src={item.image.image_url}
                  width={1000}
                  height={1000}
                  alt="l1"
                  priority
                />
              </div>
              <div className={styles.agent_project__details}>
                <h5>{item.name}</h5>
                <p>
                  {translations.type}: {item.project_type}
                </p>
                <p>
                  {translations.address}: {item.address}
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
  const { lang, agentId } = context.params;
  //begin fetch
  const detailsRes = await postData(`member/details`, {
    id: `${agentId}`,
    lang: lang ? `${lang}` : "en",
  });
  //end fetch

  //begin assign
  const getDetails = await detailsRes;
  //end assign

  return {
    props: {
      agent_api: getDetails.data,
    },
  };
};
