import {
  faLocation,
  faLocationDot,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import BannerImg from "../../components/BannerImg";
import GoogleMapComp from "../../components/GoogleMapComp";
import Layout from "../../sections/Layout";

const Careers = () => {
  return (
    <Layout noFind noSlide>
      <div
        style={{ backgroundColor: "white" }}
        className="d-flex flex-column gap-3"
      >
        <BannerImg height={35} img="hiring.png" />
        <div className="p-4 d-flex flex-column gap-3">
          <h4>Job Announcements</h4>
          <span className="text-muted">February 22, 2023</span>
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.{" "}
          </p>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/map-pin.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/phone-call.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>+855 96000000</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/mail.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>YOUREMAIL@....</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/images/send.png"
                alt="telegram"
                width={20}
                height={20}
              />
              <span>+855 96 0000000000</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="p-4">Map</h4>
          <GoogleMapComp width="100%" />
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
