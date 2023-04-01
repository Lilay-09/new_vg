import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CardComp from "../components/Home/LastNewComp";
import Layout from "../sections/Layout";

import { data } from "../utils/data";
import LastProjectComp from "../components/Home/LastProjectComp";
import LastNewComp from "../components/Home/LastNewComp";
import TeamComp from "../components/Home/TeamComp";

const Home = () => {
  return (
    <Layout>
      <LastProjectComp showItems={6} title="Last Project" />

      <LastNewComp showItems={3} />

      <TeamComp showItems={6} />
    </Layout>
  );
};

export default Home;
