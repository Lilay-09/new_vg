import React from "react";
import CardComp from "../../components/CardComp";
import CardFrame from "../../components/CardFrame";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";

const LastNews = () => {
  return (
    <Layout map noSlide>
      <CardFrame data={data} title="Last News" href="/product-details" />
    </Layout>
  );
};

export default LastNews;
