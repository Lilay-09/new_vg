import React from "react";
import Layout from "../../sections/Layout";
import styles from "../../styles/OurServices.module.css";
import Image from "next/image";
import ScrollableContainer from "../../components/ScrollableContainer";
import Title from "../../components/Title";
import { Services } from "../../utils/data";
import TiltleTile from "../../components/TiltleTile";
const OurServices = () => {
  return (
    <Layout width={100}>
      <div className={`${styles._our_service_banner} _hidden_item`}>
        <div className={styles._our_service_banner_img}>
          <Image src={`/images/b1.jpg`} width={1000} height={1000} alt="tb1" />
        </div>
        <div className={styles.banner_square}>
          <div className={styles.banner_img_frame}>
            <Image
              src={`/images/b2.jpg`}
              width={1000}
              height={1000}
              alt="tb1"
            />
          </div>
          <div className={styles.banner_img_frame}>
            <Image
              src={`/images/b3.jpg`}
              width={1000}
              height={1000}
              alt="tb1"
            />
          </div>
        </div>
        <div className={styles._our_service_banner_text}>
          <h4>Many Properties and categories</h4>
        </div>
      </div>

      <div className={`${styles._categories_section} _hidden_item`}>
        <div style={{ width: "90%", margin: "0 auto 2rem auto" }}>
          <TiltleTile title="Services" noMore />
        </div>
        <div className={styles._categories_section_container}>
          <ScrollableContainer>
            <div
              className={`${styles._service_categories} our___item _hidden_item`}
            >
              <div className={styles._service_categories_img}>
                <Image
                  src={"/images/sale.png"}
                  width={1000}
                  height={1000}
                  alt="sell"
                  priority
                />
                <div className={styles._service_categories_status_text}>
                  <span>Selling</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles._service_categories} our___item _hidden_item`}
            >
              <div className={styles._service_categories_img}>
                <Image
                  src={"/images/rent.png"}
                  width={1000}
                  height={1000}
                  alt="sell"
                  priority
                />
                <div className={styles._service_categories_status_text}>
                  <span>Rent</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles._service_categories} our___item _hidden_item`}
            >
              <div className={styles._service_categories_img}>
                <Image
                  src={"/images/consultations.png"}
                  width={1000}
                  height={1000}
                  alt="sell"
                  priority
                />
                <div className={styles._service_categories_status_text}>
                  <span>Consultations</span>
                </div>
              </div>
            </div>
          </ScrollableContainer>
        </div>
      </div>
      {/* <div className="reveal"></div> */}
      <div className={`${styles._services_section} reveal`}>
        <div style={{ width: "90%", margin: "0 auto 2rem auto" }}>
          <TiltleTile title="Services" noMore />
        </div>
        <div className={`${styles._services_card_container} `}>
          {Services.map((item, i) => {
            return (
              <div className={styles._service_card} key={i}>
                <div className={styles._service_categories_status_text}>
                  <span>Buying</span>
                </div>
                <div className={styles._service_card_img}>
                  <Image
                    src={`${item.url}`}
                    width={1000}
                    height={1000}
                    alt="sell"
                    priority
                  />
                </div>
                <div className={styles._service_card_details}>
                  <div>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <p>Type:</p>
                    <p>{item.type}</p>
                  </div>
                  <div>
                    <p>Location: </p>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default OurServices;
