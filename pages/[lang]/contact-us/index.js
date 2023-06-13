import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Contact/ContacUs.module.css";
import Image from "next/image";
import InputComp from "../../../components/InputComp";
import BtnComp from "../../../components/BtnComp";
import GoogleMapComp from "../../../components/GoogleMapComp";
import ScrollableContainer from "../../../components/ScrollableContainer";
import { DataContext } from "../../../store/GlobalState";
import { postData } from "../../../utils/fetchData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEnvelope,
  faPlane,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import ImageComp from "../../../components/ImageComp";
const ContactUs = (props) => {
  let sends = [{ to: "Email" }, { to: "Telegram" }];
  const { company_info } = props;
  const [sendTo, setSendTo] = useState("Email");
  const emailRef = useRef();
  const mapRef = useRef();
  const phoneRef = useRef();
  const contactRef = useRef();
  const toggleRef = useRef();
  const [flip, setFlip] = useState(false);
  const initailState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [getMail, setMail] = useState(initailState);
  const { name, email, subject, message } = getMail;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setMail({ ...getMail, [name]: value });
  };
  const handleMoveToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleShowContact = () => {
    setFlip(!flip);
  };

  useEffect(() => {
    let handleOpenMenu = (e) => {
      if (
        !contactRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setFlip(false);
      }
    };

    document.addEventListener("mousedown", handleOpenMenu, true);
    return () => {
      document.removeEventListener("mousedown", handleOpenMenu, true);
    };
  });
  const { state, dispatch } = useContext(DataContext);
  let translations = state.trans;

  const handleSubmitEmail = async () => {
    const sendData = await fetch(
      `https://admin.vanguardinvestconsult.com/backend/contact-us/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      }
    );
  };
  const handleSubmitTelegram = async (e) => {
    e.preventDefault();

    const sendData = await fetch(
      `https://admin.vanguardinvestconsult.com/backend/contact-us/send-telegram`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      }
    );

    // console.log("To Telegram" + getMail);
  };

  return (
    <Layout width={90}>
      <div className={`${styles.contact_banner} _hidden_item`}>
        <div className={styles.banner_bg}>
          <Image
            src="/images/contact.png"
            width={3000}
            height={3000}
            alt="communicate"
            priority
          />
        </div>
        <div className={styles._contact_text}>
          <span>We&apos;d Love to Hear From You</span>
          <div className={styles._contact_us_via}>
            <div className={styles._contact_us__note}>
              <Image
                src="/images/note.png"
                width={1000}
                height={1000}
                alt="communicate"
                priority
              />
              <div className="">
                <h5>{translations.contact_us_via}:</h5>
              </div>
            </div>
            <div className={styles._contact_media}>
              <div
                className={styles._contact_media_avatar}
                onClick={() => handleMoveToSection(emailRef)}
              >
                <Image
                  src="/images/message.png"
                  width={200}
                  height={200}
                  alt="communicate"
                  priority
                />
                {translations.email}
              </div>
              <div className={styles._contact_media_avatar}>
                <div
                  className={`${styles.contact_site}`}
                  onClick={handleShowContact}
                  ref={toggleRef}
                >
                  <Image
                    src="/images/phone-call.png"
                    width={200}
                    height={200}
                    alt="communicate"
                    priority
                  />
                </div>
                <div
                  className={`contact_mnu ${flip && "active"}`}
                  ref={contactRef}
                >
                  <div className={styles.phone_number}>
                    <p>Phone Us</p>
                    <div>{company_info ? company_info.phone_number : null}</div>
                  </div>
                  <ScrollableContainer>
                    <div className={styles.media_commu}>
                      {company_info
                        ? company_info.social_media.map((item, i) => {
                            return (
                              <Link
                                className={styles.media_avatar}
                                href={item.url}
                                target="_blank"
                                key={i}
                              >
                                <Image
                                  src={
                                    company_info
                                      ? item.icon
                                      : "/images/send.png"
                                  }
                                  width={200}
                                  height={200}
                                  alt="tele"
                                  priority
                                />
                              </Link>
                            );
                          })
                        : null}
                    </div>{" "}
                  </ScrollableContainer>
                </div>
              </div>
              <div
                className={styles._contact_media_avatar}
                onClick={() => handleMoveToSection(mapRef)}
              >
                <Image
                  src="/images/map.png"
                  width={200}
                  height={200}
                  alt="communicate"
                  priority
                />
                {translations.visit_us}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.email_section}`} ref={emailRef}>
        <h2>Send us your feedback</h2>
        <div className="select__send__form">
          <span>Send to:</span>
          <div className="dd_box">
            <div className="dd__send_to">
              {sends.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <span
                      className={sendTo === item.to ? "active" : null}
                      onClick={() => {
                        setSendTo(item.to);
                      }}
                    >
                      {item.to}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`${styles._form__container}  _hidden_item`}>
          <div>
            <form className={`${styles._form_submit} our___item _hidden_item`}>
              <InputComp
                placeholder={"Name"}
                color={"#9f7b4b"}
                onChange={handleChangeInput}
                name="name"
              />
              <InputComp
                placeholder={"Email"}
                color={"#9f7b4b"}
                name="email"
                onChange={handleChangeInput}
              />
              <InputComp
                placeholder="Subject"
                color={"#9f7b4b"}
                name="subject"
                onChange={handleChangeInput}
              />
              <textarea
                placeholder="Message"
                rows={"10"}
                name="message"
                onChange={handleChangeInput}
              ></textarea>
            </form>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {sendTo === "Email" ? (
                <BtnComp bdr={10} onclick={handleSubmitEmail}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    Send
                    <FontAwesomeIcon icon={faEnvelope} width={12} />
                  </div>
                </BtnComp>
              ) : sendTo === "Telegram" ? (
                <BtnComp bdr={10} onclick={handleSubmitTelegram}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    Send
                    <div className="image__icon">
                      <ImageComp imageUrl={"/images/send2.png"} />
                    </div>
                  </div>
                </BtnComp>
              ) : null}
            </div>
          </div>
          <div className={`${styles._form_img} our___item _hidden_item`}>
            <Image
              src={`/images/${sendTo === "Email" ? "email" : "telegram"}.png`}
              width={1000}
              height={1000}
              alt="communicate"
              priority
            />
          </div>
        </div>
      </div>

      <div className="reveal" ref={mapRef} id="contact">
        {company_info ? <GoogleMapComp url={company_info.map} /> : null}
      </div>
    </Layout>
  );
};

export default ContactUs;
export const getServerSideProps = async () => {
  try {
    const response = await postData("company-info");
    const getData = await response;

    if (response.status === 200) {
      return {
        props: {
          company_info: getData.data,
        },
      };
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return {
        notFound: true,
      };
    }

    console.error(error);
  }

  return {
    props: {},
  };
};
