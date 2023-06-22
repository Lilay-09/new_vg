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
  const { page_api } = props;
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
          <ImageComp imageUrl={page_api.image_url} />
        </div>
        <div className={styles._contact_text}>
          <span>{page_api.description}</span>
          <div className={styles._contact_us_via}>
            <div className={styles._contact_us__note}>
              <ImageComp imageUrl={page_api.title.icon} />
              <div className="">
                <h5>{page_api.title.text}:</h5>
              </div>
            </div>
            <div className={styles._contact_media}>
              <div
                className={styles._contact_media_avatar}
                onClick={() => handleMoveToSection(emailRef)}
              >
                <ImageComp imageUrl={page_api.by_email.icon} />
              </div>
              <div className={styles._contact_media_avatar}>
                <div
                  className={`${styles.contact_site}`}
                  onClick={handleShowContact}
                  ref={toggleRef}
                >
                  <ImageComp imageUrl={page_api.by_phone.icon} />
                </div>
                <div
                  className={`contact_mnu ${flip && "active"}`}
                  ref={contactRef}
                >
                  <div className={styles.phone_number}>
                    <p>Phone Us</p>
                    <div>
                      {page_api.by_phone.phone_numbers.map((item, i) => {
                        return <li key={i}>{item.number}</li>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles._contact_media_avatar}
                onClick={() => handleMoveToSection(mapRef)}
              >
                <div className={styles.map_visit}>
                  <ImageComp imageUrl={page_api.by_map.icon} />
                </div>
                {/* <Image
                  src="/images/map.png"
                  width={200}
                  height={200}
                  alt="communicate"
                  priority
                /> */}
                <p className={styles.visit_us}>{translations.visit_us}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.email_section}`} ref={emailRef}>
        <div>
          <h2>Send us your feedback</h2>
          <p>Our Email: ({page_api.by_email.email})</p>
        </div>
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
                placeholder={"Your Name"}
                color={"#9f7b4b"}
                onChange={handleChangeInput}
                name="name"
              />
              <InputComp
                placeholder={"Your Email"}
                color={"#9f7b4b"}
                name="your email"
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
                <BtnComp bdr={10} onSubmit={handleSubmitEmail}>
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
                <BtnComp bdr={10} onSubmit={handleSubmitTelegram}>
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
        {page_api.by_map.url ? (
          <GoogleMapComp url={page_api.by_map.url} />
        ) : null}
      </div>
    </Layout>
  );
};

export default ContactUs;
export const getServerSideProps = async (ctx) => {
  const { lang } = ctx.query;
  const response = await postData("page/contents", {
    name: "contact_us",
    lang: lang ? `${lang}` : "en",
  });
  const getData = await response;

  return {
    props: {
      page_api: getData.data,
    },
  };
};
