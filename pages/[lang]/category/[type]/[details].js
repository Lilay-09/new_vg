import { useRouter } from "next/router";
import React from "react";
import path from "path";
import fs from "fs/promises";
import Layout from "../../../../sections/Layout";
import TiltleTile from "../../../../components/TiltleTile";
import styles from "../../../../styles/Categories.module.css";

const FindeLocaiton = (props) => {
  const { lang, type, details, filterObj, data } = props;
  const router = useRouter();
  const locData = Object.assign({}, ...filterObj);
  return (
    <Layout width={100}>
      <div className={styles.location_container}>
        <TiltleTile
          title={`Location: (${locData.location}) - [${type}]`}
          noMore
        />
      </div>
    </Layout>
  );
};

export default FindeLocaiton;
export const getServerSideProps = async (context) => {
  const { lang, type, details } = context.params;
  //if details is id
  // let numbID = Number(details.slice(0, 1));
  //
  const filePath = path.join(process.cwd(), "/public/home_page.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  const filterObj = data.popular_locations.filter(
    (item) => item.location === details //if id change details to ID
  );

  return {
    props: {
      lang,
      type,
      details,
      data,
      filterObj,
    },
  };
};
