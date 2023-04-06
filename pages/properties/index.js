import React from "react";
import Categories from "../../components/Properties/Categories";
import PropertiesComp from "../../components/Properties/Properties";
import Layout from "../../sections/Layout";
import CategoriesFullSize from "../../components/Properties/CategoriesFullSize";

const Properties = () => {
  return (
    <Layout noFind width={100}>
      <CategoriesFullSize />
      <PropertiesComp showItems={3} />
    </Layout>
  );
};

export default Properties;
