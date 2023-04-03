import React from "react";
import CardFrame from "../../components/CardFrame";
import Categories from "../../components/Properties/Categories";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";
import CategoriesFullSize from "../../components/Properties/CategoriesFullSize";

const Services = () => {
  return (
    <Layout width={100}>
      <CategoriesFullSize />
      <CardFrame
        data={data.slice(0, 6)}
        title="Services"
        href="/all-services"
      />
    </Layout>
  );
};

export default Services;
