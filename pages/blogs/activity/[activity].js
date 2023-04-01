import React from "react";
import BannerImg from "../../../components/BannerImg";
import CardFrame from "../../../components/CardFrame";
import GoogleMapComp from "../../../components/GoogleMapComp";
import Layout from "../../../sections/Layout";
import { data } from "../../../utils/data";

const ActivityDetails = () => {
  return (
    <Layout noFind noSlide>
      <div className="d-flex gap-3 flex-column">
        <BannerImg img="act1.png" height="35" />
        <div className="p-1">
          <h4>Trips</h4>
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

export default ActivityDetails;
