import React, { useContext, useEffect } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/OurTeam.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import tranEn from "../../../utils/Translations/en.json";
import tranKh from "../../../utils/Translations/kh.json";
import tranCh from "../../../utils/Translations/ch.json";
import { DataContext } from "../../../store/GlobalState";

const OurTeam = (props) => {
  const { teams } = props;
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  const asPath = state.lang.asPath;
  let translations = state.trans;

  return (
    <Layout width={100}>
      <div className={styles._our_team__container}>
        <div className={`${styles._our__team_manager}`}>
          <div>
            <h2>{translations.team_manager}</h2>
          </div>
          <div className={styles._our_team__manager_container}>
            <div className={`${styles._manager__card} our__team_item`}>
              <div className={styles._team_avatar}>
                <Image
                  src="/images/p1.png"
                  width={500}
                  height={500}
                  alt="p1"
                  priority
                />
              </div>
              <h5>{translations.name}: Taylor Swift</h5>
              <p>{translations.position}: Designer</p>
              <div className={styles._team_contact_social_media}>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/send.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/facebook.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/twit.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/yt.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className={`${styles._manager__card}  our__team_item `}>
              <div className={styles._team_avatar}>
                <Image
                  src="/images/p2.png"
                  width={500}
                  height={500}
                  alt="p1"
                  priority
                />
              </div>
              <h5>Name: Taylor Swift</h5>
              <p>Position: Designer</p>
              <div className={styles._team_contact_social_media}>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/send.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/facebook.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/twit.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/yt.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className={`${styles._manager__card} our__team_item`}>
              <div className={styles._team_avatar}>
                <Image
                  src="/images/p3.png"
                  width={500}
                  height={500}
                  alt="p1"
                  priority
                />
              </div>
              <h5>Name: Taylor Swift</h5>
              <p>Position: Designer</p>
              <div className={styles._team_contact_social_media}>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/send.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/facebook.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/twit.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
                <div className={styles.media_avatar}>
                  <Image
                    src={"/images/yt.png"}
                    width={200}
                    height={200}
                    alt="tele"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles._manager__description}>
            <p>
              a manager of design and architecture plays a critical role in the
              successful execution of architectural projects. They bring
              together the various stakeholders involved in a project, oversee
              the planning and design phases, and ensure that the project is
              completed on time, within budget, and to the required standards.
            </p>
          </div>
        </div>
        <div className={`${styles.our__team_member} reveal our__team_hidden`}>
          <div>
            <h2>{translations.team_members}</h2>
          </div>
          <div className={styles._team_member_card_container}>
            {teams.consultants.map((item, i) => {
              return (
                <div className={styles._team_member_card} key={i}>
                  <div className={styles._team_member_card_img}>
                    <Image
                      src={`${item.profile}`}
                      width={500}
                      height={500}
                      alt="p1"
                      priority
                    />
                  </div>
                  <div className={styles._team_details_card}>
                    <div className={styles._team_member_media}>
                      <div className={styles.media_avatar1}>
                        <Image
                          src={"/images/send.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                      <div className={styles.media_avatar1}>
                        <Image
                          src={"/images/facebook.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                      <div className={styles.media_avatar1}>
                        <Image
                          src={"/images/twit.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                      <div className={styles.media_avatar1}>
                        <Image
                          src={"/images/yt.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                    </div>
                    <div className={styles._team__pos}>
                      <h4>{item.name}</h4>
                      <div>
                        <p>
                          {translations.phone}: {item.phone_number}
                        </p>
                      </div>

                      <Link href={`/agent/${item.id}`}>View Page</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
export const getServerSideProps = async () => {
  // const res = await fetch("/data.json");
  const filePath = path.join(process.cwd(), "/public/consultants.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return {
    props: {
      teams: data,
    },
  };
};
