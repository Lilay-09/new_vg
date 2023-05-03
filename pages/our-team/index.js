import React, { useEffect } from "react";
import Layout from "../../sections/Layout";
import styles from "../../styles/OurTeam.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../utils/data";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const OurTeam = () => {
  return (
    <Layout width={100}>
      <div className={styles._our_team__container}>
        <div className={`${styles._our__team_manager}`}>
          <div>
            <h2>Team Manager</h2>
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
            <h2>Team Member</h2>
          </div>
          <div className={styles._team_member_card_container}>
            {data.slice(0, 6).map((item, i) => {
              return (
                <div className={styles._team_member_card} key={i}>
                  <div className={styles._team_member_card_img}>
                    <Image
                      src={"/images/p3.png"}
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
                      <h4>Name</h4>
                      <div>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>

                  {/* <FontAwesomeIcon
                    icon={faArrowUp}
                    className={styles._team_member_arrow}
                  /> */}
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
