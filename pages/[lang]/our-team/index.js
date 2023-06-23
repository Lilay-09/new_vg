import React, { useContext, useEffect } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/OurTeam.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import tranEn from "../../../utils/Translations/en.json";
import tranKh from "../../../utils/Translations/kh.json";
import tranCh from "../../../utils/Translations/ch.json";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import ImageComp from "../../../components/ImageComp";
import { checkSocialMediaURL } from "../../../utils/checkSocialMediaUrl";
import ScrollableContainer from "../../../components/ScrollableContainer";

const OurTeam = (props) => {
  const { page_api, consultant_api, leader_api } = props;
  const { state, dispatch } = useContext(DataContext);
  const lang = state.lang.d_lang;
  let translations = state.trans;

  return (
    <Layout width={100}>
      <div className={styles._our_team__container}>
        <div className={`${styles.our__team_member}`}>
          <div>
            <h2>{translations.team_members}</h2>
          </div>
          <div className={styles._team_member_card_container}>
            {consultant_api.map((item, i) => {
              return (
                <div key={i} className={styles.member_card_box}>
                  <div className={styles.member__card_show}>
                    <div className={styles.member_card_box_img}>
                      {item.image_url ? (
                        <ImageComp imageUrl={item.image_url} />
                      ) : null}
                      <div className={styles.__show_name}>
                        <div className={styles._team__pos}>
                          <h4>{item.name}</h4>
                          <div>
                            <p>
                              {translations.phone}: {item.phone_number}
                            </p>
                          </div>

                          <Link href={`/${lang}/agent/${item.id}`}>
                            View Page
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={styles._media__show}>
                      <div className={styles.media_}>
                        <ScrollableContainer gap={1}>
                          {item.social_media.map((media, i) => {
                            return (
                              <Link
                                className={styles.media_avatar1}
                                key={i}
                                target="_blank"
                                href={checkSocialMediaURL(media.url)}
                              >
                                {media.icon ? (
                                  <ImageComp imageUrl={media.icon} />
                                ) : null}
                              </Link>
                            );
                          })}
                        </ScrollableContainer>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* {consultant_api.map((item, i) => {
              return (
                <div className={styles._team_member_card} key={i}>
                  <div className={styles._team_member_card_img}>
                    {item.image_url ? (
                      <div className={styles._for_hover}>
                        <ImageComp imageUrl={item.image_url} />
                      </div>
                    ) : null}
                    <div className={styles.media_}>
                      <ScrollableContainer>
                        {item.social_media.map((media, i) => {
                          return (
                            <Link
                              className={styles.media_avatar1}
                              key={i}
                              target="_blank"
                              href={checkSocialMediaURL(media.url)}
                            >
                              {media.icon ? (
                                <ImageComp imageUrl={media.icon} />
                              ) : null}
                            </Link>
                          );
                        })}
                      </ScrollableContainer>
                    </div>
                  </div>
                  <div className={styles._team_member_card_img}>
                    {item.image_url ? (
                      <ImageComp imageUrl={item.image_url} />
                    ) : null}
                    <div>sdasdfsadff</div>
                  </div>

                  <div className={styles._team_details_card}>
                    <div className={styles._team_member_media}>
                      {item.social_media.map((media, i) => {
                        return (
                          <Link
                            className={styles.media_avatar1}
                            key={i}
                            target="_blank"
                            href={checkSocialMediaURL(media.url)}
                          >
                            {media.icon ? (
                              <ImageComp imageUrl={media.icon} />
                            ) : null}
                          </Link>
                        );
                      })}
                    </div>

                    <div className={styles._team__pos}>
                      <h4>{item.name}</h4>
                      <div>
                        <p>
                          {translations.phone}: {item.phone_number}
                        </p>
                      </div>

                      <Link href={`/${lang}/agent/${item.id}`}>View Page</Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurTeam;
export const getServerSideProps = async (context) => {
  const { lang } = context.query;
  let pageBody = {
    // id: "212",
    name: "our_team",
    lang: lang ? `${lang}` : "en",
  };
  //begin fetch
  const pageRes = await postData(`page/contents`, pageBody);

  const consultantsRes = await postData(`member/list`, {
    level_id: 2,
  });
  const leaderRes = await postData(`member/list`, {
    level_id: 1,
  });
  //end fetch

  //begin assign
  const getPage = await pageRes;
  const getConsultants = await consultantsRes;
  const getLeader = await leaderRes;
  //end assign
  return {
    props: {
      page_api: getPage.data,
      consultant_api: getConsultants.data,
      leader_api: getLeader.data,
    },
  };
};
