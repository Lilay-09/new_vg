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
import styles from "../../styles/Careers.module.css";
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
          <span>Position: Seller</span>
          <span>Term: Full-Time</span>
          <span>Qualification: Bachelor Degree</span>
          <span>Language: English and Khmer-Good</span>
          <span>Sex: Male/Female</span>
          <span>Year of Experience: None</span>
          <span>Salary: Negotiate </span>
          <div className={styles.job_lst}>
            <span>Job Description</span>
            <ul>
              <li>Assist to account & Finance teams</li>
              <li>Good communication skills</li>
              <li>
                skills in Graphic Design (Photoshop/Illustrator) is a plus
              </li>
              <li>Ability to manage scheduled tasks</li>
            </ul>
          </div>
          <div className={styles.job_lst}>
            <span>Job Description</span>
            <ul>
              <li>No experience is acceptable</li>
              <li>At least 2nd year university student</li>
              <li>Able to go outside for some time</li>
              <li>Good at computer skill work / excel / email / QB</li>
              <li>Team working.</li>
            </ul>
          </div>
          <div className={styles.job_lst}>
            <span>Benefit</span>
            <ul>
              <li>Yearly bonus</li>
              <li>
                Improving interpersonal skill by providing free training to
                strengthen ability and experience
              </li>
              <li>
                Annual Leave, Sick Leave, Special Leave, and Public Holidays.
              </li>
            </ul>
          </div>
          <div className={styles.job_lst}>
            <span>SUBMIT CV AND COVER LETTER</span>
          </div>
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
          </div>
          {/* <div className="d-flex flex-column gap-2">
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
          </div> */}
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
