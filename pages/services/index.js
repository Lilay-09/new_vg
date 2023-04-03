import React from "react";
import CardFrame from "../../components/CardFrame";
import Categories from "../../components/Properties/Categories";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";

const Services = () => {
  return (
    <Layout width={100}>
      <Categories />
      <CardFrame
        data={data.slice(0, 6)}
        title="Services"
        href="/all-services"
      />
    </Layout>
  );
};

export default Services;
