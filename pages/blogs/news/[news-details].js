import React from "react";
import BannerImg from "../../../components/BannerImg";
import GoogleMapComp from "../../../components/GoogleMapComp";
import Layout from "../../../sections/Layout";
import CardComp from "../../../components/CardComp";
import CardFrame from "../../../components/CardFrame";
import { data } from "../../../utils/data";
const NewDetails = () => {
  return (
    <Layout noFind noSlide>
      <div className="d-flex gap-3 flex-column">
        <BannerImg img="building3.png" height="35" alt="building3" />
        <div className="p-1">
          <h4>Condo Name</h4>
          <span className="text-muted">February 22, 2023 9:24 am</span>
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt ut voluptate aute id deserunt
            nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
            tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud
            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id
            deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud
            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id
            deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud
            irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id
            deserunt nisi.
          </p>
        </div>
      </div>
      <div>
        <h4>Map</h4>
        <GoogleMapComp width="100%" />
      </div>
      <CardFrame data={data} title="More Blogs" />
    </Layout>
  );
};

export default NewDetails;
