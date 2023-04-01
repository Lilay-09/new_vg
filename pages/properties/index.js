import React from "react";
import Categories from "../../components/Properties/Categories";
import PropertiesComp from "../../components/Properties/Properties";
import Layout from "../../sections/Layout";

const Properties = () => {
  return (
    <Layout noFind>
      <Categories />
      <PropertiesComp showItems={3} />
    </Layout>
  );
};

export default Properties;
