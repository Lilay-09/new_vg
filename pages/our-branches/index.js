import Image from "next/image";
import React from "react";
import BannerImg from "../../components/BannerImg";
import GoogleMapComp from "../../components/GoogleMapComp";
import Layout from "../../sections/Layout";
import styles from "../../styles/Branches.module.css";

const OutBranches = () => {
  return (
    <Layout noFind noSlide>
      <BannerImg title="Our Branches" />
      <div className={styles.history}>
        <div className={styles.history_text}>
          <div>
            <span>History</span>
            <h3>Company Have Been Since 19xx</h3>
          </div>
          <p className="fw-semibold">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.history_img}>
          <Image
            src="/images/building2.png"
            width={400}
            height={400}
            alt="building"
            priority
          />
        </div>
      </div>
      <div className={styles.branches}>
        <h4>Branches</h4>
        <GoogleMapComp width="100%" />
      </div>
      <div>
        <h5>Addresses: </h5>
        <div className="d-flex gap-1 flex-wrap">
          <span>Phnom Penh : </span>
          <p>
            The Bridge Mall, Village 14, National Assembly Street, Tonle Bassac
            Commune, Chamkarmorn District, Phnom Penh, Cambodia, Phnom Penh,
            Cambodia, 120101{" "}
          </p>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <span>Battabang : </span>
          <p>
            The Bridge Mall, Village 14, National Assembly Street, Tonle Bassac
            Commune, Chamkarmorn District, Phnom Penh, Cambodia, Phnom Penh,
            Cambodia, 120101{" "}
          </p>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <span>Siemreap : </span>
          <p>
            The Bridge Mall, Village 14, National Assembly Street, Tonle Bassac
            Commune, Chamkarmorn District, Phnom Penh, Cambodia, Phnom Penh,
            Cambodia, 120101{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OutBranches;
