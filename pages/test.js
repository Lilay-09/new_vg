import React from "react";
import SliderBanner from "../components/SliderBanner";
import Layout from "../sections/Layout";

const test = () => {
  const images = [
    { url: "/images/b1.jpg" },
    { url: "/images/b1.jpg" },
    { url: "/images/b1.jpg" },
    { url: "/images/b1.jpg" },
  ];

  return (
    <Layout width={100}>
      <SliderBanner />
    </Layout>
  );
};

export default test;
