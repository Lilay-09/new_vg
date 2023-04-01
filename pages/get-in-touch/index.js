import Image from "next/image";
import React from "react";
import BannerImg from "../../components/BannerImg";
import BtnComp from "../../components/BtnComp";
import GoogleMapComp from "../../components/GoogleMapComp";
import Layout from "../../sections/Layout";
import styles from "../../styles/GetinTouch.module.css";

const GetInTouch = () => {
  return (
    <Layout noFind noSlide>
      <BannerImg img="building4.png" title="Get in touch" />
      <div className={styles.container}>
        <div className={styles.container_info}>
          <div className={styles.side_container_info}>
            <div>
              <span>Contact Info</span>
              <h4>Get in Touch</h4>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={styles.side_container_info}>
            <Image src="/images/act2.png" alt="act2" width={400} height={400} />
          </div>
        </div>

        <div className="position-relative">
          <div className={styles.form_container}>
            <form>
              <h5>Send a Message</h5>
              <div>
                <input placeholder="Name*" className="form-control" />
              </div>
              <div>
                <input placeholder="Email*" className="form-control" />
              </div>
              <div>
                <input placeholder="Subject" className="form-control" />
              </div>
              <div>
                <textarea placeholder="Message" className="form-control" />
              </div>
              <div className="align-self-end">
                <BtnComp isRed bdr={15}>
                  Submit
                </BtnComp>
              </div>
            </form>
          </div>
          <GoogleMapComp width="100%" />
        </div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
