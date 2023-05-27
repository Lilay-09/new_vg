import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../../sections/Layout";
import styles from "../../../styles/Contact/ContacUs.module.css";
import Image from "next/image";
import InputComp from "../../../components/InputComp";
import BtnComp from "../../../components/BtnComp";
import GoogleMapComp from "../../../components/GoogleMapComp";
import ScrollableContainer from "../../../components/ScrollableContainer";
import { DataContext } from "../../../store/GlobalState";
const ContactUs = () => {
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
                    <div>
                      <li>092 45 75 34</li>
                      <li>023 45 75 34</li>
                      <li>010 45 75 34</li>
                    </div>
                  </div>
                  <ScrollableContainer>
                    <div className={styles.media_commu}>
                      <div className={styles.media_avatar}>
                        <Image
                          src={"/images/send.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>

                      <div className={styles.media_avatar}>
                        <Image
                          src={"/images/facebook.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                      <div className={styles.media_avatar}>
                        <Image
                          src={"/images/twit.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
                      <div className={styles.media_avatar}>
                        <Image
                          src={"/images/yt.png"}
                          width={200}
                          height={200}
                          alt="tele"
                          priority
                        />
                      </div>
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
        <div className={`${styles._form__container}  _hidden_item`}>
          <form className={`${styles._form_submit} our___item _hidden_item`}>
            <InputComp
              placeholder={"Name"}
              color={"#9f7b4b"}
              onChange={handleChangeInput}
              name={"name"}
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
              name={"subject"}
              onChange={handleChangeInput}
            />
            <textarea placeholder="Message" rows={"10"}></textarea>
            <BtnComp bdr={10}>Submit</BtnComp>
          </form>
          <div className={`${styles._form_img} our___item _hidden_item`}>
            <Image
              src="/images/email.png"
              width={1000}
              height={1000}
              alt="communicate"
              priority
            />
          </div>
        </div>
      </div>

      <div className="reveal" ref={mapRef} id="contact">
        <GoogleMapComp width={100} />
      </div>
    </Layout>
  );
};

export default ContactUs;
