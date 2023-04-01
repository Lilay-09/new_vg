import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardComp from "../../../components/CardComp";
import CardFrame from "../../../components/CardFrame";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Home.module.css";
import { data } from "../../../utils/data";

const Category = () => {
  return (
    <Layout>
      <CardFrame data={data.slice(0, 3)} title="Condos" />
      {/* <CardComp title="Categories">
        <div className={styles.card_container}>
          {data.map((item, i) => {
            return (
              <Link
                className={styles.card_frame}
                key={i}
                href={`/properties/category/${item.name}`}
              >
                <div className={styles.card_img}>
                  <Image
                    src={`/${item.url}`}
                    alt="l1"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className={styles.card_text}>
                  <span className={styles.title}>Your Project Name</span>
                  <div>
                    <span>Type :</span>
                    <span>Condo</span>
                  </div>
                  <div>
                    <span>Address :</span>
                    <span>8502 Preston Rd. Inglewood, Maine...</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CardComp> */}
    </Layout>
  );
};

export default Category;
export const getServerSideProps = async () => {
  // const { params } = ctx;
  // const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  return {
    props: {
      data: await res.json(),
    },
  };
};
