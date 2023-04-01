import React from "react";
import CardComp from "../../components/CardComp";
import CardFrame from "../../components/CardFrame";
import Layout from "../../sections/Layout";
import { data } from "../../utils/data";

const AllServices = () => {
  return (
    <Layout>
      <CardFrame data={data} title="Services" />
    </Layout>
  );
};

export default AllServices;
